(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Map.jsx [app-client] (ecmascript, next/dynamic entry, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_maplibre-gl_dist_maplibre-gl_e7d43c05.js",
  "static/chunks/components_Map_jsx_f2249664._.js",
  {
    "path": "static/chunks/node_modules_maplibre-gl_dist_maplibre-gl_d52c492a.css",
    "included": [
      "[project]/node_modules/maplibre-gl/dist/maplibre-gl.css [app-client] (css)"
    ]
  },
  "static/chunks/components_Map_jsx_93149081._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/Map.jsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}),
]);