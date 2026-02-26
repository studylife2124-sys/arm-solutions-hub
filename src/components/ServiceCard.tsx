import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCardProps {
  image: string | string[];
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  const images = Array.isArray(image) ? image : [image];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border">
      <div className="h-56 overflow-hidden relative">
        <img
          src={images[current]}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-1 shadow-md transition-colors"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-1 shadow-md transition-colors"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-background/60"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
