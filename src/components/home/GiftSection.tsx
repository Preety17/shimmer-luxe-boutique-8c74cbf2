import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function GiftSection() {
  return (
    <section className="py-16 md:py-24 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Gifts for Her */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-gold/90 to-rose-gold/70" />
            <div className="relative p-8 md:p-12 text-primary-foreground min-h-[300px] flex flex-col justify-end">
              <div className="mb-4 inline-flex items-center gap-2 bg-primary-foreground/20 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">For Her</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Gifts for Her
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-sm">
                Curated pieces to make her feel special. From delicate pendants to statement rings.
              </p>
              <Link to="/products?category=earrings">
                <Button className="bg-primary-foreground text-charcoal hover:bg-primary-foreground/90 font-semibold w-fit">
                  Shop Now
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Gifts for Him */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=600&fit=crop)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/70" />
            <div className="relative p-8 md:p-12 text-primary-foreground min-h-[300px] flex flex-col justify-end">
              <div className="mb-4 inline-flex items-center gap-2 bg-primary-foreground/20 w-fit px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Gift className="h-4 w-4" />
                <span className="text-sm font-medium">For Him</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Gifts for Him
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-sm">
                Bold and sophisticated pieces for the modern gentleman. Chains, rings, and more.
              </p>
              <Link to="/products?category=mens">
                <Button className="bg-primary text-charcoal hover:bg-primary/90 font-semibold w-fit">
                  Shop Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
