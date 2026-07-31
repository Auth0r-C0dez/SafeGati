import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import ScrollIndicator from './ScrollIndicator';

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <Header />
      <ScrollIndicator />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
