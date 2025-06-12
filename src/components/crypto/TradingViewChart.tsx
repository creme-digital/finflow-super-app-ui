
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Settings, Download, MoreHorizontal, TrendingUp, BarChart3, LineChart } from 'lucide-react';

declare global {
  interface Window {
    TradingView: any;
  }
}

export function TradingViewChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView && containerRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "COINBASE:ETHUSD", // Changed to a more reliable symbol
          interval: "1H",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "transparent",
          enable_publishing: false,
          allow_symbol_change: false,
          container_id: containerRef.current.id,
          studies: ["Volume@tv-basicstudies"],
          height: 400,
          width: "100%",
          hide_top_toolbar: true, // Changed to true to hide toolbar conflicts
          hide_legend: false,
          save_image: false,
          disabled_features: [
            "header_symbol_search",
            "header_resolutions",
            "header_chart_type",
            "header_settings",
            "header_indicators",
            "header_compare",
            "header_undo_redo",
            "header_screenshot",
            "header_fullscreen_button"
          ],
          onChartReady: () => {
            console.log('TradingView chart loaded successfully');
            setIsLoading(false);
          },
          overrides: {
            "paneProperties.background": "transparent",
            "paneProperties.backgroundType": "solid",
            "mainSeriesProperties.candleStyle.upColor": "#22c55e",
            "mainSeriesProperties.candleStyle.downColor": "#ef4444",
            "mainSeriesProperties.candleStyle.borderUpColor": "#22c55e",
            "mainSeriesProperties.candleStyle.borderDownColor": "#ef4444",
            "mainSeriesProperties.candleStyle.wickUpColor": "#22c55e",
            "mainSeriesProperties.candleStyle.wickDownColor": "#ef4444"
          }
        });
      }
    };
    script.onerror = () => {
      console.error('Failed to load TradingView script');
      setIsLoading(false);
    };
    document.head.appendChild(script);

    // Set a timeout to hide loading after 15 seconds if chart doesn't load
    const timeout = setTimeout(() => {
      console.log('TradingView chart loading timeout');
      setIsLoading(false);
    }, 15000);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="overflow-hidden h-[500px]" style={{
      border: '1px solid #FFFFFF',
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
      borderRadius: '16px',
      background: 'rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/20">
        <div className="flex items-center gap-4">
          {/* Left toolbar icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              <BarChart3 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              <LineChart className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              <TrendingUp className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground">Indicators</div>
        </div>
        
        {/* Right toolbar icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-xs">
            Save
          </Button>
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Symbol and price info */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Ethereum / USD</span>
            <span className="text-xs text-muted-foreground">• 1h • Coinbase</span>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">O</span>
            <span className="font-mono">3,456.78</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">H</span>
            <span className="font-mono">3,478.92</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">L</span>
            <span className="font-mono">3,445.12</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-green-600">+23.45</span>
            <span className="text-green-600">(+0.68%)</span>
          </div>
        </div>
      </div>
      
      {/* Chart container */}
      <div className="relative flex-1" style={{ height: 'calc(100% - 120px)' }}>
        <div 
          ref={containerRef}
          id="tradingview-chart"
          className="w-full h-full"
        />
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Loading chart...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
