import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-arm-dark text-primary-foreground/70 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-heading font-bold text-xl text-primary-foreground mb-4">ARM Integral Group</h3>
            <p className="text-sm leading-relaxed">
              Soluciones integrales de mantenimiento, instalación y reparación para edificios, vehículos y maquinaria industrial.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#edificios" className="hover:text-primary transition-colors">Servicios para Edificios</a></li>
              <li><a href="#vehiculos" className="hover:text-primary transition-colors">Servicios para Vehículos</a></li>
              <li><a href="#maquinaria" className="hover:text-primary transition-colors">Maquinaria Industrial</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +51 999 999 999</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /> contacto@armintegralgroup.com</li>
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
