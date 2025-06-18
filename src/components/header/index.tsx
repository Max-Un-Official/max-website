"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-xl bg-black/30 border border-purple-500/30 rounded-full shadow-[0_0_10px_1px_rgba(147,51,234,0.1)]">
        <div className="px-8">
          <div className="h-20 flex items-center">
            {/* Logo */}
            <div className="mr-4">
              <Link href="/">
                <Image src="/icons/icon.png" alt="Max" width={44} height={44} />
              </Link>
            </div>

            {/* Navegação */}
            <nav className="flex items-center gap-4">
              <Button
                asChild
                variant="ghost" 
                className="text-white hover:bg-purple-500/20 hover:text-purple-400 transition-colors duration-300"
              >
                <Link href="/">Início</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white hover:bg-purple-500/20 hover:text-purple-400 transition-colors duration-300"
              >
                <Link href="/downloads">Downloads</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white hover:bg-purple-500/20 hover:text-purple-400 transition-colors duration-300"
              >
                <Link href="/team">Equipe</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
