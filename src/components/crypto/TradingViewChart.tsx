
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
  const widgetRef = useRef<any>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const initializeChart = () => {
      if (containerRef.current && window.TradingView) {
        try {
          // Clear any existing content
          containerRef.current.innerHTML = '';
          
          console.log('Initializing TradingView widget...');
          
          widgetRef.current = new window.TradingView.widget({
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
            container_id: containerRef.current.id || 'tradingview-chart',
            height: 350,
            width: "100%",
            hide_top_toolbar: false,
            hide_legend: false,
            save_image: false,
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
            },
            onChartReady: () => {
              console.log('TradingView chart ready');
              setIsLoading(false);
              setError(false);
              if (timeoutId) clearTimeout(timeoutId);
            }
          });
        } catch (err) {
          console.error('TradingView widget creation failed:', err);
          setError(true);
          setIsLoading(false);
        }
      }
    };

    const loadScript = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src*="tradingview.com/tv.js"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.type = 'text/javascript';
      
      script.onload = () => {
        console.log('TradingView script loaded successfully');
        // Small delay to ensure TradingView is fully initialized
        setTimeout(initializeChart, 100);
      };
      
      script.onerror = (err) => {
        console.error('Failed to load TradingView script:', err);
        setError(true);
        setIsLoading(false);
      };
      
      document.head.appendChild(script);

      // Set timeout for chart initialization
      timeoutId = setTimeout(() => {
        if (isLoading) {
          console.log('TradingView chart loading timeout - falling back to retry');
          setError(true);
          setIsLoading(false);
        }
      }, 15000); // Increased timeout to 15 seconds
    };

    // Ensure container has an ID
    if (containerRef.current && !containerRef.current.id) {
      containerRef.current.id = `tradingview-chart-${Date.now()}`;
    }

    loadScript();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (widgetRef.current) {
        try {
          widgetRef.current.remove();
        } catch (e) {
          console.log('Error removing widget:', e);
        }
      }
      // Clean up script
      const script = document.querySelector('script[src*="tradingview.com/tv.js"]');
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleRetry = () => {
    setError(false);
    setIsLoading(true);
    // Trigger re-initialization
    window.location.reload();
  };

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
            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-900 mb-2">Chart Temporarily Unavailable</p>
            <p className="text-sm text-gray-600 mb-4">The TradingView chart failed to load. This can happen due to network issues.</p>
            <Button onClick={handleRetry} variant="outline">
              Try Again
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
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-xs">Save</Button>
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
          className="w-full h-full"
        />
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/90">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
              <p className="text-sm text-muted-foreground">Loading TradingView chart...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
