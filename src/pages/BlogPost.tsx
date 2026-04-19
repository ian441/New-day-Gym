import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";
import { getBlogPostById, type BlogCategory } from "@/data/blogPosts";

const categoryColors: Record<BlogCategory, string> = {
  "Workout Routines": "border-primary text-primary",
  "Fitness Tips": "border-yellow-400 text-yellow-400",
  "Health Advice": "border-green-400 text-green-400",
  Nutrition: "border-orange-400 text-orange-400",
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 overflow-x-hidden">
        <h1 className="font-heading text-2xl font-bold uppercase tracking-wider mb-2">Article not found</h1>
        <p className="text-muted-foreground text-center mb-6">That blog post does not exist or may have been moved.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-primary border border-primary px-6 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 gap-4">
          <Link to="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors shrink-0">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-heading text-sm uppercase tracking-wider hidden sm:inline">Back to blogs</span>
          </Link>
          <span className="font-heading text-lg md:text-xl font-bold text-primary uppercase tracking-wider text-center line-clamp-2">
            Blog
          </span>
          <span className="w-[120px] hidden sm:block" aria-hidden />
        </div>
      </header>

      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span
              className={`inline-block text-[10px] font-heading uppercase tracking-wider px-2 py-1 border rounded-sm bg-card mb-4 ${categoryColors[post.category]}`}
            >
              {post.category}
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider leading-tight mb-4 break-words">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="w-3 h-3" /> {post.date}
              </span>
            </div>

            <div className="relative rounded-lg overflow-hidden mb-10 aspect-[4/3] sm:aspect-[21/9] md:aspect-[2/1] bg-muted">
              <OptimizedImage
                src={post.image}
                alt={post.title}
                sizes="100vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </div>

            {post.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}

            <div className="mt-12 pt-8 border-t border-border">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider text-primary border border-primary px-6 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to blogs
              </Link>
            </div>
          </motion.div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
