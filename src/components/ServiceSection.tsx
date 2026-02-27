import { ReactNode } from "react";
import { MessageCircle } from "lucide-react";

interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  children: ReactNode;
  dark?: boolean;
}

const ServiceSection = ({ id, title, subtitle, icon, children, dark }: ServiceSectionProps) => {
  return (
    <section
      id={id}
      className={`py-20 ${dark ? "bg-arm-dark" : "bg-background"}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${dark ? "bg-primary/20" : "bg-primary/10"}`}>
            <span className="text-primary">{icon}</span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-heading font-black mb-3 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
            {title}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${dark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {children}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href={`https://wa.me/51965367342?text=${encodeURIComponent(`Hola, deseo más información sobre los servicios ${title}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <MessageCircle size={20} />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
