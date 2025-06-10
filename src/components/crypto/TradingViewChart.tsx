
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

declare global {
  interface Window {
    TradingView: any;
  }
}

export function TradingViewChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView && containerRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:ETHBTC",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#ffffff",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: containerRef.current.id,
          studies: ["Volume@tv-basicstudies"],
          height: 500,
          width: "100%",
          overrides: {
            "mainSeriesProperties.candleStyle.upColor": "#10b981",
            "mainSeriesProperties.candleStyle.downColor": "#ef4444",
            "mainSeriesProperties.candleStyle.borderUpColor": "#10b981",
            "mainSeriesProperties.candleStyle.borderDownColor": "#ef4444",
            "mainSeriesProperties.candleStyle.wickUpColor": "#10b981",
            "mainSeriesProperties.candleStyle.wickDownColor": "#ef4444"
          }
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CardTitle>ETH/BTC</CardTitle>
            <Badge className="bg-green-100 text-green-800 gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Live • Binance
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Indicators</Button>
            <Button variant="outline" size="sm">Timeframe</Button>
            <Button variant="outline" size="sm">Settings</Button>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 font-mono">
            <span className="text-2xl font-bold">0.063031</span>
            <span className="text-red-600">-0.00003 (-0.10%)</span>
          </div>
          <div className="flex gap-4 text-muted-foreground">
            <span>H: 0.063350</span>
            <span>L: 0.062800</span>
            <span>Vol: 1,234.56</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="relative">
          <div 
            ref={containerRef}
            id="tradingview-chart"
            className="w-full h-[500px]"
          />
          
          <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Loading chart...</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
