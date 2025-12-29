import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X, MapPin, Store, ChevronDown, Truck, RotateCcw, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { AuthModal } from "@/components/auth/AuthModal";
import { products } from "@/data/products";

const mainNavLinks = [
  { 
    name: "Shop by Category", 
    href: "/products",
    hasDropdown: true,
    dropdownItems: [
      { name: "Rings", href: "/products?category=rings" },
      { name: "Earrings", href: "/products?category=earrings" },
      { name: "Pendants", href: "/products?category=pendants" },
      { name: "Bracelets", href: "/products?category=bracelets" },
      { name: "Anklets", href: "/products?category=anklets" },
      { name: "Chains", href: "/products?category=chains" },
      { name: "Sets", href: "/products?category=sets" },
    ]
  },
  { name: "SALE is Live", href: "/products?filter=sale", highlight: true },
  { name: "Fresh Drops", href: "/products?filter=new" },
  { name: "Gold Jewellery", href: "/products?metal=gold" },
  { name: "Silver Jewellery", href: "/products?metal=silver" },
  { 
    name: "Gift Store", 
    href: "/products?category=gifts",
    hasDropdown: true,
    highlight: true,
    dropdownItems: [
      { name: "Gift Store", href: "/products?category=gifts" },
      { name: "Shop by Occasion", href: "/products?filter=occasion" },
      { name: "Shop by Theme", href: "/products?filter=theme" },
      { name: "Shop by Recipient", href: "/products?filter=recipient" },
      { name: "Shop by Price", href: "/products?filter=price" },
    ]
  },
  { name: "Men in Silver", href: "/products?category=mens&metal=silver", highlight: true },
  { 
    name: "Exclusive Collections", 
    href: "/products?filter=exclusive",
    hasDropdown: true,
    dropdownItems: [
      { name: "Bridal Collection", href: "/products?filter=bridal" },
      { name: "Celebrity Picks", href: "/products?filter=celebrity" },
      { name: "Limited Edition", href: "/products?filter=limited" },
    ]
  },
  { 
    name: "More at Fine Jewellery's", 
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "About Us", href: "/about" },
      { name: "Store Locator", href: "/stores" },
      { name: "Gift Cards", href: "/gift-cards" },
    ]
  },
];

