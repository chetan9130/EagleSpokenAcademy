import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "COURSES", path: "/courses" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-card py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <Link to="/" className="flex items-center gap-2">
       <img
          src="/logo.jpeg"
          alt="Eagle Spoken English Logo"
          className="w-8 h-8 object-contain"
        />
        <span className="font-heading text-xl font-bold tracking-wider text-foreground">Eagle Spoken English</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className={`text-sm font-medium tracking-widest transition-colors ${
              location.pathname === link.path
                ? "text-accent"
                : "text-foreground hover:text-muted-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://wa.me/918087432410?text=I%20want%20to%20enroll%20in%20a%20course"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Phone size={14} /> WhatsApp Us
        </a>
      </div>

      <button
        className="md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-card shadow-lg md:hidden flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`px-6 py-3 text-sm font-medium tracking-widest transition-colors ${
                location.pathname === link.path
                  ? "text-accent bg-muted"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/918087432410?text=I%20want%20to%20book%20a%20free%20demo%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-6 mt-3 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-semibold"
          >
            <Phone size={14} /> WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
