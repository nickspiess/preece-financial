import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { defaultLexical } from '@/fields/defaultLexical'

export const Contact: CollectionConfig = {
  slug: 'contact',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    description: 'Manage the Contact page content',
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Contact Page',
    },
    // Hero Section
    {
      name: 'heroHeading',
      type: 'text',
      required: true,
      defaultValue: "Let's Chat",
      admin: {
        description: 'Main heading for the contact page',
      },
    },
    {
      name: 'heroSubheading',
      type: 'textarea',
      admin: {
        description: 'Optional subheading text',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Background Image (Optional)',
    },
    // Contact Information
    {
      name: 'showContactInfo',
      type: 'checkbox',
      label: 'Show Contact Information Section',
      defaultValue: true,
    },
    {
      name: 'contactHeading',
      type: 'text',
      defaultValue: 'Get in Touch',
      admin: {
        description: 'Heading above contact methods',
      },
    },
    {
      name: 'phone',
      type: 'text',
      defaultValue: '715-903-6125',
    },
    {
      name: 'email',
      type: 'text',
      defaultValue: 'Austin.Preece@PreeceFP.com',
    },
    {
      name: 'officeAddress',
      type: 'textarea',
      admin: {
        placeholder: 'Office address (optional)',
      },
    },
    // Booking/Schedule Section
    {
      name: 'showBooking',
      type: 'checkbox',
      label: 'Show Booking/Schedule Section',
      defaultValue: true,
    },
    {
      name: 'bookingHeading',
      type: 'text',
      defaultValue: 'Schedule Meeting',
      admin: {
        description: 'Heading for booking section',
      },
    },
    {
      name: 'bookingDescription',
      type: 'textarea',
      admin: {
        description: 'Optional description text above the form',
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'Send',
      admin: {
        description: 'Submit button text',
      },
    },
    {
      name: 'successMessage',
      type: 'textarea',
      defaultValue: "Thank you for your message! We'll be in touch soon.",
      admin: {
        description: 'Message shown after successful submission',
      },
    },
  ],
}
