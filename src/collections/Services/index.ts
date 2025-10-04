import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Manage the Services page content with easy section-based editing',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Services Page',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'hero',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  required: true,
                  defaultValue: 'What are you looking to accomplish?',
                  admin: {
                    description: 'Main heading for the services page',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  admin: {
                    description: 'Introductory paragraph explaining your services approach',
                  },
                },
                {
                  name: 'heroImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Hero Background Image (Optional)',
                },
                {
                  name: 'styling',
                  type: 'group',
                  label: 'Hero Styling Options',
                  fields: [
                    {
                      name: 'headingSize',
                      type: 'select',
                      label: 'Heading Size',
                      options: [
                        { label: 'Small', value: 'text-4xl md:text-5xl' },
                        { label: 'Medium (Default)', value: 'text-5xl md:text-6xl lg:text-7xl' },
                        { label: 'Large', value: 'text-6xl md:text-7xl lg:text-8xl' },
                      ],
                      defaultValue: 'text-5xl md:text-6xl lg:text-7xl',
                    },
                    {
                      name: 'headingWeight',
                      type: 'select',
                      label: 'Heading Weight',
                      options: [
                        { label: 'Light', value: 'font-light' },
                        { label: 'Normal (Default)', value: 'font-normal' },
                        { label: 'Medium', value: 'font-medium' },
                        { label: 'Semibold', value: 'font-semibold' },
                      ],
                      defaultValue: 'font-normal',
                    },
                    {
                      name: 'descriptionSize',
                      type: 'select',
                      label: 'Description Size',
                      options: [
                        { label: 'Small', value: 'text-base' },
                        { label: 'Medium (Default)', value: 'text-lg md:text-xl' },
                        { label: 'Large', value: 'text-xl md:text-2xl' },
                      ],
                      defaultValue: 'text-lg md:text-xl',
                    },
                    {
                      name: 'spacing',
                      type: 'select',
                      label: 'Section Padding',
                      options: [
                        { label: 'Compact', value: 'py-12' },
                        { label: 'Normal (Default)', value: 'py-20' },
                        { label: 'Spacious', value: 'py-32' },
                      ],
                      defaultValue: 'py-20',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Call-to-Action Buttons',
          fields: [
            {
              name: 'ctaButtons',
              type: 'array',
              label: 'CTA Buttons (Below Hero)',
              minRows: 1,
              maxRows: 4,
              admin: {
                description: 'Primary action buttons displayed below the hero description',
              },
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                  admin: {
                    placeholder: 'e.g., "Schedule Meeting", "Start a Plan"',
                  },
                },
                {
                  name: 'link',
                  type: 'text',
                  required: true,
                  admin: {
                    placeholder: 'e.g., "/contact", "https://calendly.com/yourlink"',
                  },
                },
                {
                  name: 'style',
                  type: 'select',
                  options: [
                    { label: 'Primary (Filled)', value: 'primary' },
                    { label: 'Secondary (Outlined)', value: 'secondary' },
                    { label: 'Tertiary (Text Only)', value: 'tertiary' },
                  ],
                  defaultValue: 'primary',
                },
              ],
            },
          ],
        },
        {
          label: 'Service Offerings',
          fields: [
            {
              name: 'serviceOfferings',
              type: 'array',
              label: 'Service Plans/Offerings',
              minRows: 1,
              admin: {
                description: 'Your main service offerings (e.g., One-Time Planning, Ongoing Planning, etc.)',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  admin: {
                    placeholder: 'e.g., "One-Time Planning", "Ongoing Planning"',
                  },
                },
                {
                  name: 'badge',
                  type: 'text',
                  admin: {
                    description: 'Optional badge text (e.g., "Most Popular", "Best Value")',
                    placeholder: 'e.g., "***Most Popular***"',
                  },
                },
                {
                  name: 'tagline',
                  type: 'text',
                  admin: {
                    description: 'Short description of who this is best for',
                    placeholder: 'e.g., "Best for DIYers who want a professional review"',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  admin: {
                    description: 'Detailed description of what\'s included, pricing, etc.',
                  },
                },
                {
                  name: 'features',
                  type: 'array',
                  label: 'Key Features/Bullet Points',
                  fields: [
                    {
                      name: 'feature',
                      type: 'text',
                    },
                  ],
                },
                {
                  name: 'ctaText',
                  type: 'text',
                  defaultValue: 'More Information',
                  admin: {
                    description: 'Button text for this service',
                  },
                },
                {
                  name: 'ctaLink',
                  type: 'text',
                  admin: {
                    description: 'Link for the service button',
                  },
                },
                {
                  name: 'accentColor',
                  type: 'select',
                  label: 'Card Accent Color',
                  options: [
                    { label: 'Brand Blue-Gray (#62708A)', value: '#62708A' },
                    { label: 'Brand Olive (#85896D)', value: '#85896D' },
                    { label: 'Brand Light Blue (#A1B5B8)', value: '#A1B5B8' },
                    { label: 'Brand Warm Gray (#95997D)', value: '#95997D' },
                    { label: 'Leather (#C48457)', value: '#C48457' },
                  ],
                  defaultValue: '#62708A',
                },
                {
                  name: 'cardStyling',
                  type: 'group',
                  label: 'Card Styling',
                  fields: [
                    {
                      name: 'titleSize',
                      type: 'select',
                      label: 'Title Size',
                      options: [
                        { label: 'Small', value: 'text-2xl' },
                        { label: 'Medium (Default)', value: 'text-3xl' },
                        { label: 'Large', value: 'text-4xl' },
                      ],
                      defaultValue: 'text-3xl',
                    },
                    {
                      name: 'titleWeight',
                      type: 'select',
                      label: 'Title Weight',
                      options: [
                        { label: 'Light', value: 'font-light' },
                        { label: 'Normal (Default)', value: 'font-normal' },
                        { label: 'Medium', value: 'font-medium' },
                        { label: 'Semibold', value: 'font-semibold' },
                      ],
                      defaultValue: 'font-normal',
                    },
                    {
                      name: 'descriptionSize',
                      type: 'select',
                      label: 'Description Size',
                      options: [
                        { label: 'Small', value: 'text-sm' },
                        { label: 'Medium (Default)', value: 'text-base' },
                        { label: 'Large', value: 'text-lg' },
                      ],
                      defaultValue: 'text-base',
                    },
                    {
                      name: 'cardPadding',
                      type: 'select',
                      label: 'Card Padding',
                      options: [
                        { label: 'Compact', value: 'p-6' },
                        { label: 'Normal (Default)', value: 'p-10' },
                        { label: 'Spacious', value: 'p-12' },
                      ],
                      defaultValue: 'p-10',
                    },
                    {
                      name: 'shadowIntensity',
                      type: 'select',
                      label: 'Shadow Intensity',
                      options: [
                        { label: 'None', value: 'shadow-none' },
                        { label: 'Light', value: 'shadow-md' },
                        { label: 'Medium (Default)', value: 'shadow-lg' },
                        { label: 'Heavy', value: 'shadow-2xl' },
                      ],
                      defaultValue: 'shadow-lg',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Additional Services',
          fields: [
            {
              name: 'additionalServices',
              type: 'array',
              label: 'Additional Service Sections',
              admin: {
                description: 'Other services like accounting, tax prep, etc.',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'features',
                  type: 'array',
                  label: 'Features/Services List',
                  fields: [
                    {
                      name: 'item',
                      type: 'text',
                    },
                  ],
                },
                {
                  name: 'ctaText',
                  type: 'text',
                  admin: {
                    placeholder: 'e.g., "View Site", "Learn More"',
                  },
                },
                {
                  name: 'ctaLink',
                  type: 'text',
                },
                {
                  name: 'backgroundColor',
                  type: 'select',
                  options: [
                    { label: 'White', value: 'bg-white' },
                    { label: 'Light Gray', value: 'bg-gray-50' },
                    { label: 'Brand Light Blue', value: 'bg-[#A1B5B8]/10' },
                    { label: 'Brand Warm', value: 'bg-[#E3D3BD]/20' },
                  ],
                  defaultValue: 'bg-gray-50',
                },
                {
                  name: 'styling',
                  type: 'group',
                  label: 'Section Styling',
                  fields: [
                    {
                      name: 'titleSize',
                      type: 'select',
                      label: 'Title Size',
                      options: [
                        { label: 'Small', value: 'text-3xl md:text-4xl' },
                        { label: 'Medium (Default)', value: 'text-4xl md:text-5xl' },
                        { label: 'Large', value: 'text-5xl md:text-6xl' },
                      ],
                      defaultValue: 'text-4xl md:text-5xl',
                    },
                    {
                      name: 'titleWeight',
                      type: 'select',
                      label: 'Title Weight',
                      options: [
                        { label: 'Light', value: 'font-light' },
                        { label: 'Normal (Default)', value: 'font-normal' },
                        { label: 'Medium', value: 'font-medium' },
                        { label: 'Semibold', value: 'font-semibold' },
                      ],
                      defaultValue: 'font-normal',
                    },
                    {
                      name: 'descriptionSize',
                      type: 'select',
                      label: 'Description Size',
                      options: [
                        { label: 'Small', value: 'text-sm' },
                        { label: 'Medium', value: 'text-base' },
                        { label: 'Large (Default)', value: 'text-lg' },
                      ],
                      defaultValue: 'text-lg',
                    },
                    {
                      name: 'spacing',
                      type: 'select',
                      label: 'Section Padding',
                      options: [
                        { label: 'Compact', value: 'py-12' },
                        { label: 'Normal (Default)', value: 'py-20' },
                        { label: 'Spacious', value: 'py-32' },
                      ],
                      defaultValue: 'py-20',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Testimonials',
          fields: [
            {
              name: 'showTestimonials',
              type: 'checkbox',
              label: 'Show Testimonials Section',
              defaultValue: true,
            },
            {
              name: 'testimonialsHeading',
              type: 'text',
              defaultValue: 'What Our Clients Say',
            },
            {
              name: 'selectedTestimonials',
              type: 'relationship',
              relationTo: 'testimonials',
              hasMany: true,
              admin: {
                description: 'Select specific testimonials or leave empty to show all',
              },
            },
            {
              name: 'testimonialsStyling',
              type: 'group',
              label: 'Testimonials Styling',
              fields: [
                {
                  name: 'headingSize',
                  type: 'select',
                  label: 'Heading Size',
                  options: [
                    { label: 'Small', value: 'text-3xl md:text-4xl' },
                    { label: 'Medium (Default)', value: 'text-4xl md:text-5xl' },
                    { label: 'Large', value: 'text-5xl md:text-6xl' },
                  ],
                  defaultValue: 'text-4xl md:text-5xl',
                },
                {
                  name: 'headingWeight',
                  type: 'select',
                  label: 'Heading Weight',
                  options: [
                    { label: 'Light', value: 'font-light' },
                    { label: 'Normal (Default)', value: 'font-normal' },
                    { label: 'Medium', value: 'font-medium' },
                    { label: 'Semibold', value: 'font-semibold' },
                  ],
                  defaultValue: 'font-normal',
                },
                {
                  name: 'quoteSize',
                  type: 'select',
                  label: 'Quote Size',
                  options: [
                    { label: 'Small', value: 'text-sm' },
                    { label: 'Medium (Default)', value: 'text-base' },
                    { label: 'Large', value: 'text-lg' },
                  ],
                  defaultValue: 'text-base',
                },
                {
                  name: 'cardPadding',
                  type: 'select',
                  label: 'Card Padding',
                  options: [
                    { label: 'Compact', value: 'p-6' },
                    { label: 'Normal (Default)', value: 'p-8' },
                    { label: 'Spacious', value: 'p-10' },
                  ],
                  defaultValue: 'p-8',
                },
                {
                  name: 'spacing',
                  type: 'select',
                  label: 'Section Padding',
                  options: [
                    { label: 'Compact', value: 'py-12' },
                    { label: 'Normal (Default)', value: 'py-20' },
                    { label: 'Spacious', value: 'py-32' },
                  ],
                  defaultValue: 'py-20',
                },
              ],
            },
          ],
        },
        {
          label: 'Legal/Disclaimer',
          fields: [
            {
              name: 'disclaimer',
              type: 'group',
              fields: [
                {
                  name: 'showDisclaimer',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'disclaimerText',
                  type: 'textarea',
                  admin: {
                    description: 'Legal disclaimer text to display at bottom of page',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
