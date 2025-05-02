
import { DialogContent } from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedDialogContentProps extends React.ComponentProps<typeof DialogContent> {
  children: React.ReactNode;
}

export const AnimatedDialogContent = ({ children, ...props }: AnimatedDialogContentProps) => {
  return (
    <DialogContent {...props} asChild>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        {children}
      </motion.div>
    </DialogContent>
  );
};
