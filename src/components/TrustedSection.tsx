const TrustedSection = () => {
  const logos = ["Google", "Amazon", "Microsoft", "Spotify", "Slack"];
  
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-12">
          Trusted by 65,000 students<br />across the world.
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40">
          {logos.map((logo) => (
            <span key={logo} className="text-2xl font-bold text-foreground tracking-wider">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
