import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CheckCheck, User, BadgeDollarSign, FileText, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AddEmployeeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const stepIcons = [
  { icon: User, label: 'Personal Info' },
  { icon: BadgeDollarSign, label: 'Compensation' },
  { icon: FileText, label: 'Tax & Benefits' },
  { icon: CheckCheck, label: 'Review' },
];

// Updated schema to match the state types we're using
const employeeSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
});

const compensationSchema = z.object({
  salaryType: z.string(),
  amount: z.string().min(1, { message: 'Amount is required' }),
  frequency: z.string(),
});

const taxSchema = z.object({
  taxStatus: z.string(),
  withholding: z.string(),
  benefits: z.array(z.string()).optional(),
});

// Define the correct types for our state
type PersonalInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

type CompensationInfo = {
  salaryType: string;
  amount: string;
  frequency: string;
}

type TaxInfo = {
  taxStatus: string;
  withholding: string;
  benefits: string[];
}

export const AddEmployeeModal = ({ open, onOpenChange }: AddEmployeeModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [employeeData, setEmployeeData] = useState<{
    personal: PersonalInfo;
    compensation: CompensationInfo;
    tax: TaxInfo;
  }>({
    personal: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    compensation: {
      salaryType: 'hourly',
      amount: '',
      frequency: 'bi-weekly',
    },
    tax: {
      taxStatus: 'single',
      withholding: '0',
      benefits: [],
    },
  });

  // ... keep existing code for form definitions and handlers

  const personalForm = useForm<z.infer<typeof employeeSchema>>({
    resolver: zodResolver(employeeSchema),
    defaultValues: employeeData.personal,
  });

  const compensationForm = useForm<z.infer<typeof compensationSchema>>({
    resolver: zodResolver(compensationSchema),
    defaultValues: employeeData.compensation,
  });

  const taxForm = useForm<z.infer<typeof taxSchema>>({
    resolver: zodResolver(taxSchema),
    defaultValues: employeeData.tax,
  });

  const handleNext = () => {
    if (currentStep < stepIcons.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onPersonalSubmit = (data: z.infer<typeof employeeSchema>) => {
    setEmployeeData({ ...employeeData, personal: data as PersonalInfo });
    handleNext();
  };

  const onCompensationSubmit = (data: z.infer<typeof compensationSchema>) => {
    setEmployeeData({ ...employeeData, compensation: data as CompensationInfo });
    handleNext();
  };

  const onTaxSubmit = (data: z.infer<typeof taxSchema>) => {
    // Ensure benefits is always an array even if it's undefined
    const taxData: TaxInfo = {
      ...data,
      benefits: data.benefits || [],
    } as TaxInfo;
    
    setEmployeeData({ ...employeeData, tax: taxData });
    handleNext();
  };

  const handleProcessPayroll = () => {
    // Here you would send the data to your backend
    console.log('Processing employee:', employeeData);
    onOpenChange(false);
    setCurrentStep(0);
    // Reset all forms
    personalForm.reset();
    compensationForm.reset();
    taxForm.reset();
  };

  // ... keep existing code for rendering UI components

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
          <DialogDescription>
            Complete all steps to add a new employee to the payroll system.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-between items-center mb-10 pt-6 px-2">
          {stepIcons.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-1/4">
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-2 border-2 transition-all duration-200",
                  index === currentStep ? "bg-primary text-white border-primary scale-110" :
                  index < currentStep ? "bg-green-500 text-white border-green-500" :
                  "bg-muted text-muted-foreground border-muted-foreground/20"
                )}
              >
                <step.icon className="h-6 w-6" />
              </div>
              <span className={cn(
                "text-xs text-center mt-1",
                index === currentStep ? "text-primary font-semibold" :
                index < currentStep ? "text-green-600 font-medium" :
                "text-muted-foreground"
              )}>
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {currentStep === 0 && (
          <Form {...personalForm}>
            <form onSubmit={personalForm.handleSubmit(onPersonalSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={personalForm.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={personalForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={personalForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={personalForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}

        {currentStep === 1 && (
          <Form {...compensationForm}>
            <form onSubmit={compensationForm.handleSubmit(onCompensationSubmit)} className="space-y-4">
              <FormField
                control={compensationForm.control}
                name="salaryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pay Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pay type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="salary">Salary</SelectItem>
                        <SelectItem value="commission">Commission</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={compensationForm.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5">$</span>
                        <Input className="pl-7" placeholder="0.00" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={compensationForm.control}
                name="frequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pay Frequency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={handleBack}>
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button type="submit">
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}

        {currentStep === 2 && (
          <Form {...taxForm}>
            <form onSubmit={taxForm.handleSubmit(onTaxSubmit)} className="space-y-4">
              <FormField
                control={taxForm.control}
                name="taxStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tax Filing Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married Filing Jointly</SelectItem>
                        <SelectItem value="marriedSeparate">Married Filing Separately</SelectItem>
                        <SelectItem value="headHousehold">Head of Household</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={taxForm.control}
                name="withholding"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Federal Withholding</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select allowances" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0">0</SelectItem>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="flex justify-between">
                <Button type="button" variant="outline" onClick={handleBack}>
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button type="submit">
                  Review <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-2">Personal Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Name</p>
                  <p>{employeeData.personal.firstName} {employeeData.personal.lastName}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Email</p>
                  <p>{employeeData.personal.email}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Phone</p>
                  <p>{employeeData.personal.phone}</p>
                </div>
              </div>
            </div>

            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-2">Compensation</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Pay Type</p>
                  <p className="capitalize">{employeeData.compensation.salaryType}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Amount</p>
                  <p>${employeeData.compensation.amount}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Frequency</p>
                  <p className="capitalize">{employeeData.compensation.frequency}</p>
                </div>
              </div>
            </div>

            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-2">Tax Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Filing Status</p>
                  <p className="capitalize">{employeeData.tax.taxStatus}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Federal Withholding</p>
                  <p>{employeeData.tax.withholding}</p>
                </div>
              </div>
            </div>

            <DialogFooter className="flex justify-between">
              <Button type="button" variant="outline" onClick={handleBack}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button type="button" onClick={handleProcessPayroll}>
                Add Employee
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
