import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PromoSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Under ₹999 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden bg-cream p-8 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <span className="text-primary font-bold text-3xl">Under ₹999</span>
              <h3 className="text-xl font-display font-semibold mt-2 mb-3">
                Affordable Elegance
              </h3>
              <p className="text-muted-foreground text-sm">
                Beautiful pieces that won't break the bank
              </p>
            </div>
            <Link to="/products?maxPrice=999">
              <Button variant="outline" className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Shop Now
              </Button>
            </Link>
          </motion.div>

          {/* Featured Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden md:col-span-2"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1000&h=500&fit=crop)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-transparent" />
            <div className="relative p-8 md:p-12 text-primary-foreground min-h-[280px] flex flex-col justify-center">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-2">
                Limited Time Offer
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-3">
                Up to 40% Off
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Exclusive discounts on our premium diamond collection. Don't miss out!
              </p>
              <Link to="/products">
                <Button className="bg-gradient-gold text-charcoal font-semibold w-fit hover:opacity-90">
                  Shop the Sale
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
