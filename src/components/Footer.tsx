import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-arm-dark text-primary-foreground/70 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-heading font-bold text-xl text-primary-foreground mb-4">ARM Integral Group</h3>
            <p className="text-sm leading-relaxed">
              Soluciones integrales en servicios vehiculares e industriales. Calidad, seguridad y eficiencia en cada proyecto.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#vehiculares" className="hover:text-primary transition-colors">Servicios Vehiculares</a></li>
              <li><a href="#edificaciones" className="hover:text-primary transition-colors">Servicios en Edificaciones</a></li>
              <li><a href="#nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#seguridad" className="hover:text-primary transition-colors">Seguridad</a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><MessageCircle size={16} className="text-primary" /> +51 955 367 342</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /> ventas@armintegralgroup.com.pe</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Lima, Perú</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary/20 pt-6 text-center text-xs">
          © {new Date().getFullYear()} ARM Integral Group. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
