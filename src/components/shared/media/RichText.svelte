<script lang="ts">
  export let resolvedRichText: string;
</script>

<div class="rich-text">
  {@html resolvedRichText}
</div>

<style>
  .rich-text {
    @apply prose;
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 1.25rem;
    padding: 1.25rem 0;
  }

  .rich-text :global(img) {
    border-radius: 0.5rem;
    /* max-width: 55%; */
    margin: auto;
    border: 1px solid #61656b31;
    box-shadow: 5px 5px 10px 0px #61656b31;
  }

  .rich-text :global(a) {
    text-decoration: underline;
  }
  .rich-text :global(a:hover) {
    text-decoration: none;
    color: var(--pomelo);
  }

  .rich-text :global(ul) {
    margin-left: 1.2rem;
    list-style-type: disc;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
