import sanityClient from '@sanity/cli';
import imageUrlBuilder from '@sanity/image-url';

export const sanityCli = sanityClient({
  projectID: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(sanityCli);
export const urlFor = (source) => builder.image(source);
