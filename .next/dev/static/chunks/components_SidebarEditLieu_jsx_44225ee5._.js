(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
_s(SidebarEditLieu, "mLQr60cmEwKZKefhk055gvKowrA=");
_c = SidebarEditLieu;
var _c;
__turbopack_context__.k.register(_c, "SidebarEditLieu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_SidebarEditLieu_jsx_44225ee5._.js.map