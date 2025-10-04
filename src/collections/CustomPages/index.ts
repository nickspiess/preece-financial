import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

export const CustomPages: CollectionConfig = {
  slug: 'custom-pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Page Builder',
    description: 'Create custom pages using drag-and-drop components. Build professional pages without coding!',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: '🏷️ The main title of your page. This appears in the browser tab and as the page heading.',
        placeholder: 'e.g., "About Us", "Our Services", "Contact", "Investment Planning"',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: '🔗 URL path for this page (e.g., "about-us" becomes /custom/about-us). Use lowercase and hyphens only.',
        placeholder: 'e.g., "about-us", "services", "contact", "investment-planning"',
      },
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Page Sections',
      admin: {
        description: '🎯 Build your page section by section! Drag sections to reorder them. Each section is like a building block for your page.',
      },
      fields: [
        {
          name: 'blockType',
          type: 'select',
          label: 'Section Type',
          required: true,
          options: [
            {
              label: '🎯 Hero Section',
              value: 'hero',
            },
            {
              label: '💼 Services Grid',
              value: 'services',
            },
            {
              label: '👥 Team Grid',
              value: 'team',
            },
            {
              label: '📝 About Section',
              value: 'about',
            },
            {
              label: '📞 Consultation Form',
              value: 'consultation',
            },
            {
              label: '📄 Rich Text Content',
              value: 'richText',
            },
            {
              label: '🚀 Call-to-Action Banner',
              value: 'cta',
            },
            {
              label: '📊 Statistics/Numbers',
              value: 'stats',
            },
            {
              label: '🖼️ Image Gallery',
              value: 'imageGallery',
            },
            {
              label: '💬 Client Testimonials',
              value: 'testimonials',
            },
            {
              label: '❓ FAQ Section',
              value: 'faq',
            },
            {
              label: '📍 Contact Information',
              value: 'contactInfo',
            },
            {
              label: '⬜ Spacer/Divider',
              value: 'spacer',
            },
          ],
          admin: {
            description: 'Choose the type of content section. Each type has different layout and content options.',
          },
        },
        {
          name: 'sectionSettings',
          type: 'group',
          label: 'Section Configuration',
          admin: {
            description: '⚙️ Customize how this section looks and feels. All settings are optional - use what you need!',
          },
          fields: [
            // Universal settings
            {
              name: 'sectionTitle',
              type: 'text',
              label: 'Custom Section Title (optional)',
              admin: {
                description: '💡 Override the default section title. Great for adding custom headings like "Why Choose Us?" or "Our Process"',
                placeholder: 'e.g., "Why Choose Us?", "Our Process", "Get Started Today"',
              },
            },
            {
              name: 'backgroundColor',
              type: 'select',
              label: 'Background Color',
              options: [
                { label: '⚪ White (Clean)', value: 'bg-white' },
                { label: '🟡 Light Beige (Brand Warm)', value: 'bg-[#E3D3BD]/20' },
                { label: '🔵 Light Blue-Gray', value: 'bg-[#A1B5B8]/10' },
                { label: '🟢 Light Olive', value: 'bg-[#85896D]/10' },
                { label: '⚫ Dark Blue (Brand Primary)', value: 'bg-[#2C3E51]' },
                { label: '🔘 Light Gray (Neutral)', value: 'bg-gray-50' },
              ],
              defaultValue: 'bg-white',
              admin: {
                description: '🎨 Choose a background color that matches your brand. Alternating colors creates visual variety.',
              },
            },
            {
              name: 'padding',
              type: 'select',
              label: 'Section Spacing',
              options: [
                { label: '📏 Small (Compact)', value: 'py-12' },
                { label: '📐 Medium (Balanced)', value: 'py-20' },
                { label: '📏 Large (Spacious)', value: 'py-32' },
                { label: '⬜ None (Tight)', value: 'py-0' },
              ],
              defaultValue: 'py-20',
              admin: {
                description: '📐 Control the vertical spacing above and below your section. Medium works well for most sections.',
              },
            },

            // Color theme options
            {
              name: 'textColor',
              type: 'select',
              label: 'Text Color Theme',
              options: [
                { label: '📘 Brand Dark Blue (#2C3E51)', value: 'text-[#2C3E51]' },
                { label: '🔵 Brand Blue-Gray (#62708A)', value: 'text-[#62708A]' },
                { label: '🟢 Brand Warm Gray (#95997D)', value: 'text-[#95997D]' },
                { label: '⚪ White (for dark backgrounds)', value: 'text-white' },
                { label: '⚫ Default Dark', value: 'text-gray-900' },
              ],
              defaultValue: 'text-[#2C3E51]',
              admin: {
                description: '✏️ Choose text color to match your brand. Use white for dark backgrounds.',
              },
            },
            // Typography Controls
            {
              name: 'headingSize',
              type: 'select',
              label: 'Heading Size',
              options: [
                { label: 'Small', value: 'text-3xl md:text-4xl' },
                { label: 'Medium', value: 'text-4xl md:text-5xl' },
                { label: 'Large (Default)', value: 'text-5xl md:text-6xl' },
                { label: 'Extra Large', value: 'text-6xl md:text-7xl' },
              ],
              defaultValue: 'text-5xl md:text-6xl',
              admin: {
                description: '📏 Control the size of section headings',
              },
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
                { label: 'Bold', value: 'font-bold' },
              ],
              defaultValue: 'font-normal',
              admin: {
                description: '💪 Set heading font weight',
              },
            },
            {
              name: 'bodyTextSize',
              type: 'select',
              label: 'Body Text Size',
              options: [
                { label: 'Small', value: 'text-sm' },
                { label: 'Medium (Default)', value: 'text-base' },
                { label: 'Large', value: 'text-lg' },
                { label: 'Extra Large', value: 'text-xl' },
              ],
              defaultValue: 'text-base',
              admin: {
                description: '📝 Control body text size',
              },
            },
            {
              name: 'accentColor',
              type: 'select',
              label: 'Accent/Button Color',
              options: [
                { label: '🔵 Brand Blue-Gray (#62708A)', value: '#62708A' },
                { label: '🟢 Brand Olive (#85896D)', value: '#85896D' },
                { label: '💙 Brand Light Blue (#A1B5B8)', value: '#A1B5B8' },
                { label: '🟤 Brand Warm Gray (#95997D)', value: '#95997D' },
                { label: '📘 Brand Dark Blue (#2C3E51)', value: '#2C3E51' },
              ],
              defaultValue: '#62708A',
              admin: {
                description: '🎯 Choose accent color for buttons, borders, and highlights.',
              },
            },

            // Layout options
            {
              name: 'layout',
              type: 'select',
              label: 'Layout Style',
              options: [
                { label: '1️⃣ Single Column (Full width)', value: 'single' },
                { label: '2️⃣ 2 Columns (Side by side)', value: 'two-col' },
                { label: '3️⃣ 3 Columns (Grid)', value: 'three-col' },
                { label: '4️⃣ 4 Columns (Wide grid)', value: 'four-col' },
                { label: '🔲 2x2 Grid (Square layout)', value: 'grid-2x2' },
                { label: '📋 List View (Vertical stack)', value: 'list' },
              ],
              defaultValue: 'single',
              admin: {
                description: '🎯 How should your content be arranged? Works great for team members, services, testimonials, and galleries.',
              },
            },

            // Content fields
            {
              name: 'heading',
              type: 'text',
              label: 'Section Heading',
              admin: {
                description: '📝 Main title for this section. Make it clear and compelling!',
                placeholder: 'e.g., "Our Services", "Meet Our Team", "What We Offer"',
              },
            },
            {
              name: 'subheading',
              type: 'text',
              label: 'Section Subheading',
              admin: {
                description: '📄 Optional subtitle that appears below the main heading. Great for explanations or taglines.',
                placeholder: 'e.g., "Professional financial services you can trust"',
              },
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Rich Text Content',
              admin: {
                description: '✏️ Rich text editor for detailed content. You can add formatting, links, lists, and more!',
              },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Section Image',
              admin: {
                description: '🖼️ Upload an image for this section. Works well for hero sections, about sections, and image galleries.',
              },
            },

            // CTA settings
            {
              name: 'ctaText',
              type: 'text',
              label: 'Button Text',
              admin: {
                description: '🔘 Text that appears on buttons. Keep it action-oriented!',
                placeholder: 'e.g., "Get Started", "Contact Us", "Learn More", "Schedule Consultation"',
              },
            },
            {
              name: 'ctaLink',
              type: 'text',
              label: 'Button Link',
              admin: {
                description: '🔗 Where should the button go? Use URLs like "/contact" or "https://example.com" or "#section-id"',
                placeholder: 'e.g., "/contact", "https://calendly.com/yourlink", "#pricing"',
              },
            },

            // Spacer settings
            {
              name: 'spacerHeight',
              type: 'select',
              label: 'Spacer Height',
              options: [
                { label: '📏 Small (50px) - Subtle break', value: 'h-12' },
                { label: '📐 Medium (100px) - Good separation', value: 'h-24' },
                { label: '📏 Large (200px) - Strong break', value: 'h-48' },
              ],
              defaultValue: 'h-24',
              admin: {
                description: '⬜ Create visual breathing room between sections. Use spacers to separate different topics or create dramatic pauses.',
              },
            },
            // Visual Effects
            {
              name: 'enableAnimation',
              type: 'checkbox',
              label: 'Enable Hover Animations',
              defaultValue: true,
              admin: {
                description: '✨ Add subtle animations on hover for interactive elements',
              },
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
              admin: {
                description: '🌑 Control shadow depth for cards and elevated elements',
              },
            },
            {
              name: 'borderRadius',
              type: 'select',
              label: 'Border Radius',
              options: [
                { label: 'None (Sharp)', value: 'rounded-none' },
                { label: 'Small', value: 'rounded-sm' },
                { label: 'Medium (Default)', value: 'rounded-md' },
                { label: 'Large', value: 'rounded-lg' },
                { label: 'Extra Large', value: 'rounded-xl' },
              ],
              defaultValue: 'rounded-md',
              admin: {
                description: '⬛ Set corner roundness for cards and buttons',
              },
            },

            // Testimonials settings
            {
              name: 'testimonialsToShow',
              type: 'relationship',
              relationTo: 'testimonials',
              hasMany: true,
              admin: {
                description: '💬 Select specific testimonials to show, or leave empty to show all testimonials',
              },
            },

            // FAQ settings
            {
              name: 'faqsToShow',
              type: 'relationship',
              relationTo: 'faqs',
              hasMany: true,
              admin: {
                description: '❓ Select specific FAQs to show, or leave empty to show all FAQs',
              },
            },
            {
              name: 'faqCategory',
              type: 'select',
              label: 'FAQ Category Filter',
              options: [
                { label: 'All Categories', value: 'all' },
                { label: 'General', value: 'general' },
                { label: 'Services', value: 'services' },
                { label: 'Pricing', value: 'pricing' },
                { label: 'Process', value: 'process' },
                { label: 'Investment', value: 'investment' },
                { label: 'Retirement', value: 'retirement' },
                { label: 'Insurance', value: 'insurance' },
              ],
              defaultValue: 'all',
              admin: {
                description: '📂 Show only FAQs from a specific category',
              },
            },

            // Image gallery settings
            {
              name: 'galleryImages',
              type: 'relationship',
              relationTo: 'media',
              hasMany: true,
              admin: {
                description: '🖼️ Select images for the gallery section',
              },
            },
            {
              name: 'showCaptions',
              type: 'checkbox',
              label: 'Show Image Captions',
              defaultValue: true,
              admin: {
                description: '🏷️ Display captions below images in the gallery',
              },
            },
          ],
        },
      ],
    },
  ],
}