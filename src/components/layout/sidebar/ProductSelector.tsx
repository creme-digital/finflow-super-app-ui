
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProductSelectorProps {
  currentProduct: string;
  onProductChange: (product: string) => void;
}

export function ProductSelector({ currentProduct, onProductChange }: ProductSelectorProps) {
  const navigate = useNavigate();

  const products = [
    { id: 'meelypay', name: 'MeelyPay', href: '/accounts' },
    { id: 'meelybooks', name: 'MeelyBooks', href: '/bookkeeping' },
    { id: 'meelytrade', name: 'MeelyTrade', href: '/crypto' },
    { id: 'meelypayroll', name: 'MeelyPayroll', href: '/payroll' }
  ];

  const handleProductChange = (productId: string) => {
    onProductChange(productId);
    const product = products.find(p => p.id === productId);
    if (product) {
      navigate(product.href);
    }
  };

  return (
    <div className="px-4 py-2">
      <Select value={currentProduct} onValueChange={handleProductChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select product" />
        </SelectTrigger>
        <SelectContent>
          {products.map((product) => (
            <SelectItem key={product.id} value={product.id}>
              {product.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
