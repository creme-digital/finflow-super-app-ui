
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X } from 'lucide-react';

interface TransferDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TransferDialog({ open, onOpenChange }: TransferDialogProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [transferType, setTransferType] = useState('ach');
  const [formData, setFormData] = useState({
    fromAccount: '',
    recipientName: '',
    routingNumber: '',
    accountNumber: '',
    amount: '',
    recipientEmail: '',
    memo: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    setCurrentPage(2);
  };

  const handleBack = () => {
    setCurrentPage(1);
  };

  const handleTransfer = () => {
    // Handle transfer logic here
    console.log('Transfer data:', { ...formData, transferType });
    onOpenChange(false);
    // Reset form when closing
    setCurrentPage(1);
    setFormData({
      fromAccount: '',
      recipientName: '',
      routingNumber: '',
      accountNumber: '',
      amount: '',
      recipientEmail: '',
      memo: ''
    });
  };

  const handleCancel = () => {
    onOpenChange(false);
    setCurrentPage(1);
  };

  const getTransferTypeTitle = () => {
    switch (transferType) {
      case 'ach': return 'ACH Transfer';
      case 'wire': return 'Wire Transfer';
      case 'international': return 'International Transfer';
      default: return 'Transfer';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[500px] p-0 border-0 flex flex-col gap-0"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          borderRadius: '24px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">
            {currentPage === 1 ? 'Transfer Funds' : 'Confirm Transfer'}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div 
          className="flex flex-col gap-3 p-4 overflow-auto"
          style={{ maxHeight: '500px' }}
        >
          {currentPage === 1 ? (
            <>
              {/* Transfer Type Tabs */}
              <Tabs value={transferType} onValueChange={setTransferType} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="ach">ACH Transfer</TabsTrigger>
                  <TabsTrigger value="wire">Wire Transfer</TabsTrigger>
                  <TabsTrigger value="international">International</TabsTrigger>
                </TabsList>

                <TabsContent value="ach" className="space-y-4 mt-6">
                  {/* Form Fields */}
                  <div className="space-y-3">
                    {/* From Account */}
                    <div className="space-y-2">
                      <Label htmlFor="fromAccount">From Account</Label>
                      <Select value={formData.fromAccount} onValueChange={(value) => handleInputChange('fromAccount', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="treasury">Treasury Ops / Payroll</SelectItem>
                          <SelectItem value="checking">Main Checking - $24,500.75</SelectItem>
                          <SelectItem value="savings">Savings Account - $74,200.50</SelectItem>
                          <SelectItem value="business">Business Account - $57,384.29</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Recipient Name */}
                    <div className="space-y-2">
                      <Label htmlFor="recipientName">Recipient Name</Label>
                      <Input
                        id="recipientName"
                        value={formData.recipientName}
                        onChange={(e) => handleInputChange('recipientName', e.target.value)}
                        placeholder="Enter recipient name"
                      />
                    </div>

                    {/* Routing Number */}
                    <div className="space-y-2">
                      <Label htmlFor="routingNumber">Routing Number</Label>
                      <Input
                        id="routingNumber"
                        value={formData.routingNumber}
                        onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                        placeholder="9-digit routing number"
                        maxLength={9}
                      />
                    </div>

                    {/* Account Number */}
                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input
                        id="accountNumber"
                        value={formData.accountNumber}
                        onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                        placeholder="Enter account number"
                      />
                    </div>

                    {/* Amount */}
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="amount"
                          type="number"
                          value={formData.amount}
                          onChange={(e) => handleInputChange('amount', e.target.value)}
                          placeholder="0.00"
                          className="pl-8"
                          step="0.01"
                          min="0"
                        />
                      </div>
                    </div>

                    {/* Recipient Email */}
                    <div className="space-y-2">
                      <Label htmlFor="recipientEmail">Recipient Email</Label>
                      <Input
                        id="recipientEmail"
                        type="email"
                        value={formData.recipientEmail}
                        onChange={(e) => handleInputChange('recipientEmail', e.target.value)}
                        placeholder="Enter email address"
                      />
                    </div>

                    {/* Memo */}
                    <div className="space-y-2">
                      <Label htmlFor="memo">Memo (Optional)</Label>
                      <Input
                        id="memo"
                        value={formData.memo}
                        onChange={(e) => handleInputChange('memo', e.target.value)}
                        placeholder="Optional memo"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="wire" className="space-y-4 mt-6">
                  {/* Same form fields for wire transfer */}
                  <div className="space-y-3">
                    {/* From Account */}
                    <div className="space-y-2">
                      <Label htmlFor="fromAccount">From Account</Label>
                      <Select value={formData.fromAccount} onValueChange={(value) => handleInputChange('fromAccount', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="treasury">Treasury Ops / Payroll</SelectItem>
                          <SelectItem value="checking">Main Checking - $24,500.75</SelectItem>
                          <SelectItem value="savings">Savings Account - $74,200.50</SelectItem>
                          <SelectItem value="business">Business Account - $57,384.29</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Recipient Name */}
                    <div className="space-y-2">
                      <Label htmlFor="recipientName">Recipient Name</Label>
                      <Input
                        id="recipientName"
                        value={formData.recipientName}
                        onChange={(e) => handleInputChange('recipientName', e.target.value)}
                        placeholder="Enter recipient name"
                      />
                    </div>

                    {/* Routing Number */}
                    <div className="space-y-2">
                      <Label htmlFor="routingNumber">Routing Number</Label>
                      <Input
                        id="routingNumber"
                        value={formData.routingNumber}
                        onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                        placeholder="9-digit routing number"
                        maxLength={9}
                      />
                    </div>

                    {/* Account Number */}
                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input
                        id="accountNumber"
                        value={formData.accountNumber}
                        onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                        placeholder="Enter account number"
                      />
                    </div>

                    {/* Amount */}
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="amount"
                          type="number"
                          value={formData.amount}
                          onChange={(e) => handleInputChange('amount', e.target.value)}
                          placeholder="0.00"
                          className="pl-8"
                          step="0.01"
                          min="0"
                        />
                      </div>
                    </div>

                    {/* Recipient Email */}
                    <div className="space-y-2">
                      <Label htmlFor="recipientEmail">Recipient Email</Label>
                      <Input
                        id="recipientEmail"
                        type="email"
                        value={formData.recipientEmail}
                        onChange={(e) => handleInputChange('recipientEmail', e.target.value)}
                        placeholder="Enter email address"
                      />
                    </div>

                    {/* Memo */}
                    <div className="space-y-2">
                      <Label htmlFor="memo">Memo (Optional)</Label>
                      <Input
                        id="memo"
                        value={formData.memo}
                        onChange={(e) => handleInputChange('memo', e.target.value)}
                        placeholder="Optional memo"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="international" className="space-y-4 mt-6">
                  {/* Same form fields for international transfer */}
                  <div className="space-y-3">
                    {/* From Account */}
                    <div className="space-y-2">
                      <Label htmlFor="fromAccount">From Account</Label>
                      <Select value={formData.fromAccount} onValueChange={(value) => handleInputChange('fromAccount', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="treasury">Treasury Ops / Payroll</SelectItem>
                          <SelectItem value="checking">Main Checking - $24,500.75</SelectItem>
                          <SelectItem value="savings">Savings Account - $74,200.50</SelectItem>
                          <SelectItem value="business">Business Account - $57,384.29</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Recipient Name */}
                    <div className="space-y-2">
                      <Label htmlFor="recipientName">Recipient Name</Label>
                      <Input
                        id="recipientName"
                        value={formData.recipientName}
                        onChange={(e) => handleInputChange('recipientName', e.target.value)}
                        placeholder="Enter recipient name"
                      />
                    </div>

                    {/* Routing Number */}
                    <div className="space-y-2">
                      <Label htmlFor="routingNumber">SWIFT/BIC Code</Label>
                      <Input
                        id="routingNumber"
                        value={formData.routingNumber}
                        onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                        placeholder="Enter SWIFT/BIC code"
                      />
                    </div>

                    {/* Account Number */}
                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">Account Number / IBAN</Label>
                      <Input
                        id="accountNumber"
                        value={formData.accountNumber}
                        onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                        placeholder="Enter account number or IBAN"
                      />
                    </div>

                    {/* Amount */}
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="amount"
                          type="number"
                          value={formData.amount}
                          onChange={(e) => handleInputChange('amount', e.target.value)}
                          placeholder="0.00"
                          className="pl-8"
                          step="0.01"
                          min="0"
                        />
                      </div>
                    </div>

                    {/* Recipient Email */}
                    <div className="space-y-2">
                      <Label htmlFor="recipientEmail">Recipient Email</Label>
                      <Input
                        id="recipientEmail"
                        type="email"
                        value={formData.recipientEmail}
                        onChange={(e) => handleInputChange('recipientEmail', e.target.value)}
                        placeholder="Enter email address"
                      />
                    </div>

                    {/* Memo */}
                    <div className="space-y-2">
                      <Label htmlFor="memo">Memo (Optional)</Label>
                      <Input
                        id="memo"
                        value={formData.memo}
                        onChange={(e) => handleInputChange('memo', e.target.value)}
                        placeholder="Optional memo"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </>
          ) : (
            /* Page 2 - Transfer Summary */
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-muted-foreground">
                  Transfer from Treasury to Ops / Payroll
                </h3>
                <div className="text-4xl font-bold text-foreground">
                  ${formData.amount || '0.00'}
                </div>
                <p className="text-sm text-muted-foreground">
                  Transfers from Treasury should arrive between May 12-14, 2025
                </p>
              </div>

              {/* Transfer Details */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">From</span>
                  <span className="font-medium">{formData.recipientName || 'Rafat Khan'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account</span>
                  <span className="font-medium">Rafat</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Initiated on</span>
                  <span className="font-medium">May 10, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transfer to</span>
                  <span className="font-medium">{formData.recipientName || 'Ahmed'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Account number</span>
                  <span className="font-medium">
                    {formData.accountNumber ? `Checking ${formData.accountNumber}` : 'Checking 3631271038'}
                  </span>
                </div>
              </div>

              {/* Authorization Text */}
              <div className="text-xs text-muted-foreground space-y-2">
                <p>
                  By clicking Transfer, I authorise Mercury to initiate the transaction detailed above for Mercury Demo, Incorporated.
                </p>
                <p>
                  We partner with Apex Clearing Corporation to offer your Treasury account and hold your Treasury funds.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Fixed Buttons */}
        <div className="flex gap-2 p-4 border-t border-border">
          <Button
            variant="secondary"
            onClick={currentPage === 1 ? handleCancel : handleBack}
            className="flex-1 rounded-full"
          >
            {currentPage === 1 ? 'Cancel' : 'Back'}
          </Button>
          <Button
            onClick={currentPage === 1 ? handleContinue : handleTransfer}
            className="flex-1"
          >
            {currentPage === 1 ? 'Continue' : 'Transfer'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
