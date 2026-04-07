import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-10 sm:px-6 md:px-4 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:gap-4 md:text-left">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground md:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>© {currentYear} Marcelo Farias. Feito com</span>
            <Heart
              aria-hidden="true"
              className="w-4 h-4 text-red-500 fill-red-500"
            />
            <span>e React</span>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="https://github.com/marcelofarias-jr"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir perfil do GitHub"
              className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/marcelo-farias-a4337722/"
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir perfil do LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
