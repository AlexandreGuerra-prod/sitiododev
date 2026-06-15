"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Github } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Restrição rigorosa ao seu e-mail
    if (email === "alexandre.guerra51@icloud.com") {
      setIsLogged(true);
    } else {
      alert("Acesso Negado: E-mail não autorizado.");
    }
  };

  // Se logado, mostra o Painel CRUD
  if (isLogged) {
    return (
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">⚙️ Painel de Configurações</h1>
        <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-xl border">
          <h2 className="text-xl font-semibold mb-4">Gerenciar Notas e Postagens</h2>
          <p className="text-slate-500 mb-4">Bem-vindo, Alexandre. Aqui você pode incluir, editar e apagar notas.</p>
          <div className="flex gap-4">
            <Button>+ Criar Nova Nota</Button>
            <Button variant="outline">Ver Notas Existentes</Button>
          </div>
          {/* O CRUD real será conectado ao seu banco Prisma posteriormente */}
        </div>
      </div>
    );
  }

  // Se NÃO logado, mostra o formulário
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md p-8 bg-white dark:bg-slate-900 shadow-lg rounded-2xl border">
        <h1 className="text-2xl font-bold text-center mb-6">Acesso Restrito</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium">E-mail (Conta Apple)</label>
            <Input 
              type="email" 
              placeholder="alexandre.guerra51@icloud.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label className="text-sm font-medium">Senha</label>
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Sua senha..." 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              className="absolute right-3 top-8 text-slate-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <Button type="submit" className="w-full">Entrar</Button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <span className="text-xs text-center text-slate-500 uppercase">Ou</span>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>

        <Button variant="outline" className="w-full mt-4 flex items-center gap-2">
          <Github size={18} />
          Fazer Login com GitHub
        </Button>
      </div>
    </div>
  );
}