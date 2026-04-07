import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Blog Next",
    description:
      "Blog com foco em SEO, performance e arquitetura moderna, usando Next.js para combinar boa experiência de leitura com renderização eficiente.",
    image: "/projects/blog-next.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Drizzle ORM", "Turso"],
    github: "https://github.com/marcelofarias-jr/blog-next",
    demo: "https://blog-next-iota-one.vercel.app/",
  },
  {
    title: "Receitas do Marcelo",
    description:
      "Plataforma de receitas com catálogo estruturado, SEO e persistência relacional, pensada para escalar conteúdo com tipagem e manutenção previsíveis.",
    image: "/projects/receitas-marcelo.webp",
    tags: ["Next.js", "TypeScript", "SCSS", "PostgreSQL", "Drizzle"],
    github: "https://github.com/marcelofarias-jr/receitas-marcelo",
    demo: "https://receitas-marcelo.vercel.app",
  },
  {
    title: "Pomodoro",
    description:
      "Aplicação de produtividade com cronômetro, histórico e configurações, desenvolvida como SPA leve e responsiva para uso rápido no dia a dia.",
    image: "/projects/pomodoro.webp",
    tags: ["React", "TypeScript", "Vite", "SCSS", "React Router"],
    github: "https://github.com/marcelofarias-jr/pomodoro",
    demo: "https://pomodoro-lac-pi.vercel.app/",
  },
  {
    title: "Portfólio",
    description:
      "Site pessoal com foco em apresentação profissional e acessibilidade, incluindo navegação por teclado, rótulos descritivos e feedback claro para leitores de tela.",
    image: "/projects/portfolio.webp",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Acessibilidade"],
    github: "https://github.com/marcelofarias-jr/portfolio",
    demo: "/",
  },
  {
    title: "WeTalkie",
    description:
      "Landing page institucional voltada para apresentação comercial clara e direta, com estrutura enxuta e publicação simples no GitHub Pages.",
    image: "/projects/wetalkie.webp",
    tags: ["HTML", "SCSS", "JavaScript", "jQuery", "GitHub Pages"],
    github: "https://github.com/marcelofarias-jr/wetalkie",
    demo: "https://marcelofarias-jr.github.io/wetalkie/",
  },
  {
    title: "Biscoitos Erika",
    description:
      "Site institucional responsivo desenvolvido para fortalecer a presença digital da marca com entrega rápida e manutenção acessível.",
    image: "/projects/berika.webp",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "GitHub Pages"],
    github: "https://github.com/marcelofarias-jr/berika",
    demo: "https://marcelofarias-jr.github.io/berika/",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="projetos"
      aria-labelledby="projects-title"
      className="bg-secondary/30 px-5 py-20 sm:px-6 sm:py-24 md:px-4"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="projects-title"
            className="mb-4 text-3xl sm:text-4xl md:text-5xl"
          >
            Projetos em Destaque
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            Projetos com escolhas de stack pensadas para SEO, manutencao,
            performance e velocidade de entrega
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              aria-labelledby={`project-title-${index}`}
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
                    title={`Ver código de ${project.title}`}
                    aria-label={`Ver código de ${project.title}`}
                    className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github aria-hidden="true" className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    title={`Abrir projeto ${project.title}`}
                    aria-label={`Abrir projeto ${project.title}`}
                    className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink aria-hidden="true" className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <h3
                  id={`project-title-${index}`}
                  className="mb-2 text-xl md:text-2xl"
                >
                  {project.title}
                </h3>
                <p className="mb-5 text-muted-foreground leading-relaxed">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
