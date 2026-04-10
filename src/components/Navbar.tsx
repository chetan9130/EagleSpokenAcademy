import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
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
        <span className="text-2xl">🌍</span>
        <span className="font-heading text-xl font-bold tracking-[0.25em] text-foreground">LEARN</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className={`text-sm font-medium tracking-widest transition-colors ${
              location.pathname === link.path
                ? "text-secondary"
                : "text-foreground hover:text-muted-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <button className="text-foreground hover:text-muted-foreground transition-colors">
          <Search size={18} />
        </button>
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
                  ? "text-secondary bg-muted"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
