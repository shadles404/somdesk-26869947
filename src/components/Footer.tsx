import { CircuitBoard } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <CircuitBoard className="w-6 h-6 text-purple-400" />
            <span className="ml-2 font-bold text-foreground">Somdesk</span>
          </div>
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-foreground hover:text-purple-400 transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-purple-400 transition-colors">Services</a>
            <a href="#portfolio" className="text-foreground hover:text-purple-400 transition-colors">Portfolio</a>
            <a href="#contact" className="text-foreground hover:text-purple-400 transition-colors">Contact</a>
          </div>
          <div className="text-sm text-foreground/70">
            © 2024 Somdesk. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};