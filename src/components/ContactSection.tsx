import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-3">
            Contacto
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Estamos listos para atenderte. Solicita tu cotización sin compromiso.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-body">Correo corporativo</p>
                <a href="mailto:ventas@armintegralgroup.com.pe" className="text-foreground font-heading font-semibold hover:text-primary transition-colors">
                  ventas@armintegralgroup.com.pe
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-body">WhatsApp</p>
                <a href="https://wa.me/51965367342" target="_blank" rel="noopener noreferrer" className="text-foreground font-heading font-semibold hover:text-primary transition-colors">
                  +51 965 367 342
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-body">Ubicación</p>
                <span className="text-foreground font-heading font-semibold">Lima, Perú</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-card border border-border rounded-xl p-8 shadow-md" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-heading font-semibold text-foreground mb-1">Nombre completo</label>
              <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-heading font-semibold text-foreground mb-1">Correo electrónico</label>
              <input type="email" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="correo@ejemplo.com" />
            </div>
            <div>
              <label className="block text-sm font-heading font-semibold text-foreground mb-1">Teléfono</label>
              <input type="tel" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+51 999 999 999" />
            </div>
            <div>
              <label className="block text-sm font-heading font-semibold text-foreground mb-1">Mensaje</label>
              <textarea rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Describe el servicio que necesitas..." />
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground font-heading font-bold py-3 rounded-lg transition-colors text-sm tracking-wide">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
