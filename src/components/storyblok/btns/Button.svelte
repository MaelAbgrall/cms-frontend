<script lang="ts">
  import type { SBLink } from '../../../types/storyblok';

  export let blok: {
    link: SBLink;
    text: string;
  };
</script>

<a class="btn" href={blok.link.cached_url}>
  {blok.text}
</a>

<style>
  .btn {
    background-color: var(--foreground);
    padding: 0.3rem 0.7rem;
    border-radius: 5px;
    box-shadow: 1px 2px 4px #aaaaaa50;
    transition: transform 0.25s ease-in-out;
  }

  .btn:hover {
    transform: translateY(-3px);
  }
</style>
