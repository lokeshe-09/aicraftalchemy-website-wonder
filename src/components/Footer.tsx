import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/917661081043`, '_blank');
  };

  return (
    <footer className="bg-secondary/5 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:aicraftalchemy@gmail.com" className="hover:text-primary transition-colors">
                  aicraftalchemy@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 7661081043</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block hover:text-primary transition-colors">About</Link>
              <Link to="/services" className="block hover:text-primary transition-colors">Services</Link>
              <Link to="/skills" className="block hover:text-primary transition-colors">Skills</Link>
              <Link to="/projects" className="block hover:text-primary transition-colors">Projects</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <MessageCircle 
                className="h-6 w-6 cursor-pointer hover:text-primary transition-colors"
                onClick={openWhatsApp}
              />
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024-2025 AI Craft Alchemy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;