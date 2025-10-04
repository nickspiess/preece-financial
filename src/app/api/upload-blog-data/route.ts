import { NextRequest, NextResponse } from 'next/server'
import { getPayloadSingleton } from '@/utilities/payload-singleton'
import fs from 'fs'
import path from 'path'

// Read the blog posts data
const blogPostsData = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), '../../preece_blog_posts.json'),
    'utf8'
  )
)

export async function POST(request: NextRequest) {
  try {
    // Check for authorization (basic security)
    const authHeader = request.headers.get('authorization')
    if (authHeader !== 'Bearer upload-blog-data-secret') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await getPayloadSingleton()
    console.log('Payload initialized successfully')

    // Filter out category pages - only process actual blog posts
    const actualPosts = blogPostsData.filter((post: any) =>
      !post.url.includes('/categories/') && post.url.includes('/post/')
    )

    // Create categories first
    const categoryMap: Record<string, { name: string; description: string }> = {
      'taxes': { name: 'Taxes', description: 'Tax planning strategies and insights' },
      'real-estate': { name: 'Real Estate', description: 'Real estate investment strategies and analysis' },
      'basics-of-investing': { name: 'Investing Basics', description: 'Fundamental investment concepts and strategies' },
      'the-financial-planner-profession': { name: 'Financial Planning Profession', description: 'Insights about the financial planning profession' },
      'finance-101': { name: 'Finance 101', description: 'Basic financial concepts and planning' },
      'benefits-at-work': { name: 'Benefits at Work', description: 'Workplace benefits and retirement planning' }
    }

    // Create categories in Payload CMS
    const createdCategories: Record<string, string> = {}

    for (const [categorySlug, categoryData] of Object.entries(categoryMap)) {
      try {
        const category = await payload.create({
          collection: 'categories',
          data: {
            title: categoryData.name,
            description: categoryData.description,
          }
        })

        createdCategories[categorySlug] = category.id
        console.log(`Created category: ${categoryData.name} (ID: ${category.id})`)
      } catch (error: any) {
        console.error(`Error creating category ${categorySlug}:`, error.message)
      }
    }

    // Process and upload blog posts
    let successCount = 0
    let errorCount = 0

    for (const post of actualPosts) {
      try {
        // Determine category for this post based on content analysis
        let categoryId = null
        const postContent = post.content.toLowerCase()
        const postTitle = post.title.toLowerCase()

        if (postTitle.includes('tax') || postContent.includes('tax')) {
          categoryId = createdCategories['taxes']
        } else if (postTitle.includes('real estate') || postContent.includes('real estate')) {
          categoryId = createdCategories['real-estate']
        } else if (postTitle.includes('invest') || postContent.includes('invest')) {
          categoryId = createdCategories['basics-of-investing']
        } else if (postTitle.includes('financial planning') || postTitle.includes('planner') || postContent.includes('financial planning')) {
          categoryId = createdCategories['the-financial-planner-profession']
        } else if (postTitle.includes('fund') || postTitle.includes('stock') || postContent.includes('portfolio')) {
          categoryId = createdCategories['basics-of-investing']
        } else {
          categoryId = createdCategories['finance-101']
        }

        // Clean up content - extract main content and remove navigation/subscription elements
        let cleanContent = post.content
          .replace(/Subscribe to get updates on new posts!.*?Thanks for subscribing!/s, '')
          .replace(/SearchRecent PostsSee All.*/s, '')
          .replace(/Recent PostsSee All.*/s, '')
          .replace(/If you found this post helpful, help spread the word!.*/s, '')
          .replace(/As always, keep in mind that you don't have to go it alone.*/s, '')
          .replace(/Search/, '') // Remove "Search" prefix
          .trim()

        // Extract the actual post title and content
        // Remove the author byline pattern like "Austin Preece, CFP®, EAMay 97 min read"
        cleanContent = cleanContent.replace(/Austin Preece, CFP®, EA[A-Za-z0-9\s]+min read/g, '')

        // Smart paragraph detection and formatting
        function formatContentIntoParagraphs(content: string): any[] {
          // Split on common paragraph indicators
          const paragraphs = content
            // Split on sentences that end with periods followed by capital letters
            .split(/\.(?=[A-Z][a-z]|\s[A-Z]|But |And |The |Here |So |What |If |For |In |When |Example|Conclusion|Summary)/g)
            .map(p => p.trim())
            .filter(p => p.length > 0)
            .map(p => p.endsWith('.') ? p : p + '.')

          // Additional processing for better paragraphs
          const formattedParagraphs: string[] = []
          let currentParagraph = ''

          for (const sentence of paragraphs) {
            currentParagraph += sentence + ' '

            // Start new paragraph on certain keywords or after reaching reasonable length
            if (
              sentence.includes('Example:') ||
              sentence.includes('Conclusion') ||
              sentence.includes('Here\'s') ||
              sentence.includes('Main downside') ||
              sentence.includes('Solutions') ||
              (currentParagraph.length > 300 && sentence.endsWith('.'))
            ) {
              formattedParagraphs.push(currentParagraph.trim())
              currentParagraph = ''
            }
          }

          if (currentParagraph.trim()) {
            formattedParagraphs.push(currentParagraph.trim())
          }

          // Convert to Lexical paragraph nodes
          return formattedParagraphs.map(paragraph => ({
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: paragraph,
                type: 'text',
                version: 1
              }
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            type: 'paragraph',
            version: 1
          }))
        }

        // Convert content to properly formatted Lexical structure
        const paragraphNodes = formatContentIntoParagraphs(cleanContent)

        const lexicalContent = {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,
            children: paragraphNodes,
            direction: 'ltr'
          }
        }

        // Create blog post in Payload CMS
        const blogPost = await payload.create({
          collection: 'posts',
          data: {
            title: post.title,
            content: lexicalContent,
            publishedAt: new Date().toISOString(),
            categories: categoryId ? [categoryId] : [],
            _status: 'published',
            meta: {
              title: post.title,
              description: post.excerpt || cleanContent.substring(0, 160)
            }
          }
        })

        console.log(`✅ Created post: ${post.title} (ID: ${blogPost.id})`)
        successCount++

      } catch (error: any) {
        console.error(`❌ Error creating post "${post.title}":`, error.message)
        errorCount++
      }
    }

    const summary = {
      success: true,
      successCount,
      errorCount
    }

    console.log('\n📊 Upload Summary:')
    console.log(`✅ Successfully created: ${successCount} posts`)
    console.log(`❌ Errors: ${errorCount} posts`)

    return NextResponse.json(summary)

  } catch (error: any) {
    console.error('Error during upload process:', error)
    return NextResponse.json(
      { error: 'Upload failed', message: error.message },
      { status: 500 }
    )
  }
}