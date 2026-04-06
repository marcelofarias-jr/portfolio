import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

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
    <section id="sobre" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground text-lg">
            Desenvolvedor web focado em soluções robustas e experiência do
            usuário
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Sou Marcelo Farias, desenvolvedor web com mais de 3 anos de
              experiência em front-end, atuando com React.js, TypeScript,
              Next.js e WordPress. Tenho experiência na criação de interfaces
              responsivas, integração com APIs REST e desenvolvimento de
              componentes reutilizáveis em ambientes de produto.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atualmente, atuo como Desenvolvedor Pleno na Unichristus,
              contribuindo com evolução de aplicações, refatoração de código
              legado, validação de dados e colaboração com times ágeis. Minha
              transição para full-stack inclui aprofundamento em Node.js, Java
              com Spring, testes automatizados e boas práticas de CI/CD.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-2xl">Web Full-Stack Developer</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
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
