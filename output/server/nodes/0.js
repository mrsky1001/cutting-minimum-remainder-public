import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.2c8f0675.js","_app/immutable/chunks/index.6d77475c.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.e2c519f7.js"];
export const stylesheets = ["_app/immutable/assets/0.cb730959.css","_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = ["_app/immutable/assets/source-sans-pro-cyrillic-ext-400-normal.4ba425fa.woff2","_app/immutable/assets/source-sans-pro-all-400-normal.56cfd2ea.woff","_app/immutable/assets/source-sans-pro-cyrillic-400-normal.0acd59e1.woff2","_app/immutable/assets/source-sans-pro-greek-ext-400-normal.f2a19d8c.woff2","_app/immutable/assets/source-sans-pro-greek-400-normal.9755c83c.woff2","_app/immutable/assets/source-sans-pro-vietnamese-400-normal.6e0839c2.woff2","_app/immutable/assets/source-sans-pro-latin-ext-400-normal.ee519845.woff2","_app/immutable/assets/source-sans-pro-latin-400-normal.c124c88c.woff2","_app/immutable/assets/inter-cyrillic-ext-400-normal.f7666a51.woff2","_app/immutable/assets/inter-all-400-normal.f824029b.woff","_app/immutable/assets/inter-cyrillic-400-normal.e9493683.woff2","_app/immutable/assets/inter-greek-ext-400-normal.d3e30cde.woff2","_app/immutable/assets/inter-greek-400-normal.2f2d421a.woff2","_app/immutable/assets/inter-latin-ext-400-normal.64a98f58.woff2","_app/immutable/assets/inter-latin-400-normal.0364d368.woff2"];
