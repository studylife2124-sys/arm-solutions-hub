import { Target, Rocket } from "lucide-react";
import teamImg from "@/assets/team-about.png";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-3">
            Sobre Nosotros
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-muted-foreground text-lg font-body leading-relaxed mb-6">
              <strong className="text-foreground">ARM Integral Group</strong> es una empresa especializada en servicios técnicos vehiculares e industriales, orientada a brindar soluciones seguras, eficientes y con cumplimiento normativo.
            </p>
            <p className="text-muted-foreground text-lg font-body leading-relaxed">
              Atendemos empresas, flotas, maquinaria pesada y clientes particulares con los más altos estándares de calidad y seguridad.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img src={teamImg} alt="Equipo ARM Integral Group" className="w-full h-80 object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-8 shadow-md text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 mx-auto">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Misión</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Ofrecer soluciones integrales en servicios vehiculares e industriales, garantizando calidad, seguridad y eficiencia en cada proyecto, con un enfoque profesional y orientado a resultados.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 shadow-md text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 mx-auto">
              <Rocket className="text-primary" size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Visión</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Ser una empresa reconocida por su excelencia operativa, confiabilidad y compromiso con la seguridad, consolidándonos como un socio estratégico en servicios técnicos a nivel nacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
