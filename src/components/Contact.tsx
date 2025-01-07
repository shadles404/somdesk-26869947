import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Mail className="w-6 h-6 text-purple-400 mr-3" />
              <span className="text-foreground/70">info@somdesk.com</span>
            </div>
            <div className="flex items-center mb-6">
              <Phone className="w-6 h-6 text-purple-400 mr-3" />
              <span className="text-foreground/70">+252618458742</span>
            </div>
            <div className="flex space-x-4 mt-8">
              <Button variant="outline" size="icon" className="text-foreground hover:text-foreground/70">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="text-foreground hover:text-foreground/70">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="text-foreground hover:text-foreground/70">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-foreground">Name</Label>
              <Input id="name" className="bg-background border-border text-foreground" />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input id="email" type="email" className="bg-background border-border text-foreground" />
            </div>
            <div>
              <Label htmlFor="subject" className="text-foreground">Subject</Label>
              <Input id="subject" className="bg-background border-border text-foreground" />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground">Message</Label>
              <textarea
                id="message"
                className="w-full h-32 px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-foreground"
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};