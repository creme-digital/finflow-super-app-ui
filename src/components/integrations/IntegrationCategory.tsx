
import { IntegrationCard } from '@/components/integrations/IntegrationCard';
import { Integration } from '@/components/integrations/types';

interface IntegrationCategoryProps {
  title: string;
  integrations: Integration[];
}

export function IntegrationCategory({ title, integrations }: IntegrationCategoryProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <IntegrationCard key={integration.id} integration={integration} />
        ))}
      </div>
    </div>
  );
}
