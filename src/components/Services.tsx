import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Code, Computer, Printer } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with cutting-edge technologies.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      icon: <Computer className="w-12 h-12 text-purple-500" />,
      title: "Computer Repair & Installation",
      description: "Professional computer repair and installation services with quick turnaround times.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      icon: <Printer className="w-12 h-12 text-purple-500" />,
      title: "Printer & CCTV Camera Repair",
      description: "Expert repair services for printers and CCTV systems to keep your equipment running smoothly.",
      image: "https://images.unsplash.com/photo-1601524909162-ae8725290836"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border hover:border-purple-400 transition-colors overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};