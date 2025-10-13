import { ImageSourcePropType } from 'react-native';

export type Source = ImageSourcePropType;

export const Assets: Record<string, Source> = {
  logo: { uri: 'https://placehold.co/200x60?text=Logo' },
  doctorHero: { uri: 'https://placehold.co/400x500?text=Doctor' },
  doctor1: { uri: 'https://placehold.co/200x200?text=Dr+1' },
  doctor2: { uri: 'https://placehold.co/200x200?text=Dr+2' },
  bannerDoctor: { uri: 'https://placehold.co/240x240?text=Doctor' }
};

export const replaceWithLocalAssetsNote = `Replace the URLs in src/assets/index.ts with require('./relative-path.png') after you add your real images to src/assets/images.`;
