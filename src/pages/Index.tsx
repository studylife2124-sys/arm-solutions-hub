import { Building2, Car, Factory } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";

import glassInstall from "@/assets/glass-install.png";
import welding from "@/assets/welding.png";
import windshieldCar from "@/assets/windshield-car.png";
import carMaintenance from "@/assets/car-maintenance.png";
import carPainting from "@/assets/car-painting.png";
import heavyWindshield from "@/assets/heavy-windshield.png";
import heavyRepair from "@/assets/heavy-repair.png";
import heroMechanic from "@/assets/hero-mechanic.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* EDIFICIOS */}
      <ServiceSection
        id="edificios"
        title="Servicios para Edificios"
        subtitle="Instalación, mantenimiento eléctrico y vidrios a medida para casas y oficinas"
        icon={<Building2 size={28} />}
      >
        <ServiceCard
          image={welding}
          title="Instalación y Mantenimiento Eléctrico"
          description="Servicio profesional de instalación y mantenimiento eléctrico para casas y oficinas. Garantizamos seguridad y calidad en cada trabajo."
        />
        <ServiceCard
          image={glassInstall}
          title="Venta e Instalación de Vidrios a Medida"
          description="Vidrios templados, laminados y a medida según requerimiento para ventanas, puertas y fachadas de edificios y oficinas."
        />
        <ServiceCard
          image={heroMechanic}
          title="Mantenimiento General de Edificaciones"
          description="Servicio integral de mantenimiento preventivo y correctivo para garantizar el óptimo funcionamiento de sus instalaciones."
        />
      </ServiceSection>

      {/* VEHÍCULOS */}
      <ServiceSection
        id="vehiculos"
        title="Servicios para Vehículos"
        subtitle="Mantenimiento, repuestos, parabrisas y pintura para vehículos menores y pesados"
        icon={<Car size={28} />}
        dark
      >
        <ServiceCard
          image={carMaintenance}
          title="Mantenimiento de Vehículos Menores y Pesados"
          description="Servicio completo de mantenimiento preventivo y correctivo para vehículos menores y pesados. Repuestos originales y mano de obra calificada."
        />
        <ServiceCard
          image={windshieldCar}
          title="Venta e Instalación de Parabrisas"
          description="Parabrisas para vehículos menores y pesados. Instalación profesional con materiales de primera calidad y garantía."
        />
        <ServiceCard
          image={carPainting}
          title="Pintado de Vehículos Menores y Pesados"
          description="Servicio de pintura automotriz profesional para vehículos menores y pesados. Acabado de fábrica con pintura de alta calidad."
        />
      </ServiceSection>

      {/* MAQUINARIA INDUSTRIAL */}
      <ServiceSection
        id="maquinaria"
        title="Maquinaria Industrial"
        subtitle="Mantenimiento, reparación y venta de repuestos para equipos y maquinaria industrial"
        icon={<Factory size={28} />}
      >
        <ServiceCard
          image={heavyRepair}
          title="Mantenimiento y Reparación de Equipos Industriales"
          description="Servicio especializado de mantenimiento preventivo y correctivo para equipos industriales. Reducimos tiempos de parada y optimizamos el rendimiento."
        />
        <ServiceCard
          image={heavyWindshield}
          title="Venta e Instalación de Parabrisas para Maquinaria Pesada"
          description="Parabrisas resistentes y a medida para todo tipo de maquinaria pesada. Instalación en campo o en taller con personal especializado."
        />
        <ServiceCard
          image={welding}
          title="Venta de Repuestos para Maquinaria Industrial"
          description="Amplio stock de repuestos originales y alternativos para maquinaria industrial. Asesoría técnica y entrega oportuna."
        />
      </ServiceSection>

      <Footer />
    </div>
  );
};

export default Index;
