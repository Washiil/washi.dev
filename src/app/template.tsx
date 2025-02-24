// app/template.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0.25, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.25, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
