import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface ServiceCategoriesProps {
  services: Service[];
  onServiceSelect: (serviceId: string) => void;
}

export const ServiceCategories = ({ services, onServiceSelect }: ServiceCategoriesProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How Can I Help You Today?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select a service category to get started, or ask me anything directly in the chat
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className="gradient-card border-0 shadow-campus hover:shadow-lg transition-smooth cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onServiceSelect(service.id)}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-${service.color} to-${service.color}/80 flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    onClick={(e) => {
                      e.stopPropagation();
                      onServiceSelect(service.id);
                    }}
                  >
                    Get Help
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};