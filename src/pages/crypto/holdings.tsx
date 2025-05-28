import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Send, Download } from 'lucide-react';

const holdings = [
  { symbol: 'BTC', name: 'Bitcoin', amount: 1.25, value: '$42,000' },
  { symbol: 'ETH', name: 'Ethereum', amount: 10.5, value: '$19,000' },
  { symbol: 'SOL', name: 'Solana', amount: 200, value: '$3,500' },
  { symbol: 'USDC', name: 'USD Coin', amount: 5000, value: '$5,000' },
];

export default function Holdings() {
  return (
    <Layout>
      <PageHeader
        title="Holdings"
        subtitle="View and manage your crypto assets."
        className="mb-6"
      />
      <div className="flex flex-col md:flex-row gap-6">
        {/* Holdings Table Card */}
        <Card className="flex-1 md:basis-[70%]">
          <CardContent className="p-6">
            <div className="mb-4 font-medium text-lg" style={{ color: '#000' }}>Your Crypto Holdings</div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-[#6D6D74] text-left border-b border-[#EDEDF1]">
                    <th className="py-2 pr-4 font-medium">Symbol</th>
                    <th className="py-2 pr-4 font-medium">Name</th>
                    <th className="py-2 pr-4 font-medium">Amount</th>
                    <th className="py-2 pr-4 font-medium">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((h) => (
                    <tr key={h.symbol} className="border-b border-[#F1F1F4] last:border-0">
                      <td className="py-2 pr-4 font-mono text-black">{h.symbol}</td>
                      <td className="py-2 pr-4">{h.name}</td>
                      <td className="py-2 pr-4 font-mono text-black">{h.amount}</td>
                      <td className="py-2 pr-4 font-mono text-black">{h.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        {/* Send/Receive Card */}
        <Card className="md:basis-[30%] w-full max-w-md">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="font-medium text-lg mb-2" style={{ color: '#000' }}>Send or Receive</div>
            <Button variant="default" className="w-full flex items-center gap-2 rounded-[8px]">
              <Send className="w-4 h-4" /> Send
            </Button>
            <Button variant="secondary" className="w-full flex items-center gap-2 rounded-[8px]">
              <Download className="w-4 h-4" /> Receive
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
} 