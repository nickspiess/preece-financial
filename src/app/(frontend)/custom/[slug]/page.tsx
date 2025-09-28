import React from 'react'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Header } from '@/components/Header'
import { SectionRenderer } from '@/components/PageBuilder/SectionRenderer'

interface CustomPageProps {
  params: {
    slug: string
  }
}

export default async function CustomPage({ params }: CustomPageProps) {
  const { slug } = params
  const payload = await getPayload({ config })

  // Try to fetch custom page
  const customPageData = await payload.find({
    collection: 'custom-pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const customPage = customPageData.docs[0]

  if (!customPage) {
    return notFound()
  }

  // Get global data that might be needed by components
  const homeData = await payload.find({
    collection: 'home',
    limit: 1,
    populate: {
      'hero.heroImage': true,
      'whoWeServe.image': true,
      'team.image': true,
    },
  })

  const globalData = homeData.docs[0]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header variant="professional" />

      {/* Page Title */}
      <div className="container max-w-7xl py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-light text-[#2C3E51] mb-4 tracking-tight">
            {customPage.title}
          </h1>
          <div className="w-24 h-px bg-[#62708A] mx-auto"></div>
        </div>
      </div>

      {/* Dynamic Sections */}
      {customPage.sections && customPage.sections.length > 0 && (
        <>
          {customPage.sections.map((section: any, index: number) => (
            <SectionRenderer
              key={index}
              section={section}
              globalData={globalData}
            />
          ))}
        </>
      )}

      {/* Default content if no sections */}
      {(!customPage.sections || customPage.sections.length === 0) && (
        <div className="container max-w-7xl py-20">
          <div className="text-center">
            <p className="text-xl text-gray-600">
              This page doesn&apos;t have any sections yet. Add sections in the admin panel to build your page.
            </p>
            <a href="/admin" className="inline-block mt-6 px-8 py-3 bg-[#62708A] text-white hover:bg-[#85896D] transition">
              Go to Admin
            </a>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2C3E51] text-white py-16">
        <div className="container max-w-7xl">
          <div className="text-center">
            <p className="text-white/80">
              © 2025 Preece Financial Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Generate static params for better SEO
export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const pages = await payload.find({
    collection: 'custom-pages',
    limit: 100, // Adjust as needed
  })

  return pages.docs.map((page) => ({
    slug: page.slug,
  }))
}

// Generate metadata for each page
export async function generateMetadata({ params }: CustomPageProps) {
  const { slug } = params
  const payload = await getPayload({ config })

  const pageData = await payload.find({
    collection: 'custom-pages',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const page = pageData.docs[0]

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: `${page.title} | Preece Financial Services`,
    description: `${page.title} - Professional financial services you can trust.`,
  }
}