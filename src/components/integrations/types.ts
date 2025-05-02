
import { LucideIcon } from 'lucide-react';

export interface Integration {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  category: string;
  popular?: boolean;
  connected: boolean;
}
