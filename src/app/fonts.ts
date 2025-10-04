import localFont from 'next/font/local'

// Larken - Display/Heading font
export const larken = localFont({
  src: [
    {
      path: '../../public/fonts/Larken-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Larken-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-larken',
  display: 'swap',
})

// Ivymode - Body/UI font
export const ivymode = localFont({
  src: [
    {
      path: '../../public/fonts/Ivymode-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-ivymode',
  display: 'swap',
})
