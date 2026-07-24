(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const NAV_LINKS = [
    {
        label: "Vêtements",
        href: "/boutique/vetements"
    },
    {
        label: "Accessoires",
        href: "/boutique/accessoires"
    },
    {
        label: "Collections",
        href: "/collections"
    },
    {
        label: "Atelier",
        href: "/atelier"
    }
];
function SiteHeader() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative z-30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-6 lg:px-10 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden font-body text-sm uppercase tracking-wide",
                        onClick: ()=>setMenuOpen((v)=>!v),
                        "aria-expanded": menuOpen,
                        "aria-controls": "mobile-nav",
                        children: menuOpen ? "Fermer" : "Menu"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "mx-auto md:mx-0 md:absolute md:left-1/2 md:-translate-x-1/2 font-display text-3xl lg:text-4xl tracking-tight",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "header_logo",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/visual_assets/flamerz_logo.png",
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/panier",
                        className: "md:hidden font-body text-sm uppercase tracking-wide",
                        children: "Panier"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex ml-auto gap-8 font-body text-sm uppercase tracking-wide",
                        children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: "relative pb-1 hover:text-brick transition-colors after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-brick after:transition-all hover:after:w-full",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "mobile-nav",
                className: "md:hidden flex flex-col border-t border-line/70 bg-paper",
                children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$taff$2f$web_design$2f$flamerzz$2f$flamerzz_site$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        className: "px-6 py-4 border-b border-line/40 font-display text-xl",
                        onClick: ()=>setMenuOpen(false),
                        children: link.label
                    }, link.href, false, {
                        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/taff/web_design/flamerzz/flamerzz_site/components/SiteHeader.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(SiteHeader, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c = SiteHeader;
var _c;
__turbopack_context__.k.register(_c, "SiteHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_taff_web_design_flamerzz_flamerzz_site_components_SiteHeader_tsx_0lasvaz._.js.map