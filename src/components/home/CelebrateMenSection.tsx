import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const giftCategories = [
  {
    id: "brothers",
    name: "BROTHERS",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop",
    href: "/products?filter=brothers",
  },
  {
    id: "husbands",
    name: "HUSBANDS",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    href: "/products?filter=husbands",
  },
  {
    id: "couples",
    name: "COUPLE GIFTS",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=500&fit=crop",
    href: "/products?filter=couples",
  },
  {
    id: "boyfriends",
    name: "BOYFRIENDS",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    href: "/products?filter=boyfriends",
  },
];

export function CelebrateMenSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-pearl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal mb-2">
            Celebrate Men
          </h2>
          <p className="text-muted-foreground font-display text-lg">
            A Gifting Guide For Them
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {giftCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={category.href}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 shadow-card hover:shadow-hover transition-all duration-300 bg-card border-4 border-primary-foreground">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <span className="inline-block px-6 py-2 bg-primary/20 rounded-full text-sm font-semibold text-charcoal tracking-wide group-hover:bg-primary group-hover:text-charcoal transition-colors">
                    {category.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
