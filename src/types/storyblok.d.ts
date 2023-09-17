import type { SbBlokData } from '@storyblok/svelte';

export type story = {
	id: number;
	uuid: string;
	/**
	 * Story name / title
	 */
	name: string;
	slug: string;
	/**
	 * Combined parent folder + current slug
	 */
	full_slug: string;
	/**
	 * ISO Date
	 */
	created_at: string;
	/**
	 * Latest publishing date.
	 * ISO Date
	 */
	published_at: string | null;
	/**
	 * First publication date.
	 * ISO Date
	 */
	first_published_at: string | null;
	content: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		body: any;
		description: string;
		image: {
			filename: string;
			alt: string | null;
			title: string | null;
		};
	};
	/**
	 * Position in the folder
	 */
	position: number;
	tag_list: string[];
};

export type APIStoryReturn = {
	stories: story[];
};
