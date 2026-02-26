import { Car, Building2 } from "lucide-react";
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
import carMaintenance from "@/assets/car-maintenance.png";
import acMaintenance from "@/assets/ac-maintenance.png";
import tapiceria from "@/assets/tapiceria.png";
import carWash from "@/assets/car-wash.png";
import polarizado from "@/assets/polarizado.png";
import carPainting from "@/assets/car-painting.png";
import glassInstall from "@/assets/glass-install.png";
import welding from "@/assets/welding.png";

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
          image={windshieldCar}
          title="Instalación y Cambio de Parabrisas"
          description="Instalación profesional de parabrisas para vehículos livianos, pesados y maquinaria industrial con materiales de primera calidad y garantía."
        />
        <ServiceCard
          image={carMaintenance}
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
          image={welding}
          title="Instalación y Mantenimiento Eléctrico"
          description="Servicio profesional de instalación y mantenimiento eléctrico para edificios, casas y oficinas. Seguridad y calidad garantizada."
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
