
import React from 'react';
import { ActionButton } from './ActionButton';
import { Send, ArrowDownToLine, CreditCard, Building, Smartphone, Zap } from 'lucide-react';

const actionButtons = [
  { icon: Send, label: 'Send', color: 'text-blue-600' },
  { icon: ArrowDownToLine, label: 'Receive', color: 'text-green-600' },
  { icon: CreditCard, label: 'Add Card', color: 'text-purple-600' },
  { icon: Building, label: 'Pay to Bank', color: 'text-orange-600' },
  { icon: Smartphone, label: 'Pay Phone', color: 'text-pink-600' },
  { icon: Zap, label: 'Utility', color: 'text-yellow-600' }
];

export function ActionButtonsGrid() {
  return (
    <div className="grid grid-cols-6 gap-3">
      {actionButtons.map((action, index) => (
        <ActionButton
          key={index}
          icon={action.icon}
          label={action.label}
          color={action.color}
        />
      ))}
    </div>
  );
}
