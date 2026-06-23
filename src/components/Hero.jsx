import { Mail, Github, Linkedin, FileDown } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  const { socials } = profile

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          {profile.name}
        </h1>

        <div className="mt-5 flex h-10 items-center justify-center font-mono text-xl sm:text-3xl">
          <span className="text-gradient">Concepteur d'applications</span>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-accent to-cyan-glow px-6 py-3 font-medium text-ink transition-transform hover:scale-105"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="rounded-full glass px-6 py-3 font-medium text-white/80 transition-colors hover:text-white"
          >
            Me contacter
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 text-white/50">
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
        </div>
      </div>
    </section>
  )
}
