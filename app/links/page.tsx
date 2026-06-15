"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Banco de dados dos links
const linksData = [
  { category: "🏛️ Governo e Servidor", items: [
    { name: "Portal do Servidor", url: "https://www.gov.br/servidor/pt-br" },
    { name: "Portal da Transparência", url: "https://portaldatransparencia.gov.br" },
    { name: "SouGov.br", url: "https://gov.br/sougov" },
    { name: "Gov.br", url: "https://gov.br" },
    { name: "SIGEPE", url: "https://sigepe.gov.br" },
    { name: "ENAP", url: "https://enap.gov.br" },
    { name: "CONDSEF", url: "https://condsef.org.br" },
    { name: "SIAPENET", url: "https://siapenet.gov.br" },
    { name: "Exército Brasileiro", url: "https://eb.mil.br" }
  ]},
  { category: "🛠️ Ferramentas e IA", items: [
    { name: "ChatGPT", url: "https://chatgpt.com" },
    { name: "Gemini", url: "https://gemini.google.com" },
    { name: "Claude", url: "https://claude.ai" },
    { name: "Lovable", url: "https://lovable.dev" },
    { name: "Abacus.AI", url: "https://abacus.ai" },
    { name: "Cloudflare", url: "https://cloudflare.com" },
    { name: "GitHub", url: "https://github.com" }
  ]},
  { category: "📰 Notícias e Tecnologia", items: [
    { name: "TecMundo", url: "https://tecmundo.com.br" },
    { name: "Olhar Digital", url: "https://olhardigital.com.br" },
    { name: "UOL", url: "https://uol.com.br" },
    { name: "G1", url: "https://g1.globo.com" },
    { name: "CNN Brasil", url: "https://cnnbrasil.com.br" }
  ]},
  { category: "🎮 Games", items: [
    { name: "Epic Games", url: "https://store.epicgames.com" },
    { name: "Steam", url: "https://store.steampowered.com" },
    { name: "Prime Gaming", url: "https://gaming.amazon.com" }
  ]},
  { category: "💰 Finanças", items: [
    { name: "Banco do Brasil", url: "https://bb.com.br" },
    { name: "Caixa", url: "https://caixa.gov.br" },
    { name: "Nubank", url: "https://nubank.com.br" },
    { name: "Inter", url: "https://inter.co" },
    { name: "Mercado Pago", url: "https://mercadopago.com.br" }
  ]},
  { category: "🛒 Compras Online", items: [
    { name: "Mercado Livre", url: "https://mercadolivre.com.br" },
    { name: "Amazon", url: "https://amazon.com.br" },
    { name: "Shopee", url: "https://shopee.com.br" },
    { name: "AliExpress", url: "https://aliexpress.com" }
  ]},
  { category: "💬 Redes Sociais", items: [
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Discord", url: "https://discord.com" }
  ]}
];

export default function LinksUteis() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = linksData.map(group => ({
    ...group,
    items: group.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  return (
    <div className="container mx-auto py-10 px-4 min-h-screen">
      <div className="flex flex-col space-y-6 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Links Úteis</h1>
        <p className="text-lg text-slate-500">Acesse rapidamente as principais plataformas, ferramentas e portais do governo.</p>
        
        {/* Barra de Pesquisa */}
        <div className="relative max-w-xl">
          <Input 
            type="search" 
            placeholder="Buscar um link (ex: SouGov, ChatGPT, Caixa)..." 
            className="w-full pl-4 pr-10 py-6 text-lg rounded-xl border-slate-300 dark:border-slate-700 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Grid de Categorias */}
      <div className="space-y-12">
        {filteredData.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <h2 className="text-2xl font-semibold border-b pb-2 text-slate-800 dark:text-slate-200">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.items.map((link, linkIdx) => (
                <a key={linkIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="block group">
                  <Card className="h-full transition-all duration-200 hover:scale-[1.02] hover:shadow-md hover:border-blue-500 cursor-pointer dark:bg-slate-900">
                    <CardHeader className="p-4">
                      <CardTitle className="text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {link.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        ))}
        {filteredData.length === 0 && (
          <div className="text-center py-10 text-slate-500">Nenhum link encontrado para "{searchTerm}".</div>
        )}
      </div>
    </div>
  );
}