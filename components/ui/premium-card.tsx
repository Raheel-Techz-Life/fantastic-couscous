import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface PremiumCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export function PremiumCard({ 
  children, 
  className, 
  delay = 0,
  hover = true,
  initial,
  whileInView,
  transition,
  ...props
}: PremiumCardProps) {
  return (
    <motion.div
      initial={initial || { opacity: 0, y: 20 }}
      whileInView={whileInView || { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition || { delay, duration: 0.5 }}
      className={cn(
        "p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm shadow-premium transition-all",
        hover && "hover:border-primary/50 hover:shadow-primary/5 hover:bg-card/80",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
