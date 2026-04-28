import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useCallback, useEffect, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  {
    title: "Almoxarifado Canela",
    description:
      "Sistema interno de gestão de almoxarifado construído para o Estúdio Canela Seca. Contempla controle de itens em estoque, cadastro e gerenciamento de usuários, log de auditoria de todas as ações e autenticação com proteção de rotas via middleware do Next.js e NextAuth v5.",
    image: "/projects/almoxarifado-canela.webp",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "NextAuth",
      "PostgreSQL",
    ],
    github: null,
    demo: null,
  },
  {
    title: "Ateliê Darah",
    description:
      "Site de portfólio para artista multidisciplinar com galeria filtrada por categoria, páginas de detalhe por obra e formulário de contato. Desenvolvido com foco em performance, SEO e acessibilidade usando Next.js 15 com App Router.",
    image: "/projects/ateliedarah.webp",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/marcelofarias-jr/ateliedarah",
    demo: "https://ateliedarah.vercel.app/",
  },
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
    title: "PlayVideos",
    description:
      "Plataforma de streaming inspirada na Netflix, desenvolvida com HTML, CSS e JavaScript puro — sem frameworks. Conta com carousel infinito, swipe mobile, navegação por teclado e catálogo separado por categoria.",
    image: "/projects/playvideos.webp",
    tags: ["HTML5", "CSS3", "JavaScript ES6+", "GitHub Pages"],
    github: "https://github.com/marcelofarias-jr/playvideos",
    demo: "https://marcelofarias-jr.github.io/playvideos/",
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

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
            Projetos com escolhas de stack pensadas para SEO, manutenção,
            performance e velocidade de entrega
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ml-[-24px] md:ml-[-32px]">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-1/2 pl-6 md:pl-8"
                >
                  <article
                    aria-labelledby={`project-title-${index}`}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-card border-2 border-white/15 hover:border-primary transition-all duration-300 h-full"
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-5 md:p-6 flex flex-col flex-1">
                      <h3
                        id={`project-title-${index}`}
                        className="mb-2 text-xl md:text-2xl"
                      >
                        {project.title}
                      </h3>
                      <p className="mb-5 text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {(project.github || project.demo) && (
                        <div className="flex gap-3 mt-auto">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Ver código de ${project.title}`}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                              <Github aria-hidden="true" className="w-4 h-4" />
                              Ver código
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Ver site de ${project.title}`}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                              <ExternalLink
                                aria-hidden="true"
                                className="w-4 h-4"
                              />
                              Visitar
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              aria-label="Projeto anterior"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Navegação do carousel"
            >
              {projects.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === selectedIndex}
                  aria-label={`Ir para projeto ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    i === selectedIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              aria-label="Próximo projeto"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
