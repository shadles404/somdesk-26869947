import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Code, Computer, Printer } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { useTranslations } from "../utils/translations";

export const Services = () => {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const services = [
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: t.softwareDev,
      description: t.softwareDesc,
      image: "https://i.ibb.co/WHnsMkC/software-dev.jpg"
    },
    {
      icon: <Computer className="w-12 h-12 text-purple-500" />,
      title: t.computerRepair,
      description: t.computerDesc,
      image: "https://i.ibb.co/TtcmnCV/computer-repair.jpg"
    },
    {
      icon: <Printer className="w-12 h-12 text-purple-500" />,
      title: t.printerRepair,
      description: t.printerDesc,
      image: "https://i.ibb.co/ysCc024/printer-repair.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t.ourServices}</h2>
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