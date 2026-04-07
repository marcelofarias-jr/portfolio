import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Loader2, Send } from "lucide-react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFeedback({
        type: "error",
        message:
          "Falta configurar o EmailJS com as chaves da conta para ativar o envio do formulário.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_email: "marcelobfariasjr@gmail.com",
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setFeedback({
        type: "success",
        message: "Mensagem enviada com sucesso! Vou responder em breve.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setFeedback({
        type: "error",
        message:
          "Não foi possível enviar agora. Tente novamente em instantes ou fale comigo por e-mail.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="bg-secondary/30 px-5 py-20 sm:px-6 sm:py-24 md:px-4"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="contact-title"
            className="mb-4 text-3xl sm:text-4xl md:text-5xl"
          >
            Entre em Contato
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Disponível para oportunidades em desenvolvimento web full-stack
          </p>
        </motion.div>

        <p id="contact-help" className="sr-only">
          Formulário de contato com campos obrigatórios para nome, e-mail e
          mensagem. Você também pode entrar em contato pelo e-mail exibido
          abaixo.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          aria-describedby="contact-help"
          aria-busy={isSubmitting}
          className="space-y-5 md:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="name" className="block mb-2 text-sm">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Seu nome"
              />
            </motion.div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="seu@email.com"
              />
            </motion.div>
          </div>

          <motion.div
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="message" className="block mb-2 text-sm">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder="Conte-me sobre seu projeto..."
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            {isSubmitting ? (
              <Loader2 aria-hidden="true" className="w-5 h-5 animate-spin" />
            ) : (
              <Send
                aria-hidden="true"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            )}
          </motion.button>

          {feedback && (
            <p
              role={feedback.type === "success" ? "status" : "alert"}
              aria-live="polite"
              className={`rounded-lg px-4 py-3 text-sm ${
                feedback.type === "success"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-amber-500/10 text-amber-400"
              }`}
            >
              {feedback.message}
            </p>
          )}
        </motion.form>

        <motion.div
          className="mt-12 text-center md:mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-4">Ou fale comigo por:</p>
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="mailto:marcelobfariasjr@gmail.com"
              className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              marcelobfariasjr@gmail.com
            </a>
            <span className="hidden text-muted-foreground sm:inline">•</span>
            <a
              href="https://www.linkedin.com/in/marcelo-farias-a4337722/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
