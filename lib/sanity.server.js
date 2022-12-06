import { createClient } from 'next-sanity';
import { config } from './config';
import ImageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient(config);
const builder = ImageUrlBuilder(config);

export const urlFor = (source) => builder.image(source);
