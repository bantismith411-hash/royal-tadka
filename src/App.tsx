import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Clock, Utensils, Wind, Truck, 
  PartyPopper, Facebook, Instagram, Menu, X, ChevronRight,
  Star, Coffee, Baby, MessageCircle, CheckCircle, Sun, Moon
} from 'lucide-react';

const IMAGES = [
  "https://images.squarespace-cdn.com/content/v1/570a72d222482e7442eda206/6f3b5a32-cd75-4e09-abff-18a0257db569/annette-dining-room-hero.jpg",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepX7RAmFK0rYikkVk5ZldMJ-hxXSDLKjhXc5QF5JIhUvRB1MabrYCthsC6s9i-8aFdENswhHhb5T5Dr32dtrcgQMFG3Wikk2cYospKeOKm13N8qK34jtboQJV6rX8r7rGlHA_Uk=s2048",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweodcTVUGlq44RVSz0UXQKh9hGSDY3i6x3mQcZbNR_qduGMF2cUjDndn6q33BsjTLPvAARSligCcQiBILuUXIKhVbPcdIoqZZyJKiNF4nE48DyNjNyzrxCwlwNdofbC_Z9Ucx1d6hR51ZB3O=s2048",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqoZ8_J3vNgae0PVCsxjo9ZCdbgb1KV9HPiSTmzSNDbOZuAJ3Qm9MItzhUU8e7uBUKIDjzS0vfgwxoT6f-ZEioi6QwwvuUXFPoSR-0e45lSiyVr2sjrTOiz1MsfOrVKNDEu8VjRlw=s2048",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwep3AD2fmwlbF6TEYr65GJeQblEVzJoagOknBjzuYWq_AXetpP6Ef8Q4qG7jjY3spKoHqeQYb3uIpAWyLG8v2_OIE-XabNE_aPiik4TM8LONFLp_G28p6ytW1KqJ3H3yAtiBTbRAzA=s2048",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweorjpRPxEbt2lDDIdarscsYvE4AKmx4mW07v6NkBYuSTNZypW4-7xD8fZUb__HhOUNu65_KfEChfeUAeAS7MlHqmqeAoL_hN3-R23HtNhlQQzRB8jKs-uQjlcdLJqSnhd3GcUKv=s2048",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoFqpdO1qbu8SHDYGdCh5WGtbNYHdrrR3NozME45eW6BruMZ0Vk4L5Kn7-SFCxUJb_WwGG1NsbKyIv5wmuW7IG4yBLWGJCNuqlWBWFlfcZXA_y0Hx_IftozlmmneIbuEfVMUy2RyQ=s2048"
];

const FEATURES = [
  { icon: Wind, title: "Fully AC", desc: "Comfortable dining environment" },
  { icon: Utensils, title: "Veg & Non-Veg", desc: "Wide variety of dishes" },
  { icon: Truck, title: "Free Delivery", desc: "Hot food at your doorstep" },
  { icon: PartyPopper, title: "Kitty Parties", desc: "Perfect venue for celebrations" },
];

const SERVICES = [
  { icon: Star, title: "All You Can Eat", desc: "Unlimited buffet options available" },
  { icon: Coffee, title: "Happy-Hour Food", desc: "Special discounts during happy hours" },
  { icon: Baby, title: "Kids' Menu", desc: "Specially curated dishes for children" },
];

