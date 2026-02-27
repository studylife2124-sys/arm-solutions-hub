import { MessageCircle, FileText } from "lucide-react";
import armLogo from "@/assets/arm-logo.png";
import heroImg from "@/assets/hero-mechanic.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="ARM Integral Group trabajador" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-arm-dark/95 via-arm-dark/85 to-arm-dark/50" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          <img src={armLogo} alt="ARM Integral Group" className="h-20 mb-8 object-contain" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground leading-tight mb-6">
            Soluciones Integrales en{" "}
            <span className="text-arm-light-blue">Servicios Vehiculares</span> e{" "}
            <span className="text-arm-light-blue">Industriales</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 font-body mb-10 max-w-2xl leading-relaxed">
            Instalación de parabrisas, mantenimiento vehicular, aire acondicionado, polarizado, vidrios para edificaciones e instalaciones eléctricas.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground font-heading font-bold px-8 py-4 rounded-lg transition-colors text-sm tracking-wide"
            >
              <FileText size={18} /> Solicitar Cotización
            </a>
            <a
              href="https://wa.me/51955367342"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-primary-foreground font-heading font-bold px-8 py-4 rounded-lg transition-colors text-sm tracking-wide"
            >
              <MessageCircle size={18} /> Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
