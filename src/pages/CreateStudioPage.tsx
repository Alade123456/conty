import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';
import TopBar from '@/components/TopBar';
import VisualManifesto from '@/components/VisualManifesto';

interface CreateStudioPageProps {
  onNavigateToSignIn: () => void;
}

export default function CreateStudioPage({ onNavigateToSignIn }: CreateStudioPageProps) {
  return (
    <div className="bg-[#FAF9F4] text-[#151515] min-h-screen antialiased flex flex-col justify-between selection:bg-[#C7F236] selection:text-black">
      <TopBar />
      <main
        className="w-full max-w-[1440px] mx-auto px-6 py-8 lg:py-10 flex-1 flex items-center justify-center"
        data-purpose="main-layout"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <VisualManifesto />
          <RegistrationForm onNavigateToSignIn={onNavigateToSignIn} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
