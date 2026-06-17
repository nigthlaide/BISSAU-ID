'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-[#0A2540] text-white shadow-2xl sticky top-0 z-50 border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo + Nome */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">BI</span>
            </div>
            <div>
              <p className="text-2xl font-bold tracking-tight">BISSAU ID</p>
              <p className="text-xs text-blue-300 -mt-1">e-Gov</p>
            </div>
          </Link>

        
          <div className="flex items-center gap-4">
            <Link 
              href="/auth/login"
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all font-semibold shadow-md"
            >
              Entrar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
