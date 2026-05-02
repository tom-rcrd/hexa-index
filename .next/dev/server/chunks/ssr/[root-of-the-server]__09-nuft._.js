module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/contexts/FavorisContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FavorisProvider",
    ()=>FavorisProvider,
    "useFavoris",
    ()=>useFavoris
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const FavorisContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
const MAX_FAVORIS = 500 // Limite pour éviter de surcharger localStorage
;
const STORAGE_KEY = 'hexa-favoris';
function FavorisProvider({ children }) {
    const [favoris, setFavoris] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastDeleted, setLastDeleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null) // Pour l'undo
    ;
    // Charger les favoris au montage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, []);
    // Sauvegarder dans localStorage à chaque changement
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        favoris,
        isLoaded
    ]);
    // Memoize la Map pour des lookups O(1) au lieu de O(n)
    const favorisMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new Map(favoris.map((f)=>[
                f.id,
                f
            ]));
    }, [
        favoris
    ]);
    const estFavori = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((lieuId)=>{
        return favorisMap.has(lieuId);
    }, [
        favorisMap
    ]);
    const ajouterFavori = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((lieu)=>{
        if (favorisMap.has(lieu.id)) {
            return; // Déjà dans les favoris
        }
        if (favoris.length >= MAX_FAVORIS) {
            alert(`Vous avez atteint la limite de ${MAX_FAVORIS} favoris.`);
            return;
        }
        setFavoris((prev)=>[
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
            ]);
    }, [
        favorisMap,
        favoris.length
    ]);
    const retirerFavori = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((lieuId)=>{
        const favoriSupprime = favoris.find((f)=>f.id === lieuId);
        if (favoriSupprime) {
            setLastDeleted(favoriSupprime);
            setFavoris((prev)=>prev.filter((f)=>f.id !== lieuId));
            // Auto-clear du lastDeleted après 10 secondes
            setTimeout(()=>setLastDeleted(null), 10000);
        }
    }, [
        favoris
    ]);
    const toggleFavori = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((lieu)=>{
        if (favorisMap.has(lieu.id)) {
            retirerFavori(lieu.id);
        } else {
            ajouterFavori(lieu);
        }
    }, [
        favorisMap,
        ajouterFavori,
        retirerFavori
    ]);
    const undoDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (lastDeleted) {
            setFavoris((prev)=>[
                    ...prev,
                    lastDeleted
                ]);
            setLastDeleted(null);
        }
    }, [
        lastDeleted
    ]);
    const viderFavoris = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (confirm(`Supprimer tous les ${favoris.length} favoris ?`)) {
            setLastDeleted({
                multiple: true,
                data: favoris
            }); // Pour undo global
            setFavoris([]);
        }
    }, [
        favoris
    ]);
    const exporterFavoris = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
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
    }, [
        favoris
    ]);
    const importerFavoris = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((file)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.onload = (e)=>{
                try {
                    const data = JSON.parse(e.target.result);
                    if (!data.favoris || !Array.isArray(data.favoris)) {
                        throw new Error('Format de fichier invalide');
                    }
                    const newFavoris = data.favoris.filter((f)=>!favorisMap.has(f.id));
                    if (favoris.length + newFavoris.length > MAX_FAVORIS) {
                        reject(new Error(`L'import dépasserait la limite de ${MAX_FAVORIS} favoris`));
                        return;
                    }
                    setFavoris((prev)=>[
                            ...prev,
                            ...newFavoris
                        ]);
                    resolve(newFavoris.length);
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = ()=>reject(new Error('Erreur de lecture du fichier'));
            reader.readAsText(file);
        });
    }, [
        favoris.length,
        favorisMap
    ]);
    const trierFavoris = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((critere)=>{
        setFavoris((prev)=>{
            const sorted = [
                ...prev
            ];
            switch(critere){
                case 'nom':
                    return sorted.sort((a, b)=>a.nom.localeCompare(b.nom));
                case 'ville':
                    return sorted.sort((a, b)=>a.ville.localeCompare(b.ville));
                case 'recent':
                    return sorted.sort((a, b)=>new Date(b.addedAt) - new Date(a.addedAt));
                case 'ancien':
                    return sorted.sort((a, b)=>new Date(a.addedAt) - new Date(b.addedAt));
                default:
                    return sorted;
            }
        });
    }, []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
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
        }), [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FavorisContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/FavorisContext.jsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
function useFavoris() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FavorisContext);
    if (!context) {
        throw new Error('useFavoris doit être utilisé dans un FavorisProvider');
    }
    return context;
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09-nuft._.js.map