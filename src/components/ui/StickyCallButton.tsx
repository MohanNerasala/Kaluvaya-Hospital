
import { PhoneCall } from 'lucide-react';

export function StickyCallButton() {
  return (
    <div 
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-8px_20px_rgba(0,0,0,0.06)] px-4 pt-3"
      style={{ paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))' }}
    >
      <a 
        href="tel:+919999999999" 
        className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-medical-blue to-medical-teal text-white py-3.5 rounded-full font-bold text-lg shadow-md active:scale-[0.98] transition-all"
      >
        <PhoneCall className="h-5 w-5 animate-pulse" />
        Call Emergency Now
      </a>
    </div>
  );
}
