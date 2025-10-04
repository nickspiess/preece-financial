import { getPayload } from 'payload'
import payloadConfig from '../src/payload.config.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { config as dotenvConfig } from 'dotenv'

// Load environment variables
dotenvConfig()

console.log('Environment check:')
console.log('PAYLOAD_SECRET:', process.env.PAYLOAD_SECRET ? 'SET' : 'MISSING')
console.log('DATABASE_URI:', process.env.DATABASE_URI ? 'SET' : 'MISSING')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read the blog posts data
const blogPostsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../preece_blog_posts.json'), 'utf8'))

async function uploadBlogData() {
  let payload

  try {
    // Initialize Payload
    payload = await getPayload({ config: payloadConfig })
    console.log('Payload initialized successfully')

    // Extract unique categories from URLs
    const categorySet = new Set()

    blogPostsData.forEach(post => {
      if (post.url.includes('/categories/')) {
        const categorySlug = post.url.split('/categories/')[1]
        categorySet.add(categorySlug)
      } else if (post.url.includes('/post/')) {
        // For individual posts, try to infer category from content or use a default
        const urlParts = post.url.split('/')
        const postSlug = urlParts[urlParts.length - 1]

        // Categorize based on content keywords
        if (post.title.toLowerCase().includes('tax') || post.content.toLowerCase().includes('tax')) {
          categorySet.add('taxes')
        } else if (post.title.toLowerCase().includes('real estate') || post.content.toLowerCase().includes('real estate')) {
          categorySet.add('real-estate')
        } else if (post.title.toLowerCase().includes('invest') || post.content.toLowerCase().includes('invest')) {
          categorySet.add('basics-of-investing')
        } else if (post.title.toLowerCase().includes('financial planning') || post.content.toLowerCase().includes('financial planning')) {
          categorySet.add('the-financial-planner-profession')
        } else {
          categorySet.add('finance-101')
        }
      }
    })

    const categories = Array.from(categorySet)
    console.log('Found categories:', categories)

    // Create category mapping
    const categoryMap = {
      'working-with-pfp': { name: 'Working with PFP', description: 'Information about working with Preece Financial Planning' },
      'taxes': { name: 'Taxes', description: 'Tax planning strategies and insights' },
      'the-financial-planner-profession': { name: 'Financial Planning Profession', description: 'Insights about the financial planning profession' },
      'basics-of-investing': { name: 'Investing Basics', description: 'Fundamental investment concepts and strategies' },
      'real-estate': { name: 'Real Estate', description: 'Real estate investment strategies and analysis' },
      'finance-101': { name: 'Finance 101', description: 'Basic financial concepts and planning' },
      'benefits-at-work': { name: 'Benefits at Work', description: 'Workplace benefits and retirement planning' }
    }

    // Create categories in Payload CMS
    const createdCategories = {}

    for (const categorySlug of categories) {
      try {
        const categoryData = categoryMap[categorySlug] || {
          name: categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: `Posts about ${categorySlug.replace(/-/g, ' ')}`
        }

        const category = await payload.create({
          collection: 'categories',
          data: {
            title: categoryData.name,
            description: categoryData.description,
          }
        })

        createdCategories[categorySlug] = category.id
        console.log(`Created category: ${categoryData.name} (ID: ${category.id})`)
      } catch (error) {
        console.error(`Error creating category ${categorySlug}:`, error.message)
      }
    }

    // Process and upload blog posts
    let successCount = 0
    let errorCount = 0

    for (const post of blogPostsData) {
      try {
        // Determine category for this post
        let categoryId = null

        if (post.url.includes('/categories/')) {
          const categorySlug = post.url.split('/categories/')[1]
          categoryId = createdCategories[categorySlug]
        } else {
          // Infer category based on content
          if (post.title.toLowerCase().includes('tax') || post.content.toLowerCase().includes('tax')) {
            categoryId = createdCategories['taxes']
          } else if (post.title.toLowerCase().includes('real estate') || post.content.toLowerCase().includes('real estate')) {
            categoryId = createdCategories['real-estate']
          } else if (post.title.toLowerCase().includes('invest') || post.content.toLowerCase().includes('invest')) {
            categoryId = createdCategories['basics-of-investing']
          } else if (post.title.toLowerCase().includes('financial planning') || post.content.toLowerCase().includes('financial planning')) {
            categoryId = createdCategories['the-financial-planner-profession']
          } else {
            categoryId = createdCategories['finance-101']
          }
        }

        // Clean up content - extract main content and remove navigation/subscription elements
        let cleanContent = post.content
          .replace(/Subscribe to get updates on new posts!.*?Thanks for subscribing!/s, '')
          .replace(/SearchRecent PostsSee All.*/s, '')
          .replace(/Recent PostsSee All.*/s, '')
          .replace(/If you found this post helpful, help spread the word!.*/s, '')
          .replace(/As always, keep in mind that you don't have to go it alone.*/s, '')
          .trim()

        // Create blog post in Payload CMS
        const blogPost = await payload.create({
          collection: 'posts',
          data: {
            title: post.title,
            content: cleanContent,
            excerpt: post.excerpt || cleanContent.substring(0, 160) + '...',
            author: 'Austin Preece, CFP®, EA',
            publishedDate: new Date().toISOString(),
            categories: categoryId ? [categoryId] : [],
            featured: false,
            meta: {
              title: post.title,
              description: post.excerpt || cleanContent.substring(0, 160)
            }
          }
        })

        console.log(`✅ Created post: ${post.title} (ID: ${blogPost.id})`)
        successCount++

      } catch (error) {
        console.error(`❌ Error creating post "${post.title}":`, error.message)
        errorCount++
      }
    }

    console.log('\n📊 Upload Summary:')
    console.log(`✅ Successfully created: ${successCount} posts`)
    console.log(`❌ Errors: ${errorCount} posts`)
    console.log(`📂 Categories created: ${Object.keys(createdCategories).length}`)

  } catch (error) {
    console.error('Error during upload process:', error)
  } finally {
    if (payload) {
      // payload doesn't have a close method, but we can exit the process
      process.exit(0)
    }
  }
}

// Run the upload
uploadBlogData()