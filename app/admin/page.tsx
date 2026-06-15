"use client";

import { useState } from "react";
import { signIn, signOut, SessionProvider, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Github, LogOut, Settings } from "lucide-react";

// Componente Interno que usa a Sessão
function AdminDashboard() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    
    setLoading(false);
    if (res?.error) {
      alert("Acesso Negado: Credenciais inválidas.");
    }
  };

  if (status === "loading") {
    return <div className="text-center py-20 text-slate-500">Verificando credenciais...</div>;
  }

  // SE ESTIVER LOGADO (Painel CRUD)
  if (session) {
    return (
      <div className="container mx-auto py-10 px-4 min-h-[70vh]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Settings className="w-8 h-8 text-primary" /> Painel Administrativo
          </h1>
          <Button variant="outline" onClick={() => signOut()} className="gap-2">
            <LogOut size={16} /> Sair
          </Button>
        </div>
        
        <div className="bg-card p-6 rounded-xl border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Gerenciar Notas e Postagens</h2>
          <p className="text-muted-foreground mb-6">Autenticado como: {session.user?.email}</p>
          
          <div className="flex flex-wrap gap-4 border-b pb-6 mb-6">
            <Button className="bg-primary text-white">+ Criar Nova Nota</Button>
            <Button variant="secondary">Ver Notas Existentes</Button>
          </div>

          <div className="text-center py-10 text-muted-foreground border-2 border-dashed rounded-lg">
            A lista de notas cadastradas no banco de dados aparecerá aqui.
          </div>
        </div>
      </div>
    );
  }

  // SE NÃO ESTIVER LOGADO (Formulário)
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[75vh] px-4">
      <div className="w-full max-w-md p-8 bg-card shadow-lg rounded-2xl border">
        <h1 className="text-2xl font-display font-bold text-center mb-2">Acesso Restrito</h1>
        <p className="text-center text-muted-foreground mb-6 text-sm">Área exclusiva do administrador</p>
        
        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">E-mail (Conta Apple)</label>
            <Input 
              type="email" 
              placeholder="alexandre.guerra51@icloud.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="relative">
            <label className="text-sm font-medium mb-1 block">Senha</label>
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Sua senha secreta" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
            <button 
              type="button"
              className="absolute right-3 top-[30px] text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Entrando..." : "Entrar com Senha"}
          </Button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <span className="text-xs text-center text-muted-foreground uppercase font-medium">Ou</span>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>

        <Button 
          variant="outline" 
          className="w-full mt-4 flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => signIn("github")}
        >
          <Github size={18} />
          Fazer Login com GitHub
        </Button>
      </div>
    </div>
  );
}

// Wrapper do provedor de sessão (necessário para o Client Component)
export default function AdminPage() {
  return (
    <SessionProvider>
      <AdminDashboard />
    </SessionProvider>
  );
}