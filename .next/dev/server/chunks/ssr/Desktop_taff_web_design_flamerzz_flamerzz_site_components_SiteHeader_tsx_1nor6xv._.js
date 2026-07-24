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
    const playSound = (soundPath)=>{
        const audio = new Audio(soundPath);
        audio.play().catch((error)=>{
            console.error("Erreur lors de la lecture du son :", error);
        });
    };
    const handleNavClick = (soundPath)=>{
        playSound(soundPath);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex flex-col w-full items-center justify-between bg-gradient-to-b from-gray-800 to-black p-4 shadow-2xl border-b-4 border-yellow-400 h-fitcontent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center w-70 mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/visual_assets/flamerz_logo.png",
                        alt: "Flamerz Logo",
                        className: "drop-shadow-[0_0_10px_#FFD700] transform hover:scale-105 transition-transform duration-300"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "md:hidden font-body text-sm uppercase tracking-wide absolute top-6 left-4 bg-yellow-400 text-black px-3 py-1 rounded border-2 border-black hover:bg-yellow-300 transition-colors",
                onClick: ()=>setMenuOpen((v)=>!v),
                "aria-expanded": menuOpen,
                "aria-controls": "mobile-nav",
                children: menuOpen ? "Fermer" : "Menu"
            }, void 0, false, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/panier",
                className: "md:hidden font-body text-sm uppercase tracking-wide absolute top-6 right-4 bg-yellow-400 text-black px-3 py-1 rounded border-2 border-black hover:bg-yellow-300 transition-colors",
                children: "Panier"
            }, void 0, false, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "hidden md:flex w-full justify-between items-center px-8  bg-yellow-800 h-32",
                children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center group h-full",
                        onClick: ()=>handleNavClick(link.sound),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-40 h-20 flex items-center justify-center bg-yellow-400 border-2 border-black rounded-lg p-2 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: link.image,
                                    alt: link.label,
                                    className: "w-full h-full object-contain drop-shadow-[0_0_5px_#000000] group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-sm uppercase tracking-wider mt-2 text-yellow-400 drop-shadow-[0_0_2px_#000000] group-hover:text-white transition-colors",
                                children: link.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, link.href, true, {
                        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "mobile-nav",
                className: "md:hidden flex flex-col border-t-2 border-yellow-400 bg-black/80 w-full mt-4",
                children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: "px-6 py-4 border-b-2 border-yellow-400 font-display text-xl text-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors",
                        onClick: (e)=>{
                            e.preventDefault();
                            handleNavClick(link.sound);
                            setMenuOpen(false);
                        },
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_taff_web_design_flamerzz_flamerzz_site_components_SiteHeader_tsx_1nor6xv._.js.map