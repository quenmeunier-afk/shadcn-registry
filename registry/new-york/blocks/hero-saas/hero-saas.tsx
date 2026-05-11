"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function HeroSaaS() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 py-32">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/50 px-3 py-1 text-xs font-medium text-neutral-600 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/50 dark:text-neutral-400"
        >
          <span className="size-1.5 rounded-full bg-emerald-500" />
          Disponible en bêta
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl"
        >
          La plateforme dont vos équipes parlent{" "}
          <em className="italic">déjà</em>.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          Un produit pensé pour livrer plus vite, sans sacrifier la qualité.
          Configurez, déployez, mesurez — en quelques minutes.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <Button size="lg">
            Démarrer gratuitement
            <ArrowRight />
          </Button>
          <Button size="lg" variant="ghost">
            Parler à l'équipe
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
