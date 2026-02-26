import { Car, Building2, Factory } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ServiceCard from "@/components/ServiceCard";
import AboutSection from "@/components/AboutSection";
import SecuritySection from "@/components/SecuritySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import windshieldCar from "@/assets/windshield-car.png";
import heavyWindshieldInstall from "@/assets/heavy-windshield-install.png";
import carMaintenance from "@/assets/car-maintenance.png";
import heavyMaintenance from "@/assets/heavy-maintenance.png";
import acMaintenance from "@/assets/ac-maintenance.png";
import tapiceria from "@/assets/tapiceria.png";
import carWash from "@/assets/car-wash.png";
import polarizado from "@/assets/polarizado.png";
import carPainting from "@/assets/car-painting.png";

import glassInstall from "@/assets/glass-install.png";
import electricalBuilding from "@/assets/electrical-building.png";
import glassCleaning from "@/assets/glass-cleaning.png";
import facadePainting from "@/assets/facade-painting.png";
import polarizadoVentanas from "@/assets/polarizado-ventanas.png";

import industrialMaintenance from "@/assets/industrial-maintenance.png";
import industrialWelding from "@/assets/industrial-welding.png";
import industrialParts from "@/assets/industrial-parts.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* SERVICIOS VEHICULARES */}
      <ServiceSection
        id="vehiculares"
        title="Servicios Vehiculares"
        subtitle="Brindamos soluciones técnicas especializadas para vehículos livianos, pesados y maquinaria industrial, cumpliendo estándares de seguridad y calidad."
        icon={<Car size={28} />}
      >
        <ServiceCard
          image={[windshieldCar, heavyWindshieldInstall]}
          title="Instalación y Cambio de Parabrisas"
          description="Instalación profesional de parabrisas para vehículos livianos, pesados y maquinaria industrial con materiales de primera calidad y garantía."
        />
        <ServiceCard
          image={[carMaintenance, heavyMaintenance]}
          title="Mantenimiento Preventivo y Correctivo"
          description="Servicio completo de mantenimiento para vehículos livianos y pesados. Diagnóstico, reparación y repuestos originales."
        />
        <ServiceCard
          image={acMaintenance}
          title="Aire Acondicionado Automotriz"
          description="Mantenimiento, reparación y recarga de aire acondicionado vehicular con equipos de última generación."
        />
        <ServiceCard
          image={tapiceria}
          title="Tapicería Vehicular"
          description="Reparación y renovación de tapicería para todo tipo de vehículos. Materiales de alta calidad y acabados profesionales."
        />
        <ServiceCard
          image={carWash}
          title="Lavado Vehicular"
          description="Servicio de lavado profesional para vehículos livianos y pesados. Limpieza integral interior y exterior."
        />
        <ServiceCard
          image={polarizado}
          title="Polarizado Vehicular"
          description="Instalación de láminas de polarizado de alta calidad para protección solar y privacidad en todo tipo de vehículos."
        />
        <ServiceCard
          image={carPainting}
          title="Pintado de Vehículos"
          description="Servicio de pintura automotriz profesional para vehículos livianos y pesados. Acabado de fábrica con pintura de alta calidad."
        />
      </ServiceSection>

      {/* SERVICIOS EN EDIFICACIONES */}
      <ServiceSection
        id="edificaciones"
        title="Servicios en Edificaciones"
        subtitle="Ejecutamos trabajos en edificaciones residenciales, comerciales e industriales con personal calificado y protocolos de seguridad."
        icon={<Building2 size={28} />}
        dark
      >
        <ServiceCard
          image={glassInstall}
          title="Instalación de Ventanas de Vidrio"
          description="Vidrios templados, laminados y a medida para ventanas, puertas y fachadas de edificios, casas y oficinas."
        />
        <ServiceCard
          image={electricalBuilding}
          title="Instalación y Mantenimiento Eléctrico"
          description="Servicio profesional de instalación y mantenimiento eléctrico para edificios, casas y oficinas. Seguridad y calidad garantizada."
        />
        <ServiceCard
          image={glassCleaning}
          title="Limpieza de Vidrios"
          description="Limpieza profesional de vidrios para edificaciones, casas y oficinas. Equipos especializados y personal capacitado en trabajo en altura."
        />
        <ServiceCard
          image={facadePainting}
          title="Pintado de Fachada Exterior e Interior"
          description="Servicio de pintura profesional para fachadas exteriores e interiores de edificios, casas y oficinas. Acabados de alta calidad y durabilidad."
        />
        <ServiceCard
          image={polarizadoVentanas}
          title="Instalación de Lámina Polarizada"
          description="Instalación de láminas polarizadas en ventanas, mamparas y superficies de vidrio para protección solar, privacidad y ahorro energético."
        />
      </ServiceSection>

      {/* SERVICIOS INDUSTRIALES */}
      <ServiceSection
        id="industriales"
        title="Servicios Industriales"
        subtitle="Mantenimiento, reparación y suministro para maquinaria industrial y equipos pesados, con personal técnico especializado y cumplimiento de estándares de seguridad."
        icon={<Factory size={28} />}
      >
        <ServiceCard
          image={industrialMaintenance}
          title="Mantenimiento y Reparación de Equipos Industriales"
          description="Servicio integral de mantenimiento preventivo y correctivo para maquinaria industrial y equipos pesados. Diagnóstico especializado y repuestos de calidad."
        />
        <ServiceCard
          image={industrialWelding}
          title="Soldadura y Fabricación Industrial"
          description="Servicios de soldadura profesional, fabricación y reparación de estructuras metálicas para el sector industrial. Personal certificado y equipos de alta tecnología."
        />
        <ServiceCard
          image={industrialParts}
          title="Suministro e Instalación de Piezas Industriales"
          description="Suministro e instalación de piezas y componentes industriales a medida. Repuestos originales y adaptados para maquinaria pesada y equipos especializados."
        />
      </ServiceSection>

      <AboutSection />
      <SecuritySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
