import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: 'qryas7br',
  dataset: 'production',
  apiVersion: '02-20-2023',
  useCdn: true,
  token: process.env.SANITY_PUBLIC_TOKEN
})