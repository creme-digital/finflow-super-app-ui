import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MoreHorizontal, Plus } from 'lucide-react';
const IntegrationsMainContent = () => {
  const discoveryIntegrations = [{
    name: 'Google Meet',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '📞',
    status: 'App Emirates'
  }, {
    name: 'Atlassian',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '🔷',
    status: 'App Emirates'
  }, {
    name: 'Octa',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '🔹',
    status: 'App Emirates'
  }, {
    name: 'Office 365',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '📊',
    status: 'App Emirates'
  }];
  const hrisIntegrations = [{
    name: 'Bamboo',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '🎋',
    status: 'App Emirates'
  }, {
    name: 'Hi bob',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '👋',
    status: 'App Emirates'
  }, {
    name: 'Sage HR',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '🌿',
    status: 'App Emirates'
  }, {
    name: 'Fresh Team',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '🔮',
    status: 'App Emirates'
  }, {
    name: 'Rippling',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '💧',
    status: 'App Emirates'
  }, {
    name: 'Gusto',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '🎯',
    status: 'App Emirates'
  }, {
    name: 'Workday',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '📅',
    status: 'App Emirates'
  }, {
    name: 'Namely',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '✨',
    status: 'App Emirates'
  }];
  const communicationIntegrations = [{
    name: 'Bamboo',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '🎋',
    status: 'App Emirates'
  }, {
    name: 'Hi bob',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '👋',
    status: 'App Emirates'
  }, {
    name: 'Sage HR',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '🌿',
    status: 'App Emirates'
  }, {
    name: 'Fresh Team',
    description: 'At Vero eos et accusam et gusto olio planissimos dubious qui balanitis praesentism voluptatum.',
    icon: '🔮',
    status: 'App Emirates'
  }];
  const IntegrationCard = ({
    integration
  }: {
    integration: any;
  }) => <div className="overflow-hidden h-full" style={{
    border: '1px solid #FFFFFF',
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  }}>
      <CardContent className="p-6 space-y-4 h-full flex flex-col">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-lg">
              {integration.icon}
            </div>
            <div>
              <h3 className="font-semibold text-base">{integration.name}</h3>
              <Badge variant="secondary" className="text-xs mt-1">
                {integration.status}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {integration.description}
        </p>
        
        <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium text-sm self-start">
          Learn More
          <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </CardContent>
    </div>;
  const CategorySection = ({
    title,
    integrations
  }: {
    title: string;
    integrations: any[];
  }) => <div className="space-y-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrations.map((integration, index) => <IntegrationCard key={index} integration={integration} />)}
      </div>
    </div>;
  return <div className="space-y-8">
      {/* Header with Cards page styling */}
      

      <CategorySection title="Discovery" integrations={discoveryIntegrations} />
      <CategorySection title="HRIS" integrations={hrisIntegrations} />
      <CategorySection title="Communication" integrations={communicationIntegrations} />
    </div>;
};
export default function Integrations() {
  return <Layout title="Integration" showRightSidebar={false} mainContent={<IntegrationsMainContent />} />;
}