import { destinationsData } from '../data/destinationsData';
import { packagesData } from '../data/packagesData';
import { blogData } from '../data/blogData';
import { faqData } from '../data/faqData';

/**
 * Service to retrieve destination and package data
 * Abstracted for easy future integration with backend API
 */
export const travelService = {
  getDestinations: async () => {
    return Promise.resolve(destinationsData);
  },

  getDestinationById: async (id) => {
    const item = destinationsData.find((d) => d.id === id);
    return Promise.resolve(item || null);
  },

  getPackages: async () => {
    return Promise.resolve(packagesData);
  },

  getPackageById: async (id) => {
    const item = packagesData.find((p) => p.id === id);
    return Promise.resolve(item || null);
  },

  getBlogPosts: async () => {
    return Promise.resolve(blogData);
  },

  getBlogPostById: async (id) => {
    const post = blogData.find((b) => b.id === id);
    return Promise.resolve(post || null);
  },

  getFAQs: async () => {
    return Promise.resolve(faqData);
  },
};

