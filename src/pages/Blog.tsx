import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  { title: "10 Tips to Improve Your Spoken English Fast", category: "Learning Tips", date: "Apr 10, 2026", author: "Eagle Academy", excerpt: "Discover proven strategies to accelerate your spoken English skills — from daily practice habits to conversation techniques that actually work.", color: "bg-accent/20" },
  { title: "Why Practical English Matters More Than Grammar", category: "Methodology", date: "Apr 5, 2026", author: "Eagle Academy", excerpt: "Learn why focusing on real-world communication skills over textbook grammar leads to faster fluency and more confident speaking.", color: "bg-secondary/20" },
  { title: "How to Prepare for English Job Interviews", category: "Career Tips", date: "Mar 28, 2026", author: "Eagle Academy", excerpt: "Essential English interview preparation tips — from common questions and answers to body language and presentation skills.", color: "bg-hero-purple/20" },
  { title: "The Benefits of Learning English in Small Groups", category: "Education", date: "Mar 20, 2026", author: "Eagle Academy", excerpt: "Why small batch sizes of 8-12 students create a more effective and supportive learning environment for English learners.", color: "bg-accent/20" },
  { title: "5 Common English Speaking Mistakes and How to Fix Them", category: "Grammar Tips", date: "Mar 15, 2026", author: "Eagle Academy", excerpt: "The most common errors Indian English learners make and practical techniques to correct them for clearer communication.", color: "bg-secondary/20" },
  { title: "How Our Students Went from Beginners to Confident Speakers", category: "Success Stories", date: "Mar 10, 2026", author: "Eagle Academy", excerpt: "Real stories from Eagle Academy students who transformed their English communication skills and achieved their career goals.", color: "bg-hero-purple/20" },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Blog & Resources</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            English learning tips, grammar guides, and success stories to fuel your language journey.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className={`${post.color} h-48 flex items-center justify-center`}>
                  <span className="text-sm font-bold tracking-widest text-foreground/60 uppercase">{post.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    </div>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
