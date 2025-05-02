
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { TransferData } from '@/pages/Transfers';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Sample account data
const sampleAccounts = [
  {
    id: 'pa-1',
    name: 'Main Checking - $24,500.75',
    type: 'Personal',
    accountNumber: '****3456',
  },
  {
    id: 'pa-2',
    name: 'Savings - $74,200.50',
    type: 'Personal',
    accountNumber: '****7890',
  },
  {
    id: 'ba-1',
    name: 'Business Checking - $57,384.29',
    type: 'Business',
    accountNumber: '****4321',
  },
];

interface TransferFormProps {
  transferType: 'ach' | 'wire' | 'international';
  onSubmit: (data: TransferData) => void;
  initialData: TransferData;
}

export function TransferForm({ transferType, onSubmit, initialData }: TransferFormProps) {
  // Create schema based on transfer type
  const createFormSchema = () => {
    const baseSchema = {
      sourceAccount: z.string({
        required_error: "Please select a source account",
      }),
      amount: z.string().min(1, "Amount is required"),
      memo: z.string().optional(),
      recipientName: z.string().min(1, "Recipient name is required"),
      recipientEmail: z.string().email("Invalid email").optional(),
    };

    switch (transferType) {
      case 'ach':
        return z.object({
          ...baseSchema,
          routingNumber: z.string().min(9, "Routing number must be 9 digits"),
          accountNumber: z.string().min(1, "Account number is required"),
          destinationAccount: z.string().optional(),
        });
      case 'wire':
        return z.object({
          ...baseSchema,
          routingNumber: z.string().min(9, "Routing number must be 9 digits"),
          accountNumber: z.string().min(1, "Account number is required"),
          bankName: z.string().min(1, "Bank name is required"),
          destinationAccount: z.string().optional(),
        });
      case 'international':
        return z.object({
          ...baseSchema,
          swiftCode: z.string().min(8, "SWIFT code is required"),
          accountNumber: z.string().min(1, "Account number is required"),
          bankName: z.string().min(1, "Bank name is required"),
          country: z.string().min(1, "Country is required"),
          destinationAccount: z.string().optional(),
        });
      default:
        return z.object({
          ...baseSchema,
          destinationAccount: z.string().optional(),
        });
    }
  };

  const formSchema = createFormSchema();

  const form = useForm<any>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  function onFormSubmit(data: any) {
    onSubmit(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="sourceAccount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>From Account</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source account" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sampleAccounts.map(account => (
                      <SelectItem key={account.id} value={account.id}>
                        {account.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {transferType === 'ach' && (
            <>
              <FormField
                control={form.control}
                name="recipientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter recipient name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="routingNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Routing Number</FormLabel>
                    <FormControl>
                      <Input placeholder="9-digit routing number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Account number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {transferType === 'wire' && (
            <>
              <FormField
                control={form.control}
                name="recipientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter recipient name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bankName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter bank name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="routingNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Routing Number</FormLabel>
                    <FormControl>
                      <Input placeholder="9-digit routing number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Account number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {transferType === 'international' && (
            <>
              <FormField
                control={form.control}
                name="recipientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter recipient name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="bankName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter bank name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter recipient country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="swiftCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SWIFT/BIC Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter SWIFT/BIC code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Number / IBAN</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter account number or IBAN" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">$</div>
                    <Input className="pl-6" placeholder="0.00" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="recipientEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recipient Email (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="recipient@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="memo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Memo / Note (Optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Add a note about this transfer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-6">Continue to Review</Button>
      </form>
    </Form>
  );
}
