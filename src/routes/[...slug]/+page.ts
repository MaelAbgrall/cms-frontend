// types
import type { Story } from '../../types/storyblok';
// env
import { PUBLIC_VERSION_STATE } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  const { storyblokApi } = await parent();
  let slug = params.slug;
  let path = 'cdn/stories/';
  if (slug) {
    path += slug;
  } else {
    path += 'home';
  }

  const res = await storyblokApi.get(path, {
    version: PUBLIC_VERSION_STATE as 'draft' | 'published',
  });

  return {
    story: res.data.story as Story,
  };
}
