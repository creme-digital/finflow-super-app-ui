import { Layout } from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Filter, Plus, Search, TrendingUp, TrendingDown, DollarSign, Activity, Star, Globe, ArrowUpDown, Bookmark } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from 'react-simple-maps';
import ReactCountryFlag from 'react-country-flag';

export default function MeelyTradeStocks() {
  const { formatAmount } = useCurrency();

  const marketStats = {
    sAndP500: 5123.45,
    sAndP500Change: 45.67,
    sAndP500ChangePercentage: 0.89,
    nasdaq: 16234.56,
    nasdaqChange: 123.45,
    nasdaqChangePercentage: 0.77,
    dowJones: 38765.43,
    dowJonesChange: 234.56,
    dowJonesChangePercentage: 0.61
  };

  const worldIndexes = [
    {
      name: 'S&P 500',
      value: 5123.45,
      change: 45.67,
      changePercentage: 0.89,
      region: 'US'
    },
    {
      name: 'NASDAQ',
      value: 16234.56,
      change: 123.45,
      changePercentage: 0.77,
      region: 'US'
    },
    {
      name: 'Dow Jones',
      value: 38765.43,
      change: 234.56,
      changePercentage: 0.61,
      region: 'US'
    },
    {
      name: 'FTSE 100',
      value: 7823.45,
      change: -23.45,
      changePercentage: -0.30,
      region: 'UK'
    },
    {
      name: 'DAX',
      value: 18234.56,
      change: 45.67,
      changePercentage: 0.25,
      region: 'Germany'
    },
    {
      name: 'Nikkei 225',
      value: 38234.56,
      change: 123.45,
      changePercentage: 0.32,
      region: 'Japan'
    }
  ];

  const stocks = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 175.50,
      change: 2.5,
      changePercentage: 1.45,
      volume: '45.2M',
      marketCap: '2.8T',
      peRatio: 28.5,
      dividend: 0.92,
      sector: 'Technology'
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp.',
      price: 415.32,
      change: 8.45,
      changePercentage: 2.07,
      volume: '28.5M',
      marketCap: '3.1T',
      peRatio: 35.2,
      dividend: 0.75,
      sector: 'Technology'
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 142.65,
      change: -1.25,
      changePercentage: -0.87,
      volume: '22.3M',
      marketCap: '1.8T',
      peRatio: 24.8,
      dividend: 0.00,
      sector: 'Technology'
    }
  ];

  const watchlist = [
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 245.75,
      change: -5.25,
      changePercentage: -2.09,
      volume: '32.8M'
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 178.25,
      change: 3.45,
      changePercentage: 1.97,
      volume: '38.5M'
    },
    {
      symbol: 'META',
      name: 'Meta Platforms Inc.',
      price: 485.58,
      change: 12.35,
      changePercentage: 2.61,
      volume: '25.6M'
    }
  ];

  // Add coordinates for each market overlay
  const marketOverlays = [
    {
      name: 'CA',
      label: 'Canada',
      countryCode: 'CA',
      value: '+0,46%',
      change: 0.46,
      coords: [-106, 56],
    },
    {
      name: 'DJ USA',
      label: 'DJ USA',
      countryCode: 'US',
      value: '+1,23%',
      change: 1.23,
      coords: [-95, 40],
    },
    {
      name: 'DJIA',
      label: 'DJIA',
      countryCode: 'US',
      value: '+0,93%',
      change: 0.93,
      coords: [-74, 41],
    },
    {
      name: 'NDX',
      label: 'NDX',
      countryCode: 'US',
      value: '+1,56%',
      change: 1.56,
      coords: [-122, 37],
    },
    {
      name: 'MX',
      label: 'Mexico',
      countryCode: 'MX',
      value: '+0,99%',
      change: 0.99,
      coords: [-99, 19],
    },
    {
      name: 'OMXN40',
      label: 'OMXN40',
      countryCode: 'FI',
      value: '+0,06%',
      change: 0.06,
      coords: [25, 60],
    },
    {
      name: 'OMXS30',
      label: 'OMXS30',
      countryCode: 'SE',
      value: '+0,32%',
      change: 0.32,
      coords: [18, 59],
    },
    {
      name: 'E1DOW',
      label: 'E1DOW',
      countryCode: 'EU',
      value: '+0,05%',
      change: 0.05,
      coords: [10, 50],
    },
    {
      name: 'JP',
      label: 'Japan',
      countryCode: 'JP',
      value: '+0,51%',
      change: 0.51,
      coords: [139, 36],
    },
    {
      name: 'DJSH',
      label: 'DJSH',
      countryCode: 'CN',
      value: '-0,31%',
      change: -0.31,
      coords: [121, 31],
    },
    {
      name: 'DJSZ',
      label: 'DJSZ',
      countryCode: 'CN',
      value: '-0,40%',
      change: -0.40,
      coords: [114, 22],
    },
    {
      name: 'HK',
      label: 'Hong Kong',
      countryCode: 'HK',
      value: '+0,43%',
      change: 0.43,
      coords: [114, 22],
    },
    {
      name: 'ZA',
      label: 'South Africa',
      countryCode: 'ZA',
      value: '-0,25%',
      change: -0.25,
      coords: [28, -26],
    },
    {
      name: 'AU',
      label: 'Australia',
      countryCode: 'AU',
      value: '-0,31%',
      change: -0.31,
      coords: [151, -33],
    },
    {
      name: 'DJ Global',
      label: 'DJ Global',
      countryCode: 'UN',
      value: '+0,70%',
      change: 0.70,
      coords: [0, 0],
    },
  ];

  // Assign region to each market overlay and define central coordinates for each region
  const regionCenters = {
    US: [-98, 39], // Central US
    EU: [10, 51], // Central Europe
    Asia: [120, 30], // East Asia
  };

  const marketOverlaysWithRegion = marketOverlays.map((market) => {
    if (["CA", "DJ USA", "DJIA", "NDX"].includes(market.name)) return { ...market, region: "US" };
    if (["OMXN40", "OMXS30", "E1DOW", "DAX", "FTSE"].includes(market.name)) return { ...market, region: "EU" };
    if (["JP", "DJSH", "DJSZ", "HK"].includes(market.name)) return { ...market, region: "Asia" };
    return { ...market, region: null };
  });

  // Group by region
  const groupedByRegion = ["US", "EU", "Asia"].map((region) => {
    const markets = marketOverlaysWithRegion.filter((m) => m.region === region);
    if (markets.length === 0) return null;
    return {
      coords: regionCenters[region],
      markets,
      region,
    };
  }).filter(Boolean);

  // Individual overlays for non-grouped markets
  const individualMarkets = marketOverlaysWithRegion.filter((m) => !m.region);

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Stocks</h1>
          <p className="text-muted-foreground mt-1">
            Track and trade stocks across global markets.
          </p>
        </div>

        <Card>
          <CardContent className="flex flex-col md:flex-row gap-6 md:gap-0 md:divide-x md:divide-[#EDEDF1] p-6">
            {/* S&P 500 */}
            <div className="flex-1 flex flex-col items-start md:pr-6">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>S&P 500</span>
              </div>
              <div className="flex flex-col gap-1">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatAmount(marketStats.sAndP500)}</div>
                <div className={marketStats.sAndP500Change >= 0 ? 'text-sm text-green-600' : 'text-sm text-red-600'}>
                  {marketStats.sAndP500Change >= 0 ? '+' : ''}{marketStats.sAndP500Change} ({marketStats.sAndP500ChangePercentage}%)
                </div>
              </div>
            </div>

            {/* NASDAQ */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>NASDAQ</span>
              </div>
              <div className="flex flex-col gap-1">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatAmount(marketStats.nasdaq)}</div>
                <div className={marketStats.nasdaqChange >= 0 ? 'text-sm text-green-600' : 'text-sm text-red-600'}>
                  {marketStats.nasdaqChange >= 0 ? '+' : ''}{marketStats.nasdaqChange} ({marketStats.nasdaqChangePercentage}%)
                </div>
              </div>
            </div>

            {/* Dow Jones */}
            <div className="flex-1 flex flex-col items-start md:px-6">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Dow Jones</span>
              </div>
              <div className="flex flex-col gap-1">
                <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>{formatAmount(marketStats.dowJones)}</div>
                <div className={marketStats.dowJonesChange >= 0 ? 'text-sm text-green-600' : 'text-sm text-red-600'}>
                  {marketStats.dowJonesChange >= 0 ? '+' : ''}{marketStats.dowJonesChange} ({marketStats.dowJonesChangePercentage}%)
                </div>
              </div>
            </div>

            {/* Market Status */}
            <div className="flex-1 flex flex-col items-start md:pl-6">
              <div className="flex items-center gap-2 mb-2">
                <ArrowUpDown className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Market Status</span>
              </div>
              <div style={{ color: '#000', fontFamily: 'DM Mono, IBM Plex Mono, monospace', fontSize: 32, fontWeight: 400, letterSpacing: '-0.64px' }}>Open</div>
              <div className="text-sm text-[#6D6D74]">Trading hours</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="flex w-full gap-6">
              <div className="h-[500px] w-full relative">
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    scale: 250,
                    center: [0, 50]
                  }}
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <ZoomableGroup>
                    <Geographies geography="/world-110m.json">
                      {({ geographies }) =>
                        geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#F9F8FE"
                            stroke="#BEBBD8"
                            strokeWidth={0.5}
                            style={{
                              default: { outline: "none" },
                              hover: { fill: "#F8F8FA", outline: "none" },
                              pressed: { outline: "none" },
                            }}
                          />
                        ))
                      }
                    </Geographies>
                    {[...groupedByRegion, ...individualMarkets.map(m => ({ coords: m.coords, markets: [m] }))].map((group, idx) => (
                      <Marker key={group.markets.map(m => m.name).join('-')} coordinates={[group.coords[0], group.coords[1]] as [number, number]}>
                        <foreignObject x="-60" y={-20 - (group.markets.length - 1) * 18 / 1} width="188" height={34 * group.markets.length}>
                          <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            background: 'white',
                            borderRadius: 8,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                            padding: '4px 8px',
                            minWidth: 20,
                            minHeight: 32,
                            fontSize: 14,
                            fontFamily: 'Inter, sans-serif',
                            gap: 4,
                            border: '1px solid #E3E3EA',
                          }}>
                            {group.markets.map((market) => (
                              <div key={market.name} style={{ display: 'flex', alignItems: 'center', width: '100%', minHeight: 24 }}>
                                <ReactCountryFlag
                                  countryCode={market.countryCode}
                                  svg
                                  style={{ width: 20, height: 16, borderRadius: 3, marginRight: 0 }}
                                />
                                <span style={{ fontWeight: 500, color: '#222', minWidth: 72, marginLeft: 4 }}>{market.name}</span>
                                <span style={{ fontWeight: 600, color: market.change >= 0 ? '#1BA37A' : '#E14B4B', marginLeft: 8 }}>{market.value}</span>
                              </div>
                            ))}
                          </div>
                        </foreignObject>
                      </Marker>
                    ))}
                  </ZoomableGroup>
                </ComposableMap>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="w-[18px] h-[18px]" style={{ color: '#6D6D74' }} />
                <span style={{ color: '#6D6D74', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em' }}>Market Overview</span>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search stocks..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="rounded-[8px] border border-[#E3E3EA] overflow-hidden">
              <Table className="min-w-full text-sm">
                <TableHeader>
                  <TableRow style={{ background: '#F8F8FA' }}>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Symbol</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Name</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Price</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Change</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Volume</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Market Cap</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">P/E Ratio</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Dividend</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3">Sector</TableHead>
                    <TableHead style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#9898A5', fontWeight: 500 }} className="py-3 text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stocks.map((stock) => (
                    <TableRow key={stock.symbol}>
                      <TableCell className="font-medium">{stock.symbol}</TableCell>
                      <TableCell>{stock.name}</TableCell>
                      <TableCell className="font-mono">{formatAmount(stock.price)}</TableCell>
                      <TableCell>
                        <span className={stock.change >= 0 ? 'text-green-500' : 'text-red-500'} style={{ fontWeight: 500 }}>
                          {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.changePercentage}%)
                        </span>
                      </TableCell>
                      <TableCell>{stock.volume}</TableCell>
                      <TableCell>{stock.marketCap}</TableCell>
                      <TableCell>{stock.peRatio}</TableCell>
                      <TableCell>{stock.dividend > 0 ? `${stock.dividend}%` : 'N/A'}</TableCell>
                      <TableCell>
                        <Badge
                          bgColor="#E3E3EA"
                          textColor="#222"
                          style={{ borderRadius: 6, fontWeight: 500, fontSize: 13, padding: '2px 12px', display: 'inline-block' }}
                          variant="outline"
                        >
                          {stock.sector}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button size="icon" variant="ghost" aria-label="Add to Watchlist">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
} 