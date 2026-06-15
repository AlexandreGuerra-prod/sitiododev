'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, Sun, Moon, Settings } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Tipagem Forte (TypeScript)
interface NavLink {
  href: string;
  label: string;
  external?: boolean;
  highlight?: boolean;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: 'https://blogdodev.fguerra.ia.br/', label: 'Blog', external: true },
  { href: '/notas', label: 'Notas' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/videos', label: 'Vídeos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
  { href: '/links', label: 'Links Úteis', highlight: true }, // NOVA SEÇÃO
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Fix de Hydration
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Evita o erro de hidratação do next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-sm transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16"> {/* Altura ligeiramente maior para respiro */}
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-black text-xl text-foreground group-hover:text-primary transition-colors tracking-tight">
              AG.
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : link.highlight 
                        ? 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                  {/* Animador de linha abaixo do item ativo */}
                  {isActive && !link.highlight && (
                    <motion.div 
                      layoutId="active-nav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full mx-3"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="h-6 w-px bg-border/50 mx-2" /> {/* Separador visual para os ícones */}

            {/* Ícones de Ação */}
            <div className="flex items-center gap-1">
              <Link
                href="/busca"
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Buscar"
              >
                <Search className="w-4 h-4" />
              </Link>
              
              {/* O ícone de tema só renderiza após montar o client */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="Alternar tema"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}

              <Link
                href="/admin"
                className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Configurações (Admin)"
              >
                <Settings className="w-4 h-4" />
              </Link>
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <Link href="/busca" className="p-2 rounded-full text-muted-foreground hover:bg-muted">
              <Search className="w-5 h-5" />
            </Link>
            
            {mounted && (
              <button onClick={toggleTheme} className="p-2 rounded-full text-muted-foreground hover:bg-muted">
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            
            <Link href="/admin" className="p-2 rounded-full text-muted-foreground hover:bg-muted">
              <Settings className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 ml-1 rounded-xl bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl absolute w-full shadow-lg"
          >
            <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                
                if (link.external) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-3 rounded-xl text-base font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : link.highlight
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}