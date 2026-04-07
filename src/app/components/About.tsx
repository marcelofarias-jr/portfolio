import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Code2,
    title: "Arquitetura Front-end",
    description:
      "Estruturação de aplicações escaláveis com componentização, legibilidade e manutenção facilitada.",
  },
  {
    icon: Palette,
    title: "Interfaces com foco no usuário",
    description:
      "Construção de interfaces responsivas e modernas com React, Next.js, Tailwind e TypeScript.",
  },
  {
    icon: Rocket,
    title: "Integração e confiabilidade",
    description:
      "Integração com APIs REST, validação de dados e melhorias contínuas de performance e estabilidade.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="px-5 py-20 sm:px-6 sm:py-24 md:px-4"
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
            id="about-title"
            className="mb-4 text-3xl sm:text-4xl md:text-5xl"
          >
            Sobre Mim
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Desenvolvedor web focado em soluções robustas e experiência do
            usuário
          </p>
        </motion.div>

        <div className="mb-12 grid items-center gap-8 md:mb-16 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-5 text-base leading-relaxed text-muted-foreground sm:text-lg md:mb-6">
              Olá! 👋 Sou Marcelo Farias, desenvolvedor front-end com mais de 3
              anos de experiência criando interfaces que unem código limpo e
              experiência do usuário. Meu dia a dia envolve React.js, TypeScript
              e Next.js, construindo componentes reutilizáveis e integrações com
              APIs REST que realmente funcionam em produção.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hoje, como Desenvolvedor Pleno na Unichristus, trabalho com times
              ágeis para evoluir aplicações, refatorar código legado e garantir
              a qualidade dos dados. E não paro por aí — estou mergulhando no
              universo full-stack com Node.js, Java/Spring, bancos de dados
              (relacionais e não relacionais), testes automatizados e CI/CD. 🚀
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card/60 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
              <ImageWithFallback
                src="/about-tech-visual.webp"
                alt="A estação de trabalho reflete produtividade e personalidade, com elementos tecnológicos, código em execução e itens de cultura pop que representam criatividade e paixão pela área. Ao lado, três gatos — um branco de olhos azuis, um preto de olhos amarelos e um cinza de olhos verdes — complementam a cena, trazendo um toque pessoal e descontraído ao ambiente profissional."
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary md:p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon
                  aria-hidden="true"
                  className="w-6 h-6 text-primary"
                />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
