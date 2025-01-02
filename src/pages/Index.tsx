import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircuitBoard, Computer, Printer, Code, ArrowRight, Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useRef } from "react";

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <CircuitBoard className="w-8 h-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold text-gray-100">Somdesk</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </nav>
            <Button variant="outline" className="md:hidden text-gray-300">Menu</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
            Innovative Technology Solutions for a Smarter Future
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge technology solutions that drive growth and innovation.
          </p>
          <Button onClick={scrollToServices} className="group">
            Explore Services
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-purple-400 transition-colors overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-gray-100">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Our Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
                <CardHeader>
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-gray-100">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  <Button variant="outline" className="mt-4 text-gray-300 hover:text-gray-100">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-gray-300">info@somdesk.com</span>
              </div>
              <div className="flex items-center mb-6">
                <Phone className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-gray-300">+252618458742</span>
              </div>
              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="icon" className="text-gray-300 hover:text-gray-100">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="text-gray-300 hover:text-gray-100">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="text-gray-300 hover:text-gray-100">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">Name</Label>
                <Input id="name" className="bg-gray-900 border-gray-800 text-gray-100" />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input id="email" type="email" className="bg-gray-900 border-gray-800 text-gray-100" />
              </div>
              <div>
                <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                <Input id="subject" className="bg-gray-900 border-gray-800 text-gray-100" />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <textarea
                  id="message"
                  className="w-full h-32 px-3 py-2 text-sm bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-100"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <CircuitBoard className="w-6 h-6 text-purple-400" />
              <span className="ml-2 font-bold text-gray-100">Somdesk</span>
            </div>
            <div className="flex space-x-8 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
              <a href="#portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Somdesk. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
