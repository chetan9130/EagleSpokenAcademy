import { Quote } from "lucide-react";

const testimonials = [
  { name: "Student", text: "It's one of the best experiences in my life and also the best decision for my successful future. I have learned lots of new things from Eagle Spoken English Academy. The teaching methods are practical and really effective." },
  { name: "Student", text: "The Eagle Spoken English classes are too good as their trainers are excellent at teaching. They focus on making us speak confidently in real situations, not just grammar rules. I've improved so much!" },
  { name: "Student", text: "The personalized attention in small batches really helped me overcome my fear of speaking English. The interactive lessons and role plays made learning fun and practical." },
  { name: "Student", text: "I joined as a complete beginner and now I can confidently speak English at my workplace. The flexible batch timings made it easy to attend without affecting my job." },
  { name: "Student", text: "The mobile app is a great addition — I can watch recorded classes and submit assignments from anywhere. The trainers are very supportive and encouraging." },
  { name: "Student", text: "Eagle Academy's certification added great value to my resume. The group discussions and presentation practice prepared me well for job interviews." },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-testimonial-bg">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-sm font-semibold tracking-widest text-testimonial-fg/60 uppercase text-center mb-2">
          testimonials
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-testimonial-fg mb-4">
          What our students<br />say about us
        </h2>
        <p className="text-center text-testimonial-fg/60 max-w-xl mx-auto mb-16">
          Hear from our 5,000+ students who transformed their English communication skills at Eagle Spoken English Academy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-testimonial-fg/5 border border-testimonial-fg/10 rounded-xl p-8 backdrop-blur-sm"
            >
              <Quote className="text-accent mb-4" size={24} />
              <p className="text-testimonial-fg/80 text-sm leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center text-testimonial-fg font-bold text-sm">
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
