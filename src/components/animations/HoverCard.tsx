
import { motion } from 'framer-motion';
import React from 'react';
import { Card } from '@/components/ui/card';

interface HoverCardProps extends React.ComponentProps<typeof Card> {
  children: React.ReactNode;
}

export const HoverCard = ({ children, ...props }: HoverCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card {...props}>
        {children}
      </Card>
    </motion.div>
  );
};
