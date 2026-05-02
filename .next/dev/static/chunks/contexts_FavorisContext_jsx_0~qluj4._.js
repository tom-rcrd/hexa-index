(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/contexts/FavorisContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FavorisProvider",
    ()=>FavorisProvider,
    "useFavoris",
    ()=>useFavoris
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const FavorisContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const MAX_FAVORIS = 500 // Limite pour éviter de surcharger localStorage
;
const STORAGE_KEY = 'hexa-favoris';
function FavorisProvider({ children }) {
    _s();
    const [favoris, setFavoris] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastDeleted, setLastDeleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null) // Pour l'undo
    ;
    // Charger les favoris au montage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FavorisProvider.useEffect": ()=>{
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    setFavoris(Array.isArray(parsed) ? parsed : []);
                } catch (e) {
                    console.error('Erreur chargement favoris:', e);
                    setFavoris([]);
                }
            }
            setIsLoaded(true);
        }
    }["FavorisProvider.useEffect"], []);
    // Sauvegarder dans localStorage à chaque changement
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FavorisProvider.useEffect": ()=>{
            if (isLoaded) {
                try {
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoris));
                } catch (e) {
                    console.error('Erreur sauvegarde favoris:', e);
                    // Si quota dépassé, supprimer les plus anciens
                    if (e.name === 'QuotaExceededError') {
                        const reduced = favoris.slice(-MAX_FAVORIS / 2);
                        setFavoris(reduced);
                        alert(`Limite de stockage atteinte. ${favoris.length - reduced.length} favoris les plus anciens ont été supprimés.`);
                    }
                }
            }
        }
    }["FavorisProvider.useEffect"], [
        favoris,
        isLoaded
    ]);
    // Memoize la Map pour des lookups O(1) au lieu de O(n)
    const favorisMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FavorisProvider.useMemo[favorisMap]": ()=>{
            return new Map(favoris.map({
                "FavorisProvider.useMemo[favorisMap]": (f)=>[
                        f.id,
                        f
                    ]
            }["FavorisProvider.useMemo[favorisMap]"]));
        }
    }["FavorisProvider.useMemo[favorisMap]"], [
        favoris
    ]);
    const estFavori = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FavorisProvider.useCallback[estFavori]": (lieuId)=>{
            return favorisMap.has(lieuId);
        }
    }["FavorisProvider.useCallback[estFavori]"], [
        favorisMap
    ]);
    const ajouterFavori = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FavorisProvider.useCallback[ajouterFavori]": (lieu)=>{
            if (favorisMap.has(lieu.id)) {
                return; // Déjà dans les favoris
            }
            if (favoris.length >= MAX_FAVORIS) {
                alert(`Vous avez atteint la limite de ${MAX_FAVORIS} favoris.`);
                return;
            }
            setFavoris({
                "FavorisProvider.useCallback[ajouterFavori]": (prev)=>[
                        ...prev,
                        {
                            id: lieu.id,
                            nom: lieu.nom,
                            types: lieu.types,
                            ville: lieu.ville,
                            description: lieu.description,
                            website: lieu.website,
                            instagram: lieu.instagram,
                            created_at: lieu.created_at,
                            addedAt: new Date().toISOString()
                        }
                    ]
            }["FavorisProvider.useCallback[ajouterFavori]"]);
        }
    }["FavorisProvider.useCallback[ajouterFavori]"], [
        favorisMap,
        favoris.length
    ]);
    const retirerFavori = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FavorisProvider.useCallback[retirerFavori]": (lieuId)=>{
            const favoriSupprime = favoris.find({
                "FavorisProvider.useCallback[retirerFavori].favoriSupprime": (f)=>f.id === lieuId
            }["FavorisProvider.useCallback[retirerFavori].favoriSupprime"]);
            if (favoriSupprime) {
                setLastDeleted(favoriSupprime);
                setFavoris({
                    "FavorisProvider.useCallback[retirerFavori]": (prev)=>prev.filter({
                            "FavorisProvider.useCallback[retirerFavori]": (f)=>f.id !== lieuId
                        }["FavorisProvider.useCallback[retirerFavori]"])
                }["FavorisProvider.useCallback[retirerFavori]"]);
                // Auto-clear du lastDeleted après 10 secondes
                setTimeout({
                    "FavorisProvider.useCallback[retirerFavori]": ()=>setLastDeleted(null)
                }["FavorisProvider.useCallback[retirerFavori]"], 10000);
            }
        }
    }["FavorisProvider.useCallback[retirerFavori]"], [
        favoris
    ]);
    const toggleFavori = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FavorisProvider.useCallback[toggleFavori]": (lieu)=>{
            if (favorisMap.has(lieu.id)) {
                retirerFavori(lieu.id);
            } else {
                ajouterFavori(lieu);
            }
        }
    }["FavorisProvider.useCallback[toggleFavori]"], [
        favorisMap,
        ajouterFavori,
        retirerFavori
    ]);
    const undoDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FavorisProvider.useCallback[undoDelete]": ()=>{
            if (lastDeleted) {
                setFavoris({
                    "FavorisProvider.useCallback[undoDelete]": (prev)=>[
                            ...prev,
                            lastDeleted
                        ]
                }["FavorisProvider.useCallback[undoDelete]"]);
                setLastDeleted(null);
            }
        }
    }["FavorisProvider.useCallback[undoDelete]"], [
        lastDeleted
    ]);
    const viderFavoris = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FavorisProvider.useCallback[viderFavoris]": ()=>{
            if (confirm(`Supprimer tous les ${favoris.length} favoris ?`)) {
                setLastDeleted({
                    multiple: true,
                    data: favoris
                }); // Pour undo global
                setFavoris([]);
            }
        }
    }["FavorisProvider.useCallback[viderFavoris]"], [
        favoris
    ]);
    const exporterFavoris = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FavorisProvider.useCallback[exporterFavoris]": ()=>{
            const data = {
                favoris,
                exportedAt: new Date().toISOString(),
                count: favoris.length,
                version: '1.0'
            };
            const blob = new Blob([
                JSON.stringify(data, null, 2)
            ], {
                type: 'application/json'
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `mes-favoris-hexa-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
        }
    }["FavorisProvider.useCallback[exporterFavoris]"], [
        favoris
    ]);
    const importerFavoris = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FavorisProvider.useCallback[importerFavoris]": (file)=>{
            return new Promise({
                "FavorisProvider.useCallback[importerFavoris]": (resolve, reject)=>{
                    const reader = new FileReader();
                    reader.onload = ({
                        "FavorisProvider.useCallback[importerFavoris]": (e)=>{
                            try {
                                const data = JSON.parse(e.target.result);
                                if (!data.favoris || !Array.isArray(data.favoris)) {
                                    throw new Error('Format de fichier invalide');
                                }
                                const newFavoris = data.favoris.filter({
                                    "FavorisProvider.useCallback[importerFavoris].newFavoris": (f)=>!favorisMap.has(f.id)
                                }["FavorisProvider.useCallback[importerFavoris].newFavoris"]);
                                if (favoris.length + newFavoris.length > MAX_FAVORIS) {
                                    reject(new Error(`L'import dépasserait la limite de ${MAX_FAVORIS} favoris`));
                                    return;
                                }
                                setFavoris({
                                    "FavorisProvider.useCallback[importerFavoris]": (prev)=>[
                                            ...prev,
                                            ...newFavoris
                                        ]
                                }["FavorisProvider.useCallback[importerFavoris]"]);
                                resolve(newFavoris.length);
                            } catch (error) {
                                reject(error);
                            }
                        }
                    })["FavorisProvider.useCallback[importerFavoris]"];
                    reader.onerror = ({
                        "FavorisProvider.useCallback[importerFavoris]": ()=>reject(new Error('Erreur de lecture du fichier'))
                    })["FavorisProvider.useCallback[importerFavoris]"];
                    reader.readAsText(file);
                }
            }["FavorisProvider.useCallback[importerFavoris]"]);
        }
    }["FavorisProvider.useCallback[importerFavoris]"], [
        favoris.length,
        favorisMap
    ]);
    const trierFavoris = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FavorisProvider.useCallback[trierFavoris]": (critere)=>{
            setFavoris({
                "FavorisProvider.useCallback[trierFavoris]": (prev)=>{
                    const sorted = [
                        ...prev
                    ];
                    switch(critere){
                        case 'nom':
                            return sorted.sort({
                                "FavorisProvider.useCallback[trierFavoris]": (a, b)=>a.nom.localeCompare(b.nom)
                            }["FavorisProvider.useCallback[trierFavoris]"]);
                        case 'ville':
                            return sorted.sort({
                                "FavorisProvider.useCallback[trierFavoris]": (a, b)=>a.ville.localeCompare(b.ville)
                            }["FavorisProvider.useCallback[trierFavoris]"]);
                        case 'recent':
                            return sorted.sort({
                                "FavorisProvider.useCallback[trierFavoris]": (a, b)=>new Date(b.addedAt) - new Date(a.addedAt)
                            }["FavorisProvider.useCallback[trierFavoris]"]);
                        case 'ancien':
                            return sorted.sort({
                                "FavorisProvider.useCallback[trierFavoris]": (a, b)=>new Date(a.addedAt) - new Date(b.addedAt)
                            }["FavorisProvider.useCallback[trierFavoris]"]);
                        default:
                            return sorted;
                    }
                }
            }["FavorisProvider.useCallback[trierFavoris]"]);
        }
    }["FavorisProvider.useCallback[trierFavoris]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FavorisProvider.useMemo[value]": ()=>({
                favoris,
                ajouterFavori,
                retirerFavori,
                toggleFavori,
                estFavori,
                viderFavoris,
                exporterFavoris,
                importerFavoris,
                undoDelete,
                trierFavoris,
                count: favoris.length,
                lastDeleted,
                maxFavoris: MAX_FAVORIS
            })
    }["FavorisProvider.useMemo[value]"], [
        favoris,
        ajouterFavori,
        retirerFavori,
        toggleFavori,
        estFavori,
        viderFavoris,
        exporterFavoris,
        importerFavoris,
        undoDelete,
        trierFavoris,
        lastDeleted
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FavorisContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/FavorisContext.jsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
_s(FavorisProvider, "m+SR4mJtIzexfMstxWTw+DwsE1s=");
_c = FavorisProvider;
function useFavoris() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FavorisContext);
    if (!context) {
        throw new Error('useFavoris doit être utilisé dans un FavorisProvider');
    }
    return context;
}
_s1(useFavoris, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "FavorisProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=contexts_FavorisContext_jsx_0~qluj4._.js.map