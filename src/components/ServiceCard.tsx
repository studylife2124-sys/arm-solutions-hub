interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border">
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading font-bold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
