import { useState } from "react";
import { Menu, X } from "lucide-react";
import armLogo from "@/assets/arm-logo.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios Vehiculares", href: "#vehiculares" },
  { label: "Edificaciones", href: "#edificaciones" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-arm-dark/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio">
          <img src={armLogo} alt="ARM Integral Group" className="h-12 object-contain" />
        </a>
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-heading font-semibold tracking-wide text-primary-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-arm-dark border-t border-primary/20 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-heading font-semibold text-primary-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
