import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, X, Check, Calendar } from 'lucide-react'
import { projects } from '../data'
import { SectionTitle } from './About'

const gradients = [
  'linear-gradient(135deg, #7c5cff, #4cd6ff)',
  'linear-gradient(135deg, #ff5cf4, #7c5cff)',
  'linear-gradient(135deg, #4cd6ff, #2dd4bf)',
  'linear-gradient(135deg, #fb923c, #ff5cf4)',
]

function Thumb({ project, index, className }) {
  return (
    <div
      className={className}
      style={{ background: project.image ? undefined : gradients[index % gradients.length] }}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-mono text-5xl font-bold text-white/30">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
    </div>
  )
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.article
      onClick={() => onOpen(index)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      data-cursor-hover
      className="glow-border group relative cursor-pointer overflow-hidden rounded-3xl glass p-1"
    >
      <div className="overflow-hidden rounded-[20px]">
        <Thumb project={project} index={index} className="relative h-48 w-full overflow-hidden" />

        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              {project.subtitle && (
                <p className="mt-0.5 font-mono text-xs text-accent-glow">{project.subtitle}</p>
              )}
            </div>
            {project.year && (
              <span className="shrink-0 rounded-full bg-white/5 px-2.5 py-1 font-mono text-xs text-white/50">
                {project.year}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-white/60">
                {t}
              </span>
            ))}
          </div>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Voir le détail <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectModal({ project, index, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/80 p-4 backdrop-blur-md sm:p-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="glow-border relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl bg-[#0b0d16]"
      >
        <div className="relative">
          <Thumb project={project} index={index} className="relative h-52 w-full overflow-hidden sm:h-64" />
          <button
            onClick={onClose}
            data-cursor-hover
            aria-label="Fermer"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ink/60 text-white/80 backdrop-blur transition-colors hover:bg-ink hover:text-white"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-5 left-6 right-6">
            {project.subtitle && (
              <p className="font-mono text-xs text-cyan-glow">{project.subtitle}</p>
            )}
            <h3 className="mt-1 text-3xl font-bold sm:text-4xl">{project.title}</h3>
          </div>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-6 sm:p-8">
          {project.year && (
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-white/50">
              <Calendar size={15} /> {project.year}
            </div>
          )}

          <p className="leading-relaxed text-white/70">{project.longDescription || project.description}</p>

          {project.features?.length > 0 && (
            <div className="mt-8">
              <h4 className="mb-3 font-mono text-sm uppercase tracking-wider text-accent-glow">
                Fonctionnalités clés
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                    <Check size={16} className="mt-0.5 shrink-0 text-cyan-glow" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8">
            <h4 className="mb-3 font-mono text-sm uppercase tracking-wider text-accent-glow">
              Technologies utilisées
            </h4>
            <div className="flex flex-wrap gap-2">
              {(project.tech?.length ? project.tech : project.tags).map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-sm text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.gallery?.length > 0 && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.gallery.map((src) => (
                <img key={src} src={src} alt="" className="w-full rounded-xl border border-white/10" />
              ))}
            </div>
          )}

          {(project.link || project.repo) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-cyan-glow px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-105"
                >
                  Voir le projet <ArrowUpRight size={16} />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  <Github size={16} /> Code source
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-5xl px-6 py-28">
      <SectionTitle index="03" title="Mes créations" />
      <p className="mt-4 max-w-xl text-white/50">
        Clique sur une création pour découvrir les détails, les technologies et les fonctionnalités.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} onOpen={setOpenIndex} />
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <ProjectModal
            project={projects[openIndex]}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
