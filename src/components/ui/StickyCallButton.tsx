
import { PhoneCall } from 'lucide-react';

export function StickyCallButton() {
  return (
    <div 
      className="md:hidden relative z-50 shrink-0 w-full bg-white border-t border-gray-100 shadow-[0_-8px_20px_rgba(0,0,0,0.06)] px-4 pt-4"
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))' }}
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
