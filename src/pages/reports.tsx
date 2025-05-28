import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Eye, Download } from 'lucide-react';

const REPORTS = [
  { key: 'general-ledger', name: 'General Ledger', description: 'A complete record of all financial transactions over the life of your company.' },
  { key: 'profit-loss', name: 'Profit & Loss Statement', description: 'Summarizes revenues, costs, and expenses to show net profit over a period.' },
  { key: 'income-statement', name: 'Income Statement', description: 'Shows company income and expenses, providing insight into profitability.' },
  { key: 'balance-sheet', name: 'Balance Sheet', description: 'A snapshot of assets, liabilities, and equity at a specific point in time.' },
  { key: 'cashflow-statement', name: 'Cashflow Statement', description: 'Tracks the flow of cash in and out of your business.' },
  { key: 'ar-aging', name: 'AR Aging', description: 'Breaks down outstanding receivables by age to monitor collections.' },
  { key: 'ap-aging', name: 'AP Aging', description: 'Shows outstanding payables by age to manage outgoing payments.' },
  { key: 'retained-earnings', name: 'Statement of Retained Earnings', description: 'Details changes in retained earnings over a reporting period.' },
];

function ReportPreviewModal({ open, onClose, report }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-black">✕</button>
        <h2 className="text-xl font-semibold mb-2">{report.name} Preview</h2>
        <div className="border rounded-lg p-6 bg-[#F8F8FA] text-center text-muted-foreground">
          <FileText className="mx-auto mb-4 w-10 h-10 text-[#6D6D74]" />
          <div className="font-mono text-sm">[Placeholder preview for {report.name}]</div>
        </div>
      </div>
    </div>
  );
}

const Reports = () => {
  const [previewReport, setPreviewReport] = useState(null);

  return (
    <Layout>
      <PageHeader
        title="Reports"
        subtitle="Generate, preview, and download financial reports."
        className="mb-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {REPORTS.map((report) => (
          <Card key={report.key} className="flex flex-col justify-between p-0">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-[#6D6D74]" />
                <span className="font-medium text-lg" style={{ color: '#000' }}>{report.name}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
              <div className="flex gap-2 mt-4">
                <Button
                  variant="secondary"
                  className="flex items-center gap-2 h-8 px-3 text-sm rounded-[8px]"
                  onClick={() => setPreviewReport(report)}
                >
                  <Eye className="w-4 h-4" /> Preview
                </Button>
                <Button
                  variant="default"
                  className="flex items-center gap-2 h-8 px-3 text-sm rounded-[8px]"
                  onClick={() => alert(`Download for ${report.name}`)}
                >
                  <Download className="w-4 h-4" /> Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ReportPreviewModal
        open={!!previewReport}
        onClose={() => setPreviewReport(null)}
        report={previewReport}
      />
    </Layout>
  );
};

export default Reports; 