
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown } from 'lucide-react';

declare global {
  interface Window {
    TradingView: any;
  }
}

export function TradingViewChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TradingView script
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
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: containerRef.current.id,
          studies: [
            "Volume@tv-basicstudies"
          ],
          height: 500,
          width: "100%",
          library_path: "/charting_library/",
          custom_css_url: "/custom_chart.css",
          loading_screen: { backgroundColor: "#ffffff" },
          overrides: {
            "mainSeriesProperties.candleStyle.upColor": "#26a69a",
            "mainSeriesProperties.candleStyle.downColor": "#ef5350",
            "mainSeriesProperties.candleStyle.borderUpColor": "#26a69a",
            "mainSeriesProperties.candleStyle.borderDownColor": "#ef5350",
            "mainSeriesProperties.candleStyle.wickUpColor": "#26a69a",
            "mainSeriesProperties.candleStyle.wickDownColor": "#ef5350"
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
      <CardContent className="p-0">
        {/* Chart Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800 gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Trabot, ETH / BTC • 1h • Binance
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">Indicators</Button>
              <Button variant="ghost" size="sm">Save</Button>
              <Button variant="ghost" size="sm">Settings</Button>
            </div>
          </div>

          {/* Live Price Data */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-red-500">0.063031</span>
              <span className="text-red-500">H 0.03033</span>
              <span className="text-red-500">L 0.03028</span>
              <span className="text-red-500">-0.00003</span>
              <span className="text-red-500">(-0.10%)</span>
            </div>
          </div>
        </div>

        {/* Chart Container */}
        <div className="relative">
          <div 
            ref={containerRef}
            id="tradingview-chart"
            className="w-full h-[500px]"
          />
          
          {/* Fallback Chart (shown while TradingView loads) */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Loading TradingView Chart...</p>
            </div>
          </div>

          {/* Chart Toolbar */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <div className="w-4 h-4 rounded border border-gray-400"></div>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              📏
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              📈
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              🔍
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              🔒
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              👁️
            </Button>
          </div>

          {/* Price Info Overlay */}
          <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 text-sm">
            <div className="space-y-1">
              <div className="font-medium">02 Jul 2025</div>
              <div>Open: <span className="font-mono">6612.31</span></div>
              <div>High: <span className="font-mono">6940.11</span></div>
              <div>Low: <span className="font-mono">6542.40</span></div>
              <div>Close: <span className="font-mono">6489.58</span></div>
            </div>
          </div>
        </div>

        {/* Time Frame Selector */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-center gap-2">
            {['24', '25', '26', '27', '28', '29', '30', '31', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map((time) => (
              <Button
                key={time}
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs"
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
