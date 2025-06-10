
import { NavLink } from 'react-router-dom';
import { Lock, Bell, Key } from 'lucide-react';
import { cn } from '@/lib/utils';

const settingsNavItems = [
  {
    title: 'Password',
    href: '/settings?tab=password',
    icon: Lock,
    id: 'password'
  },
  {
    title: 'Notifications',
    href: '/settings?tab=notifications', 
    icon: Bell,
    id: 'notifications'
  },
  {
    title: 'API keys',
    href: '/settings?tab=api-keys',
    icon: Key,
    id: 'api-keys'
  }
];

export function SettingsNavigation({ activeTab }: { activeTab: string }) {
  return (
    <nav className="space-y-1">
      {settingsNavItems.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <NavLink
            key={item.id}
            to={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
              isActive
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}
