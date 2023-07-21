

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.82441f90.js","_app/immutable/chunks/index.6d77475c.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.e2c519f7.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
