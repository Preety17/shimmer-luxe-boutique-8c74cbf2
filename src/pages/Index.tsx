import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { ProductSection } from "@/components/home/ProductSection";
import { GiftSection } from "@/components/home/GiftSection";
import { PromoSection } from "@/components/home/PromoSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { bestSellers, newArrivals, underPrice } from "@/data/products";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <CategorySection />
      <ProductSection
        title="Best Sellers"
        subtitle="Customer Favorites"
        products={bestSellers}
        viewAllHref="/products?filter=bestseller"
      />
      <PromoSection />
      <ProductSection
        title="New Arrivals"
        subtitle="Fresh From Our Workshop"
        products={newArrivals}
        viewAllHref="/products?filter=new"
      />
      <GiftSection />
      <ProductSection
        title="Under ₹5,000"
        subtitle="Affordable Luxury"
        products={underPrice}
        viewAllHref="/products?maxPrice=5000"
      />
    </Layout>
  );
};

export default Index;
