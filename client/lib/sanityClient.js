import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '10gj2e5u',
  dataset: 'production',
  apiVersion: '2022-08-06',
  token:
    'skEE7Fz5oYHoyrW5U4mPWPaql4FyaIuyGHYNQ5eJEvnvjilCXQURM0y1DgaJYqxI25ZWQ8C0AQle7tnoKJ1UM3PCo20wxnyBCdR2FUFax0F5eNVjWtgmeIDWQrNX9ngVgec8QvOKWEPa3ohyeE4l8zxfuhHTuWuccdclZ9ga1jDIzwBwbgRD',
  useCdn: false,
})