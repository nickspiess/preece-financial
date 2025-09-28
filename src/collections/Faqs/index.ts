import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

export const Faqs: CollectionConfig = {
  slug: 'faqs',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'question',
    group: 'Content',
    description: 'Manage frequently asked questions that can be used in the page builder and throughout the site.',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      admin: {
        description: '❓ The question your clients commonly ask',
        placeholder: 'e.g., "How do I get started with financial planning?", "What are your fees?"',
      },
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
      admin: {
        description: '💡 Detailed answer to the question. You can use formatting, links, and lists.',
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'General', value: 'general' },
        { label: 'Services', value: 'services' },
        { label: 'Pricing', value: 'pricing' },
        { label: 'Process', value: 'process' },
        { label: 'Investment', value: 'investment' },
        { label: 'Retirement', value: 'retirement' },
        { label: 'Insurance', value: 'insurance' },
      ],
      defaultValue: 'general',
      admin: {
        description: '📂 Categorize questions to organize them better',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: '⭐ Mark as featured to show this FAQ prominently',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: '🔢 Order for displaying (0 = first, higher numbers appear later)',
      },
    },
  ],
}