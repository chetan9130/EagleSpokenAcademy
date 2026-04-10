const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌍</span>
              <span className="font-heading text-xl font-bold tracking-[0.25em]">LEARN</span>
            </div>
            <p className="text-sm opacity-60 leading-relaxed">
              The best online platform for learning new languages from anywhere in the world.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-widest uppercase">Courses</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">English</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Spanish</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">German</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">French</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-widest uppercase">Company</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm tracking-widest uppercase">Support</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs opacity-40">
          © 2024 LEARN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
