import type { PageLoad } from './$types';

export const load = (async () => {
    const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-five.json');
    const tasks = await res.json();

    return { tasks };

}) satisfies PageLoad;