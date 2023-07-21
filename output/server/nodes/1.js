

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.125a7dc0.js","_app/immutable/chunks/index.6d77475c.js","_app/immutable/chunks/singletons.bb5e4081.js"];
export const stylesheets = [];
export const fonts = [];
