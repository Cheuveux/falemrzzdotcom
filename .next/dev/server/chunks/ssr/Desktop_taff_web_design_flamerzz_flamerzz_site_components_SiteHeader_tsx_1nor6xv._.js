module.exports = [
"[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const NAV_LINKS = [
    {
        label: "Eshop",
        href: "/boutique/vetements",
        image: "/flamerzz_nav_icons/flamerzz_eshop.png",
        sound: "/sound_assets/eviltag flamerz og.mp3"
    },
    {
        label: "BeatStore",
        href: "/boutique/accessoires",
        image: "/flamerzz_nav_icons/flamerzz_beatstore.png",
        sound: "/sound_assets/Flamerzdotcom.mp3"
    },
    {
        label: "Radio",
        href: "/collections",
        image: "/flamerzz_nav_icons/flamerzz_radio.png",
        sound: "/sound_assets/hype flamerz low pitch.mp3"
    },
    {
        label: "Atelier",
        href: "/atelier",
        image: "/flamerzz_nav_icons/flamerzz_beatstore.png",
        sound: "/sound_assets/hype flamerz low pitch.mp3"
    }
];
function SiteHeader() {
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fonction pour jouer un son
    const playSound = (soundPath)=>{
        const audio = new Audio(soundPath);
        audio.play().catch((error)=>{
            console.error("Erreur lors de la lecture du son :", error);
        });
    };
    // Gestion du clic sur un lien de navigation
    const handleNavClick = (soundPath)=>{
        playSound(soundPath);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex flex-col items-center justify-between h-32",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "header_logo",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/visual_assets/flamerz_logo.png",
                        alt: "Flamerz Logo"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "md:hidden font-body text-sm uppercase tracking-wide absolute top-4 left-4",
                onClick: ()=>setMenuOpen((v)=>!v),
                "aria-expanded": menuOpen,
                "aria-controls": "mobile-nav",
                children: menuOpen ? "Fermer" : "Menu"
            }, void 0, false, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/panier",
                className: "md:hidden font-body text-sm uppercase tracking-wide absolute top-4 right-4",
                children: "Panier"
            }, void 0, false, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "hidden md:flex w-full justify-between px-8",
                children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: "flex flex-col items-center",
                        onClick: (e)=>{
                            e.preventDefault(); // Empêche la navigation
                            handleNavClick(link.sound);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-40 h-20 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: link.image,
                                alt: link.label,
                                className: "w-full h-full object-contain"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    }, link.href, false, {
                        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "mobile-nav",
                className: "md:hidden flex flex-col border-t border-line/70 bg-paper w-full",
                children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: "px-6 py-4 border-b border-line/40 font-display text-xl text-center",
                        onClick: (e)=>{
                            e.preventDefault(); // Empêche la navigation
                            handleNavClick(link.sound);
                            setMenuOpen(false);
                        },
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                        lineNumber: 107,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_taff_web_design_flamerzz_flamerzz_site_components_SiteHeader_tsx_1nor6xv._.js.map