const mobileNavLinks = [
  { name: "Shop All", href: "/products" },
  { name: "Rings", href: "/products?category=rings" },
  { name: "Earrings", href: "/products?category=earrings" },
  { name: "Pendants", href: "/products?category=pendants" },
  { name: "Bracelets", href: "/products?category=bracelets" },
  { name: "Anklets", href: "/products?category=anklets" },
  { name: "Men's", href: "/products?category=mens" },
  { name: "Gift Store", href: "/products?category=gifts" },
  { name: "SALE", href: "/products?filter=sale" },
];

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isPincodeOpen, setIsPincodeOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [pincode, setPincode] = useState("");
  const [savedPincode, setSavedPincode] = useState(localStorage.getItem("deliveryPincode") || "");
  const [searchSuggestions, setSearchSuggestions] = useState<typeof products>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { totalItems: cartItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();

  useEffect(() => {
    if (searchQuery.length >= 2) {
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSearchSuggestions(filtered);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      setSearchSuggestions([]);
    }
  };

  const handleSavePincode = () => {
    if (pincode.length === 6) {
      setSavedPincode(pincode);
      localStorage.setItem("deliveryPincode", pincode);
      setIsPincodeOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-background border-b border-border py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Truck className="h-3.5 w-3.5 text-primary" />
              <span>Pan India Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-3.5 w-3.5 text-primary" />
              <span>Easy Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-3.5 w-3.5 text-primary" />
              <span>Hallmarked Jewellery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-card/98 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <h1 className="text-xl lg:text-2xl font-display font-bold text-gradient-gold">
                Fine Jewellery's
              </h1>
            </Link>

            {/* Pincode Selector - Desktop */}
            <div className="hidden lg:block relative">
              <button
                onClick={() => setIsPincodeOpen(!isPincodeOpen)}
                className="flex items-center gap-2 text-sm hover:bg-secondary px-3 py-2 rounded-lg transition-colors"
              >
                <MapPin className="h-4 w-4 text-rose-gold" />
                <div className="text-left">
                  <p className="font-medium text-xs text-muted-foreground">Where to Deliver?</p>
                  <p className="text-primary text-xs">
                    {savedPincode ? `Pincode: ${savedPincode}` : "Update Delivery Pincode"}
                  </p>
                </div>
                <ChevronDown className="h-4 w-4" />
              </button>

              <AnimatePresence>
                {isPincodeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 bg-card rounded-xl shadow-lg border border-border p-4 w-72 z-50"
                  >
                    <p className="text-sm font-medium mb-3">Enter your pincode</p>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Enter 6-digit pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                        className="flex-1"
                      />
                      <Button 
                        onClick={handleSavePincode}
                        disabled={pincode.length !== 6}
                        size="sm"
                        className="bg-gradient-gold text-charcoal"
                      >
                        Save
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Check delivery availability in your area
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl relative">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <Input
                    ref={searchInputRef}
                    type="search"
                    placeholder='Search "Pendants"'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-12 h-11 rounded-full border-border bg-secondary/50 focus:bg-card"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>

              {/* Search Suggestions */}
              <AnimatePresence>
                {searchSuggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50"
                  >
                    {searchSuggestions.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={() => {
                          setSearchQuery("");
                          setSearchSuggestions([]);
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-secondary transition-colors"
                      >
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div>
                          <p className="font-medium text-sm">{product.name}</p>
                          <p className="text-xs text-primary">₹{product.price.toLocaleString("en-IN")}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 lg:gap-3">
              {/* Mobile Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="lg:hidden hover:bg-secondary"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Stores */}
              <Link to="/stores" className="hidden lg:flex flex-col items-center gap-0.5 px-3 py-1.5 hover:bg-secondary rounded-lg transition-colors">
                <Store className="h-5 w-5" />
                <span className="text-[10px] font-medium">STORES</span>
              </Link>

              {/* Account */}
              <button
                onClick={() => setIsAuthOpen(true)}
                className="flex flex-col items-center gap-0.5 px-2 lg:px-3 py-1.5 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
                <span className="text-[10px] font-medium hidden lg:block">ACCOUNT</span>
              </button>

              {/* Wishlist */}
              <Link 
                to="/wishlist"
                className="flex flex-col items-center gap-0.5 px-2 lg:px-3 py-1.5 hover:bg-secondary rounded-lg transition-colors relative"
              >
                <Heart className="h-5 w-5" />
                <span className="text-[10px] font-medium hidden lg:block">WISHLIST</span>
                {wishlistItems > 0 && (
                  <span className="absolute -top-0.5 right-0.5 lg:right-1 h-4 w-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistItems}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link 
                to="/cart"
                className="flex flex-col items-center gap-0.5 px-2 lg:px-3 py-1.5 hover:bg-secondary rounded-lg transition-colors relative"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="text-[10px] font-medium hidden lg:block">CART</span>
                {cartItems > 0 && (
                  <span className="absolute -top-0.5 right-0.5 lg:right-1 h-4 w-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block border-t border-border/50 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-1">
              {mainNavLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 px-4 py-3 text-sm font-medium transition-colors ${
                      link.highlight 
                        ? "text-rose-gold hover:text-primary" 
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-0 bg-card rounded-xl shadow-lg border border-border py-2 min-w-[200px] z-50"
                      >
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-secondary hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Gold/Silver Toggle */}
        <div className="hidden lg:flex items-center justify-center gap-2 py-3 border-t border-border/50 bg-gradient-pearl">
          <Link
            to="/products?metal=gold"
            className="flex items-center gap-2 px-6 py-2 rounded-full border border-primary/30 bg-card hover:border-primary transition-colors"
          >
            <span className="text-primary">✦</span>
            <span className="text-sm font-medium">Gold Jewellery</span>
          </Link>
          <Link
            to="/products?metal=silver"
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-muted hover:bg-secondary transition-colors"
          >
            <span className="text-muted-foreground">◆</span>
            <span className="text-sm font-medium">Silver Jewellery</span>
          </Link>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-50 lg:hidden"
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                    setSearchSuggestions([]);
                  }}
                  className="p-2"
                >
                  <X className="h-6 w-6" />
                </button>
                <form onSubmit={handleSearch} className="flex-1">
                  <Input
                    type="search"
                    placeholder='Search "Pendants"'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                    autoFocus
                  />
                </form>
              </div>

              {/* Mobile Search Suggestions */}
              {searchSuggestions.length > 0 && (
                <div className="space-y-2">
                  {searchSuggestions.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                        setSearchSuggestions([]);
                      }}
                      className="flex items-center gap-3 p-3 bg-card rounded-lg"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-14 h-14 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-primary">₹{product.price.toLocaleString("en-IN")}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/50 z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-card z-50 lg:hidden shadow-xl overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-lg font-display font-bold text-gradient-gold">Fine Jewellery's</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Pincode in Mobile */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-rose-gold" />
                  <span className="text-muted-foreground">Deliver to:</span>
                  <button 
                    onClick={() => setIsPincodeOpen(true)}
                    className="text-primary font-medium"
                  >
                    {savedPincode || "Set Pincode"}
                  </button>
                </div>
              </div>

              <nav className="p-4 space-y-1">
                {mobileNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium ${
                      link.name === "SALE" ? "text-rose-gold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="p-4 border-t border-border">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsAuthOpen(true);
                  }}
                  className="w-full bg-gradient-gold text-charcoal"
                >
                  Login / Signup
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
