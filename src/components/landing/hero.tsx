"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-zinc-950 flex items-center justify-center overflow-hidden">
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-zinc-950 to-zinc-950"></div>
      
      {/* Efeito de partículas/luzes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 text-transparent bg-clip-text mb-6">
            Max Não-Oficial
          </h1>
          <p className="text-purple-200/80 text-xl md:text-2xl mb-8">
            Sua experiência personalizada para acompanhar suas séries e filmes favoritos da Max
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg shadow-purple-700/30"
            >
              Começar Agora
            </Button>
            <Button 
              variant="outline"
              className="border-purple-700 text-purple-200 hover:bg-purple-700/20 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
