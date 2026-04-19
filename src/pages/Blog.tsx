
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Tag, Search } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";
import { blogPosts as posts, type BlogCategory } from "@/data/blogPosts";

type Category = "All" | BlogCategory;

const categories: Category[] = ["All", "Workout Routines", "Fitness Tips", "Health Advice", "Nutrition"];

const categoryColors: Record<Category, string> = {
  All: "border-primary text-primary",
  "Workout Routines": "border-primary text-primary",
  "Fitness Tips": "border-yellow-400 text-yellow-400",
  "Health Advice": "border-green-400 text-green-400",
  Nutrition: "border-orange-400 text-orange-400",
};

const Blog = () => {
  const [active, setActive] = useState<Category>("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = active === "All" || p.category === active;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 gap-2 min-w-0">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors shrink-0 min-w-0">
            <ArrowLeft className="w-5 h-5 shrink-0" />
            <span className="font-heading text-sm uppercase tracking-wider hidden sm:inline truncate">Back to Home</span>
          </Link>
          <span className="font-heading text-lg sm:text-xl font-bold text-primary uppercase tracking-wider truncate text-center">
            Blog
          </span>
          <span className="w-9 shrink-0 sm:w-[100px]" aria-hidden />
        </div>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-wider px-2">
              Beast Mode <span className="text-primary">Blog</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base px-2">
              Training knowledge, nutrition science, and health strategies to fuel your transformation.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles…"
                className="w-full bg-card border border-border rounded-sm pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-1"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs font-heading uppercase tracking-wider px-4 py-2 border rounded-sm transition-all ${
                  active === cat ? `${categoryColors[cat]} bg-card` : "border-border text-muted-foreground hover:border-muted-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((post) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-lg overflow-hidden group"
                >
                  <Link
                    to={`/blog/${post.id}`}
                    className="block outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <OptimizedImage
                        src={post.image}
                        alt={post.title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <span className={`absolute top-3 left-3 text-[10px] font-heading uppercase tracking-wider px-2 py-1 border rounded-sm bg-background/60 backdrop-blur-sm ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" /> {post.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-12">No articles found. Try a different search or category.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
