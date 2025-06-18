import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Downloads() {
  return (
    <div className="min-h-screen">
      {/* Efeito de partículas/luzes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 text-transparent bg-clip-text mb-4">
            Downloads
          </h1>
          <p className="text-purple-200/80 text-xl max-w-2xl mx-auto">
            Escolha a versão compatível com seu sistema operacional e comece a desfrutar de uma experiência personalizada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <Card className="bg-purple-900/10 border-purple-500/20 backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300 group">
            <CardContent className="text-center p-8">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 mx-auto text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-200 mb-3">Windows</h3>
              <div className="space-y-2 mb-6">
                <p className="text-purple-200/80">Versão 0.5 beta</p>
                <p className="text-purple-200/60 text-sm">Compatível com Windows 10/11</p>
              </div>
              <Button
                asChild
                variant="ghost"
                className="w-full bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 hover:text-purple-100 transition-all duration-300"
              >
                <a href="/release/MaxApp.exe" className="flex items-center justify-center gap-2">
                  <span>Download</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-900/10 border-purple-500/20 backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300 group">
            <CardContent className="text-center p-8">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 mx-auto text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-200 mb-3">Mac</h3>
              <div className="space-y-2 mb-6">
                <p className="text-purple-200/80">Em desenvolvimento</p>
                <p className="text-purple-200/60 text-sm">Compatível com macOS 11+</p>
              </div>
              <Button 
                disabled 
                variant="ghost" 
                className="w-full bg-purple-500/10 cursor-not-allowed text-purple-200 hover:text-purple-400 hover:bg-purple-500/20"
              >
                Em breve
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-purple-900/10 border-purple-500/20 backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300 group">
            <CardContent className="text-center p-8">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-20 h-20 mx-auto text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-200 mb-3">Linux</h3>
              <div className="space-y-2 mb-6">
                <p className="text-purple-200/80">Em desenvolvimento</p>
                <p className="text-purple-200/60 text-sm">Compatível com Ubuntu 20.04+</p>
              </div>
              <Button 
                disabled 
                variant="ghost" 
                className="w-full bg-purple-500/10 cursor-not-allowed text-purple-200 hover:text-purple-400 hover:bg-purple-500/20"
              >
                Em breve
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}