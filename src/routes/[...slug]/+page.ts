// types
import type { Story } from '../../types/storyblok';

/** @type {import('./$types').PageLoad} */
export async function load({ params, parent, url }) {
  const { storyblokApi } = await parent();
  let slug = params.slug;
  let path = 'cdn/stories/';
  if (slug) {
    path += slug;
  } else {
    path += 'home';
  }
  const res = await storyblokApi.get(path, {
    version: url.href.includes('editor') || url.href.includes('localhost') ? 'draft' : 'published',
  });

  return {
    story: res.data.story as Story,
  };
}
