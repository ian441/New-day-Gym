
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";

const sectionIds = ["home", "about", "programs", "gallery", "testimonials", "contact"] as const;
const routePaths = ["/trainers", "/blog"] as const;

type LinkItem = { label: string; href: string; id?: typeof sectionIds[number] };

const links: LinkItem[] = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Programs", href: "/#programs", id: "programs" },
  { label: "Trainers", href: "/trainers" },
  { label: "Gallery", href: "/#gallery", id: "gallery" },
  { label: "Testimonials", href: "/#testimonials", id: "testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

const NavItem = ({ l, onClick }: { l: LinkItem; onClick?: () => void }) => {
  const cls =
    "text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest py-3 md:py-0 min-h-[44px] md:min-h-0 flex items-center";
  
  const isRouteLink = routePaths.includes(l.href as typeof routePaths[number]);
  const smoothScroll = useCallback(() => {
    if (l.id && typeof window !== "undefined") {
      const element = document.getElementById(l.id);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [l.id]);

  if (isRouteLink) {
    return <Link to={l.href} className={cls} onClick={onClick}>{l.label}</Link>;
  }
  return <a href={`#${l.id}`} className={cls} onClick={(e) => { e.preventDefault(); smoothScroll(); onClick?.(); }}>{l.label}</a>;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 text-primary font-heading text-2xl font-bold tracking-wider">
          <Dumbbell className="w-7 h-7" />
          BEAST MODE
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavItem key={l.href} l={l} />
          ))}
          <a href="#contact" className="bg-primary text-primary-foreground px-5 py-2 rounded-sm font-heading text-sm uppercase tracking-wider hover:opacity-90 transition-opacity glow-red">
            Train With Me
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="flex flex-col p-4 pb-[max(1rem,env(safe-area-inset-bottom))] gap-1">
              {links.map((l) => (
                <NavItem key={l.href} l={l} onClick={() => setOpen(false)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
