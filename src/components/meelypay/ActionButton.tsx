
import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  color: string;
  onClick?: () => void;
}

export function ActionButton({ icon: IconComponent, label, color, onClick }: ActionButtonProps) {
  return (
    <Button
      variant="ghost"
      className="h-auto flex flex-col gap-2 p-3 hover:bg-muted/50"
      onClick={onClick}
    >
      <IconComponent className={cn("w-5 h-5", color)} />
      <span className="text-xs font-medium">{label}</span>
    </Button>
  );
}
