import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import { Header } from '@/components/Header'
import { formatDateTime } from '@/utilities/formatDateTime'

import type { Post } from '@/payload-types'

import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

async function getCategories() {
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'categories',
      limit: 100,
    })
    return result.docs || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/post/' + slug

  const [post, categories] = await Promise.all([
    queryPostBySlug({ slug }),
    getCategories()
  ])

  if (!post) return <PayloadRedirects url={url} />

  return (
    <div className="min-h-screen bg-white">
      <Header variant="minimal" />

      {/* Categories Navigation Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container max-w-7xl py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Link
              href="/blog"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition"
            >
              All Posts
            </Link>
            {categories.map((category: any) => (
              <Link
                key={category.id}
                href={`/blog?category=${category.slug}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-b border-gray-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#62708A]/5 to-[#2C3E51]/10"></div>
        <div className="container max-w-5xl py-20 relative z-10">
          <div className="text-center">
            {/* Breadcrumb */}
            <nav className="mb-10">
              <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                <Link href="/blog" className="hover:text-[#62708A] transition-colors duration-200 font-medium">
                  Blog
                </Link>
                <span className="text-gray-400">→</span>
                <span className="text-[#2C3E51] font-medium">{post.title}</span>
              </div>
            </nav>

            {/* Categories */}
            {post.categories && Array.isArray(post.categories) && post.categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {post.categories.map((category: any) => (
                  <span
                    key={typeof category === 'object' ? category.id : category}
                    className="px-4 py-2 bg-gradient-to-r from-[#62708A]/10 to-[#2C3E51]/10 text-[#62708A] text-sm font-semibold rounded-full border border-[#62708A]/20"
                  >
                    {typeof category === 'object' ? category.title : 'Category'}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-[#2C3E51] mb-10 tracking-tight leading-[1.1] max-w-4xl mx-auto">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#62708A] to-[#2C3E51] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">AP</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-[#2C3E51] text-lg">Austin Preece, CFP®, EA</div>
                  <div className="text-sm text-gray-500">Financial Planner</div>
                </div>
              </div>
              {post.publishedAt && (
                <time dateTime={post.publishedAt} className="text-sm font-medium text-gray-500 bg-white/60 px-4 py-2 rounded-full">
                  {formatDateTime(post.publishedAt)}
                </time>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="container max-w-4xl py-20">
        <PageClient />

        {/* Allows redirects for valid pages too */}
        <PayloadRedirects disableNotFound url={url} />

        {draft && <LivePreviewListener />}

        <div className="prose prose-xl max-w-none">
          {/* Featured Image */}
          {post.meta?.image && typeof post.meta.image === 'object' && 'url' in post.meta.image && (
            <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={post.meta.image.url || ''}
                alt={post.title || ''}
                className="w-full h-[450px] object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="text-lg leading-relaxed space-y-6 text-gray-800">
            <RichText className="max-w-none [&>p]:text-lg [&>p]:leading-[1.8] [&>p]:mb-8 [&>p]:text-gray-800 [&>h2]:text-[#2C3E51] [&>h2]:font-bold [&>h2]:mb-6 [&>h2]:mt-12 [&>h2]:text-2xl md:[&>h2]:text-3xl [&>h3]:text-[#2C3E51] [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:mt-8 [&>h3]:text-xl md:[&>h3]:text-2xl"
              data={post.content}
              enableGutter={false}
            />
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-20 p-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl border border-gray-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#62708A] to-[#2C3E51] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="text-white font-bold text-xl">AP</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#2C3E51] mb-3">Austin Preece, CFP®, EA</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Austin is a fee-only financial planner based in Eau Claire, Wisconsin, working virtually with clients across the US.
                He specializes in comprehensive financial planning, investment management, and tax planning strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/home#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#62708A] text-white rounded-lg hover:bg-[#2C3E51] transition-colors duration-200 font-semibold"
                >
                  Get in Touch →
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#62708A] border-2 border-[#62708A] rounded-lg hover:bg-[#62708A] hover:text-white transition-colors duration-200 font-semibold"
                >
                  More Articles →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#2C3E51] mb-10 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {post.relatedPosts.filter((p): p is Post => typeof p === 'object').slice(0, 3).map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/post/${relatedPost.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {relatedPost.meta?.image && typeof relatedPost.meta.image === 'object' && 'url' in relatedPost.meta.image && (
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={relatedPost.meta.image.url || ''}
                        alt={relatedPost.title || ''}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#2C3E51] mb-2 group-hover:text-[#62708A] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    {relatedPost.meta?.description && (
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {relatedPost.meta.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Continue Reading */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-[#2C3E51] mb-10 text-center">Continue Reading</h2>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#62708A] to-[#2C3E51] text-white rounded-xl hover:from-[#2C3E51] hover:to-[#62708A] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </article>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-br from-[#2C3E51] to-[#62708A] text-white">
        <div className="container max-w-7xl py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Stay Informed</h2>
            <p className="text-lg text-white/90 mb-8">
              Get our latest insights and financial tips delivered to your inbox monthly
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 transition"
              />
              <button className="px-8 py-3 bg-white text-[#2C3E51] rounded-lg font-semibold hover:bg-white/90 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2C3E51] text-white border-t border-[#62708A]/20">
        <div className="container max-w-7xl py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#A1B5B8]">
            <div>© 2025 Preece Financial Services. All rights reserved.</div>
            <div className="flex gap-6">
              <Link href="/home" className="hover:text-[#62708A] transition">Home</Link>
              <Link href="/blog" className="hover:text-[#62708A] transition">Blog</Link>
              <Link href="/home#contact" className="hover:text-[#62708A] transition">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})