import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const hueCategories = [
  {
    id: "silver",
    name: "Silver",
    color: "bg-gradient-to-b from-slate-200 to-slate-400",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop",
    href: "/products?metal=silver",
  },
  {
    id: "black-rhodium",
    name: "Black Rhodium",
    color: "bg-gradient-to-b from-zinc-600 to-zinc-900",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=500&fit=crop",
    href: "/products?metal=black-rhodium",
  },
  {
    id: "gold",
    name: "Gold",
    color: "bg-gradient-to-b from-amber-300 to-amber-500",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop",
    href: "/products?metal=gold",
  },
  {
    id: "oxidised",
    name: "Oxidised Silver",
    color: "bg-gradient-to-b from-slate-400 to-slate-600",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop",
    href: "/products?metal=oxidised",
  },
];

export function DiscoverHueSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-pearl overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display">
            <span className="font-light italic text-muted-foreground">Discover</span>{" "}
            <span className="font-bold text-charcoal">Your Hue</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {hueCategories.map((hue, index) => (
            <motion.div
              key={hue.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={hue.href}
                className="group block text-center"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 bg-muted shadow-card hover:shadow-hover transition-all duration-300">
                  <img
                    src={hue.image}
                    alt={hue.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                  
                  {/* Color indicator dot */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full ${hue.color} shadow-lg border-2 border-primary-foreground`} />
                  </div>
                </div>
                <h3 className="text-lg font-display font-medium text-charcoal group-hover:text-primary transition-colors">
                  {hue.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
