import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRightLeft, CreditCard, Send, Plus, MoreVertical } from 'lucide-react';

interface QuickActionsProps {
  className?: string;
}

export function QuickActions({ className }: QuickActionsProps) {
  return (
    <Card className={cn('card-shadow h-full', className)}>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 h-full">
          <Button variant="outline" className="h-16 w-full flex items-center justify-center gap-3 border border-gray-200 p-0 card-gradient hover:border-gray-300 transition-all duration-300">
            <span className="flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.83053 15.1699L17.9271 2.07326C17.1034 1.24958 15.5429 1.76971 12.422 2.80999L4.64597 5.4019C2.91111 5.98016 2.04369 6.26929 1.78039 6.90539C1.71851 7.05489 1.68109 7.21338 1.66958 7.37477C1.6206 8.06146 2.26714 8.70798 3.56022 10.001L3.79575 10.2365C4.008 10.4488 4.11412 10.5549 4.19434 10.673C4.35257 10.906 4.44238 11.1786 4.4536 11.46C4.45929 11.6027 4.43702 11.7511 4.39246 12.048C4.22939 13.1344 4.14785 13.6777 4.24391 14.0957C4.33884 14.5088 4.54527 14.8779 4.83053 15.1699Z" fill="#585362"/>
<path opacity="0.5" d="M14.5821 15.4045L17.1909 7.57841C18.2312 4.45759 18.7514 2.89717 17.9277 2.07349L4.83105 15.1701C5.1211 15.4669 5.49263 15.6839 5.91133 15.7864C6.32797 15.8883 6.87232 15.8144 7.96102 15.6667L8.02055 15.6586C8.32744 15.617 8.4809 15.5961 8.62824 15.605C8.89571 15.6212 9.15404 15.7083 9.37666 15.8574C9.49929 15.9395 9.60879 16.049 9.8278 16.268L10.0372 16.4774C11.2957 17.7359 11.925 18.3652 12.5926 18.3324C12.7766 18.3234 12.9574 18.2807 13.1261 18.2065C13.7378 17.9373 14.0192 17.093 14.5821 15.4045Z" fill="#585362"/>
</svg>
            </span>
            <span className="font-medium text-base">Send Money</span>
          </Button>
          <Button variant="outline" className="h-16 w-full flex items-center justify-center gap-3 border border-gray-200 p-0 card-gradient hover:border-gray-300 transition-all duration-300">
            <span className="flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.54135 3.33328C8.54135 3.07554 8.38314 2.84423 8.14293 2.75079C7.90272 2.65736 7.62979 2.72095 7.45563 2.91095L2.8723 7.91095C2.70482 8.09366 2.66113 8.35807 2.76093 8.58494C2.86073 8.81181 3.08517 8.95828 3.33302 8.95828H16.6664C17.0115 8.95828 17.2914 8.67845 17.2914 8.33328C17.2914 7.9881 17.0115 7.70828 16.6664 7.70828L8.54135 7.70828V3.33328Z" fill="#585362"/>
<path opacity="0.5" d="M11.458 16.6667L11.458 12.2917H3.33301C2.98783 12.2917 2.70801 12.0119 2.70801 11.6667C2.70801 11.3216 2.98783 11.0417 3.33301 11.0417L16.6663 11.0417C16.9142 11.0417 17.1386 11.1882 17.2384 11.4151C17.3382 11.642 17.2945 11.9064 17.1271 12.0891L12.5437 17.0891C12.3696 17.2791 12.0966 17.3427 11.8564 17.2492C11.6162 17.1558 11.458 16.9245 11.458 16.6667Z" fill="#585362"/>
</svg>  
            </span>
            <span className="font-medium text-base">Transfer</span>
          </Button>
          <Button variant="outline" className="h-16 w-full flex items-center justify-center gap-3 border border-gray-200 p-0 card-gradient hover:border-gray-300 transition-all duration-300">
            <span className="flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M8.3333 16.6666H11.6666C14.8093 16.6666 16.3807 16.6666 17.357 15.6903C18.3333 14.714 18.3333 13.1426 18.3333 9.99992C18.3333 9.63164 18.3319 8.65994 18.3304 8.33325H1.66683C1.66526 8.65994 1.66663 9.63164 1.66663 9.99992C1.66663 13.1426 1.66663 14.714 2.64294 15.6903C3.61925 16.6666 5.1906 16.6666 8.3333 16.6666Z" fill="#585362"/>
<path d="M8.32936 3.33325H11.6713C14.8221 3.33325 16.3975 3.33325 17.3763 4.26307C18.0811 4.93255 18.2784 5.89581 18.3337 7.49992V8.33325H1.66699V7.49992C1.72224 5.89581 1.91957 4.93255 2.62433 4.26307C3.60316 3.33325 5.17856 3.33325 8.32936 3.33325Z" fill="#585362"/>
<path d="M10.4167 12.7083C10.0715 12.7083 9.79167 12.9881 9.79167 13.3333C9.79167 13.6784 10.0715 13.9583 10.4167 13.9583H11.6667C12.0118 13.9583 12.2917 13.6784 12.2917 13.3333C12.2917 12.9881 12.0118 12.7083 11.6667 12.7083H10.4167Z" fill="#585362"/>
<path d="M5 12.7083C4.65482 12.7083 4.375 12.9881 4.375 13.3333C4.375 13.6784 4.65482 13.9583 5 13.9583H8.33333C8.67851 13.9583 8.95833 13.6784 8.95833 13.3333C8.95833 12.9881 8.67851 12.7083 8.33333 12.7083H5Z" fill="#585362"/>
</svg>
            </span>
            <span className="font-medium text-base">Cards</span>
          </Button>
          <Button variant="outline" className="h-16 w-full flex items-center justify-center gap-3 border border-gray-200 p-0 card-gradient hover:border-gray-300 transition-all duration-300">
            <span className="flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M18.3337 10.0001C18.3337 14.6025 14.6027 18.3334 10.0003 18.3334C5.39795 18.3334 1.66699 14.6025 1.66699 10.0001C1.66699 5.39771 5.39795 1.66675 10.0003 1.66675C14.6027 1.66675 18.3337 5.39771 18.3337 10.0001Z" fill="#585362"/>
<path d="M10.625 7.5C10.625 7.15482 10.3452 6.875 10 6.875C9.65482 6.875 9.375 7.15482 9.375 7.5L9.375 9.37502H7.5C7.15482 9.37502 6.875 9.65484 6.875 10C6.875 10.3452 7.15482 10.625 7.5 10.625H9.375V12.5C9.375 12.8452 9.65482 13.125 10 13.125C10.3452 13.125 10.625 12.8452 10.625 12.5L10.625 10.625H12.5C12.8452 10.625 13.125 10.3452 13.125 10C13.125 9.65484 12.8452 9.37502 12.5 9.37502H10.625V7.5Z" fill="#585362"/>
</svg>

            </span>
            <span className="font-medium text-base">New Account</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
