
import { useSearchParams } from 'react-router-dom';
import { SettingsNavigation } from './SettingsNavigation';

export function SettingsLeftSidebar() {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'password';

  return (
    <div className="w-full h-full">
      <div
        className="rounded-[24px] p-6 h-full"
        style={{ 
          background: 'rgba(255, 255, 255, 0.64)',
          border: '1px solid #FFFFFF'
        }}
      >
        <h3 className="text-lg font-semibold mb-6">Settings</h3>
        <SettingsNavigation activeTab={activeTab} />
      </div>
    </div>
  );
}
