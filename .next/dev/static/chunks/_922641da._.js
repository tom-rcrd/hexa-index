(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://ixwzqrwkcatbeqgdknbz.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4d3pxcndrY2F0YmVxZ2RrbmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NzIwMzksImV4cCI6MjA4MTA0ODAzOX0.-zj6wnH_65mPTO5_jxY8S0waXRvOxXSa31TM9ohu2uU");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useAuth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useAuth() {
    _s();
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showLogin, setShowLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginData, setLoginData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        password: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            checkUser();
        }
    }["useAuth.useEffect"], []);
    const checkUser = async ()=>{
        const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
        setIsAdmin(!!session);
        setLoading(false);
    };
    const login = async ()=>{
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                email: loginData.email,
                password: loginData.password
            });
            if (error) throw error;
            setIsAdmin(true);
            setShowLogin(false);
            setLoginData({
                email: '',
                password: ''
            });
            alert('Connexion réussie !');
        } catch (error) {
            alert('Erreur de connexion : ' + error.message);
        }
    };
    const logout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        setIsAdmin(false);
        alert('Déconnexion réussie');
    };
    return {
        isAdmin,
        loading,
        showLogin,
        setShowLogin,
        loginData,
        setLoginData,
        login,
        logout
    };
}
_s(useAuth, "w5G29blzBvWJCgahXTNPr3dbG8E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useLieux.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLieux",
    ()=>useLieux
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useLieux() {
    _s();
    const [lieux, setLieux] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLieux.useEffect": ()=>{
            loadLieux();
            // Abonnement temps réel aux changements
            const lieuxSubscription = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel('lieux_changes').on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'lieux'
            }, loadLieux).subscribe();
            return ({
                "useLieux.useEffect": ()=>{
                    lieuxSubscription.unsubscribe();
                }
            })["useLieux.useEffect"];
        }
    }["useLieux.useEffect"], []);
    const loadLieux = async ()=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('lieux').select('*').order('nom', {
            ascending: true
        });
        if (!error && data) {
            setLieux(data);
        }
        setLoading(false);
    };
    const ajouterLieu = async (lieuData)=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('lieux').insert([
            lieuData
        ]).select();
        if (error) throw error;
        return data[0];
    };
    const modifierLieu = async (id, lieuData)=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('lieux').update(lieuData).eq('id', id).select();
        if (error) throw error;
        return data[0];
    };
    const supprimerLieu = async (id)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('lieux').delete().eq('id', id);
        if (error) throw error;
    };
    // Fonction helper pour vérifier les doublons
    const checkDuplicate = (nom, excludeId = null)=>{
        const normalize = (str)=>{
            if (!str || typeof str !== 'string') return '';
            return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
        };
        const normalizedNom = normalize(nom);
        return lieux.some((lieu)=>lieu.id !== excludeId && normalize(lieu.nom) === normalizedNom);
    };
    return {
        lieux,
        loading,
        loadLieux,
        ajouterLieu,
        modifierLieu,
        supprimerLieu,
        checkDuplicate
    };
}
_s(useLieux, "Zn01VDqiFQnRAJF/MrASweYsU2A=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useVilles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVilles",
    ()=>useVilles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useVilles() {
    _s();
    const [villes, setVilles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVilles.useEffect": ()=>{
            loadVilles();
        }
    }["useVilles.useEffect"], []);
    const loadVilles = async ()=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('villes').select('*').order('nom', {
            ascending: true
        });
        if (!error && data) {
            setVilles(data);
        }
        setLoading(false);
    };
    const ajouterVille = async (nomVille)=>{
        // Vérifier si la ville existe déjà
        const normalize = (str)=>{
            if (!str || typeof str !== 'string') return '';
            return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
        };
        if (villes.some((v)=>normalize(v.nom) === normalize(nomVille))) {
            return; // Ville existe déjà
        }
        // Géocoder la ville
        const coords = await geocodeVille(nomVille);
        const nouvelleVille = coords ? {
            nom: nomVille,
            latitude: coords.latitude,
            longitude: coords.longitude
        } : {
            nom: nomVille
        };
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('villes').insert([
            nouvelleVille
        ]).select();
        if (error) throw error;
        await loadVilles(); // Recharger la liste
        return data[0];
    };
    const supprimerVille = async (nomVille)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('villes').delete().eq('nom', nomVille);
        if (error) throw error;
        await loadVilles();
    };
    const geocodeVille = async (nomVille)=>{
        if (!nomVille || typeof nomVille !== 'string') return null;
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?` + new URLSearchParams({
                q: `${nomVille}, France`,
                format: 'json',
                limit: 1,
                countrycodes: 'fr'
            }), {
                headers: {
                    'User-Agent': 'HexaIndex/1.0'
                }
            });
            const data = await response.json();
            if (data && data.length > 0) {
                return {
                    latitude: parseFloat(data[0].lat),
                    longitude: parseFloat(data[0].lon)
                };
            }
            return null;
        } catch (error) {
            console.error('Erreur de géocodage:', error);
            return null;
        }
    };
    return {
        villes,
        loading,
        loadVilles,
        ajouterVille,
        supprimerVille,
        geocodeVille
    };
}
_s(useVilles, "I9RHaErDSpA/Nyt5JNgxodpI+4c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useCategories.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useCategories() {
    _s();
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCategories.useEffect": ()=>{
            loadCategories();
        }
    }["useCategories.useEffect"], []);
    const loadCategories = async ()=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('categories').select('nom').order('nom', {
            ascending: true
        });
        if (!error && data) {
            setCategories(data.map((c)=>c.nom));
        }
        setLoading(false);
    };
    const ajouterCategorie = async (nomCategorie)=>{
        // Vérifier si la catégorie existe déjà (insensible à la casse)
        const normalize = (str)=>{
            if (!str || typeof str !== 'string') return '';
            return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
        };
        if (categories.some((c)=>normalize(c) === normalize(nomCategorie))) {
            return; // Catégorie existe déjà
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('categories').insert([
            {
                nom: nomCategorie
            }
        ]).select();
        if (error) throw error;
        await loadCategories(); // Recharger la liste
        return data[0];
    };
    const supprimerCategorie = async (nomCategorie)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('categories').delete().eq('nom', nomCategorie);
        if (error) throw error;
        await loadCategories();
    };
    return {
        categories,
        loading,
        loadCategories,
        ajouterCategorie,
        supprimerCategorie
    };
}
_s(useCategories, "Ku/3fYTZ4p+HhLbl/Ex0fsiHh1U=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MainMenu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$FavorisContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/FavorisContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MainMenu() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { count } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$FavorisContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavoris"])();
    const linkClass = (path)=>`px-4 py-2 rounded-lg font-medium transition ${pathname === path ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex gap-2 flex-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: linkClass('/'),
                children: "Liste"
            }, void 0, false, {
                fileName: "[project]/components/MainMenu.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/carte",
                className: linkClass('/carte'),
                children: "Carte"
            }, void 0, false, {
                fileName: "[project]/components/MainMenu.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/random",
                className: linkClass('/random'),
                children: "Lieu aléatoire"
            }, void 0, false, {
                fileName: "[project]/components/MainMenu.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/favoris",
                className: linkClass('/favoris'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            size: 16,
                            className: pathname === '/favoris' ? 'fill-white' : ''
                        }, void 0, false, {
                            fileName: "[project]/components/MainMenu.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        "Favoris",
                        count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `
              px-2 py-0.5 rounded-full text-xs font-bold
              ${pathname === '/favoris' ? 'bg-white text-blue-600' : 'bg-red-500 text-white'}
            `,
                            children: count
                        }, void 0, false, {
                            fileName: "[project]/components/MainMenu.jsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MainMenu.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/MainMenu.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/contribuer",
                className: linkClass('/contribuer'),
                children: "Contribuer"
            }, void 0, false, {
                fileName: "[project]/components/MainMenu.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MainMenu.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(MainMenu, "TMjX/MK4Rpz0SRR4KYFJSGIbhn0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$FavorisContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavoris"]
    ];
});
_c = MainMenu;
var _c;
__turbopack_context__.k.register(_c, "MainMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ModalLogin.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ModalLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
'use client';
;
;
function ModalLogin({ auth }) {
    if (!auth.showLogin) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-6 max-w-md w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                            className: "text-blue-600",
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/components/ModalLogin.jsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold",
                            children: "Connexion"
                        }, void 0, false, {
                            fileName: "[project]/components/ModalLogin.jsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ModalLogin.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/components/ModalLogin.jsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: auth.loginData.email,
                                    onChange: (e)=>auth.setLoginData({
                                            ...auth.loginData,
                                            email: e.target.value
                                        }),
                                    onKeyPress: (e)=>e.key === 'Enter' && auth.login(),
                                    className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    placeholder: "admin@exemple.com"
                                }, void 0, false, {
                                    fileName: "[project]/components/ModalLogin.jsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ModalLogin.jsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Mot de passe"
                                }, void 0, false, {
                                    fileName: "[project]/components/ModalLogin.jsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    value: auth.loginData.password,
                                    onChange: (e)=>auth.setLoginData({
                                            ...auth.loginData,
                                            password: e.target.value
                                        }),
                                    onKeyPress: (e)=>e.key === 'Enter' && auth.login(),
                                    className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    placeholder: "••••••••"
                                }, void 0, false, {
                                    fileName: "[project]/components/ModalLogin.jsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ModalLogin.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: auth.login,
                                    className: "flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium",
                                    children: "Se connecter"
                                }, void 0, false, {
                                    fileName: "[project]/components/ModalLogin.jsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>auth.setShowLogin(false),
                                    className: "bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400",
                                    children: "Annuler"
                                }, void 0, false, {
                                    fileName: "[project]/components/ModalLogin.jsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ModalLogin.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ModalLogin.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ModalLogin.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ModalLogin.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = ModalLogin;
var _c;
__turbopack_context__.k.register(_c, "ModalLogin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BoutonFavori.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// components/BoutonFavori.jsx - VERSION OPTIMISÉE
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$FavorisContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/contexts/FavorisContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function BoutonFavori({ lieu, size = 24, className = '' }) {
    _s();
    const { estFavori, toggleFavori } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$FavorisContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavoris"])();
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isFavori = estFavori(lieu.id);
    const handleClick = (e)=>{
        e.stopPropagation(); // Empêche la propagation
        // Animation de clic
        setIsAnimating(true);
        setTimeout(()=>setIsAnimating(false), 600);
        toggleFavori(lieu);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleClick,
        className: `
     
        ${className}
      `,
        title: isFavori ? 'Retirer des favoris' : 'Ajouter aux favoris',
        "aria-label": isFavori ? 'Retirer des favoris' : 'Ajouter aux favoris',
        "aria-pressed": isFavori,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            size: size,
            className: `
          ${isFavori ? 'fill-red-500 text-red-500' : 'text-gray-400 group-hover:text-red-400 group-hover:scale-100'}
          ${isAnimating ? 'animate-heart-beat' : ''}
        `
        }, void 0, false, {
            fileName: "[project]/components/BoutonFavori.jsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/BoutonFavori.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(BoutonFavori, "777DTV/fRB37AN460F+cW5g1ePo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$contexts$2f$FavorisContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavoris"]
    ];
});
_c = BoutonFavori;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(BoutonFavori, (prevProps, nextProps)=>{
    return prevProps.lieu.id === nextProps.lieu.id;
}) // Styles CSS à ajouter dans globals.css
;
var _c, _c1;
__turbopack_context__.k.register(_c, "BoutonFavori");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Palette de couleurs pour les tags
__turbopack_context__.s([
    "TAG_COLORS",
    ()=>TAG_COLORS,
    "exporterDonnees",
    ()=>exporterDonnees,
    "getColorForType",
    ()=>getColorForType,
    "importerDonnees",
    ()=>importerDonnees,
    "normalizeString",
    ()=>normalizeString
]);
const TAG_COLORS = [
    "#9FFFCA",
    "#FFAEFF",
    "#FFAC88",
    "#C6BBFF",
    "#F9FFBD",
    "#A8FFD8",
    "#FC9F9F",
    "#FF8FD4",
    "#FFB7E3",
    "#FFB39A",
    "#FFD1B8",
    "#B8C7FF",
    "#D6D0FF",
    "#FFF3A0",
    "#EFFF9F",
    "#8FD6FF",
    "#AEE8FF",
    "#BFF2E8",
    "#FFDDEB"
];
function getColorForType(type) {
    let hash = 0;
    for(let i = 0; i < type.length; i++){
        hash = type.charCodeAt(i) + ((hash << 5) - hash);
    }
    return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length];
}
function normalizeString(str) {
    if (!str || typeof str !== 'string') return '';
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') // retire les accents
    .trim();
}
function exporterDonnees(lieux, categories, villes) {
    const data = {
        lieux,
        categories,
        villes
    };
    const blob = new Blob([
        JSON.stringify(data, null, 2)
    ], {
        type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lieux-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
async function importerDonnees(file, supabase, onSuccess) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = async (event)=>{
            try {
                const data = JSON.parse(event.target.result);
                if (data.lieux && confirm('Importer ces données ? Cela remplacera vos données actuelles.')) {
                    await supabase.from('lieux').delete().neq('id', 0);
                    await supabase.from('lieux').insert(data.lieux.map((l)=>({
                            nom: l.nom,
                            types: l.types,
                            ville: l.ville,
                            description: l.description,
                            website: l.website,
                            instagram: l.instagram
                        })));
                    onSuccess?.();
                    alert('Données importées avec succès !');
                    resolve(true);
                }
            } catch (error) {
                alert('Erreur lors de l\'import : ' + error.message);
                reject(error);
            }
        };
        reader.readAsText(file);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/constants.js
/**
 * Palette de couleurs pour les tags de catégories
 * Utilisée de manière déterministe via hash du nom de la catégorie
 */ __turbopack_context__.s([
    "MAP_CONFIG",
    ()=>MAP_CONFIG,
    "MESSAGES",
    ()=>MESSAGES,
    "NOUVEAU_CONFIG",
    ()=>NOUVEAU_CONFIG,
    "PARTAGE_CONFIG",
    ()=>PARTAGE_CONFIG,
    "TAG_COLORS",
    ()=>TAG_COLORS,
    "VALIDATION",
    ()=>VALIDATION
]);
const TAG_COLORS = [
    "#9FFFCA",
    "#FFAEFF",
    "#FFAC88",
    "#C6BBFF",
    "#F9FFBD",
    "#A8FFD8",
    "#FC9F9F",
    "#FF8FD4",
    "#FFB7E3",
    "#FFB39A",
    "#FFD1B8",
    "#B8C7FF",
    "#D6D0FF",
    "#FFF3A0",
    "#EFFF9F",
    "#8FD6FF",
    "#AEE8FF",
    "#BFF2E8",
    "#FFDDEB"
];
const PARTAGE_CONFIG = {
    DUREE_EXPIRATION_JOURS: 90,
    CODE_LENGTH: 8
};
const NOUVEAU_CONFIG = {
    JOURS_AFFICHAGE: 7
};
const MESSAGES = {
    CONFIRMER_SUPPRESSION: 'Êtes-vous sûr de vouloir supprimer ce lieu ?',
    CONFIRMER_VALIDATION: (nom)=>`Valider et publier "${nom}" ?`,
    CONFIRMER_REJET: 'Rejeter cette contribution ?',
    CONFIRMER_SUPPRESSION_CONTRIBUTION: 'Supprimer définitivement cette contribution ?',
    SUCCESS_AJOUT: 'Lieu ajouté avec succès !',
    SUCCESS_MODIFICATION: 'Lieu modifié avec succès !',
    SUCCESS_SUPPRESSION: 'Lieu supprimé !',
    SUCCESS_VALIDATION: 'Contribution validée ! Un email a été envoyé au contributeur.',
    SUCCESS_REJET: 'Contribution rejetée',
    SUCCESS_CONTRIBUTION: 'Merci pour votre contribution !',
    SUCCESS_MODIFICATIONS_SAUVEGARDEES: 'Modifications sauvegardées',
    ERROR_CHAMPS_REQUIS: 'Veuillez remplir tous les champs obligatoires',
    ERROR_DOUBLON: (nom)=>`Un lieu nommé "${nom}" existe déjà dans la base de données.`,
    ERROR_AUCUN_FAVORI: 'Vous devez avoir au moins un favori pour partager !',
    ERROR_AUCUN_LIEU_FILTRE: 'Aucun lieu disponible avec ces filtres !'
};
const MAP_CONFIG = {
    CENTER: [
        2.3522,
        46.8566
    ],
    INITIAL_ZOOM: 5,
    POPUP_MAX_WIDTH: '600px',
    POPUP_MAX_HEIGHT: '400px'
};
const VALIDATION = {
    NOM_MIN_LENGTH: 2,
    NOM_MAX_LENGTH: 100,
    DESCRIPTION_MAX_LENGTH: 500,
    TYPES_MIN: 1,
    TYPES_MAX: 10
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/helper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/helpers.js
__turbopack_context__.s([
    "copyToClipboard",
    ()=>copyToClipboard,
    "debounce",
    ()=>debounce,
    "filterLieux",
    ()=>filterLieux,
    "formatDate",
    ()=>formatDate,
    "formatTime",
    ()=>formatTime,
    "generateRandomCode",
    ()=>generateRandomCode,
    "isNew",
    ()=>isNew,
    "normalizeString",
    ()=>normalizeString,
    "sanitizeInstagramHandle",
    ()=>sanitizeInstagramHandle,
    "sanitizeUrl",
    ()=>sanitizeUrl,
    "sortSuggestions",
    ()=>sortSuggestions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.js [app-client] (ecmascript)");
;
function normalizeString(str) {
    if (!str || typeof str !== 'string') return '';
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}
function isNew(createdAt) {
    if (!createdAt) return false;
    const now = new Date();
    const created = new Date(createdAt);
    const diffInDays = (now - created) / (1000 * 60 * 60 * 24);
    return diffInDays <= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOUVEAU_CONFIG"].JOURS_AFFICHAGE;
}
function formatDate(date, options = {}) {
    if (!date) return '';
    const defaultOptions = {
        dateStyle: 'short',
        ...options
    };
    return new Date(date).toLocaleDateString('fr-FR', defaultOptions);
}
function formatTime(date) {
    if (!date) return '';
    return new Date(date).toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit'
    });
}
function generateRandomCode(length = 8) {
    return Math.random().toString(36).substring(2, 2 + length);
}
function sanitizeUrl(url) {
    if (!url) return null;
    try {
        const parsedUrl = new URL(url);
        // Autoriser uniquement http et https
        if (![
            'http:',
            'https:'
        ].includes(parsedUrl.protocol)) {
            return null;
        }
        return parsedUrl.toString();
    } catch  {
        return null;
    }
}
function sanitizeInstagramHandle(handle) {
    if (!handle) return null;
    // Si c'est déjà une URL complète
    if (handle.startsWith('http')) {
        return sanitizeUrl(handle);
    }
    // Nettoyer le @
    const cleanHandle = handle.replace('@', '').trim();
    if (!cleanHandle) return null;
    return `https://instagram.com/${cleanHandle}`;
}
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = ()=>{
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
function filterLieux(lieux, filtres = {
    types: [],
    villes: []
}) {
    if (!lieux || !Array.isArray(lieux)) return [];
    return lieux.filter((lieu)=>{
        const matchTypes = filtres.types.length === 0 || filtres.types.some((t)=>lieu.types?.includes(t));
        const matchVilles = filtres.villes.length === 0 || filtres.villes.includes(lieu.ville);
        return matchTypes && matchVilles;
    });
}
function sortSuggestions(items, query) {
    if (!query) return items;
    const normalized = normalizeString(query);
    return items.sort((a, b)=>{
        const aNorm = normalizeString(a);
        const bNorm = normalizeString(b);
        // Priorité aux correspondances exactes au début
        const aStarts = aNorm.startsWith(normalized);
        const bStarts = bNorm.startsWith(normalized);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        // Puis ordre alphabétique
        return a.localeCompare(b, 'fr');
    });
}
async function copyToClipboard(text) {
    try {
        // Méthode moderne
        await navigator.clipboard.writeText(text);
        return true;
    } catch  {
        // Fallback pour navigateurs anciens
        try {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            const success = document.execCommand('copy');
            document.body.removeChild(textarea);
            return success;
        } catch  {
            return false;
        }
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SidebarLieu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarLieu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BoutonFavori$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BoutonFavori.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/helper.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function SidebarLieu({ lieu, onClose, isAdmin, onEdit, onDelete }) {
    if (!lieu) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-0 top-0 h-full w-[90vw] max-w-[400px] bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 pr-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-gray-800",
                                            children: lieu.nom
                                        }, void 0, false, {
                                            fileName: "[project]/components/SidebarLieu.jsx",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BoutonFavori$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            lieu: lieu,
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/components/SidebarLieu.jsx",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, this),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNew"])(lieu.created_at) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-green-500 text-white text-xs font-bold px-2 py-1 rounded",
                                            children: "NOUVEAU"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SidebarLieu.jsx",
                                            lineNumber: 20,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SidebarLieu.jsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mb-2",
                                    children: lieu.types.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getColorForType"])(type),
                                                color: '#202020ff'
                                            },
                                            className: "px-3 py-1 rounded-full text-sm",
                                            children: type
                                        }, type, false, {
                                            fileName: "[project]/components/SidebarLieu.jsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarLieu.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: [
                                        "📍 ",
                                        lieu.ville
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SidebarLieu.jsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SidebarLieu.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-gray-600 p-2 transition-colors flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/SidebarLieu.jsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/SidebarLieu.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SidebarLieu.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                lieu.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-gray-700 mb-2",
                            children: "Description"
                        }, void 0, false, {
                            fileName: "[project]/components/SidebarLieu.jsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: lieu.description
                        }, void 0, false, {
                            fileName: "[project]/components/SidebarLieu.jsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SidebarLieu.jsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this),
                (lieu.website || lieu.instagram) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 mb-6",
                    children: [
                        lieu.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: lieu.website,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                    size: 20,
                                    className: "text-blue-600 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarLieu.jsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-700 font-medium",
                                    children: "Voir le site web"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarLieu.jsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 16,
                                    className: "text-gray-400 ml-auto flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarLieu.jsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SidebarLieu.jsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this),
                        lieu.instagram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: lieu.instagram.startsWith('http') ? lieu.instagram : `https://instagram.com/${lieu.instagram.replace('@', '')}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                    size: 20,
                                    className: "text-pink-600 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarLieu.jsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-700 font-medium",
                                    children: "Voir sur Instagram"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarLieu.jsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 16,
                                    className: "text-gray-400 ml-auto flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarLieu.jsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SidebarLieu.jsx",
                            lineNumber: 71,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SidebarLieu.jsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this),
                isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-6 border-t flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onEdit(lieu);
                                onClose();
                            },
                            className: "flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",
                            children: "Modifier"
                        }, void 0, false, {
                            fileName: "[project]/components/SidebarLieu.jsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onDelete(lieu.id, lieu.ville);
                                onClose();
                            },
                            className: "flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors",
                            children: "Supprimer"
                        }, void 0, false, {
                            fileName: "[project]/components/SidebarLieu.jsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SidebarLieu.jsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/SidebarLieu.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SidebarLieu.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = SidebarLieu;
var _c;
__turbopack_context__.k.register(_c, "SidebarLieu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SidebarEditLieu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarEditLieu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SidebarEditLieu({ show, onClose, lieuToEdit = null, lieuxData, villesData, categoriesData }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nom: '',
        types: [],
        ville: '',
        description: '',
        website: '',
        instagram: ''
    });
    const [typeInput, setTypeInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [villeInput, setVilleInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showTypeSuggestions, setShowTypeSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showVilleSuggestions, setShowVilleSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [selectedVilleSuggestionIndex, setSelectedVilleSuggestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    // Charger les données du lieu à éditer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarEditLieu.useEffect": ()=>{
            if (lieuToEdit) {
                setFormData({
                    nom: lieuToEdit.nom,
                    types: lieuToEdit.types,
                    ville: lieuToEdit.ville,
                    description: lieuToEdit.description || '',
                    website: lieuToEdit.website || '',
                    instagram: lieuToEdit.instagram || ''
                });
            } else {
                resetForm();
            }
        }
    }["SidebarEditLieu.useEffect"], [
        lieuToEdit
    ]);
    const resetForm = ()=>{
        setFormData({
            nom: '',
            types: [],
            ville: '',
            description: '',
            website: '',
            instagram: ''
        });
        setTypeInput('');
        setVilleInput('');
        setSelectedSuggestionIndex(-1);
        setSelectedVilleSuggestionIndex(-1);
    };
    const handleClose = ()=>{
        resetForm();
        onClose();
    };
    const handleSave = async ()=>{
        if (!formData.nom || formData.types.length === 0 || !formData.ville) {
            alert('Veuillez remplir tous les champs obligatoires');
            return;
        }
        // Vérifier les doublons
        if (lieuxData.checkDuplicate(formData.nom, lieuToEdit?.id)) {
            alert(`Un lieu nommé "${formData.nom}" existe déjà dans la base de données.`);
            return;
        }
        try {
            const lieuData = {
                nom: formData.nom,
                types: formData.types,
                ville: formData.ville,
                description: formData.description || null,
                website: formData.website || null,
                instagram: formData.instagram || null
            };
            if (lieuToEdit) {
                await lieuxData.modifierLieu(lieuToEdit.id, lieuData);
                alert('Lieu modifié !');
            } else {
                await lieuxData.ajouterLieu(lieuData);
                // Ajouter la ville si elle n'existe pas
                await villesData.ajouterVille(formData.ville);
                alert('Lieu ajouté !');
            }
            handleClose();
        } catch (error) {
            alert('Erreur : ' + error.message);
        }
    };
    // Autocomplétion types
    const getTypeSuggestions = ()=>{
        if (!typeInput) return [];
        const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(typeInput);
        return categoriesData.categories.filter((c)=>!formData.types.includes(c)).filter((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(c).includes(normalized)).sort((a, b)=>{
            const aNorm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(a);
            const bNorm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(b);
            const aStarts = aNorm.startsWith(normalized);
            const bStarts = bNorm.startsWith(normalized);
            if (aStarts && !bStarts) return -1;
            if (!aStarts && bStarts) return 1;
            return a.localeCompare(b);
        });
    };
    const handleTypeInputKeyDown = (e)=>{
        const suggestions = getTypeSuggestions();
        if (e.key === 'Tab' && suggestions.length > 0) {
            e.preventDefault();
            const selectedType = selectedSuggestionIndex >= 0 ? suggestions[selectedSuggestionIndex] : suggestions[0];
            ajouterType(selectedType);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedSuggestionIndex((prev)=>prev < suggestions.length - 1 ? prev + 1 : prev);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedSuggestionIndex((prev)=>prev > 0 ? prev - 1 : -1);
        } else if (e.key === 'Enter' && selectedSuggestionIndex >= 0) {
            e.preventDefault();
            ajouterType(suggestions[selectedSuggestionIndex]);
        }
    };
    const ajouterType = async (type)=>{
        if (type && !formData.types.includes(type)) {
            setFormData({
                ...formData,
                types: [
                    ...formData.types,
                    type
                ]
            });
        }
        // Ajouter la catégorie si elle n'existe pas
        await categoriesData.ajouterCategorie(type);
        setTypeInput('');
        setShowTypeSuggestions(false);
        setSelectedSuggestionIndex(-1);
    };
    const retirerType = (type)=>{
        setFormData({
            ...formData,
            types: formData.types.filter((t)=>t !== type)
        });
    };
    // Autocomplétion villes
    const getVilleSuggestions = ()=>{
        if (!villeInput) return [];
        const normalizedInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(villeInput);
        return villesData.villes.filter((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(v.nom).includes(normalizedInput)).sort((a, b)=>{
            const aNorm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(a.nom);
            const bNorm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(b.nom);
            const aStarts = aNorm.startsWith(normalizedInput);
            const bStarts = bNorm.startsWith(normalizedInput);
            if (aStarts && !bStarts) return -1;
            if (!aStarts && bStarts) return 1;
            return a.nom.localeCompare(b.nom);
        });
    };
    const handleVilleInputKeyDown = (e)=>{
        const suggestions = getVilleSuggestions();
        if (e.key === 'Tab' && suggestions.length > 0) {
            e.preventDefault();
            const selectedVille = selectedVilleSuggestionIndex >= 0 ? suggestions[selectedVilleSuggestionIndex] : suggestions[0];
            selectionnerVille(selectedVille.nom);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedVilleSuggestionIndex((prev)=>prev < suggestions.length - 1 ? prev + 1 : prev);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedVilleSuggestionIndex((prev)=>prev > 0 ? prev - 1 : -1);
        } else if (e.key === 'Enter' && selectedVilleSuggestionIndex >= 0) {
            e.preventDefault();
            selectionnerVille(suggestions[selectedVilleSuggestionIndex].nom);
        }
    };
    const selectionnerVille = (villeNom)=>{
        setFormData({
            ...formData,
            ville: villeNom
        });
        setVilleInput('');
        setShowVilleSuggestions(false);
        setSelectedVilleSuggestionIndex(-1);
    };
    const typesSuggestions = getTypeSuggestions();
    const villesSuggestions = getVilleSuggestions();
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed right-0 top-0 h-full w-[90vw] max-w-[500px] bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-800",
                            children: lieuToEdit ? 'Modifier le lieu' : 'Nouveau lieu'
                        }, void 0, false, {
                            fileName: "[project]/components/SidebarEditLieu.jsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "text-gray-400 hover:text-gray-600 p-2 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/SidebarEditLieu.jsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/SidebarEditLieu.jsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SidebarEditLieu.jsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Nom *"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.nom,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            nom: e.target.value
                                        }),
                                    className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    placeholder: "Nom du lieu"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                formData.nom && lieuxData.checkDuplicate(formData.nom, lieuToEdit?.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-600 text-sm mt-1",
                                    children: "⚠️ Un lieu avec ce nom existe déjà"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SidebarEditLieu.jsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: [
                                        "Types *",
                                        typesSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500 ml-2",
                                            children: "(Tab ou ↓↑)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SidebarEditLieu.jsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: typeInput,
                                    onChange: (e)=>{
                                        setTypeInput(e.target.value);
                                        setShowTypeSuggestions(true);
                                        setSelectedSuggestionIndex(-1);
                                    },
                                    onKeyDown: handleTypeInputKeyDown,
                                    onFocus: ()=>setShowTypeSuggestions(true),
                                    className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    placeholder: "Rechercher un type..."
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                showTypeSuggestions && typeInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                    children: [
                                        typesSuggestions.map((cat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>ajouterType(cat),
                                                className: `px-4 py-2 cursor-pointer ${index === selectedSuggestionIndex ? 'bg-blue-100' : 'hover:bg-blue-50'}`,
                                                children: [
                                                    cat,
                                                    index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 ml-2",
                                                        children: "(Tab)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SidebarEditLieu.jsx",
                                                        lineNumber: 280,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, cat, true, {
                                                fileName: "[project]/components/SidebarEditLieu.jsx",
                                                lineNumber: 272,
                                                columnNumber: 19
                                            }, this)),
                                        typeInput && !categoriesData.categories.some((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(c) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(typeInput)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>ajouterType(typeInput),
                                            className: "px-4 py-2 hover:bg-green-50 cursor-pointer text-green-700 font-medium border-t",
                                            children: [
                                                '+ Créer "',
                                                typeInput,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SidebarEditLieu.jsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 270,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2 mt-2",
                                    children: formData.types.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getColorForType"])(type),
                                                color: '#202020ff'
                                            },
                                            className: "px-3 py-1 rounded-full text-sm flex items-center gap-2",
                                            children: [
                                                type,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 14,
                                                    className: "cursor-pointer",
                                                    onClick: ()=>retirerType(type)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, type, true, {
                                            fileName: "[project]/components/SidebarEditLieu.jsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SidebarEditLieu.jsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: [
                                        "Ville *",
                                        villesSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-gray-500 ml-2",
                                            children: "(Tab ou ↓↑)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SidebarEditLieu.jsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: villeInput || formData.ville,
                                    onChange: (e)=>{
                                        setVilleInput(e.target.value);
                                        setShowVilleSuggestions(true);
                                        setSelectedVilleSuggestionIndex(-1);
                                    },
                                    onKeyDown: handleVilleInputKeyDown,
                                    onFocus: ()=>setShowVilleSuggestions(true),
                                    className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    placeholder: "Rechercher une ville..."
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 315,
                                    columnNumber: 13
                                }, this),
                                showVilleSuggestions && villeInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                    children: [
                                        villesSuggestions.map((ville, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>selectionnerVille(ville.nom),
                                                className: `px-4 py-2 cursor-pointer ${index === selectedVilleSuggestionIndex ? 'bg-blue-100' : 'hover:bg-blue-50'}`,
                                                children: [
                                                    ville.nom,
                                                    index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 ml-2",
                                                        children: "(Tab)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SidebarEditLieu.jsx",
                                                        lineNumber: 339,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, ville.id || ville.nom + index, true, {
                                                fileName: "[project]/components/SidebarEditLieu.jsx",
                                                lineNumber: 331,
                                                columnNumber: 19
                                            }, this)),
                                        villeInput && !villesData.villes.some((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(v.nom) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeString"])(villeInput)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>selectionnerVille(villeInput),
                                            className: "px-4 py-2 hover:bg-green-50 cursor-pointer text-green-700 font-medium border-t",
                                            children: [
                                                '+ Créer "',
                                                villeInput,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SidebarEditLieu.jsx",
                                            lineNumber: 343,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SidebarEditLieu.jsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.description,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            description: e.target.value
                                        }),
                                    className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]",
                                    placeholder: "Décrivez le lieu..."
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SidebarEditLieu.jsx",
                            lineNumber: 355,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Site web"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "url",
                                    value: formData.website,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            website: e.target.value
                                        }),
                                    className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    placeholder: "https://exemple.com"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SidebarEditLieu.jsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-2",
                                    children: "Instagram"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.instagram,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            instagram: e.target.value
                                        }),
                                    className: "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                    placeholder: "@nomducompte"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SidebarEditLieu.jsx",
                            lineNumber: 378,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    disabled: formData.nom && lieuxData.checkDuplicate(formData.nom, lieuToEdit?.id),
                                    className: "flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/SidebarEditLieu.jsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this),
                                        lieuToEdit ? 'Modifier' : 'Ajouter'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleClose,
                                    className: "bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 font-medium",
                                    children: "Annuler"
                                }, void 0, false, {
                                    fileName: "[project]/components/SidebarEditLieu.jsx",
                                    lineNumber: 399,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SidebarEditLieu.jsx",
                            lineNumber: 390,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SidebarEditLieu.jsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/SidebarEditLieu.jsx",
            lineNumber: 219,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/SidebarEditLieu.jsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_s(SidebarEditLieu, "G0q/zRxMKKDfZKo6MksNfDryBNU=");
_c = SidebarEditLieu;
var _c;
__turbopack_context__.k.register(_c, "SidebarEditLieu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BarreAdmin.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BarreAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-client] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function BarreAdmin({ auth, lieuxData, villesData, categoriesData, onAddClick }) {
    const handleExport = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exporterDonnees"])(lieuxData.lieux, categoriesData.categories, villesData.villes);
    };
    const handleImport = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importerDonnees"])(file, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"], ()=>{
                lieuxData.loadLieux();
                villesData.loadVilles();
                categoriesData.loadCategories();
            });
        } catch (error) {
            console.error('Erreur import:', error);
        }
        e.target.value = ''; // Reset input
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-3 mt-4",
        children: !auth.isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>auth.setShowLogin(true),
            className: "bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/components/BarreAdmin.jsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this),
                "Connexion"
            ]
        }, void 0, true, {
            fileName: "[project]/components/BarreAdmin.jsx",
            lineNumber: 32,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleExport,
                    className: "bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/BarreAdmin.jsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        "Exporter"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BarreAdmin.jsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center gap-2 cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/BarreAdmin.jsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        "Importer",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: ".json",
                            onChange: handleImport,
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/components/BarreAdmin.jsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BarreAdmin.jsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onAddClick,
                    className: "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/BarreAdmin.jsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        "Ajouter"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BarreAdmin.jsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: auth.logout,
                    className: "bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/components/BarreAdmin.jsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        "Déconnexion"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BarreAdmin.jsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/BarreAdmin.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = BarreAdmin;
var _c;
__turbopack_context__.k.register(_c, "BarreAdmin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/colors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/colors.js
__turbopack_context__.s([
    "getColorForType",
    ()=>getColorForType,
    "getContrastColor",
    ()=>getContrastColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.js [app-client] (ecmascript)");
;
function getColorForType(type) {
    if (!type || typeof type !== 'string') return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TAG_COLORS"][0];
    let hash = 0;
    for(let i = 0; i < type.length; i++){
        hash = type.charCodeAt(i) + ((hash << 5) - hash);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TAG_COLORS"][Math.abs(hash) % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TAG_COLORS"].length];
}
function getContrastColor(hexColor) {
    // Convertir hex en RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    // Calculer la luminance relative
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? 'dark' : 'light';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FiltresLieux.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "filtresStyles",
    ()=>filtresStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/colors.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function FiltresLieux({ categories, villes, filtresActifs, setFiltresActifs }) {
    _s();
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const filtersPanelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Mémoïser le total de filtres actifs
    const totalFiltres = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FiltresLieux.useMemo[totalFiltres]": ()=>filtresActifs.types.length + filtresActifs.villes.length
    }["FiltresLieux.useMemo[totalFiltres]"], [
        filtresActifs.types.length,
        filtresActifs.villes.length
    ]);
    // ✨ Détecter les clics en dehors du panneau de filtres
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FiltresLieux.useEffect": ()=>{
            const handleClickOutside = {
                "FiltresLieux.useEffect.handleClickOutside": (event)=>{
                    if (filtersPanelRef.current && !filtersPanelRef.current.contains(event.target)) {
                        setShowFilters(false);
                    }
                }
            }["FiltresLieux.useEffect.handleClickOutside"];
            if (showFilters) {
                document.addEventListener('mousedown', handleClickOutside);
            }
            return ({
                "FiltresLieux.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["FiltresLieux.useEffect"];
        }
    }["FiltresLieux.useEffect"], [
        showFilters
    ]);
    const toggleFiltre = (type, value)=>{
        setFiltresActifs((prev)=>{
            const arr = prev[type];
            const newArr = arr.includes(value) ? arr.filter((v)=>v !== value) : [
                ...arr,
                value
            ];
            return {
                ...prev,
                [type]: newArr
            };
        });
    };
    const resetFiltres = ()=>{
        setFiltresActifs({
            types: [],
            villes: []
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-sm p-4 mb-6",
        ref: filtersPanelRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowFilters(!showFilters),
                className: `
          w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all
          ${showFilters ? 'bg-grey-200 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
        `,
                "aria-expanded": showFilters,
                "aria-controls": "filtres-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                size: 20,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/FiltresLieux.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Filtres"
                            }, void 0, false, {
                                fileName: "[project]/components/FiltresLieux.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            totalFiltres > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `
                rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold
                ${showFilters ? 'bg-white text-blue-600' : 'bg-grey-200 text-white'}
              `,
                                "aria-label": `${totalFiltres} filtre${totalFiltres > 1 ? 's' : ''} actif${totalFiltres > 1 ? 's' : ''}`,
                                children: totalFiltres
                            }, void 0, false, {
                                fileName: "[project]/components/FiltresLieux.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FiltresLieux.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`,
                        "aria-hidden": "true",
                        children: "▼"
                    }, void 0, false, {
                        fileName: "[project]/components/FiltresLieux.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FiltresLieux.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "filtres-panel",
                className: "bg-gray-50 p-4 rounded-lg mt-4 border animate-slide-down",
                role: "region",
                "aria-label": "Panneau de filtres",
                children: [
                    totalFiltres > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: resetFiltres,
                            className: "flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 px-3 py-1.5 rounded-lg hover:bg-white transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/FiltresLieux.jsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this),
                                "Réinitialiser les filtres"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FiltresLieux.jsx",
                            lineNumber: 95,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FiltresLieux.jsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium mb-3 text-gray-700",
                                        children: [
                                            "Types de lieux",
                                            filtresActifs.types.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-500 ml-2",
                                                children: [
                                                    "(",
                                                    filtresActifs.types.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FiltresLieux.jsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FiltresLieux.jsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        role: "group",
                                        "aria-label": "Filtres par type",
                                        children: categories.map((cat)=>{
                                            const isActive = filtresActifs.types.includes(cat);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiltreButton, {
                                                label: cat,
                                                isActive: isActive,
                                                onClick: ()=>toggleFiltre('types', cat),
                                                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$colors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getColorForType"])(cat)
                                            }, cat, false, {
                                                fileName: "[project]/components/FiltresLieux.jsx",
                                                lineNumber: 120,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/FiltresLieux.jsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FiltresLieux.jsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-medium mb-3 text-gray-700",
                                        children: [
                                            "Villes",
                                            filtresActifs.villes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-500 ml-2",
                                                children: [
                                                    "(",
                                                    filtresActifs.villes.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FiltresLieux.jsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FiltresLieux.jsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        role: "group",
                                        "aria-label": "Filtres par ville",
                                        children: villes.map((ville)=>{
                                            const isActive = filtresActifs.villes.includes(ville.nom);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiltreButton, {
                                                label: ville.nom,
                                                isActive: isActive,
                                                onClick: ()=>toggleFiltre('villes', ville.nom)
                                            }, ville.id || ville.nom, false, {
                                                fileName: "[project]/components/FiltresLieux.jsx",
                                                lineNumber: 146,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/FiltresLieux.jsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FiltresLieux.jsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FiltresLieux.jsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FiltresLieux.jsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FiltresLieux.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(FiltresLieux, "2QKVO3oqCL2nYaaz2OtLgLSc2p0=");
_c = FiltresLieux;
// Composant de bouton de filtre mémoïsé
const FiltreButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_s1(function FiltreButton({ label, isActive, onClick, color }) {
    _s1();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        onMouseEnter: ()=>!isActive && setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: `
        px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
        ${isActive ? 'bg-grey-200 text-white shadow-md scale-105' : 'bg-white border border-gray-300 hover:border-gray-400 text-gray-700'}
      `,
        style: !isActive && isHovered && color ? {
            backgroundColor: color,
            color: '#202020',
            borderColor: 'transparent'
        } : {},
        "aria-pressed": isActive,
        children: label
    }, void 0, false, {
        fileName: "[project]/components/FiltresLieux.jsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}, "FPQn8a98tPjpohC7NUYORQR8GJE="));
_c1 = FiltreButton;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(FiltresLieux, (prevProps, nextProps)=>{
    return prevProps.filtresActifs.types === nextProps.filtresActifs.types && prevProps.filtresActifs.villes === nextProps.filtresActifs.villes && prevProps.categories === nextProps.categories && prevProps.villes === nextProps.villes;
});
const filtresStyles = `
@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slide-down 0.2s ease-out;
}
`;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FiltresLieux");
__turbopack_context__.k.register(_c1, "FiltreButton");
__turbopack_context__.k.register(_c2, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TableauLieux.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TableauLieux
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js [app-client] (ecmascript) <export default as ArrowUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BoutonFavori$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BoutonFavori.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/helper.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function TableauLieux({ lieux, filtresActifs, onLieuClick, isAdmin, onEdit, onDelete }) {
    _s();
    const [currentInput, setCurrentInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [validatedChips, setValidatedChips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sortConfig, setSortConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        key: null,
        direction: 'asc'
    });
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const suggestionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // ✨ Détecter les préfixes communs dans la base de données
    const commonPrefixes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableauLieux.useMemo[commonPrefixes]": ()=>{
            const allVilles = [
                ...new Set(lieux.map({
                    "TableauLieux.useMemo[commonPrefixes]": (l)=>l.ville
                }["TableauLieux.useMemo[commonPrefixes]"]))
            ];
            const allTypes = [
                ...new Set(lieux.flatMap({
                    "TableauLieux.useMemo[commonPrefixes]": (l)=>l.types
                }["TableauLieux.useMemo[commonPrefixes]"]))
            ];
            const allNoms = lieux.map({
                "TableauLieux.useMemo[commonPrefixes].allNoms": (l)=>l.nom
            }["TableauLieux.useMemo[commonPrefixes].allNoms"]);
            const allTerms = [
                ...allVilles,
                ...allTypes,
                ...allNoms
            ];
            const firstWords = {};
            allTerms.forEach({
                "TableauLieux.useMemo[commonPrefixes]": (term)=>{
                    const words = term.split(/[\s\-]+/);
                    if (words.length > 1) {
                        const firstWord = words[0].toLowerCase();
                        firstWords[firstWord] = (firstWords[firstWord] || 0) + 1;
                    }
                }
            }["TableauLieux.useMemo[commonPrefixes]"]);
            return Object.keys(firstWords).filter({
                "TableauLieux.useMemo[commonPrefixes]": (word)=>firstWords[word] > 1
            }["TableauLieux.useMemo[commonPrefixes]"]);
        }
    }["TableauLieux.useMemo[commonPrefixes]"], [
        lieux
    ]);
    // ✨ Générer les suggestions basées sur l'input actuel
    const suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableauLieux.useMemo[suggestions]": ()=>{
            if (!currentInput.trim() || currentInput.trim().length < 2) return [];
            const inputLower = currentInput.trim().toLowerCase();
            const allVilles = [
                ...new Set(lieux.map({
                    "TableauLieux.useMemo[suggestions]": (l)=>l.ville
                }["TableauLieux.useMemo[suggestions]"]))
            ];
            const allTypes = [
                ...new Set(lieux.flatMap({
                    "TableauLieux.useMemo[suggestions]": (l)=>l.types
                }["TableauLieux.useMemo[suggestions]"]))
            ];
            const allNoms = [
                ...new Set(lieux.map({
                    "TableauLieux.useMemo[suggestions]": (l)=>l.nom
                }["TableauLieux.useMemo[suggestions]"]))
            ];
            const matches = [];
            // Chercher dans les types
            allTypes.forEach({
                "TableauLieux.useMemo[suggestions]": (type)=>{
                    if (type.toLowerCase().includes(inputLower) && !validatedChips.includes(type)) {
                        matches.push({
                            value: type,
                            type: 'type',
                            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getColorForType"])(type),
                            priority: type.toLowerCase().startsWith(inputLower) ? 0 : 1
                        });
                    }
                }
            }["TableauLieux.useMemo[suggestions]"]);
            // Chercher dans les villes
            allVilles.forEach({
                "TableauLieux.useMemo[suggestions]": (ville)=>{
                    if (ville.toLowerCase().includes(inputLower) && !validatedChips.includes(ville)) {
                        matches.push({
                            value: ville,
                            type: 'ville',
                            color: '#60A5FA',
                            priority: ville.toLowerCase().startsWith(inputLower) ? 0 : 1
                        });
                    }
                }
            }["TableauLieux.useMemo[suggestions]"]);
            // Chercher dans les noms
            allNoms.forEach({
                "TableauLieux.useMemo[suggestions]": (nom)=>{
                    if (nom.toLowerCase().includes(inputLower) && !validatedChips.includes(nom)) {
                        matches.push({
                            value: nom,
                            type: 'lieu',
                            color: '#34D399',
                            priority: nom.toLowerCase().startsWith(inputLower) ? 0 : 1
                        });
                    }
                }
            }["TableauLieux.useMemo[suggestions]"]);
            // Trier : priorité aux matches qui commencent par l'input, puis alphabétique
            return matches.sort({
                "TableauLieux.useMemo[suggestions]": (a, b)=>{
                    if (a.priority !== b.priority) return a.priority - b.priority;
                    return a.value.localeCompare(b.value);
                }
            }["TableauLieux.useMemo[suggestions]"]).slice(0, 8) // Limiter à 8 suggestions max
            ;
        }
    }["TableauLieux.useMemo[suggestions]"], [
        currentInput,
        lieux,
        validatedChips
    ]);
    // ✨ Analyser les chips validés avec matching strict
    const chipsAnalysis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableauLieux.useMemo[chipsAnalysis]": ()=>{
            if (validatedChips.length === 0) return [];
            const allVilles = [
                ...new Set(lieux.map({
                    "TableauLieux.useMemo[chipsAnalysis]": (l)=>l.ville
                }["TableauLieux.useMemo[chipsAnalysis]"]))
            ];
            const allTypes = [
                ...new Set(lieux.flatMap({
                    "TableauLieux.useMemo[chipsAnalysis]": (l)=>l.types
                }["TableauLieux.useMemo[chipsAnalysis]"]))
            ];
            return validatedChips.map({
                "TableauLieux.useMemo[chipsAnalysis]": (word)=>{
                    const wordLower = word.toLowerCase();
                    const matchingType = allTypes.find({
                        "TableauLieux.useMemo[chipsAnalysis].matchingType": (type)=>{
                            const typeLower = type.toLowerCase();
                            const typeWords = typeLower.split(/[\s\/\-]+/);
                            if (typeLower === wordLower) return true;
                            if (typeWords.length === 1) {
                                return typeWords[0] === wordLower;
                            } else {
                                return typeWords.some({
                                    "TableauLieux.useMemo[chipsAnalysis].matchingType": (part)=>part === wordLower
                                }["TableauLieux.useMemo[chipsAnalysis].matchingType"]);
                            }
                        }
                    }["TableauLieux.useMemo[chipsAnalysis].matchingType"]);
                    if (matchingType) {
                        return {
                            word: matchingType,
                            type: 'type',
                            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getColorForType"])(matchingType)
                        };
                    }
                    const matchingVille = allVilles.find({
                        "TableauLieux.useMemo[chipsAnalysis].matchingVille": (v)=>{
                            const villeLower = v.toLowerCase();
                            const villeWords = villeLower.split(/[\s\-]+/);
                            if (villeLower === wordLower) return true;
                            if (villeWords.length > 1 && villeWords[0] === wordLower) {
                                return false;
                            }
                            return villeWords.some({
                                "TableauLieux.useMemo[chipsAnalysis].matchingVille": (part)=>part === wordLower
                            }["TableauLieux.useMemo[chipsAnalysis].matchingVille"]);
                        }
                    }["TableauLieux.useMemo[chipsAnalysis].matchingVille"]);
                    if (matchingVille) {
                        return {
                            word: matchingVille,
                            type: 'ville',
                            color: '#60A5FA'
                        };
                    }
                    const matchingLieu = lieux.find({
                        "TableauLieux.useMemo[chipsAnalysis].matchingLieu": (l)=>{
                            const nomLower = l.nom.toLowerCase();
                            const nomWords = nomLower.split(/[\s\-]+/);
                            if (nomLower === wordLower) return true;
                            if (nomWords.length > 1 && nomWords[0] === wordLower) {
                                return false;
                            }
                            return nomWords.some({
                                "TableauLieux.useMemo[chipsAnalysis].matchingLieu": (part)=>part === wordLower
                            }["TableauLieux.useMemo[chipsAnalysis].matchingLieu"]);
                        }
                    }["TableauLieux.useMemo[chipsAnalysis].matchingLieu"]);
                    if (matchingLieu) {
                        return {
                            word: word,
                            type: 'lieu',
                            color: '#34D399'
                        };
                    }
                    return {
                        word: word,
                        type: 'unknown',
                        color: '#E5E7EB'
                    };
                }
            }["TableauLieux.useMemo[chipsAnalysis]"]);
        }
    }["TableauLieux.useMemo[chipsAnalysis]"], [
        validatedChips,
        lieux
    ]);
    // ✨ Vérifier si un mot est un préfixe incomplet
    const isIncompletePrefix = (word)=>{
        const wordLower = word.toLowerCase();
        if (commonPrefixes.includes(wordLower)) {
            const allVilles = [
                ...new Set(lieux.map((l)=>l.ville))
            ];
            const allTypes = [
                ...new Set(lieux.flatMap((l)=>l.types))
            ];
            const allNoms = lieux.map((l)=>l.nom);
            const hasMultiWordTerms = [
                ...allVilles,
                ...allTypes,
                ...allNoms
            ].some((term)=>{
                const words = term.toLowerCase().split(/[\s\-]+/);
                return words.length > 1 && words[0] === wordLower;
            });
            return hasMultiWordTerms;
        }
        return false;
    };
    // ✨ Valider une suggestion ou le texte actuel
    const validateChip = (value = null)=>{
        const chipValue = value || currentInput.trim();
        if (chipValue && !validatedChips.includes(chipValue)) {
            setValidatedChips([
                ...validatedChips,
                chipValue
            ]);
        }
        setCurrentInput('');
        setShowSuggestions(false);
        setSelectedSuggestionIndex(0);
        inputRef.current?.focus();
    };
    // ✨ Gérer la validation d'un chip avec autocomplete
    const handleKeyDown = (e)=>{
        // Navigation dans les suggestions
        if (showSuggestions && suggestions.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedSuggestionIndex((prev)=>prev < suggestions.length - 1 ? prev + 1 : prev);
                return;
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedSuggestionIndex((prev)=>prev > 0 ? prev - 1 : 0);
                return;
            }
            if (e.key === 'Enter' || e.key === 'Tab') {
                e.preventDefault();
                validateChip(suggestions[selectedSuggestionIndex].value);
                return;
            }
            if (e.key === 'Escape') {
                setShowSuggestions(false);
                setSelectedSuggestionIndex(0);
                return;
            }
        }
        // Validation normale
        if ((e.key === ' ' || e.key === 'Enter' || e.key === 'Tab') && currentInput.trim()) {
            const word = currentInput.trim();
            // ✨ Tab avec suggestions : prendre la première suggestion
            if (e.key === 'Tab' && suggestions.length > 0) {
                e.preventDefault();
                validateChip(suggestions[0].value);
                return;
            }
            // Si c'est un préfixe incomplet avec espace, laisser continuer
            if (e.key === ' ' && isIncompletePrefix(word)) {
                return;
            }
            if (e.key === 'Tab' || e.key === 'Enter') {
                e.preventDefault();
            }
            if (isIncompletePrefix(word)) {
                return;
            }
            e.preventDefault();
            validateChip();
        } else if (e.key === 'Backspace' && !currentInput && validatedChips.length > 0) {
            e.preventDefault();
            setValidatedChips(validatedChips.slice(0, -1));
        }
    };
    // Afficher les suggestions quand on tape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableauLieux.useEffect": ()=>{
            if (currentInput.trim().length >= 2 && suggestions.length > 0) {
                setShowSuggestions(true);
                setSelectedSuggestionIndex(0);
            } else {
                setShowSuggestions(false);
            }
        }
    }["TableauLieux.useEffect"], [
        currentInput,
        suggestions.length
    ]);
    // Cacher les suggestions au clic extérieur
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableauLieux.useEffect": ()=>{
            const handleClickOutside = {
                "TableauLieux.useEffect.handleClickOutside": (event)=>{
                    if (suggestionsRef.current && !suggestionsRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
                        setShowSuggestions(false);
                    }
                }
            }["TableauLieux.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "TableauLieux.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["TableauLieux.useEffect"];
        }
    }["TableauLieux.useEffect"], []);
    // Filtrer les lieux
    const lieuxFiltres = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableauLieux.useMemo[lieuxFiltres]": ()=>{
            return lieux.filter({
                "TableauLieux.useMemo[lieuxFiltres]": (lieu)=>{
                    const allSearchTerms = [
                        ...validatedChips
                    ];
                    if (currentInput.trim()) {
                        allSearchTerms.push(currentInput.trim());
                    }
                    if (allSearchTerms.length === 0) {
                        const matchTypes = filtresActifs.types.length === 0 || filtresActifs.types.some({
                            "TableauLieux.useMemo[lieuxFiltres]": (t)=>lieu.types.includes(t)
                        }["TableauLieux.useMemo[lieuxFiltres]"]);
                        const matchVilles = filtresActifs.villes.length === 0 || filtresActifs.villes.includes(lieu.ville);
                        return matchTypes && matchVilles;
                    }
                    const matchSearch = allSearchTerms.every({
                        "TableauLieux.useMemo[lieuxFiltres].matchSearch": (word)=>{
                            const wordLower = word.toLowerCase();
                            return lieu.nom.toLowerCase().includes(wordLower) || lieu.types.some({
                                "TableauLieux.useMemo[lieuxFiltres].matchSearch": (type)=>type.toLowerCase().includes(wordLower)
                            }["TableauLieux.useMemo[lieuxFiltres].matchSearch"]) || lieu.ville.toLowerCase().includes(wordLower);
                        }
                    }["TableauLieux.useMemo[lieuxFiltres].matchSearch"]);
                    const matchTypes = filtresActifs.types.length === 0 || filtresActifs.types.some({
                        "TableauLieux.useMemo[lieuxFiltres]": (t)=>lieu.types.includes(t)
                    }["TableauLieux.useMemo[lieuxFiltres]"]);
                    const matchVilles = filtresActifs.villes.length === 0 || filtresActifs.villes.includes(lieu.ville);
                    return matchSearch && matchTypes && matchVilles;
                }
            }["TableauLieux.useMemo[lieuxFiltres]"]);
        }
    }["TableauLieux.useMemo[lieuxFiltres]"], [
        lieux,
        currentInput,
        validatedChips,
        filtresActifs
    ]);
    // Trier les lieux
    const lieuxTries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableauLieux.useMemo[lieuxTries]": ()=>{
            if (!sortConfig.key) return lieuxFiltres;
            return [
                ...lieuxFiltres
            ].sort({
                "TableauLieux.useMemo[lieuxTries]": (a, b)=>{
                    let aValue, bValue;
                    if (sortConfig.key === 'nom') {
                        aValue = a.nom;
                        bValue = b.nom;
                    } else if (sortConfig.key === 'types') {
                        aValue = a.types.join(', ');
                        bValue = b.types.join(', ');
                    } else if (sortConfig.key === 'ville') {
                        aValue = a.ville;
                        bValue = b.ville;
                    }
                    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                    return 0;
                }
            }["TableauLieux.useMemo[lieuxTries]"]);
        }
    }["TableauLieux.useMemo[lieuxTries]"], [
        lieuxFiltres,
        sortConfig
    ]);
    const handleSort = (key)=>{
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({
            key,
            direction
        });
    };
    const getSortIcon = (key)=>{
        if (sortConfig.key !== key) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpDown$3e$__["ArrowUpDown"], {
                size: 16,
                className: "text-gray-400"
            }, void 0, false, {
                fileName: "[project]/components/TableauLieux.jsx",
                lineNumber: 337,
                columnNumber: 14
            }, this);
        }
        return sortConfig.direction === 'asc' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
            size: 16,
            className: "text-blue-600"
        }, void 0, false, {
            fileName: "[project]/components/TableauLieux.jsx",
            lineNumber: 340,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
            size: 16,
            className: "text-blue-600"
        }, void 0, false, {
            fileName: "[project]/components/TableauLieux.jsx",
            lineNumber: 341,
            columnNumber: 9
        }, this);
    };
    const removeChip = (chipToRemove)=>{
        setValidatedChips(validatedChips.filter((c)=>c !== chipToRemove));
    };
    const clearAll = ()=>{
        setValidatedChips([]);
        setCurrentInput('');
        setShowSuggestions(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-sm overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: inputRef,
                                    className: "relative border rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent min-h-[42px] flex flex-wrap items-center gap-2 p-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "text-gray-400 flex-shrink-0",
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this),
                                        chipsAnalysis.map((chip, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-medium transition-all",
                                                style: {
                                                    backgroundColor: chip.color,
                                                    color: chip.type === 'unknown' ? '#9CA3AF' : '#202020',
                                                    border: chip.type === 'unknown' ? '1px dashed #D1D5DB' : 'none'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: chip.word
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TableauLieux.jsx",
                                                        lineNumber: 378,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeChip(chip.word),
                                                        className: "hover:opacity-70 transition-opacity",
                                                        "aria-label": `Retirer ${chip.word}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TableauLieux.jsx",
                                                            lineNumber: 384,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TableauLieux.jsx",
                                                        lineNumber: 379,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/components/TableauLieux.jsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: currentInput,
                                            onChange: (e)=>setCurrentInput(e.target.value),
                                            onKeyDown: handleKeyDown,
                                            className: "flex-1 min-w-[120px] outline-none bg-transparent",
                                            placeholder: chipsAnalysis.length === 0 ? "Rechercher par nom, type ou ville..." : ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this),
                                        (validatedChips.length > 0 || currentInput) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: clearAll,
                                            className: "text-gray-400 hover:text-gray-600 flex-shrink-0",
                                            "aria-label": "Tout effacer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/components/TableauLieux.jsx",
                                                lineNumber: 405,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TableauLieux.jsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this),
                                showSuggestions && suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: suggestionsRef,
                                    className: "absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-64 overflow-y-auto",
                                    children: suggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>validateChip(suggestion.value),
                                            className: `
                      w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-2
                      ${index === selectedSuggestionIndex ? 'bg-blue-50' : ''}
                    `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-3 h-3 rounded-full flex-shrink-0",
                                                    style: {
                                                        backgroundColor: suggestion.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TableauLieux.jsx",
                                                    lineNumber: 425,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1",
                                                    children: suggestion.value
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TableauLieux.jsx",
                                                    lineNumber: 429,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-400 capitalize",
                                                    children: suggestion.type
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TableauLieux.jsx",
                                                    lineNumber: 430,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 417,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/TableauLieux.jsx",
                                    lineNumber: 412,
                                    columnNumber: 15
                                }, this),
                                (validatedChips.length > 0 || currentInput) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-3 text-xs text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block w-3 h-3 rounded-full",
                                                            style: {
                                                                backgroundColor: '#60A5FA'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TableauLieux.jsx",
                                                            lineNumber: 441,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Ville"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/TableauLieux.jsx",
                                                    lineNumber: 440,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block w-3 h-3 rounded-full bg-purple-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TableauLieux.jsx",
                                                            lineNumber: 445,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Type"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/TableauLieux.jsx",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block w-3 h-3 rounded-full",
                                                            style: {
                                                                backgroundColor: '#34D399'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TableauLieux.jsx",
                                                            lineNumber: 449,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Nom"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/TableauLieux.jsx",
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block w-3 h-3 rounded-full border border-dashed border-gray-400",
                                                            style: {
                                                                backgroundColor: '#E5E7EB'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/TableauLieux.jsx",
                                                            lineNumber: 453,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Non trouvé"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/TableauLieux.jsx",
                                                    lineNumber: 452,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 439,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: [
                                                "💡 ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    className: "px-1 py-0.5 bg-gray-100 border rounded text-xs",
                                                    children: "Tab"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TableauLieux.jsx",
                                                    lineNumber: 458,
                                                    columnNumber: 22
                                                }, this),
                                                " ou ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    className: "px-1 py-0.5 bg-gray-100 border rounded text-xs",
                                                    children: "↵"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TableauLieux.jsx",
                                                    lineNumber: 458,
                                                    columnNumber: 99
                                                }, this),
                                                " pour valider • ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    className: "px-1 py-0.5 bg-gray-100 border rounded text-xs",
                                                    children: "↑↓"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TableauLieux.jsx",
                                                    lineNumber: 458,
                                                    columnNumber: 186
                                                }, this),
                                                " pour naviguer"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 457,
                                            columnNumber: 17
                                        }, this),
                                        isIncompletePrefix(currentInput.trim()) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-blue-600",
                                            children: [
                                                'ℹ️ Continuez à taper pour compléter "',
                                                currentInput.trim(),
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 461,
                                            columnNumber: 19
                                        }, this),
                                        chipsAnalysis.some((c)=>c.type === 'unknown') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-orange-600",
                                            children: "⚠️ Certains termes ne correspondent à aucun résultat"
                                        }, void 0, false, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 466,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TableauLieux.jsx",
                                    lineNumber: 438,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TableauLieux.jsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-500 whitespace-nowrap pt-2",
                            children: [
                                lieuxTries.length,
                                " lieu",
                                lieuxTries.length > 1 ? 'x' : '',
                                " affiché",
                                lieuxTries.length > 1 ? 's' : '',
                                lieux.length !== lieuxTries.length && ` sur ${lieux.length} au total`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TableauLieux.jsx",
                            lineNumber: 474,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TableauLieux.jsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TableauLieux.jsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-100 border-b",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('nom'),
                                        className: "text-left px-6 py-3 font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                "Nom",
                                                getSortIcon('nom')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/TableauLieux.jsx",
                                        lineNumber: 486,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('types'),
                                        className: "text-left px-6 py-3 font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                "Type de lieux",
                                                getSortIcon('types')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/TableauLieux.jsx",
                                        lineNumber: 495,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort('ville'),
                                        className: "text-left px-6 py-3 font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                "Ville",
                                                getSortIcon('ville')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 508,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/TableauLieux.jsx",
                                        lineNumber: 504,
                                        columnNumber: 15
                                    }, this),
                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-center px-6 py-3 font-semibold text-gray-700",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TableauLieux.jsx",
                                        lineNumber: 514,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TableauLieux.jsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TableauLieux.jsx",
                            lineNumber: 484,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: lieuxTries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: isAdmin ? "4" : "3",
                                    className: "text-center py-12 text-gray-500",
                                    children: lieux.length === 0 ? 'Aucun lieu dans la base de données.' : 'Aucun résultat ne correspond à vos filtres.'
                                }, void 0, false, {
                                    fileName: "[project]/components/TableauLieux.jsx",
                                    lineNumber: 521,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/TableauLieux.jsx",
                                lineNumber: 520,
                                columnNumber: 15
                            }, this) : lieuxTries.map((lieu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 font-medium cursor-pointer hover:text-blue-600 transition-colors",
                                            onClick: ()=>onLieuClick(lieu),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BoutonFavori$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        lieu: lieu,
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TableauLieux.jsx",
                                                        lineNumber: 535,
                                                        columnNumber: 23
                                                    }, this),
                                                    lieu.nom,
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$helper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNew"])(lieu.created_at) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-green-500 text-white text-xs font-bold px-2 py-1 rounded",
                                                        children: "NOUVEAU"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TableauLieux.jsx",
                                                        lineNumber: 538,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/TableauLieux.jsx",
                                                lineNumber: 534,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 530,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1",
                                                children: lieu.types.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getColorForType"])(type),
                                                            color: '#202020ff'
                                                        },
                                                        className: "px-2 py-1 rounded text-sm",
                                                        children: type
                                                    }, type, false, {
                                                        fileName: "[project]/components/TableauLieux.jsx",
                                                        lineNumber: 547,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/TableauLieux.jsx",
                                                lineNumber: 545,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 544,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: lieu.ville
                                        }, void 0, false, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 560,
                                            columnNumber: 19
                                        }, this),
                                        isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onEdit(lieu),
                                                        className: "text-blue-600 hover:text-blue-800 font-medium",
                                                        children: "Modifier"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TableauLieux.jsx",
                                                        lineNumber: 564,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onDelete(lieu.id, lieu.ville),
                                                        className: "text-red-600 hover:text-red-800 font-medium",
                                                        children: "Supprimer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TableauLieux.jsx",
                                                        lineNumber: 570,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/TableauLieux.jsx",
                                                lineNumber: 563,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/TableauLieux.jsx",
                                            lineNumber: 562,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, lieu.id, true, {
                                    fileName: "[project]/components/TableauLieux.jsx",
                                    lineNumber: 529,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/TableauLieux.jsx",
                            lineNumber: 518,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TableauLieux.jsx",
                    lineNumber: 483,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TableauLieux.jsx",
                lineNumber: 482,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TableauLieux.jsx",
        lineNumber: 355,
        columnNumber: 5
    }, this);
}
_s(TableauLieux, "T2qU5Q+xuVX+ccWRjmSJgOhdE+c=");
_c = TableauLieux;
var _c;
__turbopack_context__.k.register(_c, "TableauLieux");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ContributionsAdmin.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContributionsAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ContributionsAdmin() {
    _s();
    const [contributions, setContributions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const TAG_COLORS = [
        "#9FFFCA",
        "#FFAEFF",
        "#FFAC88",
        "#C6BBFF",
        "#F9FFBD",
        "#A8FFD8",
        "#FC9F9F",
        "#FF8FD4",
        "#FFB7E3",
        "#FFB39A",
        "#FFD1B8",
        "#B8C7FF",
        "#D6D0FF",
        "#FFF3A0",
        "#EFFF9F",
        "#8FD6FF",
        "#AEE8FF",
        "#BFF2E8",
        "#FFDDEB"
    ];
    function getColorForType(type) {
        let hash = 0;
        for(let i = 0; i < type.length; i++){
            hash = type.charCodeAt(i) + ((hash << 5) - hash);
        }
        return TAG_COLORS[Math.abs(hash) % TAG_COLORS.length];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContributionsAdmin.useEffect": ()=>{
            loadContributions();
        }
    }["ContributionsAdmin.useEffect"], []);
    const loadContributions = async ()=>{
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contributions').select('*').eq('statut', 'en_attente').order('created_at', {
            ascending: false
        });
        if (!error && data) {
            setContributions(data);
        }
        setLoading(false);
    };
    const startEditing = (contribution)=>{
        setEditingId(contribution.id);
        setEditForm({
            nom_lieu: contribution.nom_lieu,
            types_de_lieux: contribution.types_de_lieux,
            ville: contribution.ville,
            description: contribution.description || '',
            email: contribution.email || ''
        });
    };
    const cancelEditing = ()=>{
        setEditingId(null);
        setEditForm(null);
    };
    const saveEdits = async (id)=>{
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contributions').update({
            nom_lieu: editForm.nom_lieu,
            types_de_lieux: editForm.types_de_lieux,
            ville: editForm.ville,
            description: editForm.description,
            email: editForm.email
        }).eq('id', id);
        if (!error) {
            alert('✅ Modifications sauvegardées');
            setEditingId(null);
            setEditForm(null);
            loadContributions();
        } else {
            alert('Erreur : ' + error.message);
        }
    };
    const validerContribution = async (contribution)=>{
        if (!confirm(`Valider et publier "${contribution.nom_lieu}" ?`)) return;
        try {
            // Ajouter le lieu
            const typesArray = contribution.types_de_lieux.split(',').map((t)=>t.trim());
            const { error: lieuError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('lieux').insert([
                {
                    nom: contribution.nom_lieu,
                    types: typesArray,
                    ville: contribution.ville,
                    description: contribution.description,
                    website: null,
                    instagram: null
                }
            ]);
            if (lieuError) throw lieuError;
            // Mettre à jour le statut → déclenche l'email
            const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contributions').update({
                statut: 'valide'
            }).eq('id', contribution.id);
            if (updateError) throw updateError;
            alert('✅ Contribution validée ! Email envoyé.');
            loadContributions();
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur : ' + error.message);
        }
    };
    const rejeterContribution = async (id)=>{
        if (!confirm('Rejeter cette contribution ?')) return;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contributions').update({
            statut: 'rejete'
        }).eq('id', id);
        if (!error) {
            alert('Contribution rejetée');
            loadContributions();
        }
    };
    if (loading) return null;
    if (contributions.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-orange-50 border-2 border-orange-300 rounded-lg p-4 mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setExpanded(!expanded),
                className: "w-full flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                className: "text-orange-600",
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/components/ContributionsAdmin.jsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-orange-900",
                                children: [
                                    "Contributions en attente (",
                                    contributions.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ContributionsAdmin.jsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContributionsAdmin.jsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/components/ContributionsAdmin.jsx",
                        lineNumber: 148,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/components/ContributionsAdmin.jsx",
                        lineNumber: 148,
                        columnNumber: 47
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContributionsAdmin.jsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: contributions.map((contrib)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border border-orange-200 rounded-lg p-4",
                        children: editingId === contrib.id ? // Mode édition
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Nom du lieu"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 159,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editForm.nom_lieu,
                                            onChange: (e)=>setEditForm({
                                                    ...editForm,
                                                    nom_lieu: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border rounded-lg text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 160,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 158,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Types (séparés par virgules)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 169,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editForm.types_de_lieux,
                                            onChange: (e)=>setEditForm({
                                                    ...editForm,
                                                    types_de_lieux: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border rounded-lg text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 170,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 168,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Ville"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 179,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editForm.ville,
                                            onChange: (e)=>setEditForm({
                                                    ...editForm,
                                                    ville: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border rounded-lg text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 180,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 178,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 189,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: editForm.description,
                                            onChange: (e)=>setEditForm({
                                                    ...editForm,
                                                    description: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border rounded-lg text-sm",
                                            rows: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 190,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 188,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 199,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: editForm.email,
                                            onChange: (e)=>setEditForm({
                                                    ...editForm,
                                                    email: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border rounded-lg text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 200,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 198,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>saveEdits(contrib.id),
                                            className: "bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                                    lineNumber: 213,
                                                    columnNumber: 23
                                                }, this),
                                                "Sauvegarder"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 209,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: cancelEditing,
                                            className: "bg-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm hover:bg-gray-400",
                                            children: "Annuler"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 216,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 208,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ContributionsAdmin.jsx",
                            lineNumber: 157,
                            columnNumber: 17
                        }, this) : // Mode lecture
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold text-gray-800",
                                    children: contrib.nom_lieu
                                }, void 0, false, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 227,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5 my-2",
                                    children: contrib.types_de_lieux.split(',').map((type, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                backgroundColor: getColorForType(type.trim()),
                                                color: '#202020ff'
                                            },
                                            className: "px-2 py-0.5 rounded-full text-xs",
                                            children: type.trim()
                                        }, i, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 230,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 228,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "📍 ",
                                        contrib.ville
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 239,
                                    columnNumber: 19
                                }, this),
                                contrib.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: contrib.description
                                }, void 0, false, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 241,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mt-2 text-xs text-gray-500",
                                    children: [
                                        contrib.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                                    lineNumber: 246,
                                                    columnNumber: 25
                                                }, this),
                                                contrib.email
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 245,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: new Date(contrib.created_at).toLocaleDateString('fr-FR')
                                        }, void 0, false, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 250,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 243,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mt-3 pt-3 border-t",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>startEditing(contrib),
                                            className: "bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                                    lineNumber: 260,
                                                    columnNumber: 23
                                                }, this),
                                                "Modifier"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 256,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>validerContribution(contrib),
                                            className: "bg-green-600 text-white px-3 py-1.5 rounded text-sm hover:bg-green-700 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                                    lineNumber: 267,
                                                    columnNumber: 23
                                                }, this),
                                                "Valider"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 263,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>rejeterContribution(contrib.id),
                                            className: "bg-red-600 text-white px-3 py-1.5 rounded text-sm hover:bg-red-700 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                                    lineNumber: 274,
                                                    columnNumber: 23
                                                }, this),
                                                "Rejeter"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ContributionsAdmin.jsx",
                                            lineNumber: 270,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ContributionsAdmin.jsx",
                                    lineNumber: 255,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ContributionsAdmin.jsx",
                            lineNumber: 226,
                            columnNumber: 17
                        }, this)
                    }, contrib.id, false, {
                        fileName: "[project]/components/ContributionsAdmin.jsx",
                        lineNumber: 154,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ContributionsAdmin.jsx",
                lineNumber: 152,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContributionsAdmin.jsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_s(ContributionsAdmin, "p3QpB93s7YEhQOjS5cZzv5Atr2U=");
_c = ContributionsAdmin;
var _c;
__turbopack_context__.k.register(_c, "ContributionsAdmin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLieux$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useLieux.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVilles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useVilles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useCategories.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MainMenu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ModalLogin$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ModalLogin.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SidebarLieu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SidebarLieu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SidebarEditLieu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SidebarEditLieu.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BarreAdmin$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BarreAdmin.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FiltresLieux$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FiltresLieux.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TableauLieux$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TableauLieux.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContributionsAdmin$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ContributionsAdmin.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    // 🔐 Hooks de données
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const lieuxData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLieux$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLieux"])();
    const villesData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVilles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVilles"])();
    const categoriesData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"])();
    // 🎨 États UI locaux
    const [selectedLieu, setSelectedLieu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lieuToEdit, setLieuToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showEditSidebar, setShowEditSidebar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filtresActifs, setFiltresActifs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        types: [],
        villes: []
    });
    // 📝 Handlers
    const handleEdit = (lieu)=>{
        setLieuToEdit(lieu);
        setShowEditSidebar(true);
    };
    const handleAdd = ()=>{
        setLieuToEdit(null);
        setShowEditSidebar(true);
    };
    const handleDelete = async (id, ville)=>{
        if (!confirm('Supprimer ce lieu ?')) return;
        try {
            await lieuxData.supprimerLieu(id);
            // Vérifier si la ville a encore des lieux
            const lieuxRestants = lieuxData.lieux.filter((l)=>l.ville === ville && l.id !== id);
            if (lieuxRestants.length === 0) {
                await villesData.supprimerVille(ville);
            }
            alert('Lieu supprimé !');
        } catch (error) {
            alert('Erreur : ' + error.message);
        }
    };
    const handleCloseSidebar = ()=>{
        setShowEditSidebar(false);
        setLieuToEdit(null);
    };
    // Loading state
    if (auth.loading || lieuxData.loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl text-gray-600",
                children: "Chargement..."
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.js",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[95%] max-w-[95rem] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-sm p-6 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl font-bold text-gray-800",
                                            children: "Hexa Index"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-gray-800",
                                            children: "Index de ressources pour design·euse·r·s graphiques"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        auth.isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-green-600 mt-1",
                                            children: "Mode administrateur"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BarreAdmin$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    auth: auth,
                                    lieuxData: lieuxData,
                                    villesData: villesData,
                                    categoriesData: categoriesData,
                                    onAddClick: handleAdd
                                }, void 0, false, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                auth.isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContributionsAdmin$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 106,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FiltresLieux$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    categories: categoriesData.categories,
                    villes: villesData.villes,
                    filtresActifs: filtresActifs,
                    setFiltresActifs: setFiltresActifs
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TableauLieux$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    lieux: lieuxData.lieux,
                    filtresActifs: filtresActifs,
                    onLieuClick: setSelectedLieu,
                    isAdmin: auth.isAdmin,
                    onEdit: handleEdit,
                    onDelete: handleDelete
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ModalLogin$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    auth: auth
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SidebarLieu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    lieu: selectedLieu,
                    onClose: ()=>setSelectedLieu(null),
                    isAdmin: auth.isAdmin,
                    onEdit: handleEdit,
                    onDelete: handleDelete
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SidebarEditLieu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    show: showEditSidebar,
                    onClose: handleCloseSidebar,
                    lieuToEdit: lieuToEdit,
                    lieuxData: lieuxData,
                    villesData: villesData,
                    categoriesData: categoriesData
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.js",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(Home, "EfgpDPxTlngEQU9lMOGNQL4d0o0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useLieux$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLieux"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useVilles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVilles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useCategories$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategories"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_922641da._.js.map