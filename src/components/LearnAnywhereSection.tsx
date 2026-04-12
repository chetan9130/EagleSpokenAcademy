import learnAnywhereImg from "@/assets/learn-anywhere.jpg";

const LearnAnywhereSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase text-center mb-2">
          online & offline classes
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
          Learn from anywhere<br />at your own pace
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our approach goes beyond traditional grammar-focused teaching. We concentrate on practical spoken English skills to help you communicate confidently in real-world situations.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Choose from online or offline classes with flexible morning, afternoon, and evening batches. Our mobile app lets you attend live classes, submit assignments, and track progress — all from your phone.
            </p>
            <a
              href="https://wa.me/918485038383"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-lg"
            >
              ENROLL NOW
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={learnAnywhereImg}
              alt="Students learning English at Eagle Academy"
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
