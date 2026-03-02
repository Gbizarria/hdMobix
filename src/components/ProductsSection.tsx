import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Gauge, Battery, Weight } from "lucide-react";

import dashboardImg from "@/assets/dashboard.jpg";
import scooterSideImg from "@/assets/scooter-side.jpg";
import scooterFrontImg from "@/assets/scooter-front.jpg";
import harlleyImg from "@/assets/harlley-specs.jpg";
import ridingImg from "@/assets/riding-street.jpg";

const products = [
  {
    name: "Harlley 16",
    tagline: "Potência e estilo em cada curva",
    image: harlleyImg,
    specs: [
      { icon: Zap, label: "Motor", value: "1000W" },
      { icon: Gauge, label: "Vel. Máx", value: "32 km/h" },
      { icon: Battery, label: "Autonomia", value: "50 km" },
      { icon: Weight, label: "Capacidade", value: "240 kg" },
    ],
    description: "Design robusto inspirado nas clássicas, com motor potente de 1000W, bateria de lítio 60V/20Ah e painel digital completo.",
  },
  {
    name: "Urban Rider",
    tagline: "Agilidade para o dia a dia urbano",
    image: scooterFrontImg,
    specs: [
      { icon: Zap, label: "Motor", value: "800W" },
      { icon: Gauge, label: "Vel. Máx", value: "28 km/h" },
      { icon: Battery, label: "Autonomia", value: "45 km" },
      { icon: Weight, label: "Capacidade", value: "180 kg" },
    ],
    description: "Compacta e elegante, perfeita para o trânsito carioca. Farol de LED, cesto frontal e sistema de ignição por chave.",
  },
  {
    name: "Eco Cruise",
    tagline: "Conforto e tecnologia integrados",
    image: scooterSideImg,
    specs: [
      { icon: Zap, label: "Motor", value: "1200W" },
      { icon: Gauge, label: "Vel. Máx", value: "35 km/h" },
      { icon: Battery, label: "Autonomia", value: "60 km" },
      { icon: Weight, label: "Capacidade", value: "200 kg" },
    ],
    description: "Top de linha com banco duplo, amortecedores reforçados, Bluetooth integrado e trava eletrônica antifurto.",
  },
  {
    name: "City Pulse",
    tagline: "O futuro da mobilidade urbana",
    image: dashboardImg,
    specs: [
      { icon: Zap, label: "Motor", value: "600W" },
      { icon: Gauge, label: "Vel. Máx", value: "25 km/h" },
      { icon: Battery, label: "Autonomia", value: "40 km" },
      { icon: Weight, label: "Capacidade", value: "150 kg" },
    ],
    description: "Leve, ágil e inteligente. Painel digital intuitivo com indicador de bateria, velocidade e modo de condução.",
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="produtos" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase mb-4 block">
            Nossos Produtos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Encontre sua <span className="text-gradient">parceira elétrica</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Modelos para todos os estilos. Sem CNH, sem trânsito, sem pagar estacionamento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-500"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Disponível
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-1">{product.name}</h3>
                <p className="text-primary font-body text-sm font-medium mb-4">{product.tagline}</p>
                <p className="font-body text-muted-foreground text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-4 gap-3">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="text-center bg-secondary/50 rounded-lg py-3 px-2">
                      <spec.icon className="text-primary mx-auto mb-1" size={18} />
                      <p className="text-xs text-muted-foreground">{spec.label}</p>
                      <p className="font-display font-bold text-sm">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra lifestyle image */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 relative rounded-2xl overflow-hidden"
        >
          <img src={ridingImg} alt="Riding HD Mobix" className="w-full h-64 md:h-80 object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent flex items-center">
            <div className="p-8 md:p-16 max-w-lg">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Ride the <span className="text-gradient">Vibe</span> ⚡
              </h3>
              <p className="font-body text-muted-foreground">
                Liberdade sobre duas rodas. Venha conhecer de perto na nossa loja no Rio.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
