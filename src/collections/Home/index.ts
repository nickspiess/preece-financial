import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

export const Home: CollectionConfig = {
  slug: 'home',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Home Page',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'hero',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  required: true,
                  defaultValue: 'Preece Financial Services',
                },
                {
                  name: 'tagline',
                  type: 'text',
                  required: true,
                  defaultValue: 'Helping your money make sense (and dollars)',
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
                        { label: 'Small', value: 'text-4xl md:text-5xl lg:text-6xl' },
                        { label: 'Medium', value: 'text-5xl md:text-6xl lg:text-7xl' },
                        { label: 'Large (Default)', value: 'text-6xl md:text-7xl lg:text-8xl' },
                        { label: 'Extra Large', value: 'text-7xl md:text-8xl lg:text-9xl' },
                      ],
                      defaultValue: 'text-6xl md:text-7xl lg:text-8xl',
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
                      name: 'taglineSize',
                      type: 'select',
                      label: 'Tagline Size',
                      options: [
                        { label: 'Small', value: 'text-base md:text-lg' },
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
          label: 'Who We Serve',
          fields: [
            {
              name: 'whoWeServe',
              type: 'array',
              minRows: 4,
              maxRows: 4,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'whoWeServeStyling',
              type: 'group',
              label: 'Who We Serve Styling',
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
                    { label: 'Extra Small', value: 'text-xs' },
                    { label: 'Small (Default)', value: 'text-sm' },
                    { label: 'Medium', value: 'text-base' },
                  ],
                  defaultValue: 'text-sm',
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
          label: 'Services',
          fields: [
            {
              name: 'services',
              type: 'array',
              minRows: 3,
              maxRows: 3,
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
                  name: 'hoverColor',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Dried Sage', value: '#95997D' },
                    { label: 'Stone Wash', value: '#62708A' },
                    { label: 'Leather', value: '#C48457' },
                  ],
                },
              ],
            },
            {
              name: 'servicesStyling',
              type: 'group',
              label: 'Services Section Styling',
              fields: [
                {
                  name: 'titleSize',
                  type: 'select',
                  label: 'Service Title Size',
                  options: [
                    { label: 'Small', value: 'text-2xl' },
                    { label: 'Medium (Default)', value: 'text-3xl' },
                    { label: 'Large', value: 'text-4xl' },
                  ],
                  defaultValue: 'text-3xl',
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
                    { label: 'Compact', value: 'p-8' },
                    { label: 'Normal (Default)', value: 'p-12' },
                    { label: 'Spacious', value: 'p-16' },
                  ],
                  defaultValue: 'p-12',
                },
                {
                  name: 'enableAnimation',
                  type: 'checkbox',
                  label: 'Enable Hover Animation',
                  defaultValue: true,
                },
              ],
            },
          ],
        },
        {
          label: 'About Us',
          fields: [
            {
              name: 'about',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  required: true,
                  defaultValue: 'Not Your Average Financial Firm',
                },
                {
                  name: 'description1',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'description2',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'categories',
                  type: 'array',
                  minRows: 3,
                  maxRows: 3,
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
                  ],
                },
              ],
            },
            {
              name: 'aboutStyling',
              type: 'group',
              label: 'About Section Styling',
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
                  name: 'categoryTitleSize',
                  type: 'select',
                  label: 'Category Title Size',
                  options: [
                    { label: 'Small', value: 'text-lg' },
                    { label: 'Medium (Default)', value: 'text-xl' },
                    { label: 'Large', value: 'text-2xl' },
                  ],
                  defaultValue: 'text-xl',
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
          label: 'Team',
          fields: [
            {
              name: 'team',
              type: 'array',
              minRows: 4,
              maxRows: 4,
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'credentials',
                  type: 'text',
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
            {
              name: 'teamStyling',
              type: 'group',
              label: 'Team Section Styling',
              fields: [
                {
                  name: 'nameSize',
                  type: 'select',
                  label: 'Name Size',
                  options: [
                    { label: 'Small', value: 'text-lg' },
                    { label: 'Medium (Default)', value: 'text-xl' },
                    { label: 'Large', value: 'text-2xl' },
                  ],
                  defaultValue: 'text-xl',
                },
                {
                  name: 'nameWeight',
                  type: 'select',
                  label: 'Name Weight',
                  options: [
                    { label: 'Light', value: 'font-light' },
                    { label: 'Normal', value: 'font-normal' },
                    { label: 'Medium (Default)', value: 'font-medium' },
                    { label: 'Semibold', value: 'font-semibold' },
                  ],
                  defaultValue: 'font-medium',
                },
                {
                  name: 'titleSize',
                  type: 'select',
                  label: 'Title Size',
                  options: [
                    { label: 'Extra Small', value: 'text-xs' },
                    { label: 'Small (Default)', value: 'text-sm' },
                    { label: 'Medium', value: 'text-base' },
                  ],
                  defaultValue: 'text-sm',
                },
                {
                  name: 'cardPadding',
                  type: 'select',
                  label: 'Card Padding',
                  options: [
                    { label: 'Compact', value: 'p-4' },
                    { label: 'Normal (Default)', value: 'p-6' },
                    { label: 'Spacious', value: 'p-8' },
                  ],
                  defaultValue: 'p-6',
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
          label: 'Pricing',
          fields: [
            {
              name: 'pricing',
              type: 'array',
              minRows: 3,
              maxRows: 3,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'subtitle',
                  type: 'text',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'color',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Dried Sage', value: '#95997D' },
                    { label: 'Stone Wash', value: '#62708A' },
                    { label: 'Leather', value: '#C48457' },
                  ],
                },
                {
                  name: 'tiers',
                  type: 'array',
                  minRows: 3,
                  maxRows: 3,
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              name: 'pricingStyling',
              type: 'group',
              label: 'Pricing Section Styling',
              fields: [
                {
                  name: 'titleSize',
                  type: 'select',
                  label: 'Title Size',
                  options: [
                    { label: 'Small', value: 'text-xl' },
                    { label: 'Medium (Default)', value: 'text-2xl' },
                    { label: 'Large', value: 'text-3xl' },
                  ],
                  defaultValue: 'text-2xl',
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
                  name: 'tierNameSize',
                  type: 'select',
                  label: 'Tier Name Size',
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
          label: 'Contact',
          fields: [
            {
              name: 'contact',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  required: true,
                  defaultValue: "Let's Talk",
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'contactStyling',
              type: 'group',
              label: 'Contact Section Styling',
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
                  name: 'inputPadding',
                  type: 'select',
                  label: 'Input Field Padding',
                  options: [
                    { label: 'Compact', value: 'px-4 py-3' },
                    { label: 'Normal (Default)', value: 'px-6 py-4' },
                    { label: 'Spacious', value: 'px-8 py-5' },
                  ],
                  defaultValue: 'px-6 py-4',
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
          label: 'Page Layout',
          fields: [
            {
              name: 'sectionOrder',
              type: 'array',
              label: 'Section Order & Visibility',
              admin: {
                description: 'Drag to reorder sections. Uncheck to hide sections.',
              },
              fields: [
                {
                  name: 'section',
                  type: 'select',
                  label: 'Section',
                  required: true,
                  options: [
                    { label: 'Hero', value: 'hero' },
                    { label: 'Who We Serve', value: 'whoWeServe' },
                    { label: 'Services', value: 'services' },
                    { label: 'About', value: 'about' },
                    { label: 'Team', value: 'team' },
                    { label: 'Pricing', value: 'pricing' },
                    { label: 'Contact', value: 'contact' },
                  ],
                },
                {
                  name: 'enabled',
                  type: 'checkbox',
                  label: 'Show Section',
                  defaultValue: true,
                },
                {
                  name: 'customTitle',
                  type: 'text',
                  label: 'Custom Section Title (optional)',
                },
              ],
              defaultValue: [
                { section: 'hero', enabled: true },
                { section: 'whoWeServe', enabled: true },
                { section: 'services', enabled: true },
                { section: 'about', enabled: true },
                { section: 'team', enabled: true },
                { section: 'pricing', enabled: true },
                { section: 'contact', enabled: true },
              ],
            },
            {
              name: 'layoutSettings',
              type: 'group',
              label: 'Layout Settings',
              fields: [
                {
                  name: 'teamLayout',
                  type: 'select',
                  label: 'Team Section Layout',
                  options: [
                    { label: '2x2 Grid', value: 'grid-2x2' },
                    { label: '3 Column Row', value: 'grid-3col' },
                    { label: '4 Column Row', value: 'grid-4col' },
                    { label: 'List View', value: 'list' },
                  ],
                  defaultValue: 'grid-4col',
                },
                {
                  name: 'servicesLayout',
                  type: 'select',
                  label: 'Services Section Layout',
                  options: [
                    { label: 'Card Grid', value: 'cards' },
                    { label: 'List with Borders', value: 'list-borders' },
                    { label: 'Simple List', value: 'list-simple' },
                  ],
                  defaultValue: 'cards',
                },
                {
                  name: 'heroLayout',
                  type: 'select',
                  label: 'Hero Section Layout',
                  options: [
                    { label: 'Centered', value: 'centered' },
                    { label: 'Left Aligned', value: 'left' },
                    { label: 'Split with Form', value: 'split-form' },
                  ],
                  defaultValue: 'centered',
                },
                {
                  name: 'showConsultationSection',
                  type: 'checkbox',
                  label: 'Show Consultation Form Section',
                  defaultValue: true,
                },
                {
                  name: 'consultationPlacement',
                  type: 'select',
                  label: 'Consultation Form Placement',
                  options: [
                    { label: 'After Hero', value: 'after-hero' },
                    { label: 'Before Footer', value: 'before-footer' },
                    { label: 'In Hero (Split Layout)', value: 'in-hero' },
                  ],
                  defaultValue: 'after-hero',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}