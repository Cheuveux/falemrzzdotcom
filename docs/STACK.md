# Stack du projet

## Vue d'ensemble

```mermaid
flowchart TB
    browser["Navigateur\nInterface Flamerzz"]

    subgraph framework["Framework applicatif"]
        next["Next.js 16\nApp Router + Server Components"]
        react["React 19\nUI et interactions"]
        ts["TypeScript 5\nTypes stricts"]
    end

    subgraph routes["Routes et runtime Next.js"]
        home["app/page.tsx\nAccueil"]
        boutique["app/boutique/vetements/page.tsx\nBoutique"]
        product["app/produits/[handle]/page.tsx\nFiche produit"]
        cartpage["app/cart/page.tsx\nPanier"]
        api["app/api/cart/route.ts\nAPI panier"]
        actions["app/actions/cart.ts\nServer Actions"]
        layout["app/layout.tsx\nFonts + metadata + transitions"]
    end

    subgraph ui["Interface et expérience"]
        nav["layerNav/*\nEn-têtes et navigation"]
        visual["Hero / RetroHomeLayout / ProductGrid\nComposition visuelle"]
        commerce["AddToCartForm / CartLineItem\nActions e-commerce"]
        motion["GSAP + pageTransition\nAnimations"]
        fonts["next/font/google\nFraunces + Inter"]
    end

    subgraph data["Données et intégration e-commerce"]
        shopify["lib/shopify/*\nClient, produits, panier, formatage"]
        graphql["Shopify Storefront API\nGraphQL (cible production)"]
        mock["lib/mock-data/*.json\nDonnées locales de démonstration"]
        mapper["mappers.ts + types.ts\nNormalisation des données"]
    end

    subgraph styling["Style et outillage"]
        css["app/globals.css\nDesign tokens + CSS"]
        tailwind["Tailwind CSS 4\nClasses utilitaires"]
        postcss["PostCSS\n@tailwindcss/postcss"]
        eslint["ESLint 9\neslint-config-next"]
        npm["npm scripts\ndev / build / start / lint"]
    end

    browser --> next
    next --> react
    next --> ts
    next --> routes
    layout --> fonts
    home --> nav
    home --> visual
    boutique --> visual
    product --> commerce
    cartpage --> commerce
    routes --> ui
    commerce --> api
    commerce --> actions
    api --> shopify
    actions --> shopify
    product --> shopify
    boutique --> shopify
    shopify --> mapper
    shopify -.->|"actuellement prévu / configurable"| graphql
    shopify --> mock
    ui --> motion
    ui --> css
    css --> tailwind
    tailwind --> postcss
    npm --> eslint

    classDef current fill:#e8f0e4,stroke:#3e4b37,color:#211e19
    classDef target fill:#f5ead9,stroke:#a3462e,color:#211e19
    class mock,css,tailwind,postcss current
    class graphql target
```

## Technologies

- **Runtime et framework :** Node.js/npm, Next.js 16, React 19, TypeScript 5.
- **UI :** App Router, composants React, `next/font/google`, Fraunces et Inter.
- **Styles :** Tailwind CSS 4, PostCSS et `app/globals.css`.
- **Animations :** GSAP et transition de page maison.
- **Commerce :** abstraction `lib/shopify/`, requêtes GraphQL Storefront API prévues, données JSON locales pour le développement.
- **Qualité :** ESLint 9 avec `eslint-config-next`, vérification TypeScript via la configuration Next.