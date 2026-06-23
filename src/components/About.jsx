import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { about, stats } from '../data'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-5xl px-6 py-28">
      <SectionTitle index="01" title="À propos" />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="space-y-5 text-lg leading-relaxed text-white/70"
        >
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glow-border glass rounded-2xl p-6 text-center md:text-left"
            >
              <div className="text-4xl font-bold text-gradient">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-white/50">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function SectionTitle({ index, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="flex items-center gap-4"
    >
      <span className="font-mono text-sm text-accent-glow">{index}</span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
    </motion.div>
  )
}
