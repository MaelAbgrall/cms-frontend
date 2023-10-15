// libs
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
// bloks
import RichText from '../components/storyblok/media/RichText.svelte';
import imageList from '../components/storyblok/media/imageList.svelte';
import Button from '../components/storyblok/btns/Button.svelte';
import GalleryList from '../components/storyblok/Page/GalleryList.svelte';
import Hero from '../components/storyblok/Page/Hero.svelte';
import Blog from '../components/storyblok/Page/Blog.svelte';
import BlogList from '../components/storyblok/Page/BlogList.svelte';
// env
import { PUBLIC_PHOTO_TOKEN, PUBLIC_BLOG_TOKEN } from '$env/static/public';

export async function load({ url }) {
  let token = PUBLIC_BLOG_TOKEN ?? PUBLIC_PHOTO_TOKEN;

  if (url.href.includes('photo') && PUBLIC_PHOTO_TOKEN) {
    token = PUBLIC_PHOTO_TOKEN;
  }

  storyblokInit({
    accessToken: token,
    use: [apiPlugin],
    components: {
      Button,
      GalleryList,
      Hero,
      imageList,
      RichText,
      Blog,
      BlogList,
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
