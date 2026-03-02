import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MapPin, Instagram } from "lucide-react";
import logoImg from "@/assets/logo-hdmobix.jpg";

const ContactFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Altere o email abaixo para o endereço desejado
    const destinationEmail = "contato@hdmobix.com.br";

    const mailtoLink = `mailto:${destinationEmail}?subject=Novo contato - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nTelefone: ${formData.phone}\nEmail: ${formData.email}`
    )}`;

    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer id="contato" className="section-padding border-t border-border" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase mb-4 block">
              Fale Conosco
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
              Entre em <span className="text-gradient">contato</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">Nome</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome completo"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">Telefone</label>
                <input
                  type="tel"
                  required
                  maxLength={20}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(21) 99999-9999"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display font-semibold hover:shadow-[0_0_30px_hsl(96_100%_66%/0.4)] transition-all duration-300 hover:scale-105"
              >
                <Send size={18} />
                {submitted ? "Enviado! ✓" : "Enviar Contato"}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <img src={logoImg} alt="HD Mobix" className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    <span className="text-primary">hd</span>mobix
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">ride the vibe</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                  <p className="font-body text-muted-foreground text-sm">
                    Estrada do Pontal 6725, Loja D<br />
                    Rio de Janeiro, RJ — CEP: 22790-877
                  </p>
                </div>
                <a
                  href="https://instagram.com/hdmobix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={18} className="text-primary" />
                  <span className="font-body text-sm">@hdmobix</span>
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-body text-xs text-muted-foreground">
                © {new Date().getFullYear()} HD Mobix. Todos os direitos reservados.
              </p>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Mobilidade elétrica com a cara do Rio 🌍⚡
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
