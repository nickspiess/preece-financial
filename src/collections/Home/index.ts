import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { revalidateCacheAfterChange, revalidateCacheAfterDelete } from '../hooks/revalidateCache'

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
  hooks: {
    afterChange: [revalidateCacheAfterChange],
    afterDelete: [revalidateCacheAfterDelete],
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