
import { Routes, Route } from 'react-router-dom';
import Settings from '@/pages/Settings';
import Crypto from '@/pages/Crypto';
import CryptoDetail from '@/pages/crypto/CryptoDetail';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/settings" element={<Settings />} />
      <Route path="/crypto" element={<Crypto />} />
      <Route path="/crypto/:id" element={<CryptoDetail />} />
      <Route path="/" element={<Crypto />} />
    </Routes>
  );
}
