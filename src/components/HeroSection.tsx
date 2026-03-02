import { motion } from "framer-motion";
import { Zap, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/logo-hdmobix.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={logoImg}
            alt="HD Mobix Logo"
            className="w-32 h-32 md:w-44 md:h-44 rounded-full mx-auto object-cover border-2 border-primary/30 glow-box"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Mobilidade Elétrica
          <br />
          <span className="text-gradient">com a cara do Rio</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Sustentável, sem combustível e sem complicação. Conheça as motos e scooters elétricas que estão transformando o jeito carioca de se locomover.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProducts}
            className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-semibold text-lg hover:shadow-[0_0_30px_hsl(96_100%_66%/0.4)] transition-all duration-300 hover:scale-105"
          >
            <Zap size={20} />
            Ver Produtos
          </button>
          <button
            onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 border border-primary/30 text-foreground px-8 py-4 rounded-full font-display font-semibold text-lg hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
          >
            Fale Conosco
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="text-primary" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
