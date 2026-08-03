// scripts/test-shopify-connection.ts
// ✅ On précise explicitement le fichier à charger
import { config } from "dotenv";
config({ path: ".env.local" });

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_TOKEN;
const apiVersion = process.env.SHOPIFY_STOREFRONT_API_VERSION ?? "2026-01";

async function testConnection() {
  console.log("→ Domaine utilisé :", domain);
  console.log("→ Token présent :", token ? "oui" : "NON — vérifie ton .env.local");

  const endpoint = `https://${domain}/api/${apiVersion}/graphql.json`;

  const query = `
    query {
      shop {
        name
        primaryDomain { url }
      }
    }
  `;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token ?? "",
      },
      body: JSON.stringify({ query }),
    });

    console.log("→ Status HTTP :", res.status);

    const json = await res.json();

    if (json.errors) {
      console.error("❌ Erreurs GraphQL :", json.errors);
      return;
    }

    console.log("✅ Connexion réussie !");
    console.log("→ Nom de la boutique :", json.data.shop.name);
    console.log("→ Domaine principal :", json.data.shop.primaryDomain.url);
  } catch (err) {
    console.error("❌ Erreur réseau/fetch :", err);
  }
}

testConnection();