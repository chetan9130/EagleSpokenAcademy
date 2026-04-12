import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦅</span>
              <span className="font-heading text-xl font-bold tracking-wider">EAGLE</span>
            </div>
            <p className="text-sm opacity-60 leading-relaxed mb-4">
              Eagle Spoken English Academy — Empowering individuals with confident English communication skills since 2009.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/eagle_spoken_english" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-widest uppercase">Courses</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><Link to="/courses" className="hover:opacity-100 transition-opacity">Basic Level</Link></li>
              <li><Link to="/courses" className="hover:opacity-100 transition-opacity">Intermediate Level</Link></li>
              <li><Link to="/courses" className="hover:opacity-100 transition-opacity">Advanced Level</Link></li>
              <li><Link to="/courses" className="hover:opacity-100 transition-opacity">Business English</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-widest uppercase">Company</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
              <li><Link to="/courses" className="hover:opacity-100 transition-opacity">Enroll Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-widest uppercase">Contact</h4>
            <ul className="space-y-3 text-sm opacity-60">
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+918485038383" className="hover:opacity-100 transition-opacity">+91 8485038383</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:eaglespokenenglish@gmail.com" className="hover:opacity-100 transition-opacity">eaglespokenenglish@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={14} />
                <a href="https://www.instagram.com/eagle_spoken_english" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">@eagle_spoken_english</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs opacity-40">
          © 2024 Eagle Spoken English Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
