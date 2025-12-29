import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    title: "Get",
    highlight: "50-80%",
    subtitle: "OFF",
    cta: "SHOP NOW",
    href: "/products?filter=sale",
    badge: "BOSS - BLING OUT SEASON SALE",
    bgColor: "from-purple-100 via-purple-50 to-pink-50",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    title: "New Year",
    highlight: "Sparkle",
    subtitle: "COLLECTION",
    cta: "Explore Now",
    href: "/products?filter=new",
    badge: "Limited Edition",
    bgColor: "from-amber-50 via-primary/10 to-rose-50",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Eternal",
    highlight: "Love",
    subtitle: "RINGS",
    cta: "View Collection",
    href: "/products?category=rings",
    badge: "Wedding Season",
    bgColor: "from-pink-50 via-rose-50 to-primary/10",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${slides[currentSlide].bgColor}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[60vh] md:min-h-[70vh] py-8 md:py-12">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center lg:text-left order-2 lg:order-1"
              >
                <span className="inline-block px-4 py-1.5 bg-primary/20 text-charcoal rounded-full text-sm font-medium mb-6">
                  {slides[currentSlide].badge}
                </span>
                
                <div className="mb-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-charcoal mb-2">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary">
                    {slides[currentSlide].highlight}
                  </p>
                  <p className="text-2xl md:text-3xl font-display text-charcoal mt-2">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>

                <Link to={slides[currentSlide].href}>
                  <Button
                    size="lg"
                    className="bg-gradient-gold text-charcoal font-semibold px-10 h-14 text-base hover:opacity-90 transition-opacity shadow-glow rounded-lg"
                  >
                    {slides[currentSlide].cta}
                  </Button>
                </Link>
              </motion.div>

              {/* Right Content - Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative flex items-center justify-center order-1 lg:order-2"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Decorative circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200/50 via-pink-200/50 to-primary/30 rounded-full blur-xl" />
                  <div className="absolute inset-4 bg-gradient-to-br from-purple-100 via-pink-100 to-primary/20 rounded-full" />
                  
                  {/* Product image */}
                  <img
                    src={slides[currentSlide].image}
                    alt="Featured jewellery"
                    className="absolute inset-8 w-auto h-auto max-w-full max-h-full object-contain z-10 drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-card/80 hover:bg-card text-charcoal rounded-full backdrop-blur-sm transition-all shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-card/80 hover:bg-card text-charcoal rounded-full backdrop-blur-sm transition-all shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-charcoal/30 w-2 hover:bg-charcoal/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Popular Product Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 left-6 hidden md:flex items-center gap-3 bg-card rounded-xl shadow-lg p-3 pr-6"
      >
        <div className="flex -space-x-1">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">💎</div>
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">💎</div>
        </div>
        <div>
          <p className="text-primary text-sm font-semibold">Silver Zircon Drop Earrings</p>
          <p className="text-xs text-muted-foreground">is our most popular product this week</p>
        </div>
      </motion.div>
    </section>
  );
}
