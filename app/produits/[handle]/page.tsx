import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductByHandle, formatPrice } from "@/lib/shopify";
import AddToCartForm from "@/components/AddToCartForm";
import EshopHeader from "@/components/layerNav/EshopHeader";

export default async function ProductPage ({
	params,
} : {
	parmas: Promise<{ handle: string}>;
}) {
	const	{ handle } = await params;
	const	product = await getProductByHandle(handle);

	if (!product)
		notFound();
	return (
	<main className="bg-[#1A2C6B] min-h-screen py-16 px-6 lg:px-10">
      <EshopHeader/>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Galerie image */}
        <div className="border-4 border-black rounded-3xl overflow-hidden bg-white shadow-[8px_8px_0_#000]">
          <div className="relative aspect-square">
            <Image
              src={product.images[0].url}
              alt={product.images[0].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Détails produit */}
        <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0_#000] flex flex-col">
          <h1 className="font-black uppercase text-3xl text-[#1A2C6B] mb-3">
            {product.title}
          </h1>

          <div className="inline-flex self-start bg-[#FFD400] border-4 border-black rounded-full px-5 py-2 mb-6 -rotate-2">
            <span className="font-black text-[#E8231B] text-xl">
              {formatPrice(product.priceRange)}
            </span>
          </div>

          <p className="text-[#5c5c54] leading-relaxed mb-8">
            {product.description}
          </p>

          {!product.available && (
            <p className="text-[#E8231B] font-black uppercase mb-4">
              Actuellement épuisé
            </p>
          )}

          <AddToCartForm product={product} />
        </div>
      </div>
    </main>
	);
}