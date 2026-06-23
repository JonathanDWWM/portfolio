import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileDown } from 'lucide-react'
import { profile } from '../data'

function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1600 } = {}) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          )
        },
        deleting ? deleteSpeed : typeSpeed,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)
  const { socials } = profile

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.h1
          variants={item}
          className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-5 flex h-10 items-center justify-center font-mono text-xl sm:text-3xl"
        >
          <span className="text-gradient">{typed}</span>
          <span className="ml-1 inline-block h-7 w-[3px] animate-pulse bg-cyan-glow sm:h-9" />
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group rounded-full bg-gradient-to-r from-accent to-cyan-glow px-6 py-3 font-medium text-ink transition-transform hover:scale-105"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="rounded-full glass px-6 py-3 font-medium text-white/80 transition-colors hover:text-white"
          >
            Me contacter
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-4 text-white/50">
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="GitHub">
              <Github size={20} />
            </a>
          )}
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          )}
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-white" aria-label="Email">
            <Mail size={20} />
          </a>
          {socials.cv && (
            <a href={socials.cv} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm transition-colors hover:text-white">
              <FileDown size={18} /> CV
            </a>
          )}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Défiler vers le bas"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  )
}
