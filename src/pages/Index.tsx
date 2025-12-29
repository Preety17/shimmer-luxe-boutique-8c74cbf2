import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { DiscoverCategorySection } from "@/components/home/DiscoverCategorySection";
import { ProductSection } from "@/components/home/ProductSection";
import { MenSection } from "@/components/home/MenSection";
import { DiscoverHueSection } from "@/components/home/DiscoverHueSection";
import { CelebrateMenSection } from "@/components/home/CelebrateMenSection";
import { GiftSection } from "@/components/home/GiftSection";
import { PromoSection } from "@/components/home/PromoSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { bestSellers, newArrivals, underPrice } from "@/data/products";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <DiscoverCategorySection />
      <MenSection />
      <ProductSection
        title="Best Sellers"
        subtitle="Customer Favorites"
        products={bestSellers}
        viewAllHref="/products?filter=bestseller"
      />
      <DiscoverHueSection />
      <CelebrateMenSection />
      <ProductSection
        title="New Arrivals"
        subtitle="Fresh From Our Workshop"
        products={newArrivals}
        viewAllHref="/products?filter=new"
      />
      <GiftSection />
      <PromoSection />
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
