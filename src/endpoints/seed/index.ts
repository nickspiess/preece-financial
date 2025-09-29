import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest, File } from 'payload'
import fs from 'fs'
import path from 'path'

import { contactForm as contactFormData } from './contact-form'
import { contact as contactPageData } from './contact-page'
import { home } from './home'
import { image1 } from './image-1'
import { image2 } from './image-2'
import { imageHero1 } from './image-hero-1'
import { post1 } from './post-1'
import { post2 } from './post-2'
import { post3 } from './post-3'

const collections: CollectionSlug[] = [
  'categories',
  'pages',
  'posts',
  'forms',
  'form-submissions',
  'search',
  'media', // Media last to handle foreign key constraints
]
const globals: GlobalSlug[] = ['header', 'footer']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  // Skip clearing existing data to avoid foreign key constraints
  // Just add the missing images to the media collection
  payload.logger.info(`— Checking for existing media and adding missing images...`)

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo-author@example.com',
      },
    },
  })

  payload.logger.info(`— Seeding media...`)

  const [image1Buffer, image2Buffer, image3Buffer, hero1Buffer, ...teamPhotoBuffers] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
    ),
    // Team photos from local public/media directory
    fetchLocalFile('public/media/retirees.webp'),
    fetchLocalFile('public/media/nolan.webp'),
    fetchLocalFile('public/media/joe.webp'),
    fetchLocalFile('public/media/brooks.webp'),
    fetchLocalFile('public/media/austin.webp'),
    fetchLocalFile('public/media/realestate.webp'),
    fetchLocalFile('public/media/entrepreneur.webp'),
    fetchLocalFile('public/media/briefcase.webp'),
  ])

  const [retireesBuffer, nolanBuffer, joeBuffer, brooksBuffer, austinBuffer, realestateBuffer, entrepreneurBuffer, briefcaseBuffer] = teamPhotoBuffers

  // Check for existing images to avoid duplicates
  const teamImageNames = ['retirees.webp', 'nolan.webp', 'joe.webp', 'brooks.webp', 'austin.webp', 'realestate.webp', 'entrepreneur.webp', 'briefcase.webp']
  const existingImages = await payload.find({
    collection: 'media',
    where: {
      filename: {
        in: teamImageNames,
      },
    },
  })

  payload.logger.info(`Found ${existingImages.docs.length} existing team images`)

  const imagesToCreate = teamImageNames.filter(name =>
    !existingImages.docs.some(doc => doc.filename === name)
  )

  payload.logger.info(`Will create ${imagesToCreate.length} missing team images: ${imagesToCreate.join(', ')}`)

  const [demoAuthor, image1Doc, image2Doc, image3Doc, imageHomeDoc, ...teamPhotoDocs] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        name: 'Demo Author',
        email: 'demo-author@example.com',
        password: 'password',
      },
    }),
    payload.create({
      collection: 'media',
      data: image1,
      file: image1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageHero1,
      file: hero1Buffer,
    }),

    // Team photos - only create missing ones
    ...(imagesToCreate.includes('retirees.webp') ? [payload.create({
      collection: 'media',
      data: { alt: 'Retirees' },
      file: retireesBuffer,
    })] : []),
    ...(imagesToCreate.includes('nolan.webp') ? [payload.create({
      collection: 'media',
      data: { alt: 'Nolan' },
      file: nolanBuffer,
    })] : []),
    ...(imagesToCreate.includes('joe.webp') ? [payload.create({
      collection: 'media',
      data: { alt: 'Joe' },
      file: joeBuffer,
    })] : []),
    ...(imagesToCreate.includes('brooks.webp') ? [payload.create({
      collection: 'media',
      data: { alt: 'Brooks' },
      file: brooksBuffer,
    })] : []),
    ...(imagesToCreate.includes('austin.webp') ? [payload.create({
      collection: 'media',
      data: { alt: 'Austin' },
      file: austinBuffer,
    })] : []),
    ...(imagesToCreate.includes('realestate.webp') ? [payload.create({
      collection: 'media',
      data: { alt: 'Real Estate' },
      file: realestateBuffer,
    })] : []),
    ...(imagesToCreate.includes('entrepreneur.webp') ? [payload.create({
      collection: 'media',
      data: { alt: 'Entrepreneur' },
      file: entrepreneurBuffer,
    })] : []),
    ...(imagesToCreate.includes('briefcase-1.webp') ? [payload.create({
      collection: 'media',
      data: { alt: 'Briefcase' },
      file: briefcaseBuffer,
    })] : []),

    payload.create({
      collection: 'categories',
      data: {
        title: 'Technology',
        breadcrumbs: [
          {
            label: 'Technology',
            url: '/technology',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'News',
        breadcrumbs: [
          {
            label: 'News',
            url: '/news',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'Finance',
        breadcrumbs: [
          {
            label: 'Finance',
            url: '/finance',
          },
        ],
      },
    }),
    payload.create({
      collection: 'categories',
      data: {
        title: 'Design',
        breadcrumbs: [
          {
            label: 'Design',
            url: '/design',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'Software',
        breadcrumbs: [
          {
            label: 'Software',
            url: '/software',
          },
        ],
      },
    }),

    payload.create({
      collection: 'categories',
      data: {
        title: 'Engineering',
        breadcrumbs: [
          {
            label: 'Engineering',
            url: '/engineering',
          },
        ],
      },
    }),
  ])

  payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
  const post1Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post1({ heroImage: image1Doc, blockImage: image2Doc, author: demoAuthor }),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post2({ heroImage: image2Doc, blockImage: image3Doc, author: demoAuthor }),
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    depth: 0,
    context: {
      disableRevalidate: true,
    },
    data: post3({ heroImage: image3Doc, blockImage: image1Doc, author: demoAuthor }),
  })

  // update each post with related posts
  await payload.update({
    id: post1Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post2Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post2Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post3Doc.id],
    },
  })
  await payload.update({
    id: post3Doc.id,
    collection: 'posts',
    data: {
      relatedPosts: [post1Doc.id, post2Doc.id],
    },
  })

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
  })

  payload.logger.info(`— Seeding pages...`)

  const [_, contactPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 0,
      data: home({ heroImage: imageHomeDoc, metaImage: image2Doc }),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: contactPageData({ contactForm: contactForm }),
    }),
  ])

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Posts',
              url: '/posts',
            },
          },
          {
            link: {
              type: 'reference',
              label: 'Contact',
              reference: {
                relationTo: 'pages',
                value: contactPage.id,
              },
            },
          },
        ],
      },
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          {
            link: {
              type: 'custom',
              label: 'Admin',
              url: '/admin',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Source Code',
              newTab: true,
              url: 'https://github.com/payloadcms/payload/tree/main/templates/website',
            },
          },
          {
            link: {
              type: 'custom',
              label: 'Payload',
              newTab: true,
              url: 'https://payloadcms.com/',
            },
          },
        ],
      },
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}

async function fetchLocalFile(filePath: string): Promise<File> {
  const fullPath = path.resolve(process.cwd(), filePath)

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Local file not found: ${fullPath}`)
  }

  const data = fs.readFileSync(fullPath)
  const fileName = path.basename(filePath)
  const extension = path.extname(fileName).toLowerCase()

  // Map file extensions to MIME types
  const mimeTypeMap: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
  }

  return {
    name: fileName,
    data: Buffer.from(data),
    mimetype: mimeTypeMap[extension] || 'image/jpeg',
    size: data.length,
  }
}
