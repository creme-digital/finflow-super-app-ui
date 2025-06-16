
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Settings, Download, BarChart3, LineChart, TrendingUp } from 'lucide-react';

declare global {
  interface Window {
    TradingView: any;
  }
}

export function TradingViewChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Clear any existing chart
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    
    script.onload = () => {
      console.log('TradingView script loaded');
      
      if (window.TradingView && containerRef.current) {
        try {
          new window.TradingView.widget({
            autosize: true,
            symbol: "BINANCE:BTCUSDT",
            interval: "1H",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f8f9fa",
            enable_publishing: false,
            allow_symbol_change: false,
            container_id: containerRef.current.id,
            height: 350,
            width: "100%",
            hide_top_toolbar: false,
            hide_legend: false,
            save_image: false,
            onChartReady: () => {
              console.log('TradingView chart ready');
              setIsLoading(false);
              setError(false);
            },
            studies: [],
            overrides: {
              "paneProperties.background": "#ffffff",
              "paneProperties.backgroundType": "solid",
              "mainSeriesProperties.candleStyle.upColor": "#22c55e",
              "mainSeriesProperties.candleStyle.downColor": "#ef4444",
              "mainSeriesProperties.candleStyle.borderUpColor": "#22c55e",
              "mainSeriesProperties.candleStyle.borderDownColor": "#ef4444",
              "mainSeriesProperties.candleStyle.wickUpColor": "#22c55e",
              "mainSeriesProperties.candleStyle.wickDownColor": "#ef4444"
            }
          });
        } catch (err) {
          console.error('TradingView widget creation failed:', err);
          setError(true);
          setIsLoading(false);
        }
      }
    };
    
    script.onerror = (err) => {
      console.error('Failed to load TradingView script:', err);
      setError(true);
      setIsLoading(false);
    };
    
    document.head.appendChild(script);

    // Fallback timeout
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.log('TradingView chart loading timeout');
        setError(true);
        setIsLoading(false);
      }
    }, 10000);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      clearTimeout(timeout);
    };
  }, []);

  if (error) {
    return (
      <div className="overflow-hidden h-[500px]" style={{
        border: '1px solid #FFFFFF',
        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-900 mb-2">Chart Unavailable</p>
            <p className="text-sm text-gray-600">Unable to load TradingView chart</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="mt-4"
              variant="outline"
            >
              Reload Page
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Symbol and price info */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Bitcoin / USD</span>
            <span className="text-xs text-muted-foreground">• 1h • Binance</span>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">O</span>
            <span className="font-mono">65,456.78</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">H</span>
            <span className="font-mono">66,478.92</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">L</span>
            <span className="font-mono">64,445.12</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-green-600">+1,234.45</span>
            <span className="text-green-600">(+1.92%)</span>
          </div>
        </div>
      </div>
      
      {/* Chart container */}
      <div className="relative bg-white" style={{ height: '380px' }}>
        <div 
          ref={containerRef}
          id="tradingview-chart"
          className="w-full h-full"
        />
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/90">
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
