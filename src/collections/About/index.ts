import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { defaultLexical } from '@/fields/defaultLexical'

export const About: CollectionConfig = {
  slug: 'about',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Manage the About page content with easy section-based editing',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'About Page',
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
                  defaultValue: 'About Me',
                  admin: {
                    description: 'Main heading for the about page',
                  },
                },
                {
                  name: 'subheading',
                  type: 'text',
                  admin: {
                    description: 'Subheading or tagline',
                    placeholder: 'e.g., "Here\'s a little glimpse into my life."',
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
                      defaultValue: 'font-medium',
                    },
                    {
                      name: 'subheadingSize',
                      type: 'select',
                      label: 'Subheading Size',
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
          label: 'Main Story',
          fields: [
            {
              name: 'mainStory',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue: 'About Me.',
                  admin: {
                    description: 'Section heading',
                  },
                },
                {
                  name: 'content',
                  type: 'richText',
                  required: true,
                  editor: defaultLexical,
                  admin: {
                    description: 'Your main bio/story content',
                  },
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Profile or Featured Image',
                },
                {
                  name: 'imagePosition',
                  type: 'select',
                  label: 'Image Position',
                  options: [
                    { label: 'Left', value: 'left' },
                    { label: 'Right', value: 'right' },
                    { label: 'Top', value: 'top' },
                    { label: 'Bottom', value: 'bottom' },
                  ],
                  defaultValue: 'right',
                },
                {
                  name: 'carouselImages',
                  type: 'array',
                  label: 'Carousel Images (Optional)',
                  admin: {
                    description: 'Add multiple images for a carousel display on the right side',
                  },
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                    },
                  ],
                },
                {
                  name: 'styling',
                  type: 'group',
                  label: 'Section Styling',
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
                      defaultValue: 'font-medium',
                    },
                    {
                      name: 'contentSize',
                      type: 'select',
                      label: 'Content Size',
                      options: [
                        { label: 'Small', value: 'text-sm' },
                        { label: 'Medium', value: 'text-base' },
                        { label: 'Large (Default)', value: 'text-lg' },
                      ],
                      defaultValue: 'text-lg',
                    },
                    {
                      name: 'backgroundColor',
                      type: 'select',
                      label: 'Background Color',
                      options: [
                        { label: 'White', value: 'bg-white' },
                        { label: 'Light Gray', value: 'bg-gray-50' },
                        { label: 'Brand Light Blue', value: 'bg-[#A1B5B8]/10' },
                        { label: 'Brand Warm', value: 'bg-[#E3D3BD]/20' },
                      ],
                      defaultValue: 'bg-white',
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
          label: 'Education & Experience',
          fields: [
            {
              name: 'education',
              type: 'group',
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue: 'Education and Experience',
                  admin: {
                    description: 'Section heading',
                  },
                },
                {
                  name: 'content',
                  type: 'richText',
                  required: true,
                  editor: defaultLexical,
                  admin: {
                    description: 'Educational background and professional experience',
                  },
                },
                {
                  name: 'styling',
                  type: 'group',
                  label: 'Section Styling',
                  fields: [
                    {
                      name: 'headingSize',
                      type: 'select',
                      label: 'Heading Size',
                      options: [
                        { label: 'Small', value: 'text-2xl md:text-3xl' },
                        { label: 'Medium (Default)', value: 'text-3xl md:text-4xl' },
                        { label: 'Large', value: 'text-4xl md:text-5xl' },
                      ],
                      defaultValue: 'text-3xl md:text-4xl',
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
                      defaultValue: 'font-medium',
                    },
                    {
                      name: 'contentSize',
                      type: 'select',
                      label: 'Content Size',
                      options: [
                        { label: 'Small', value: 'text-sm' },
                        { label: 'Medium', value: 'text-base' },
                        { label: 'Large (Default)', value: 'text-lg' },
                      ],
                      defaultValue: 'text-lg',
                    },
                    {
                      name: 'backgroundColor',
                      type: 'select',
                      label: 'Background Color',
                      options: [
                        { label: 'White', value: 'bg-white' },
                        { label: 'Light Gray', value: 'bg-gray-50' },
                        { label: 'Brand Light Blue', value: 'bg-[#A1B5B8]/10' },
                        { label: 'Brand Warm', value: 'bg-[#E3D3BD]/20' },
                      ],
                      defaultValue: 'bg-gray-50',
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
          label: 'Team Members',
          fields: [
            {
              name: 'showTeam',
              type: 'checkbox',
              label: 'Show Team Section',
              defaultValue: true,
            },
            {
              name: 'teamHeading',
              type: 'text',
              defaultValue: 'Our Team',
              admin: {
                description: 'Section heading for team members',
              },
            },
            {
              name: 'teamSubheading',
              type: 'textarea',
              admin: {
                description: 'Optional description above team members',
                placeholder: 'e.g., "Meet the talented professionals who make it all possible."',
              },
            },
            {
              name: 'teamMembers',
              type: 'array',
              label: 'Team Members',
              admin: {
                description: 'Add team members like Brooks, Nolan, and Joe',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  admin: {
                    placeholder: 'e.g., "Brooks", "Nolan", "Joe"',
                  },
                },
                {
                  name: 'credentials',
                  type: 'text',
                  admin: {
                    placeholder: 'e.g., "CFP®", "EA", "CPA"',
                  },
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  admin: {
                    placeholder: 'e.g., "Financial Planner", "Tax Specialist"',
                  },
                },
                {
                  name: 'bio',
                  type: 'richText',
                  editor: defaultLexical,
                  admin: {
                    description: 'Team member biography',
                  },
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'email',
                  type: 'text',
                  admin: {
                    placeholder: 'email@example.com',
                  },
                },
                {
                  name: 'phone',
                  type: 'text',
                  admin: {
                    placeholder: '(715) 123-4567',
                  },
                },
                {
                  name: 'linkedIn',
                  type: 'text',
                  admin: {
                    placeholder: 'https://linkedin.com/in/...',
                  },
                },
              ],
            },
            {
              name: 'teamStyling',
              type: 'group',
              label: 'Team Section Styling',
              fields: [
                {
                  name: 'layout',
                  type: 'select',
                  label: 'Layout Style',
                  options: [
                    { label: 'Grid - 2 Columns', value: 'grid-2' },
                    { label: 'Grid - 3 Columns (Default)', value: 'grid-3' },
                    { label: 'Grid - 4 Columns', value: 'grid-4' },
                    { label: 'Stacked Cards', value: 'stacked' },
                    { label: 'Wide Horizontal Cards', value: 'horizontal' },
                  ],
                  defaultValue: 'grid-3',
                },
                {
                  name: 'headingSize',
                  type: 'select',
                  label: 'Section Heading Size',
                  options: [
                    { label: 'Small', value: 'text-3xl md:text-4xl' },
                    { label: 'Medium (Default)', value: 'text-4xl md:text-5xl' },
                    { label: 'Large', value: 'text-5xl md:text-6xl' },
                  ],
                  defaultValue: 'text-4xl md:text-5xl',
                },
                {
                  name: 'nameSize',
                  type: 'select',
                  label: 'Name Size',
                  options: [
                    { label: 'Small', value: 'text-lg' },
                    { label: 'Medium', value: 'text-xl' },
                    { label: 'Large (Default)', value: 'text-2xl' },
                  ],
                  defaultValue: 'text-2xl',
                },
                {
                  name: 'nameWeight',
                  type: 'select',
                  label: 'Name Weight',
                  options: [
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
                  name: 'bioSize',
                  type: 'select',
                  label: 'Bio Text Size',
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
                  name: 'backgroundColor',
                  type: 'select',
                  label: 'Background Color',
                  options: [
                    { label: 'White', value: 'bg-white' },
                    { label: 'Light Gray', value: 'bg-gray-50' },
                    { label: 'Brand Light Blue', value: 'bg-[#A1B5B8]/10' },
                    { label: 'Brand Warm', value: 'bg-[#E3D3BD]/20' },
                  ],
                  defaultValue: 'bg-white',
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
          label: 'Contact Info',
          fields: [
            {
              name: 'contactInfo',
              type: 'group',
              fields: [
                {
                  name: 'showContactInfo',
                  type: 'checkbox',
                  label: 'Show Contact Information',
                  defaultValue: true,
                },
                {
                  name: 'heading',
                  type: 'text',
                  defaultValue: 'Get In Touch',
                },
                {
                  name: 'email',
                  type: 'text',
                  defaultValue: 'Austin.Preece@PreeceFP.com',
                },
                {
                  name: 'phone',
                  type: 'text',
                  defaultValue: '715-903-6125',
                },
                {
                  name: 'officeAddress',
                  type: 'textarea',
                  admin: {
                    placeholder: 'Optional office address',
                  },
                },
                {
                  name: 'styling',
                  type: 'group',
                  label: 'Section Styling',
                  fields: [
                    {
                      name: 'backgroundColor',
                      type: 'select',
                      label: 'Background Color',
                      options: [
                        { label: 'White', value: 'bg-white' },
                        { label: 'Light Gray', value: 'bg-gray-50' },
                        { label: 'Brand Light Blue', value: 'bg-[#A1B5B8]/10' },
                        { label: 'Brand Warm', value: 'bg-[#E3D3BD]/20' },
                        { label: 'Dark Blue', value: 'bg-[#2C3E51]' },
                      ],
                      defaultValue: 'bg-[#2C3E51]',
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
      ],
    },
  ],
}
