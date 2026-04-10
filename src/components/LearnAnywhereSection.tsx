import learnAnywhereImg from "@/assets/learn-anywhere.jpg";

const LearnAnywhereSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase text-center mb-2">
          online language courses
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
          Learn from anywhere<br />in the world
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit integer.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nec odio praesent libero sed cursus dapibus diam sed nisi nulla quis sem.
            </p>
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-sm"
            >
              ENROLL NOW
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={learnAnywhereImg}
              alt="Students learning together"
              loading="lazy"
              width={800}
              height={600}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnAnywhereSection;
