export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.6dbc6928.js","app":"_app/immutable/entry/app.0d1b14e1.js","imports":["_app/immutable/entry/start.6dbc6928.js","_app/immutable/chunks/index.6d77475c.js","_app/immutable/chunks/singletons.bb5e4081.js","_app/immutable/entry/app.0d1b14e1.js","_app/immutable/chunks/index.6d77475c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
