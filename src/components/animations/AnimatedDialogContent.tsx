
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedDialogContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  AnimatedDialogContentProps
>(({ children, className, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay 
      className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" 
    />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
AnimatedDialogContent.displayName = "AnimatedDialogContent";
