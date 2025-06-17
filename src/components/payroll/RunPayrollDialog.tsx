
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { X, ChevronLeft, Calendar, Users, DollarSign, CreditCard } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';

interface RunPayrollDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  employees: any[];
}

export function RunPayrollDialog({ open, onOpenChange, employees }: RunPayrollDialogProps) {
  const [step, setStep] = useState(1);

  // Calculate summary data
  const totalEmployees = employees.length;
  const totalAmount = employees.reduce((sum, emp) => sum + emp.salary, 0);
  const sendDate = new Date().toLocaleDateString('en-GB');
  const paymentType = 'Bank Transfer';

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleConfirm = () => {
    console.log('Payroll confirmed!');
    onOpenChange(false);
    setStep(1); // Reset to first step
  };

  const handleClose = () => {
    onOpenChange(false);
    setStep(1); // Reset to first step
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[800px] p-0 border-0 flex flex-col gap-0 max-h-[80vh]"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          borderRadius: '24px',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border">
          <div className="flex items-center gap-3">
            {step === 2 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="h-8 w-8"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
            <h2 className="text-xl font-semibold text-foreground">
              {step === 1 ? 'Run Payroll' : 'Confirm Payroll'}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {step === 1 && (
            <div className="p-6 space-y-4">
              <div className="text-sm text-muted-foreground mb-4">
                Review the payroll details below before proceeding.
              </div>
              
              <div
                className="overflow-hidden"
                style={{
                  border: '1px solid #FFFFFF',
                  boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)'
                }}
              >
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-border">
                      <TableHead className="font-medium text-muted-foreground">Employee</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Department</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Salary</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Frequency</TableHead>
                      <TableHead className="font-medium text-muted-foreground">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow key={employee.id} className="border-b border-border last:border-0">
                        <TableCell className="font-medium text-foreground py-3">
                          {employee.name}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground py-3">
                          {employee.department}
                        </TableCell>
                        <TableCell className="font-medium text-foreground py-3">
                          {formatCurrency(employee.salary)}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground py-3">
                          {employee.frequency}
                        </TableCell>
                        <TableCell className="py-3">
                          <Badge 
                            variant="secondary" 
                            className="bg-blue-100 text-blue-800 hover:bg-blue-100"
                          >
                            Ready
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="p-6 space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">Payroll Summary</h3>
                <p className="text-sm text-muted-foreground">
                  Please review the details before confirming the payroll run.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Number of Employees */}
                <div
                  className="p-4 rounded-lg"
                  style={{
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Employees</p>
                      <p className="text-xl font-semibold">{totalEmployees}</p>
                    </div>
                  </div>
                </div>

                {/* Total Amount */}
                <div
                  className="p-4 rounded-lg"
                  style={{
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Amount</p>
                      <p className="text-xl font-semibold">{formatCurrency(totalAmount)}</p>
                    </div>
                  </div>
                </div>

                {/* Send Date */}
                <div
                  className="p-4 rounded-lg"
                  style={{
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Send Date</p>
                      <p className="text-xl font-semibold">{sendDate}</p>
                    </div>
                  </div>
                </div>

                {/* Payment Type */}
                <div
                  className="p-4 rounded-lg"
                  style={{
                    border: '1px solid #FFFFFF',
                    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.4)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100">
                      <CreditCard className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Payment Type</p>
                      <p className="text-xl font-semibold">{paymentType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-2 p-6 border-t border-border">
          {step === 1 && (
            <>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="flex-1 rounded-full"
              >
                Cancel
              </Button>
              <Button
                onClick={handleNext}
                className="flex-1"
              >
                Continue
              </Button>
            </>
          )}
          
          {step === 2 && (
            <>
              <Button
                variant="secondary"
                onClick={handleBack}
                className="flex-1 rounded-full"
              >
                Back
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                Confirm Payroll
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
