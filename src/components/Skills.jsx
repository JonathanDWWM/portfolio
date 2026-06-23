import { motion } from 'framer-motion'
import { skills } from '../data'
import { SectionTitle } from './About'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-5xl px-6 py-28">
      <SectionTitle index="02" title="Compétences" />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: gi * 0.07 }}
            data-cursor-hover
            className="glow-border glass rounded-2xl p-6"
          >
            <h3 className="mb-6 font-mono text-sm uppercase tracking-wider text-accent-glow">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/80"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
