import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Receitas do Marcelo",
    description:
      "Plataforma de receitas com foco em performance e organização de conteúdo, incluindo estrutura de rotas no App Router, camadas de API e persistência de dados.",
    image: "/projects/receitas-marcelo.webp",
    tags: ["Next.js", "TypeScript", "SCSS", "PostgreSQL", "Drizzle"],
    github: "https://github.com/marcelofarias-jr/receitas-marcelo",
    demo: "https://receitas-marcelo.vercel.app",
  },
  {
    title: "WeTalkie",
    description:
      "Landing page institucional publicada no GitHub Pages, construída para apresentação comercial de produto com foco em clareza de proposta e conversão.",
    image: "/projects/wetalkie.webp",
    tags: ["HTML", "SCSS", "JavaScript", "jQuery", "GitHub Pages"],
    github: "https://github.com/marcelofarias-jr/wetalkie",
    demo: "https://marcelofarias-jr.github.io/wetalkie/",
  },
  {
    title: "Biscoitos Erika",
    description:
      "Site institucional e portal de conteúdo para marca de alimentos, com navegação responsiva e estrutura voltada para comunicação da marca.",
    image: "/projects/berika.webp",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub Pages"],
    github: "https://github.com/marcelofarias-jr/berika",
    demo: "https://marcelofarias-jr.github.io/berika/",
  },
  {
    title: "Blog Next",
    description:
      "Blog desenvolvido com Next.js 15 explorando App Router, SSG, ISR, cache e revalidação. Deploy em servidor VPS com NGINX e HTTPS via certbot.",
    image: "/projects/blog-next.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NGINX", "VPS"],
    github: "https://github.com/marcelofarias-jr/blog-next",
    demo: "https://github.com/marcelofarias-jr/blog-next",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projetos" className="py-24 px-4 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">Projetos em Destaque</h2>
          <p className="text-muted-foreground text-lg">
            Projetos reais publicados no GitHub e em ambientes de producao
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
