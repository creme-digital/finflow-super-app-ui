
import React from 'react';

export function CandlestickChart() {
  return (
    <div className="w-full h-full relative bg-surface">
      {/* Price info overlay */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-surface-elevated rounded-lg shadow-sm p-3 border border-card-border">
          <div className="fintech-body mb-1">Trabot, ETH / BTC • 1h • Binance</div>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <span className="fintech-mono text-primary">0.003031</span>
            </span>
            <span className="text-success fintech-mono">+0.03033</span>
            <span className="text-success fintech-mono">1.003028</span>
            <span className="text-error fintech-mono">-0.00003</span>
            <span className="text-error fintech-mono">(-0.10%)</span>
          </div>
        </div>
      </div>

      {/* Price levels on the right */}
      <div className="absolute right-4 top-0 bottom-0 flex flex-col justify-between py-8 text-xs text-secondary">
        <div className="fintech-mono">0.1800</div>
        <div className="bg-success text-success-foreground px-1 rounded text-xs fintech-mono">0.1800</div>
        <div className="fintech-mono">0.1780</div>
        <div className="fintech-mono">0.1760</div>
        <div className="fintech-mono">0.1740</div>
        <div className="fintech-mono">0.1720</div>
        <div className="fintech-mono">0.1700</div>
        <div className="fintech-mono">0.1680</div>
        <div className="fintech-mono">0.1660</div>
        <div className="fintech-mono">0.1640</div>
        <div className="fintech-mono">0.1620</div>
      </div>

      {/* Chart visualization */}
      <div className="w-full h-full flex items-end justify-center px-16 pb-12">
        {/* Simplified candlestick representation */}
        <div className="flex items-end gap-1 h-full w-full">
          {Array.from({ length: 50 }, (_, i) => {
            const height = Math.random() * 60 + 20;
            const isGreen = Math.random() > 0.5;
            return (
              <div key={i} className="flex flex-col items-center flex-1">
                <div 
                  className={`w-full max-w-[8px] ${isGreen ? 'bg-success' : 'bg-error'} opacity-80`}
                  style={{ height: `${height}%` }}
                />
                <div className={`w-[1px] h-2 ${isGreen ? 'bg-success' : 'bg-error'}`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Date labels at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-16 pb-2 text-xs text-secondary">
        <span className="fintech-mono">24</span>
        <span className="fintech-mono">25</span>
        <span className="fintech-mono">26</span>
        <span className="fintech-mono">27</span>
        <span className="fintech-mono">28</span>
        <span className="fintech-mono">29</span>
        <span className="fintech-mono">30</span>
        <span className="fintech-mono">31</span>
        <span className="fintech-mono">01</span>
        <span className="fintech-mono">02</span>
        <span className="fintech-mono">03</span>
        <span className="fintech-mono">03</span>
        <span className="fintech-mono">04</span>
        <span className="fintech-mono">05</span>
        <span className="fintech-mono">06</span>
        <span className="fintech-mono">07</span>
        <span className="fintech-mono">08</span>
        <span className="fintech-mono">09</span>
        <span className="fintech-mono">10</span>
        <span className="fintech-mono">11</span>
        <span className="fintech-mono">12</span>
      </div>

      {/* Tooltip for specific date */}
      <div className="absolute" style={{ left: '45%', top: '60%' }}>
        <div className="bg-surface-elevated rounded-lg shadow-lg p-3 border border-card-border text-sm">
          <div className="font-medium mb-1 text-primary">02 Jul 2025</div>
          <div className="space-y-1 text-xs">
            <div className="text-secondary"><span className="text-muted">Open:</span> <span className="fintech-mono">6012.31</span></div>
            <div className="text-secondary"><span className="text-muted">High:</span> <span className="fintech-mono">6940.11</span></div>
            <div className="text-secondary"><span className="text-muted">Low:</span> <span className="fintech-mono">6542.40</span></div>
            <div className="text-secondary"><span className="text-muted">Close:</span> <span className="fintech-mono">6489.58</span></div>
          </div>
        </div>
      </div>

      {/* Volume bars at bottom */}
      <div className="absolute bottom-8 left-16 right-16 flex items-end gap-1 h-12">
        {Array.from({ length: 50 }, (_, i) => {
          const height = Math.random() * 100;
          const isGreen = Math.random() > 0.5;
          return (
            <div 
              key={i} 
              className={`flex-1 max-w-[8px] ${isGreen ? 'bg-success' : 'bg-error'} opacity-60`}
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>
    </div>
  );
}
