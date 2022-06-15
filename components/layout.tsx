import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='bg-primary'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
