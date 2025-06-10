
import React from 'react';

export function CandlestickChart() {
  return (
    <div className="w-full h-full relative bg-white">
      {/* Price info overlay */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-white rounded-lg shadow-sm p-3 border border-gray-100">
          <div className="text-sm font-medium text-gray-600 mb-1">Trabot, ETH / BTC • 1h • Binance</div>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              0.003031
            </span>
            <span className="text-green-500">+0.03033</span>
            <span className="text-green-500">1.003028</span>
            <span className="text-red-500">-0.00003</span>
            <span className="text-red-500">(-0.10%)</span>
          </div>
        </div>
      </div>

      {/* Price levels on the right */}
      <div className="absolute right-4 top-0 bottom-0 flex flex-col justify-between py-8 text-xs text-gray-500">
        <div>0.1800</div>
        <div className="bg-green-500 text-white px-1 rounded text-xs">0.1800</div>
        <div>0.1780</div>
        <div>0.1760</div>
        <div>0.1740</div>
        <div>0.1720</div>
        <div>0.1700</div>
        <div>0.1680</div>
        <div>0.1660</div>
        <div>0.1640</div>
        <div>0.1620</div>
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
                  className={`w-full max-w-[8px] ${isGreen ? 'bg-green-500' : 'bg-red-500'} opacity-80`}
                  style={{ height: `${height}%` }}
                />
                <div className={`w-[1px] h-2 ${isGreen ? 'bg-green-500' : 'bg-red-500'}`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Date labels at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between px-16 pb-2 text-xs text-gray-500">
        <span>24</span>
        <span>25</span>
        <span>26</span>
        <span>27</span>
        <span>28</span>
        <span>29</span>
        <span>30</span>
        <span>31</span>
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>03</span>
        <span>04</span>
        <span>05</span>
        <span>06</span>
        <span>07</span>
        <span>08</span>
        <span>09</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
      </div>

      {/* Tooltip for specific date */}
      <div className="absolute" style={{ left: '45%', top: '60%' }}>
        <div className="bg-white rounded-lg shadow-lg p-3 border border-gray-200 text-sm">
          <div className="font-medium mb-1">02 Jul 2025</div>
          <div className="space-y-1 text-xs">
            <div><span className="text-gray-500">Open:</span> 6012.31</div>
            <div><span className="text-gray-500">High:</span> 6940.11</div>
            <div><span className="text-gray-500">Low:</span> 6542.40</div>
            <div><span className="text-gray-500">Close:</span> 6489.58</div>
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
              className={`flex-1 max-w-[8px] ${isGreen ? 'bg-green-500' : 'bg-red-500'} opacity-60`}
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>
    </div>
  );
}
