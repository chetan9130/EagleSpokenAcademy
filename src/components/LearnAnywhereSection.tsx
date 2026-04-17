import { useEffect, useState } from "react";

const images = [
  "/g-1.jpeg",
  "/g-2.jpeg",
  "/g-3.jpeg",
  "/g-4.jpg",
  "/g-5.jpg",
  "/g-6.jpeg",
  "/g-7.jpeg"
];

const LearnAnywhereSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
       

        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
          Learn from our Branches<br />at your own pace
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT TEXT */}
          <div className="w-full md:w-1/2">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our approach goes beyond traditional grammar-focused teaching. We concentrate on practical spoken English skills to help you communicate confidently in real-world situations.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Choose from online or offline classes with flexible batches. Our mobile app lets you attend live classes, submit assignments, and track progress.
            </p>

            <a
              href="https://wa.me/918087432410?text=I%20want%20to%20enroll%20in%20a%20course"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded-lg"
            >
              ENROLL NOW
            </a>
          </div>

          {/* ✅ RIGHT IMAGE SLIDER */}
          <div className="w-full md:w-1/2">
            <div className="rounded-2xl shadow-lg overflow-hidden relative">

              {/* Image */}
              <img
                src={images[current]}
                alt="Learning English"
                className="w-full h-[300px] md:h-[400px] object-cover transition-all duration-700"
              />

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      current === index ? "bg-white" : "bg-white/50"
                    }`}
                  ></div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearnAnywhereSection;