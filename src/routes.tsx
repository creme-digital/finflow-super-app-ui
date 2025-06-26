import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { Blog } from '@/pages/Blog';
import { Post } from '@/pages/Post';
import { Pricing } from '@/pages/Pricing';
import { Settings } from '@/pages/Settings';
import { Profile } from '@/pages/Profile';
import { Projects } from '@/pages/Projects';
import { ProjectDetail } from '@/pages/ProjectDetail';
import { Tasks } from '@/pages/Tasks';
import { TaskDetail } from '@/pages/TaskDetail';
import { Kanban } from '@/pages/Kanban';
import { Chat } from '@/pages/Chat';
import { Notifications } from '@/pages/Notifications';
import { Feed } from '@/pages/Feed';
import { Analytics } from '@/pages/Analytics';
import { Ecommerce } from '@/pages/Ecommerce';
import { ProductDetail } from '@/pages/ProductDetail';
import { Cart } from '@/pages/Cart';
import { Checkout } from '@/pages/Checkout';
import { Crypto } from '@/pages/Crypto';
import CryptoTrade from '@/pages/crypto-trade';
import CoinDetail from '@/pages/crypto/[symbol]';
import MeelyTradeCrypto from '@/pages/meelytrade/Crypto';
import CryptoDetail from '@/pages/crypto/CryptoDetail';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/post/:id',
    element: <Post />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/projects/:id',
    element: <ProjectDetail />,
  },
  {
    path: '/tasks',
    element: <Tasks />,
  },
  {
    path: '/tasks/:id',
    element: <TaskDetail />,
  },
  {
    path: '/kanban',
    element: <Kanban />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/notifications',
    element: <Notifications />,
  },
  {
    path: '/feed',
    element: <Feed />,
  },
  {
    path: '/analytics',
    element: <Analytics />,
  },
  {
    path: '/ecommerce',
    element: <Ecommerce />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/crypto',
    element: <Crypto />,
  },
  {
    path: '/crypto/trade/:symbol',
    element: <CoinDetail />,
  },
  {
    path: '/crypto/trade',
    element: <CryptoTrade />,
  },
  {
    path: '/meelytrade/crypto',
    element: <MeelyTradeCrypto />,
  },
  {
    path: '/crypto/:id',
    element: <CryptoDetail />,
  },
];
