import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  { title: "10 Tips for Learning a New Language Faster", category: "Learning Tips", date: "Mar 15, 2024", author: "Sarah Johnson", excerpt: "Discover proven strategies that can accelerate your language learning journey and help you achieve fluency sooner.", color: "bg-accent/20" },
  { title: "The Benefits of Being Bilingual in 2024", category: "Research", date: "Mar 10, 2024", author: "Michael Chen", excerpt: "New research reveals the cognitive and career advantages of speaking multiple languages in today's global economy.", color: "bg-secondary/20" },
  { title: "How to Stay Motivated While Learning a Language", category: "Motivation", date: "Mar 5, 2024", author: "Emma Williams", excerpt: "Staying motivated is one of the biggest challenges in language learning. Here are strategies that actually work.", color: "bg-hero-purple/20" },
  { title: "Best Apps to Complement Your Language Learning", category: "Technology", date: "Feb 28, 2024", author: "David Park", excerpt: "A curated list of the best language learning apps that can complement your structured learning program.", color: "bg-accent/20" },
  { title: "Understanding Cultural Context in Language", category: "Culture", date: "Feb 20, 2024", author: "Sarah Johnson", excerpt: "Language is more than words and grammar. Learn why understanding cultural context is key to true fluency.", color: "bg-secondary/20" },
  { title: "How Our Students Achieved Fluency in 6 Months", category: "Success Stories", date: "Feb 15, 2024", author: "Emma Williams", excerpt: "Real stories from our students who went from complete beginners to confident speakers in just six months.", color: "bg-hero-purple/20" },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-primary py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">Blog</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Insights, tips, and stories to fuel your language learning journey.
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
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">{post.title}</h3>
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
