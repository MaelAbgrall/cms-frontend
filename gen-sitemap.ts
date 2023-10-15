import { createSitemap } from 'svelte-sitemap/src/index.js';
import * as dotenv from 'dotenv';
dotenv.config();

createSitemap(process.env.PUBLIC_BASE_URL, { debug: true });
