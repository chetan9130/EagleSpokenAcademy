const MasterSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="bg-primary rounded-2xl p-12 text-primary-foreground">
            <p className="text-6xl md:text-8xl font-heading font-bold mb-2">15+</p>
            <p className="text-sm tracking-widest uppercase opacity-80">amazing years & achievements</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-2">
            powered by
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Years of experience
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
          </p>
          <a
            href="#"
            className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default MasterSection;
