
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, CheckCircle, AlertCircle, Info, X } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'info' | 'success' | 'warning';
  read: boolean;
}

// Mock notifications data
const notifications: Notification[] = [
  {
    id: '1',
    title: 'Payment Received',
    message: 'You received $2,450.00 from Tech Gadget',
    time: '2 min ago',
    type: 'success',
    read: false,
  },
  {
    id: '2',
    title: 'Payroll Processed',
    message: 'May 2025 payroll has been successfully processed',
    time: '1 hour ago',
    type: 'info',
    read: false,
  },
  {
    id: '3',
    title: 'Low Balance Alert',
    message: 'CosMake account balance is below $1,000',
    time: '3 hours ago',
    type: 'warning',
    read: true,
  },
  {
    id: '4',
    title: 'New Invoice',
    message: 'Invoice #INV-2025-042 has been generated',
    time: '1 day ago',
    type: 'info',
    read: true,
  },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="h-4 w-4 text-green-600" />;
    case 'warning':
      return <AlertCircle className="h-4 w-4 text-yellow-600" />;
    default:
      return <Info className="h-4 w-4 text-blue-600" />;
  }
};

export function NotificationsDropdown() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative cursor-pointer">
          <div 
            className="flex items-center justify-center w-10 h-10 rounded-full transition-colors hover:bg-white/20"
            style={{ 
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.8)'
            }}
          >
            <Bell className="h-5 w-5 text-foreground" />
            {unreadCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
              >
                {unreadCount}
              </Badge>
            )}
          </div>
        </div>
      </PopoverTrigger>
      
      <PopoverContent 
        align="end" 
        className="w-80 p-0 mr-4"
        style={{
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '16px',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <h3 className="font-semibold text-foreground">Notifications</h3>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="text-sm text-muted-foreground hover:bg-white/20">
              Mark all read
            </Button>
          )}
        </div>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-8 text-center">
              <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">No notifications yet</p>
            </div>
          ) : (
            <div className="space-y-1 p-2">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg transition-colors cursor-pointer group ${
                    !notification.read 
                      ? 'bg-white/30 hover:bg-white/40' 
                      : 'hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {getNotificationIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className={`text-sm font-medium text-foreground ${!notification.read ? 'font-semibold' : ''}`}>
                          {notification.title}
                        </h4>
                        
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {notification.time}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      
                      {!notification.read && (
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/20">
          <Button variant="ghost" className="w-full justify-center text-sm hover:bg-white/20">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
