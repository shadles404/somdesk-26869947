import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const Portfolio = () => {
  const portfolio = [
    {
      name: "Eye Clinic Management System",
      description: "A comprehensive solution for managing patient records and appointments.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Healthcare"
    },
    {
      name: "Smart Inventory System",
      description: "Automated inventory tracking and management solution.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Business"
    },
    {
      name: "School Management Platform",
      description: "Complete educational institution management system.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      category: "Education"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <Card key={index} className="bg-background border-border overflow-hidden">
              <CardHeader>
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-foreground">{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">{project.description}</CardDescription>
                <Button variant="outline" className="mt-4 text-black dark:text-black bg-white hover:bg-gray-100">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};