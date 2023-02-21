import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'qryas7br',
  dataset: 'production',
  apiVersion: '2023-02-20',
  useCdn: true,
  token: process.env.SANITY_PUBLIC_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
