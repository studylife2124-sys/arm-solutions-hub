import { Wrench, Zap, Shield } from "lucide-react";
import armLogo from "@/assets/arm-logo.png";
import heroImg from "@/assets/hero-mechanic.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="ARM Integral Group trabajador" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-arm-dark/95 via-arm-dark/80 to-arm-dark/40" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl">
          <img src={armLogo} alt="ARM Integral Group" className="h-20 mb-8 object-contain" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground leading-tight mb-6">
            Soluciones Integrales en{" "}
            <span className="text-primary">Mantenimiento</span> e{" "}
            <span className="text-primary">Instalación</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 font-body mb-10 max-w-lg">
            Servicios profesionales para edificios, vehículos menores y pesados, y maquinaria industrial. Calidad y compromiso en cada proyecto.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#edificios"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground font-heading font-bold px-8 py-4 rounded-lg transition-colors text-sm tracking-wide"
            >
              <Zap size={18} /> Edificios
            </a>
            <a
              href="#vehiculos"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground font-heading font-bold px-8 py-4 rounded-lg transition-colors text-sm tracking-wide"
            >
              <Wrench size={18} /> Vehículos
            </a>
            <a
              href="#maquinaria"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-primary-foreground font-heading font-bold px-8 py-4 rounded-lg transition-colors text-sm tracking-wide"
            >
              <Shield size={18} /> Maquinaria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
