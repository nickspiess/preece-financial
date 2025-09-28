import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'author',
    group: 'Content',
    description: 'Manage client testimonials that can be used in the page builder and throughout the site.',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      admin: {
        description: '💬 The testimonial text from your client. Keep it authentic and specific!',
        placeholder: 'e.g., "Working with Preece Financial transformed our retirement planning. Their expertise and personal attention gave us confidence in our financial future."',
      },
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      admin: {
        description: '👤 Client name (first name and last initial works well for privacy)',
        placeholder: 'e.g., "Sarah J.", "Michael Chen", "Emily Davis"',
      },
    },
    {
      name: 'position',
      type: 'text',
      admin: {
        description: '💼 Client title or profession (optional but adds credibility)',
        placeholder: 'e.g., "Business Owner", "Retired Teacher", "Software Engineer"',
      },
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
      admin: {
        description: '⭐ Star rating out of 5',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: '⭐ Mark as featured to highlight this testimonial',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: '📸 Optional client photo (with permission). Generic avatar images work too.',
      },
    },
  ],
}