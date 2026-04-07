import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const heroGreeting = "hello-world:~$ Olá mundo, eu sou";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [typedGreeting, setTypedGreeting] = useState(
    shouldReduceMotion ? heroGreeting : "",
  );

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedGreeting(heroGreeting);
      return;
    }

    setTypedGreeting("");
    let currentIndex = 0;

    const typingInterval = window.setInterval(() => {
      currentIndex += 1;
      setTypedGreeting(heroGreeting.slice(0, currentIndex));

      if (currentIndex >= heroGreeting.length) {
        window.clearInterval(typingInterval);
      }
    }, 55);

    return () => window.clearInterval(typingInterval);
  }, [shouldReduceMotion]);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 md:px-4 md:pb-12"
    >
      {/* Animated background gradient */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="sr-only">{heroGreeting}</span>
          <motion.div
            aria-hidden="true"
            className="mx-auto max-w-full overflow-hidden rounded-2xl border border-green-400/20 bg-[#03110b]/85 text-left shadow-[0_0_40px_rgba(74,222,128,0.08)] backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 border-b border-green-400/15 px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <span className="ml-2 font-mono text-[11px] text-green-400/70">
                marcelo@portfolio: ~
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 px-3 py-3 font-mono text-[11px] text-green-400 sm:px-4 sm:text-sm md:text-base">
              <span className="text-green-500">$</span>
              <span>{typedGreeting}</span>
              <motion.span
                aria-hidden="true"
                className="inline-block h-5 w-[2px] rounded-full bg-green-400"
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: [1, 0.25, 1] }
                }
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          id="hero-title"
          className="mb-4 text-5xl leading-[0.95] sm:mb-5 sm:text-6xl md:mb-6 md:text-8xl bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Marcelo Farias
        </motion.h1>

        <motion.div
          className="mb-6 text-xl text-muted-foreground sm:mb-7 sm:text-2xl md:mb-8 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-primary">Desenvolvedor Web</span> Full-Stack
        </motion.div>

        <motion.p
          className="mx-auto mb-8 max-w-2xl px-1 text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Profissional com foco em React, TypeScript e Next.js, com experiência
          em integrações com APIs REST e evolução contínua para arquiteturas
          full-stack com Node.js e testes automatizados.
        </motion.p>

        <motion.div
          className="mb-8 flex flex-col justify-center gap-3 sm:mb-10 sm:flex-row sm:gap-4 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="#projetos"
            className="w-full rounded-full bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Projetos
          </motion.a>
          <motion.a
            href="#contato"
            className="w-full rounded-full border border-border px-8 py-4 transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entrar em Contato
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {[
            {
              icon: Github,
              href: "https://github.com/marcelofarias-jr",
              label: "Abrir GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/marcelo-farias-a4337722/",
              label: "Abrir LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:marcelobfariasjr@gmail.com",
              label: "Enviar e-mail",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              title={social.label}
              aria-label={social.label}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon aria-hidden="true" className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#sobre"
          title="Ir para a seção Sobre"
          aria-label="Ir para a seção Sobre"
          className="mt-8 inline-flex flex-col items-center gap-1 rounded-md text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:absolute md:bottom-8 md:left-1/2 md:mt-0 md:-translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown aria-hidden="true" className="w-6 h-6" />
          <span className="text-[10px] uppercase tracking-[0.2em]">scroll</span>
        </motion.a>
      </div>
    </section>
  );
}
