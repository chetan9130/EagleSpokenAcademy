import { Quote } from "lucide-react";

const testimonials = [
  { name: "Angela Montenegro", text: "Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula." },
  { name: "Thomas Booth", text: "Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula." },
  { name: "Vanda Lazslo", text: "Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula." },
  { name: "Mark Wolf", text: "Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula." },
  { name: "Sabrina Rock", text: "Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula." },
  { name: "Giuseppe Tozzi", text: "Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna vitae urna semper quis at ligula." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-testimonial-bg">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-sm font-semibold tracking-widest text-testimonial-fg/60 uppercase text-center mb-2">
          testimonials
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-testimonial-fg mb-4">
          Hear it first-hand<br />from our students
        </h2>
        <p className="text-center text-testimonial-fg/60 max-w-xl mx-auto mb-16">
          Aliquam dignissim lacinia tristique nulla lobortis nunc ac eros scelerisque varius suspendisse sit amet urna.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-testimonial-fg/5 border border-testimonial-fg/10 rounded-xl p-8 backdrop-blur-sm"
            >
              <Quote className="text-hero-gold mb-4" size={24} />
              <p className="text-testimonial-fg/80 text-sm leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-hero-teal/30 flex items-center justify-center text-testimonial-fg font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <span className="text-testimonial-fg font-semibold text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
