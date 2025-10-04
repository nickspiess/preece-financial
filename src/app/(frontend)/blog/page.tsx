'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { formatDateTime } from '@/utilities/formatDateTime'

// Types
interface Author {
  name?: string
  id: string
}

interface Category {
  id: string
  title?: string
  slug?: string
}

interface Meta {
  title?: string
  description?: string
  image?: {
    url?: string
  }
}

interface Post {
  id: string
  title?: string
  slug?: string
  excerpt?: string
  publishedAt?: string
  populatedAuthors?: Author[]
  categories?: Category[]
  meta?: Meta
}

// Fetch posts with categories
async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch('/api/posts?limit=100&depth=2')
    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Fetch categories
async function fetchCategories() {
  try {
    const response = await fetch('/api/categories?limit=100')
    const data = await response.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}


export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest')
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [showMoreDropdown, setShowMoreDropdown] = useState(false)

  const postsPerPage = 9

  // Fetch data on mount
  useEffect(() => {
    async function loadData() {
      setLoading(true)
      const [postsData, categoriesData] = await Promise.all([
        fetchPosts(),
        fetchCategories()
      ])
      setPosts(postsData)
      setCategories(categoriesData)
      setLoading(false)
    }
    loadData()
  }, [])

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post =>
        post.categories?.some(cat => cat.id === selectedCategory)
      )
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(post =>
        post.title?.toLowerCase().includes(query) ||
        post.excerpt?.toLowerCase().includes(query) ||
        post.meta?.description?.toLowerCase().includes(query)
      )
    }

    // Sort posts
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.publishedAt || 0).getTime() - new Date(b.publishedAt || 0).getTime()
        case 'title':
          return (a.title || '').localeCompare(b.title || '')
        case 'newest':
        default:
          return new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime()
      }
    })

    return sorted
  }, [posts, selectedCategory, searchQuery, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = filteredAndSortedPosts.slice(startIndex, startIndex + postsPerPage)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery, sortBy])


  return (
    <div className="min-h-screen bg-white">
      <Header variant="minimal" />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-slate-100 border-b border-gray-200">
        <div className="container max-w-7xl py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-[#2C3E51] mb-4 tracking-tight">
              Insights & Resources
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Expert perspectives on financial planning, investment strategies, and market insights to help guide your financial journey.
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b border-gray-200 relative z-50">
        <div className="container max-w-7xl">
          <div className="flex items-center gap-2 py-4 flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                selectedCategory === 'all'
                  ? 'bg-[#62708A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setSelectedCategory(categories.find(c => c.title === 'Finance 101')?.id || '')}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                selectedCategory === categories.find(c => c.title === 'Finance 101')?.id
                  ? 'bg-[#62708A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Finance 101
            </button>
            <button
              onClick={() => setSelectedCategory(categories.find(c => c.title === 'Financial Planning Profession')?.id || '')}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                selectedCategory === categories.find(c => c.title === 'Financial Planning Profession')?.id
                  ? 'bg-[#62708A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              The Financial Planning Profession
            </button>
            <button
              onClick={() => setSelectedCategory(categories.find(c => c.title === 'Investing Basics')?.id || '')}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                selectedCategory === categories.find(c => c.title === 'Investing Basics')?.id
                  ? 'bg-[#62708A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Basics of Investing
            </button>
            <button
              onClick={() => setSelectedCategory(categories.find(c => c.title === 'Taxes')?.id || '')}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                selectedCategory === categories.find(c => c.title === 'Taxes')?.id
                  ? 'bg-[#62708A] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Taxes!
            </button>

            {/* More dropdown */}
            {categories.filter(cat =>
              !['Finance 101', 'Financial Planning Profession', 'Investing Basics', 'Taxes'].includes(cat.title || '')
            ).length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setShowMoreDropdown(!showMoreDropdown)}
                  onBlur={() => setTimeout(() => setShowMoreDropdown(false), 200)}
                  className="px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1"
                >
                  More
                  <svg className={`w-4 h-4 transition-transform ${showMoreDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showMoreDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-[100] min-w-[200px]">
                    <div className="py-2">
                      {categories.filter(cat =>
                        !['Finance 101', 'Financial Planning Profession', 'Investing Basics', 'Taxes'].includes(cat.title || '')
                      ).map((category) => (
                        <button
                          key={category.id}
                          onMouseDown={() => {
                            setSelectedCategory(category.id)
                            setShowMoreDropdown(false)
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition ${
                            selectedCategory === category.id ? 'text-[#62708A] bg-[#62708A]/5' : 'text-gray-700'
                          }`}
                        >
                          {category.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container max-w-7xl py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#62708A] transition"
                />
                <svg
                  className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#62708A] transition"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl py-12">

        {/* Main Content - Posts Grid */}
        <main>
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#62708A]"></div>
                  <p className="mt-4 text-gray-600">Loading articles...</p>
                </div>
              </div>
            ) : paginatedPosts.length === 0 ? (
              <div className="text-center py-20">
                <svg
                  className="w-16 h-16 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <>
                {/* Results count */}
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Showing {startIndex + 1}-{Math.min(startIndex + postsPerPage, filteredAndSortedPosts.length)} of {filteredAndSortedPosts.length} articles
                  </p>
                </div>

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {paginatedPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                    >
                      <Link href={`/post/${post.slug}`} className="flex flex-col h-full">
                        {/* Image - only show if exists */}
                        {post.meta?.image?.url && (
                          <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                            <img
                              src={post.meta.image.url}
                              alt={post.title || ''}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          {/* Title */}
                          <h2 className="text-xl font-semibold text-[#2C3E51] mb-2 group-hover:text-[#62708A] transition-colors line-clamp-2">
                            {post.title || 'Untitled'}
                          </h2>

                          {/* Excerpt */}
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                            {post.meta?.description || post.excerpt || 'No description available'}
                          </p>

                          {/* Categories */}
                          {post.categories && post.categories.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.categories.slice(0, 2).map((category) => (
                                <span
                                  key={category.id}
                                  className="px-2 py-1 bg-[#62708A]/10 text-[#62708A] text-xs font-medium rounded-full"
                                >
                                  {category.title}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Meta */}
                          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-[#2C3E51]">Austin Preece, CFP®, EA</span>
                              </div>
                              {post.publishedAt && (
                                <time dateTime={post.publishedAt} className="text-gray-400">
                                  {formatDateTime(post.publishedAt)}
                                </time>
                              )}
                            </div>
                            <span className="text-[#62708A] group-hover:translate-x-1 transition-transform inline-block">
                              →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex items-center justify-center gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                    >
                      Previous
                    </button>

                    <div className="flex gap-1">
                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1
                        // Show first, last, and pages around current
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`w-10 h-10 rounded-lg text-sm font-medium transition ${
                                currentPage === page
                                  ? 'bg-[#62708A] text-white'
                                  : 'hover:bg-gray-50 text-gray-700'
                              }`}
                            >
                              {page}
                            </button>
                          )
                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                          return (
                            <span key={page} className="w-10 h-10 flex items-center justify-center text-gray-400">
                              ...
                            </span>
                          )
                        }
                        return null
                      })}
                    </div>

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
        </main>
      </div>

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