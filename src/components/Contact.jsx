import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { profile } from '../data'
import { SectionTitle } from './About'

export default function Contact() {
  const { socials } = profile
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-5xl px-6 py-28">
      <SectionTitle index="04" title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="glow-border glass mt-12 overflow-hidden rounded-3xl p-10 text-center"
      >
        <h3 className="text-3xl font-bold sm:text-5xl">
          Travaillons <span className="text-gradient">ensemble</span>
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Un projet, une opportunité, ou juste envie d’échanger ? Ma boîte mail est toujours ouverte.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-cyan-glow px-7 py-3.5 font-medium text-ink transition-transform hover:scale-105"
        >
          <Mail size={18} />
          {profile.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-6 text-white/50">
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
              <Github size={18} /> GitHub
            </a>
          )}
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
              <Linkedin size={18} /> LinkedIn
            </a>
          )}
          <span className="flex items-center gap-2">
            <MapPin size={18} /> {profile.location}
          </span>
        </div>
      </motion.div>

      <footer className="mt-16 text-center text-sm text-white/30">
        © {new Date().getFullYear()} {profile.name}. Conçu & développé avec React.
      </footer>
    </section>
  )
}
