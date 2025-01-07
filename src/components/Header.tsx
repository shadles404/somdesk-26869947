import { CircuitBoard } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <CircuitBoard className="w-8 h-8 text-purple-400" />
            <span className="ml-2 text-xl font-bold text-foreground">Somdesk</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-foreground hover:text-purple-400 transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-purple-400 transition-colors">Services</a>
            <a href="#portfolio" className="text-foreground hover:text-purple-400 transition-colors">Portfolio</a>
            <a href="#contact" className="text-foreground hover:text-purple-400 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="outline" className="md:hidden text-foreground">Menu</Button>
          </div>
        </div>
      </div>
    </header>
  );
};