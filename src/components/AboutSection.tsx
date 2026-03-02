import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Wrench, Shield, Battery } from "lucide-react";
import storeFront from "@/assets/store-front.jpg";

const features = [
  { icon: Leaf, title: "100% Sustentável", desc: "Zero emissão de poluentes. Contribua para um Rio mais limpo." },
  { icon: Battery, title: "Economia Real", desc: "Sem gasolina, sem IPVA. Economia que você sente no bolso." },
  { icon: Wrench, title: "Suporte no RJ", desc: "Manutenção e assistência técnica completa no Rio de Janeiro." },
  { icon: Shield, title: "Qualidade Garantida", desc: "Produtos com garantia e peças de reposição disponíveis." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="section-padding overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase mb-4 block">
              Quem Somos
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ride the <span className="text-gradient">Vibe</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              A <strong className="text-foreground">HD Mobix</strong> é referência em mobilidade elétrica no Rio de Janeiro. 
              Trabalhamos com motos e scooters elétricas de alta qualidade, oferecendo uma alternativa sustentável 
              e econômica para quem quer se locomover com estilo e consciência ambiental.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              🌍 Sem combustível, sem trânsito, sem pagar estacionamento. 
              Faça parte do movimento <strong className="text-primary">#VaiDeMobix</strong>
            </p>
          </motion.div>

          {/* Image + features */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img src={storeFront} alt="Loja HD Mobix" className="w-full h-72 md:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass rounded-xl p-4 hover:border-primary/40 transition-colors duration-300"
                >
                  <f.icon className="text-primary mb-2" size={24} />
                  <h3 className="font-display font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="font-body text-xs text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
