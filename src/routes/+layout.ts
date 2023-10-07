// libs
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
// bloks
import RichText from '../components/storyblok/media/RichText.svelte';
import imageList from '../components/storyblok/media/imageList.svelte';
import Button from '../components/storyblok/btns/Button.svelte';
import GalleryList from '../components/storyblok/Page/GalleryList.svelte';
import Hero from '../components/storyblok/Page/Hero.svelte';
import Blog from '../components/storyblok/Page/Blog.svelte';
import { PUBLIC_ACCESS_TOKEN } from '$env/static/public';

export async function load() {
  storyblokInit({
    accessToken: PUBLIC_ACCESS_TOKEN,
    use: [apiPlugin],
    components: {
      Button,
      GalleryList,
      Hero,
      imageList,
      RichText,
      Blog,
    },
    apiOptions: {
      https: true,
    },
  });
  const storyblokApi = await useStoryblokApi();

  return {
    storyblokApi,
  };
}
