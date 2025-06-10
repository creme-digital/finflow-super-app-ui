
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const DesignSystemGuide = () => {
  return (
    <div className="space-y-8 p-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="fintech-heading-1">FinFlow Design System</h1>
        <p className="fintech-body">
          A unified design system for consistent UI/UX across all FinFlow applications.
        </p>
      </div>

      {/* Typography */}
      <Card className="fintech-card">
        <CardHeader className="fintech-card-header">
          <CardTitle className="fintech-heading-2">Typography</CardTitle>
        </CardHeader>
        <CardContent className="fintech-card-content space-y-4">
          <div className="space-y-2">
            <h1 className="fintech-heading-1">Heading 1 - Primary</h1>
            <h2 className="fintech-heading-2">Heading 2 - Secondary</h2>
            <h3 className="fintech-heading-3">Heading 3 - Tertiary</h3>
            <p className="fintech-body">Body text for general content</p>
            <p className="fintech-mono">Monospace for numerical data</p>
          </div>
        </CardContent>
      </Card>

      {/* Colors */}
      <Card className="fintech-card">
        <CardHeader className="fintech-card-header">
          <CardTitle className="fintech-heading-2">Color Palette</CardTitle>
        </CardHeader>
        <CardContent className="fintech-card-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-12 bg-primary rounded"></div>
              <p className="text-sm">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-secondary rounded"></div>
              <p className="text-sm">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-success rounded"></div>
              <p className="text-sm">Success</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-error rounded"></div>
              <p className="text-sm">Error</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-warning rounded"></div>
              <p className="text-sm">Warning</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-info rounded"></div>
              <p className="text-sm">Info</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-surface-muted rounded"></div>
              <p className="text-sm">Surface Muted</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-12 bg-surface-elevated rounded"></div>
              <p className="text-sm">Surface Elevated</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Buttons */}
      <Card className="fintech-card">
        <CardHeader className="fintech-card-header">
          <CardTitle className="fintech-heading-2">Buttons</CardTitle>
        </CardHeader>
        <CardContent className="fintech-card-content">
          <div className="flex flex-wrap gap-4">
            <Button className="fintech-button-primary">Primary Button</Button>
            <Button className="fintech-button-secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </CardContent>
      </Card>

      {/* Cards */}
      <Card className="fintech-card">
        <CardHeader className="fintech-card-header">
          <CardTitle className="fintech-heading-2">Cards</CardTitle>
        </CardHeader>
        <CardContent className="fintech-card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="fintech-card">
              <CardHeader className="fintech-card-header">
                <CardTitle className="fintech-heading-3">Example Card</CardTitle>
              </CardHeader>
              <CardContent className="fintech-card-content">
                <p className="fintech-body">This is an example of a standard fintech card component.</p>
              </CardContent>
            </Card>
            <Card className="fintech-card bg-surface-elevated">
              <CardHeader className="fintech-card-header">
                <CardTitle className="fintech-heading-3">Elevated Card</CardTitle>
              </CardHeader>
              <CardContent className="fintech-card-content">
                <p className="fintech-body">This card uses the elevated surface background.</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* CSS Classes */}
      <Card className="fintech-card">
        <CardHeader className="fintech-card-header">
          <CardTitle className="fintech-heading-2">Utility Classes</CardTitle>
        </CardHeader>
        <CardContent className="fintech-card-content">
          <div className="space-y-4">
            <div>
              <h4 className="fintech-heading-3 mb-2">Cards</h4>
              <ul className="space-y-1 fintech-body">
                <li><code>.fintech-card</code> - Standard card styling</li>
                <li><code>.fintech-card-header</code> - Card header styling</li>
                <li><code>.fintech-card-content</code> - Card content styling</li>
              </ul>
            </div>
            <div>
              <h4 className="fintech-heading-3 mb-2">Typography</h4>
              <ul className="space-y-1 fintech-body">
                <li><code>.fintech-heading-1</code> - Primary heading</li>
                <li><code>.fintech-heading-2</code> - Secondary heading</li>
                <li><code>.fintech-heading-3</code> - Tertiary heading</li>
                <li><code>.fintech-body</code> - Body text</li>
                <li><code>.fintech-mono</code> - Monospace text</li>
              </ul>
            </div>
            <div>
              <h4 className="fintech-heading-3 mb-2">Tables</h4>
              <ul className="space-y-1 fintech-body">
                <li><code>.fintech-table</code> - Table base styling</li>
                <li><code>.fintech-table-header</code> - Table header styling</li>
                <li><code>.fintech-table-header-cell</code> - Header cell styling</li>
                <li><code>.fintech-table-cell</code> - Table cell styling</li>
                <li><code>.fintech-table-row</code> - Table row styling</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
