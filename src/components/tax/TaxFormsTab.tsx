
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, FileText, Search, TrendingDown, TrendingUp } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

// Sample tax forms data
const availableTaxForms = [
  {
    id: 1,
    name: '1099-NEC',
    description: 'Nonemployee Compensation',
    issuer: 'Client A',
    dateIssued: 'Jan 31, 2025',
    amount: 25000,
    status: 'available',
    year: '2024'
  },
  {
    id: 2,
    name: '1099-MISC',
    description: 'Miscellaneous Income',
    issuer: 'Client B',
    dateIssued: 'Jan 15, 2025',
    amount: 8500,
    status: 'available',
    year: '2024'
  },
  {
    id: 3,
    name: '1099-K',
    description: 'Payment Card Transactions',
    issuer: 'Payment Processor',
    dateIssued: 'Jan 31, 2025',
    amount: 65000,
    status: 'available',
    year: '2024'
  },
  {
    id: 4,
    name: 'Schedule C (Draft)',
    description: 'Profit or Loss from Business',
    issuer: 'Self-prepared',
    dateIssued: 'Mar 15, 2025',
    amount: null,
    status: 'draft',
    year: '2024'
  },
];

// Sample previous year forms
const previousYearForms = [
  {
    id: 101,
    name: '1040',
    description: 'Individual Income Tax Return',
    year: '2023',
    dateSubmitted: 'Apr 12, 2024',
  },
  {
    id: 102,
    name: 'Schedule C',
    description: 'Profit or Loss from Business',
    year: '2023',
    dateSubmitted: 'Apr 12, 2024',
  },
  {
    id: 103,
    name: 'Schedule SE',
    description: 'Self-Employment Tax',
    year: '2023',
    dateSubmitted: 'Apr 12, 2024',
  },
];

export const TaxFormsTab = () => {
  const handleDownload = (formName: string) => {
    toast({
      title: "Form Downloaded",
      description: `Your ${formName} has been downloaded.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Available Tax Forms</h3>
        <Select defaultValue="2024">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Tax Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Year Forms</CardTitle>
          <CardDescription>Available tax forms for 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Form</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Issuer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {availableTaxForms.map((form) => (
                <TableRow key={form.id}>
                  <TableCell className="font-medium">{form.name}</TableCell>
                  <TableCell>{form.description}</TableCell>
                  <TableCell>{form.issuer}</TableCell>
                  <TableCell>{form.dateIssued}</TableCell>
                  <TableCell>{form.amount ? `$${form.amount.toLocaleString()}` : '-'}</TableCell>
                  <TableCell>
                    {form.status === 'available' ? (
                      <Badge className="bg-emerald-500">Available</Badge>
                    ) : (
                      <Badge variant="outline">Draft</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" onClick={() => handleDownload(form.name)}>
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tax Return History</CardTitle>
            <CardDescription>Previous tax filings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {previousYearForms.map((form, index) => (
                <div key={form.id} className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-muted flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{form.name} ({form.year})</p>
                      <p className="text-sm text-muted-foreground">{form.description}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => handleDownload(`${form.name}_${form.year}`)}>
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tax Document Requirements</CardTitle>
            <CardDescription>Documents you need to prepare</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between p-3 border rounded-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span>All income documents</span>
                </div>
                <Badge className="bg-emerald-500">Completed</Badge>
              </div>
              
              <div className="flex justify-between p-3 border rounded-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <TrendingDown className="h-4 w-4" />
                  </div>
                  <span>Expense receipts</span>
                </div>
                <Badge variant="outline" className="border-amber-500 text-amber-500">In Progress</Badge>
              </div>
              
              <div className="flex justify-between p-3 border rounded-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                    <FileText className="h-4 w-4" />
                  </div>
                  <span>Last year's tax return</span>
                </div>
                <Badge variant="outline">Not Started</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Find Missing Documents
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
