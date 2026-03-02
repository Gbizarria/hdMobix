import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Instagram } from "lucide-react";

import storeFront from "@/assets/store-front.jpg";
import ridingImg from "@/assets/riding-street.jpg";
import dashboardImg from "@/assets/dashboard.jpg";
import scooterSideImg from "@/assets/scooter-side.jpg";
import scooterFrontImg from "@/assets/scooter-front.jpg";
import harlleyImg from "@/assets/harlley-specs.jpg";

const instaPosts = [
  {
    image: storeFront,
    caption: "Nossa loja está de portas abertas! Venha conhecer os modelos disponíveis 🏍️⚡",
    link: "https://instagram.com/hdmobix",
  },
  {
    image: ridingImg,
    caption: "Ride the vibe pelas ruas do Rio! Liberdade e sustentabilidade em cada km 🌍",
    link: "https://instagram.com/hdmobix",
  },
  {
    image: dashboardImg,
    caption: "Painel digital completo: bateria, velocidade e modo de condução na palma da mão 📱",
    link: "https://instagram.com/hdmobix",
  },
  {
    image: scooterSideImg,
    caption: "Design sofisticado e acabamento premium. Isso é HD Mobix! ✨",
    link: "https://instagram.com/hdmobix",
  },
  {
    image: scooterFrontImg,
    caption: "Farol de LED com anel luminoso. Estilo que brilha na noite carioca 💡",
    link: "https://instagram.com/hdmobix",
  },
  {
    image: harlleyImg,
    caption: "Harlley 16 — Potência, estilo e pronta entrega. Garanta a sua! 🔥",
    link: "https://instagram.com/hdmobix",
  },
];

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="instagram" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase mb-4 block">
            Instagram
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Siga <span className="text-gradient">@hdmobix</span>
          </h2>
          <a
            href="https://instagram.com/hdmobix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-body hover:underline"
          >
            <Instagram size={20} />
            Acompanhe nossas novidades
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instaPosts.map((post, i) => (
            <motion.a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink
                    className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={28}
                  />
                </div>
              </div>
              <div className="p-4">
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
