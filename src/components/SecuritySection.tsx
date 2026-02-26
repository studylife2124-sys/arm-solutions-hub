import { ShieldCheck, HardHat, FileCheck, MapPin, ClipboardCheck } from "lucide-react";
import safetyImg from "@/assets/safety-compliance.png";

const items = [
  { icon: HardHat, label: "Personal con EPP completo" },
  { icon: ClipboardCheck, label: "IPERC implementado" },
  { icon: ShieldCheck, label: "SCTR vigente" },
  { icon: FileCheck, label: "Trabajo bajo estándares de seguridad" },
  { icon: MapPin, label: "Atención en zonas industriales y portuarias" },
];

const SecuritySection = () => {
  return (
    <section id="seguridad" className="py-20 bg-arm-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <ShieldCheck className="text-primary" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-primary-foreground mb-3">
            Seguridad y Cumplimiento
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-primary-foreground/60">
            Operamos bajo los más altos estándares de seguridad y normativa vigente
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={safetyImg} alt="Seguridad ARM Integral Group" className="w-full h-80 object-cover" />
          </div>
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <item.icon className="text-primary" size={22} />
                </div>
                <span className="text-primary-foreground font-heading font-semibold text-lg">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
