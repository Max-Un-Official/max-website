"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-purple-200/80 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Max Não-Oficial</h3>
            <p className="text-sm">
              Uma experiência personalizada para acompanhar todo o conteúdo disponível na Max.
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-purple-400 transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Max-Un-Official/max" className="hover:text-purple-400 transition-colors">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-200">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://max.com" className="hover:text-purple-400 transition-colors">
                  Site Oficial da Max
                </Link>
              </li>
              <li>
                <Link href="https://max.com/terms-of-use" className="hover:text-purple-400 transition-colors">
                  Termos de Uso da Max
                </Link>
              </li>
              <li>
                <Link href="https://max.com/privacy" className="hover:text-purple-400 transition-colors">
                  Política de Privacidade da Max
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-purple-800/30" />

        <div className="text-center space-y-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Max Não-Oficial. Este é um projeto não oficial e não possui vínculo com a Warner Bros. Discovery.
          </p>
          <p className="text-xs text-purple-200/60">
            Max™, o logotipo Max e todas as marcas relacionadas são marcas comerciais da Warner Bros. Discovery, Inc. ou suas afiliadas.
          </p>
          <p className="text-xs text-purple-200/60">
            Este é um projeto de código aberto criado por fãs e não tem afiliação oficial com a Warner Bros. Discovery.
          </p>
        </div>
      </div>
    </footer>
  );
}
