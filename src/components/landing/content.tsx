"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Content() {
  return (
    <section className="relative overflow-hidden">
      {/* Efeito de partículas/luzes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-24">
        {/* Seção de Dispositivos Compatíveis */}
        <div className="container mx-auto px-4 mb-32">
          <h2 className="text-4xl font-bold text-center text-purple-200 mb-16">
            Disponível em todos os seus dispositivos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="bg-purple-900/20 border-purple-500/20">
              <CardContent className="text-center p-6">
                <div className="p-8 mb-4">
                  <svg className="w-16 h-16 mx-auto text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 14H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.11-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-200 mb-2">Windows</h3>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-4 text-purple-200 hover:text-purple-400 hover:bg-purple-500/20">
                  <a href="/release/MaxApp.exe" download>Download</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-purple-500/20">
              <CardContent className="text-center p-6">
                <div className="p-8 mb-4">
                  <svg className="w-16 h-16 mx-auto text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 14H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.11-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-200 mb-2">Mac</h3>
                <Button disabled variant="secondary" className="mt-4">
                  Em breve
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-purple-500/20">
              <CardContent className="text-center p-6">
                <div className="p-8 mb-4">
                  <svg className="w-16 h-16 mx-auto text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 14H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.11-.9-2-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-200 mb-2">Linux</h3>
                <Button disabled variant="secondary" className="mt-4">
                  Em breve
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Seção de Destaques */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-purple-200 mb-16">
            Conteúdo exclusivo da <a href="https://max.com" className="text-purple-400 hover:text-purple-200">Max</a>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group cursor-pointer overflow-hidden border-0 bg-zinc-900/50 shadow-lg shadow-purple-900/20 rounded-3xl hover:bg-zinc-900/70 transition-all duration-300">
              <CardContent className="p-0 relative rounded-3xl overflow-hidden aspect-[3/4]">
                <img 
                  src="https://m.media-amazon.com/images/I/81vj0n0mzGL.jpg" 
                  alt="House of the Dragon"
                  className="w-full h-full object-cover bg-transparent transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">House of the Dragon</h3>
                  <p className="text-gray-300 text-sm">A história da família Targaryen, 200 anos antes de Game of Thrones</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer overflow-hidden border-0 bg-zinc-900/50 shadow-lg shadow-purple-900/20 rounded-3xl hover:bg-zinc-900/70 transition-all duration-300">
              <CardContent className="p-0 relative rounded-3xl overflow-hidden aspect-[3/4]">
                <img 
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSQX_39GAE9caPnge5G42RUfLm5l5nmHdH195y4aeg0i2eFOrS8j2iA71NBpKu2Vt50lNI" 
                  alt="The Last of Us"
                  className="w-full h-full object-cover bg-transparent transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">The Last of Us</h3>
                  <p className="text-gray-300 text-sm">Uma jornada brutal através de uma América pós-apocalíptica</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer overflow-hidden border-0 bg-zinc-900/50 shadow-lg shadow-purple-900/20 rounded-3xl hover:bg-zinc-900/70 transition-all duration-300">
              <CardContent className="p-0 relative rounded-3xl overflow-hidden aspect-[3/4]">
                <img 
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQV-ielrEM4nyyG6fJhp0YThlkfFxa6WKe2qPWpRCWwpZtOjfC6Nh5NBgWiZlkSN1SDIw5b" 
                  alt="Succession"
                  className="w-full h-full object-cover bg-transparent transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Succession</h3>
                  <p className="text-gray-300 text-sm">Drama familiar sobre poder, política e dinheiro</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
