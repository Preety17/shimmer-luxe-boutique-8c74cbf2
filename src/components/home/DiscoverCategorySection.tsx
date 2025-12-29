import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const discoverCategories = [
  {
    id: "rings",
    name: "RINGS",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=600&fit=crop",
  },
  {
    id: "earrings",
    name: "EARRINGS",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop",
  },
  {
    id: "chains",
    name: "CHAINS",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&h=600&fit=crop",
  },
  {
    id: "pendants",
    name: "PENDANTS",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop",
  },
  {
    id: "bracelets",
    name: "BRACELETS",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=600&fit=crop",
  },
  {
    id: "sets",
    name: "SETS",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop",
  },
  {
    id: "anklets",
    name: "ANKLETS",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&h=600&fit=crop",
  },
  {
    id: "personalised",
    name: "PERSONALISED",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=600&fit=crop",
  },
];

export function DiscoverCategorySection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground italic font-display text-lg mb-2">
            Discover by
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal">
            CATEGORY
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {discoverCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/products?category=${category.id}`}
                className="group block relative overflow-hidden rounded-2xl aspect-[4/5] shadow-card hover:shadow-hover transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-primary-foreground font-semibold text-sm md:text-lg tracking-wide">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