const MENU_CATEGORIES = [
  {
    title: "Starters",
    items: [
      { name: "Paneer Tikka", price: "₹240", desc: "Cottage cheese marinated in yogurt and spices" },
      { name: "Chicken Tikka", price: "₹320", desc: "Boneless chicken chunks marinated in spices" },
      { name: "Crispy Corn", price: "₹180", desc: "Fried corn kernels tossed with spices" },
    ]
  },
  {
    title: "Main Course",
    items: [
      { name: "Butter Chicken", price: "₹380", desc: "Classic creamy tomato gravy with chicken" },
      { name: "Dal Makhani", price: "₹220", desc: "Slow-cooked black lentils with butter and cream" },
      { name: "Paneer Butter Masala", price: "₹280", desc: "Rich and creamy paneer curry" },
    ]
  },
  {
    title: "Breads & Rice",
    items: [
      { name: "Garlic Naan", price: "₹60", desc: "Soft flatbread topped with garlic and butter" },
      { name: "Jeera Rice", price: "₹140", desc: "Basmati rice cooked with cumin seeds" },
      { name: "Tandoori Roti", price: "₹30", desc: "Whole wheat bread baked in tandoor" },
    ]
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-brand-50 flex items-center justify-center p-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-4">Thank You!</h2>
          <p className="text-zinc-600 mb-8 leading-relaxed">
            Your table request has been initiated. We have opened WhatsApp to send your details. We will confirm your reservation shortly.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'dark bg-zinc-950 text-zinc-100' : 'bg-brand-50 text-zinc-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center gap-2">
              <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-brand-600 dark:text-brand-500' : 'text-white drop-shadow-md'}`}>
                Royal Tadka
              </span>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#menu" className={`font-medium hover:text-brand-500 transition-colors ${isScrolled ? 'text-zinc-700 dark:text-zinc-200' : 'text-white drop-shadow-md'}`}>Menu</a>
              <a href="#services" className={`font-medium hover:text-brand-500 transition-colors ${isScrolled ? 'text-zinc-700 dark:text-zinc-200' : 'text-white drop-shadow-md'}`}>Services</a>
              <a href="#gallery" className={`font-medium hover:text-brand-500 transition-colors ${isScrolled ? 'text-zinc-700 dark:text-zinc-200' : 'text-white drop-shadow-md'}`}>Gallery</a>
              <a href="#book" className={`font-medium hover:text-brand-500 transition-colors ${isScrolled ? 'text-zinc-700 dark:text-zinc-200' : 'text-white drop-shadow-md'}`}>Book Table</a>
              <a href="#contact" className={`font-medium hover:text-brand-500 transition-colors ${isScrolled ? 'text-zinc-700 dark:text-zinc-200' : 'text-white drop-shadow-md'}`}>Contact</a>
              <a href="#about" className={`font-medium hover:text-brand-500 transition-colors ${isScrolled ? 'text-zinc-700 dark:text-zinc-200' : 'text-white drop-shadow-md'}`}>About</a>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800' : 'text-white hover:bg-white/20'}`}
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a href="https://wa.me/918292995163" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-green-500/30 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)} 
                className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800' : 'text-white hover:bg-white/20'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-zinc-900 dark:text-white' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-zinc-900 dark:text-white' : 'text-white'}`} />
              )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-zinc-900 pt-24 px-4 pb-6 md:hidden flex flex-col gap-4"
          >
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-zinc-800 dark:text-zinc-200 p-4 border-b border-zinc-100 dark:border-zinc-800">Menu</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-zinc-800 dark:text-zinc-200 p-4 border-b border-zinc-100 dark:border-zinc-800">Services</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-zinc-800 dark:text-zinc-200 p-4 border-b border-zinc-100 dark:border-zinc-800">Gallery</a>
            <a href="#book" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-zinc-800 dark:text-zinc-200 p-4 border-b border-zinc-100 dark:border-zinc-800">Book Table</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-zinc-800 dark:text-zinc-200 p-4 border-b border-zinc-100 dark:border-zinc-800">Contact</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-zinc-800 dark:text-zinc-200 p-4 border-b border-zinc-100 dark:border-zinc-800">About</a>
            <div className="mt-auto flex flex-col gap-3">
              <a href="https://wa.me/918292995163" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-4 rounded-xl font-medium text-center flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a href="tel:8292995163" className="bg-zinc-100 text-zinc-800 p-4 rounded-xl font-medium text-center flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call 82929 95163
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src={IMAGES[0]} 
            alt="Royal Tadka Restaurant Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-100 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
              Welcome to Ramgarh's Finest
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
              Royal <span className="text-brand-500">Tadka</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-200 mb-10 max-w-2xl mx-auto font-light">
              Multi-Cuisine Family Restaurant offering both Veg & Non-Veg delicacies in a fully air-conditioned environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#book" className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-medium transition-all text-lg flex items-center justify-center gap-2">
                Book a Table
                <ChevronRight className="w-5 h-5" />
              </a>
              <a href="https://wa.me/918292995163" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-green-500/90 hover:bg-green-500 backdrop-blur-md border border-green-400/50 text-white px-8 py-4 rounded-full font-medium transition-all text-lg flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 dark:text-white mb-4">Our Menu</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Explore our wide variety of delicious dishes, prepared with love and the finest ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {MENU_CATEGORIES.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800"
              >
                <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-6 pb-4 border-b border-zinc-200 dark:border-zinc-800">{category.title}</h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx}>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-bold text-zinc-900 dark:text-zinc-100">{item.name}</h4>
                        <span className="font-bold text-brand-600 dark:text-brand-500">{item.price}</span>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 group"
            >
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipNnyVO0ATSGzCb7JsPxxrLwuVqx9_C9LN4nMEZ9=s2048" 
                alt="Menu Page 1" 
                className="w-full h-auto object-contain bg-zinc-100 dark:bg-zinc-900 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 group"
            >
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipM68G4lEtSlCem47637KASmckTojICPmPGn7yLB=s2048" 
                alt="Menu Page 2" 
                className="w-full h-auto object-contain bg-zinc-100 dark:bg-zinc-900 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section (About) */}
      <section id="about" className="py-20 bg-brand-50 dark:bg-zinc-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 dark:text-white mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              We are committed to providing the best dining experience with top-notch facilities and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-zinc-800 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-zinc-100 dark:border-zinc-700"
              >
                <div className="w-16 h-16 mx-auto bg-brand-100 dark:bg-brand-900/30 rounded-full flex items-center justify-center mb-6 text-brand-600 dark:text-brand-500">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Dining Options</h2>
              <p className="text-zinc-400 text-lg mb-8">
                Whether you're looking for a quick bite, a family feast, or a place to celebrate, Royal Tadka has something special for everyone.
              </p>
              
              <div className="space-y-6">
                {SERVICES.map((service, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 text-brand-500">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                      <p className="text-zinc-400">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-zinc-800 relative z-10 group">
                <img 
                  src={IMAGES[1]} 
                  alt="Delicious Food" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-600 rounded-full -z-0 blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-brand-400 rounded-full -z-0 blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-brand-50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 dark:text-white mb-4">Our Gallery</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full mb-6"></div>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Take a peek inside our restaurant and see the delightful dishes we serve.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {IMAGES.slice(1).map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl overflow-hidden group relative ${idx === 0 || idx === 3 ? 'col-span-2 md:col-span-2 aspect-video' : 'aspect-square'}`}
              >
                <img 
                  src={img} 
                  alt={`Gallery Image ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit & Book Section */}
      <section id="contact" className="py-20 bg-brand-50 dark:bg-zinc-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 dark:text-white mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Join us for an unforgettable dining experience. Find us or reserve your table in advance.
            </p>
          </div>
          
          {/* Contact Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-500 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Address</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                1st Floor, Milap Building,<br />
                Near Subhash Chowk, Main Road,<br />
                Ramgarh Cantt, Jharkhand 829122
              </p>
            </div>
            
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-500 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Contact</h3>
              <div className="flex flex-col gap-1">
                <a href="tel:8292995163" className="text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-500 transition-colors text-lg">82929 95163</a>
                <a href="tel:07542828702" className="text-zinc-600 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-500 transition-colors text-lg">075428 28702</a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-700 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-500 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">Everyday</h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">Open Everyday</p>
              <p className="text-zinc-600 dark:text-zinc-400">10:30 am – 10:30 pm</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Map */}
            <div className="h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.760773099778!2d85.51651817596205!3d23.62900749546875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f455b8c1192831%3A0x6b772274472f883f!2sRoyal%20Tadka%20Restaurant!5e0!3m2!1sen!2sin!4v1709867041234!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Tadka Location"
              ></iframe>
            </div>
            
            {/* Book a Table Form */}
            <div id="book" className="bg-white dark:bg-zinc-800 rounded-3xl shadow-xl overflow-hidden h-fit">
              <div className="bg-brand-600 text-white p-8 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-700 rounded-full blur-3xl opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif font-bold mb-2">Reserve Your Table</h3>
                  <p className="text-brand-100">Book your table in advance to avoid waiting.</p>
                </div>
              </div>
              <div className="p-8">
                <form className="space-y-5" onSubmit={(e) => { 
                  e.preventDefault(); 
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const phone = formData.get('phone');
                  const date = formData.get('date');
                  const time = formData.get('time');
                  const guests = formData.get('guests');
                  
                  const message = `Hello Royal Tadka! I would like to book a table.\n\n*Details:*\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`;
                  const whatsappUrl = `https://wa.me/918292995163?text=${encodeURIComponent(message)}`;
                  
                  window.open(whatsappUrl, '_blank');
                  e.currentTarget.reset();
                  setIsSubmitted(true);
                }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Full Name</label>
                      <input name="name" type="text" required className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Phone Number</label>
                      <input name="phone" type="tel" required className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Date</label>
                      <input name="date" type="date" required className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Time</label>
                      <input name="time" type="time" required className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Number of Guests</label>
                    <select name="guests" className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all">
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6+">6+ People</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-zinc-900 dark:bg-zinc-700 hover:bg-brand-600 dark:hover:bg-brand-600 text-white font-medium py-4 rounded-xl transition-colors mt-2 text-lg shadow-lg shadow-zinc-900/20">
                    Confirm Reservation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl font-bold text-white mb-2">Royal Tadka</h2>
              <p>Multi-Cuisine Family Restaurant</p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/royaltadka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/royaltadkarestaurant/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Royal Tadka Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
