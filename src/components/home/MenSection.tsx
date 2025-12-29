import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function MenSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal text-primary-foreground p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[400px] lg:min-h-[600px]"
        >
          <div className="max-w-md">
            <p className="text-primary-foreground/70 tracking-widest text-sm mb-2">
              FINE JEWELLERY'S
            </p>
            <p className="text-primary-foreground/80 uppercase tracking-wide text-sm mb-4">
              BRINGS TO YOU
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-2">
              MEN
            </h2>
            <p className="text-3xl md:text-4xl font-display italic text-primary/90">
              in Silver
            </p>
          </div>
        </motion.div>

        {/* Right Content with Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-muted to-background min-h-[400px] lg:min-h-[600px]"
        >
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1000&fit=crop"
            alt="Men's Silver Jewellery"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-charcoal/30" />
          
          {/* Right side text */}
          <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-right">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-light text-charcoal mb-2">
              Strength in
            </h3>
            <p className="text-3xl md:text-5xl lg:text-6xl font-display italic text-charcoal mb-6">
              Subtle Shine
            </p>
            <Link to="/products?category=mens&metal=silver">
              <Button 
                variant="outline" 
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-primary-foreground"
              >
                SHOP NOW
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
