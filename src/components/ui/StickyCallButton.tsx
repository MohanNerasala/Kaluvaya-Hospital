
import { PhoneCall } from 'lucide-react';

export function StickyCallButton() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      <a 
        href="tel:+919999999999" 
        className="flex items-center justify-center gap-2 w-full bg-medical-blue hover:bg-blue-800 text-white px-4 py-3.5 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-all"
      >
        <PhoneCall className="h-5 w-5 animate-pulse" />
        Call Emergency Now
      </a>
    </div>
  );
}
