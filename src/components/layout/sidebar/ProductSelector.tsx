import React from 'react';
import { Product, products } from '@/config/navigation-data';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProductSelectorProps {
  currentProduct: Product;
  onProductChange: (product: Product) => void;
}

export function ProductSelector({ currentProduct, onProductChange }: ProductSelectorProps) {
  const navigate = useNavigate();
  const currentProductData = products.find(p => p.id === currentProduct);

  const handleProductChange = (productId: Product) => {
    onProductChange(productId);
    // Navigate to the dashboard of the selected product
    const product = products.find(p => p.id === productId);
    if (product) {
      navigate(product.items[0].href);
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