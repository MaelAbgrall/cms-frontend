<script lang="ts">
  import { page } from '$app/stores';
  import { PUBLIC_BASE_URL } from '$env/static/public';

  let displayMenu = false;
  function toggleMenu() {
    // skip if not on mobile (or it will break the UI)
    if (window.innerWidth <= 768) {
      displayMenu = !displayMenu;
    }
  }
</script>

<header class="navbar {$page.url.pathname === '/' ? 'transparent' : ''}">
  <div class="nav-container">
    <a href="/">
      <div class="title">Mael Abgrall</div>
    </a>
    <nav class={displayMenu ? 'mobile-menu' : ''}>
      <ul>
        <li class="home-li">
          <a href="/" on:click={toggleMenu}> Home </a>
          <button class="close-btn" on:click={toggleMenu}>X</button>
        </li>
        {#if PUBLIC_BASE_URL.includes('photo')}
          <li>
            <a href="/gallery" on:click={toggleMenu}> Gallery </a>
          </li>
          <!-- <li>
            <a href="/"> Services </a>
          </li> -->
        {:else}
          <li>
            <a href="/blog" on:click={toggleMenu}> Blog </a>
          </li>
        {/if}
        <li>
          <a href="/about" on:click={toggleMenu}> About </a>
        </li>
      </ul>
    </nav>
    <button class={displayMenu ? 'backdrop' : ''} on:click={toggleMenu}></button>
    <button class="menu-btn" on:click={toggleMenu}>&#8801;</button>
  </div>
</header>
{#if $page.url.pathname !== '/'}
  <div class="nav-spacer" />
{/if}

<style>
  .nav-spacer {
    /* Must be the same as the navbar height
				Push back the content for the same amount as the navbar height
				this is due to it being "fixed"
		*/
    min-height: 3rem;
  }

  .navbar {
    font-family: 'Caveat', cursive;

    width: 100%;
    position: fixed;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(5px);
    height: 3rem;
    box-shadow: 1px 2px 4px #aaaaaa50;
  }

  .transparent {
    background-color: transparent;
    backdrop-filter: none;
    box-shadow: none;
    color: white;
  }

  .title {
    font-family: 'High Summit', 'Caveat Brush', cursive;
    @apply text-3xl;
  }

  ul {
    display: flex;
    font-size: x-large;
    gap: 1rem;
  }
  li {
    display: flex;
  }
  li > a {
    width: 100%;
  }

  .nav-container {
    position: relative;
    @apply container h-full mx-auto flex items-center justify-between;
  }

  .menu-btn {
    height: 42px;
    width: 42px;
    @apply text-3xl;
  }

  nav {
    display: none;
  }

  .mobile-menu {
    display: block;
    position: absolute;
    z-index: 3;
    top: 1.5rem;
    right: 0;
    color: var(--color-foreground);
    width: 70%;
    left: 50%;
    transform: translateX(-50%);
  }
  .mobile-menu > ul {
    border-radius: 0.5rem;
    border: 1px solid rgba(167, 167, 167, 0.397);
    flex-direction: column;
    background-color: var(--foreground);
    margin: auto;
    padding: 0.5rem;
    gap: 0;
  }
  .mobile-menu > ul > li {
    padding: 0.5rem;
  }
  .mobile-menu > ul > li:not(:first-child) {
    border-top: 1px solid rgb(167, 167, 167);
  }
  .home-li {
    display: flex;
    justify-content: space-between;
  }
  .close-btn {
    font-family: 'nunito', Courier, monospace;
    padding: 0 0.5rem;
    border: 1px solid rgb(167, 167, 167);
    border-radius: 0.3rem;
  }
  .backdrop {
    display: flex;
    position: absolute;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    background-color: rgba(128, 128, 128, 0.479);
  }

  @media (min-width: 768px) {
    nav {
      display: block;
    }
    button {
      display: none;
    }
    li :hover {
      color: var(--pomelo);
      /* background-color: var(--teal); */
      text-shadow: 1px 2px 4px #8a8a8a;
    }
    .home-li {
      display: none;
    }
  }
</style>
