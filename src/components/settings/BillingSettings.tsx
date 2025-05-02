
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, Settings } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export function BillingSettings() {
  const { toast } = useToast();
  
  const handleSavePaymentMethod = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Payment method saved",
      description: "Your payment method has been updated successfully.",
    });
  };
  
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Methods
          </CardTitle>
          <CardDescription>Manage your payment methods and billing preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <RadioGroup defaultValue="card1">
              <div className="flex items-center space-x-2 border rounded-md p-4">
                <RadioGroupItem value="card1" id="card1" />
                <div className="flex-1 flex justify-between items-center">
                  <Label htmlFor="card1" className="flex items-center gap-2">
                    <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs">VISA</div>
                    <span>•••• •••• •••• 4242</span>
                  </Label>
                  <div className="text-sm text-muted-foreground">
                    Expires 09/2025
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-md p-4">
                <RadioGroupItem value="card2" id="card2" />
                <div className="flex-1 flex justify-between items-center">
                  <Label htmlFor="card2" className="flex items-center gap-2">
                    <div className="w-10 h-6 bg-orange-600 rounded flex items-center justify-center text-white text-xs">MC</div>
                    <span>•••• •••• •••• 8840</span>
                  </Label>
                  <div className="text-sm text-muted-foreground">
                    Expires 01/2026
                  </div>
                </div>
              </div>
            </RadioGroup>
            
            <Button variant="outline" className="w-full">Add New Payment Method</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Billing Information
          </CardTitle>
          <CardDescription>Manage your billing address and details.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSavePaymentMethod}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="billingName">Name</Label>
                <Input id="billingName" defaultValue="Alex Johnson" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name (Optional)</Label>
                <Input id="companyName" defaultValue="FinTech Solutions Inc." />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="billingAddress">Address</Label>
              <Input id="billingAddress" defaultValue="123 Financial District" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2 col-span-2 md:col-span-1">
                <Label htmlFor="city">City</Label>
                <Input id="city" defaultValue="San Francisco" />
              </div>
              <div className="space-y-2 col-span-1">
                <Label htmlFor="state">State</Label>
                <Input id="state" defaultValue="CA" />
              </div>
              <div className="space-y-2 col-span-1">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input id="zipCode" defaultValue="94104" />
              </div>
              <div className="space-y-2 col-span-1">
                <Label htmlFor="country">Country</Label>
                <Input id="country" defaultValue="USA" />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="taxInformation" />
              <Label htmlFor="taxInformation" className="text-sm">
                Same as company address
              </Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Save Billing Information</Button>
          </CardFooter>
        </form>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>View your recent billing history and download invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Premium Plan - Monthly</p>
                <p className="text-sm text-muted-foreground">April 1, 2025</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">$49.99</span>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Premium Plan - Monthly</p>
                <p className="text-sm text-muted-foreground">March 1, 2025</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">$49.99</span>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Premium Plan - Monthly</p>
                <p className="text-sm text-muted-foreground">February 1, 2025</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">$49.99</span>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Download All Invoices</Button>
        </CardFooter>
      </Card>
    </>
  );
}
