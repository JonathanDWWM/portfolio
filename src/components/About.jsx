import { about, stats } from '../data'

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-5xl px-6 py-28">
      <SectionTitle index="01" title="À propos" />

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-white/70">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1">
          {stats.map((s) => (
            <div key={s.label} className="glow-border glass rounded-2xl p-6 text-center md:text-left">
              <div className="text-4xl font-bold text-gradient">
                {s.value}{s.suffix}
              </div>
              <div className="mt-1 text-sm text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionTitle({ index, title }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-accent-glow">{index}</span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
    </div>
  )
}
