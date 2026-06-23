import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at 50% 30%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black, transparent 75%)',
        }}
      />

      <motion.div
        className="absolute left-[10%] top-[5%] h-[40vw] w-[40vw] rounded-full opacity-50 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #7c5cff, transparent 65%)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[5%] top-[25%] h-[35vw] w-[35vw] rounded-full opacity-40 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #4cd6ff, transparent 65%)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[30%] h-[30vw] w-[30vw] rounded-full opacity-30 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #ff5cf4, transparent 65%)' }}
        animate={{ scale: [1, 1.1, 1], x: ['-5%', '5%', '-5%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
