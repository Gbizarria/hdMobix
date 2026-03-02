import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="onde-estamos" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase mb-4 block">
            Onde Estamos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Venha nos <span className="text-gradient">visitar</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">Endereço</h3>
                <p className="font-body text-muted-foreground">
                  Estrada do Pontal 6725, Loja D<br />
                  Rio de Janeiro, RJ — CEP: 22790-877
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">Horário</h3>
                <p className="font-body text-muted-foreground">
                  Seg a Sex: 9h às 18h<br />
                  Sáb: 9h às 14h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">Contato</h3>
                <p className="font-body text-muted-foreground">
                  Instagram: @hdmobix<br />
                  WhatsApp disponível
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl overflow-hidden h-80 lg:h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.5!2d-43.5!3d-23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiUyA0M8KwMzAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1&q=Estrada+do+Pontal+6725+Rio+de+Janeiro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização HD Mobix"
              className="rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
