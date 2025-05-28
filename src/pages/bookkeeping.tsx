import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { BookkeepingTab } from '@/components/accounting/BookkeepingTab';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Bookkeeping = () => {
  return (
    <Layout>
      <PageHeader
        title="Bookkeeping"
        subtitle="This is where you manage your books and reporting."
        className="mb-6"
      >
        <Button variant="default" size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Create New
        </Button>
      </PageHeader>
      <div className="p-0">
        <BookkeepingTab />
      </div>
    </Layout>
  );
};

export default Bookkeeping; 