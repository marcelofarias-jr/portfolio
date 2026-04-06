import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 93 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "TypeScript", level: 91 },
      { name: "HTML/CSS/SCSS", level: 90 },
      { name: "Next.js", level: 86 },
      { name: "WordPress + PHP", level: 82 },
    ],
  },
  {
    category: "Back-end e Dados",
    items: [
      { name: "APIs REST (consumo e integração)", level: 90 },
      { name: "MySQL", level: 79 },
      { name: "Node.js", level: 78 },
      { name: "PostgreSQL", level: 76 },
      { name: "Spring Boot (integração com APIs)", level: 72 },
      { name: "Java", level: 53 },
    ],
  },
  {
    category: "Engenharia e Colaboração",
    items: [
      { name: "Git/Gitflow/GitLab", level: 90 },
      { name: "Scrum/Kanban", level: 88 },
      { name: "Redux e React Query", level: 84 },
      { name: "Figma e handoff para desenvolvimento", level: 84 },
      { name: "CI/CD e code review", level: 81 },
      { name: "Jest, Vitest e Cypress", level: 80 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="habilidades" className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4">Habilidades</h2>
          <p className="text-muted-foreground text-lg">
            Stack e práticas aplicadas na minha experiência profissional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              className="p-6 rounded-2xl bg-card border border-border"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-xl mb-6 text-primary">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + groupIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
