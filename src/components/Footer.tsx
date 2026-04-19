import { Dumbbell } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="/#home" className="flex items-center gap-2 text-primary font-heading text-xl font-bold tracking-wider">
        <Dumbbell className="w-5 h-5" />
        BEAST MODE
      </a>
      <p className="text-muted-foreground text-sm">© 2026 Beast Mode Training. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
