import type { PageLoad } from './$types';

export const load = (async () => {
    const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-three.json');
    const items = await res.json();

    return { items };

}) satisfies PageLoad;