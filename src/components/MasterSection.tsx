const MasterSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <div className="bg-primary rounded-2xl p-12 text-primary-foreground">
            <p className="text-6xl md:text-8xl font-heading font-bold mb-2">5K+</p>
            <p className="text-sm tracking-widest uppercase opacity-80">students trained successfully</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-2">
            proven track record
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            English for Everyone
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            With over 5,000 students trained, Eagle Spoken English Academy is one of the leading spoken English academies in the region. Our students have gained confidence, improved their communication skills, and achieved their career goals.
          </p>
          <a
            href="https://wa.me/919765699626"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
          >
            JOIN NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default MasterSection;
