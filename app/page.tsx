import Link from 'next/link';
import { StickyNote, Rocket, Video, BookOpen, Newspaper, ArrowRight, Mail, Zap, ExternalLink, Server, Globe, LayoutGrid } from 'lucide-react';
import { getAllNotas } from '@/lib/mdx';
import { getPageContent } from '@/lib/mdx';
import { projetos } from '@/content/projetos';
import { siteConfig } from '@/lib/constants';
import { AvatarPortal } from '@/components/avatar-portal';
import { SectionHeader } from '@/components/section-header';
import { HomeProjectCard } from '@/components/home-project-card';

export default async function HomePage() {
  const notas = await getAllNotas();
  const nowContent = await getPageContent('now');
  const featuredProjects = (projetos ?? []).filter((p: any) => p?.destaque);

  return (
    <div className="hero-gradient">
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <AvatarPortal size="sm" />
          <div className="text-center sm:text-left">
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
              Oi, eu sou o <span className="text-primary">Alexandre Guerra</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-5 max-w-xl">
              Desenvolvedor web, servidor público, educador e entusiasta de tecnologia. Compartilho aqui o que aprendo, crio e descubro.
            </p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <Link href="/sobre" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
                Sobre mim
              </Link>
              <a href="https://blogdodev.fguerra.ia.br/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-muted text-foreground font-medium text-sm hover:bg-muted/80 transition-colors inline-flex items-center gap-1.5">
                Blog do Dev <ExternalLink className="w-3 h-3" />
              </a>
              <Link href="/projetos" className="px-4 py-2 rounded-lg bg-muted text-foreground font-medium text-sm hover:bg-muted/80 transition-colors">
                Projetos
              </Link>
              <Link href="/contato" className="px-4 py-2 rounded-lg bg-muted text-foreground font-medium text-sm hover:bg-muted/80 transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Minhas Criações Dev */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <SectionHeader title="Minhas Criações Dev" icon={LayoutGrid} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Organizador de Tarefas */}
          <a
            href="https://tarefas.fguerra.ia.br/auth"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-lg bg-card hover:bg-muted/50 transition-colors"
            style={{ boxShadow: 'var(--shadow-sm)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-primary" />
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Organizador de Tarefas</h3>
            </div>
            <p className="text-sm text-muted-foreground">Aplicação para organização e gestão de tarefas pessoais.</p>
          </a>

          {/* Portal INTRANET */}
          <a
            href="https://fguerra-intranet-hub.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-lg bg-card hover:bg-muted/50 transition-colors"
            style={{ boxShadow: 'var(--shadow-sm)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-primary" />
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Portal INTRANET</h3>
            </div>
            <p className="text-sm text-muted-foreground">Portal intranet corporativo para comunicação interna.</p>
          </a>

          {/* Portal SPC */}
          <a
            href="https://spc-1gpte-eb.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-lg bg-card hover:bg-muted/50 transition-colors"
            style={{ boxShadow: 'var(--shadow-sm)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-primary" />
              <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Portal SPC</h3>
            </div>
            <p className="text-sm text-muted-foreground">Sistema de portal para gestão de processos e consultas SPC.</p>
          </a>
        </div>

        {/* Servidor ZIMA */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-4">
            <Server className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-bold tracking-tight text-foreground">Servidor ZIMA</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Tempera Digital */}
            <a
              href="https://temperadigital.fguerra.ia.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-lg bg-card hover:bg-muted/50 transition-colors"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="w-4 h-4 text-primary" />
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Tempera Digital</h3>
              </div>
              <p className="text-sm text-muted-foreground">Soluções web personalizadas para negócios.</p>
            </a>

            {/* devalexandre */}
            <a
              href="https://devalexandre.fguerra.ia.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-lg bg-card hover:bg-muted/50 transition-colors"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="w-4 h-4 text-primary" />
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Dev Alexandre</h3>
              </div>
              <p className="text-sm text-muted-foreground">Portfólio e projetos de desenvolvimento.</p>
            </a>

            {/* Portal SPC (ZIMA) */}
            <a
              href="https://portal_spc.fguerra.ia.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-lg bg-card hover:bg-muted/50 transition-colors"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="w-4 h-4 text-primary" />
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Portal SPC</h3>
              </div>
              <p className="text-sm text-muted-foreground">Portal SPC hospedado no servidor ZIMA.</p>
            </a>

            {/* Quadro Branco */}
            <a
              href="https://quadrobranco.fguerra.ia.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-lg bg-card hover:bg-muted/50 transition-colors"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="w-4 h-4 text-primary" />
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Quadro Branco</h3>
              </div>
              <p className="text-sm text-muted-foreground">Ferramenta de quadro branco colaborativo.</p>
            </a>

            {/* Guerra Driver */}
            <a
              href="https://guerradriver.fguerra.ia.br/login?redirect_url=/apps/files/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-lg bg-card hover:bg-muted/50 transition-colors"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="w-4 h-4 text-primary" />
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">Guerra Driver</h3>
              </div>
              <p className="text-sm text-muted-foreground">Nextcloud — armazenamento em nuvem pessoal (requer reparos).</p>
            </a>
          </div>
        </div>
      </section>

      {/* Notas recentes */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <SectionHeader title="Notas recentes" href="/notas" icon={StickyNote} />
        <div className="space-y-3">
          {(notas ?? []).slice(0, 3).map((nota: any) => (
            <Link
              key={nota?.slug}
              href={`/notas/${nota?.slug}`}
              className="block p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-foreground hover:text-primary transition-colors">{nota?.frontmatter?.title ?? ''}</h3>
                <span className="text-xs text-muted-foreground">
                  {new Date(nota?.frontmatter?.date ?? '').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* O que estou fazendo agora */}
      {nowContent && (
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
          <SectionHeader title="O que estou fazendo agora" href="/now" linkText="Ver mais" icon={Zap} />
          <div className="p-5 rounded-lg bg-card" style={{ boxShadow: 'var(--shadow-sm)' }}>
            <p className="text-muted-foreground text-sm">
              Construindo este site, evoluindo a plataforma Estudos.dev, expandindo meu homelab e estudando TypeScript avançado.
            </p>
            <Link href="/now" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3 font-medium">
              Saiba mais <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </section>
      )}

      {/* Projetos em destaque */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <SectionHeader title="Projetos em destaque" href="/projetos" icon={Rocket} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(featuredProjects ?? []).slice(0, 3).map((proj: any, i: number) => (
            <HomeProjectCard
              key={proj?.nome}
              nome={proj?.nome ?? ''}
              ano={proj?.ano ?? 2025}
              descricao={proj?.descricao ?? ''}
              stack={proj?.stack ?? []}
              links={proj?.links ?? {}}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Vídeos indicados */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <div className="p-6 rounded-lg bg-card" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <div className="flex items-center gap-3 mb-3">
            <Video className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Vídeos indicados</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Curadoria de vídeos sobre desenvolvimento, tecnologia e carreira que eu recomendo.
          </p>
          <Link href="/videos" className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
            Ver vídeos <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Tempera Digital CTA */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
          <h2 className="font-display text-xl font-bold tracking-tight text-foreground mb-2">Precisa de ajuda no seu projeto digital?</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Conheça a Tempera Digital — soluções web personalizadas para seu negócio.
          </p>
          <a
            href={siteConfig?.externalLinks?.temperaDigital}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Conhecer a Tempera Digital <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Estudos links */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="p-5 rounded-lg bg-card" style={{ boxShadow: 'var(--shadow-sm)' }}>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <h3 className="font-display font-semibold text-foreground">Trilhas de aprendizado</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Roteiros organizados para estudar tecnologia do zero ao avançado.</p>
            <a href={siteConfig?.externalLinks?.trilhas} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium flex items-center gap-1">
              Acessar trilhas <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          <div className="p-5 rounded-lg bg-card" style={{ boxShadow: 'var(--shadow-sm)' }}>
            <div className="flex items-center gap-2 mb-2">
              <Newspaper className="w-4 h-4 text-primary" />
              <h3 className="font-display font-semibold text-foreground">Notícias do mundo tech</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Fique por dentro das novidades e tendências em tecnologia.</p>
            <a href={siteConfig?.externalLinks?.noticias} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium flex items-center gap-1">
              Ver notícias <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter stub */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <div className="p-6 rounded-lg bg-card text-center" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <Mail className="w-6 h-6 text-primary mx-auto mb-3" />
          <h2 className="font-display text-xl font-bold tracking-tight text-foreground mb-2">Newsletter</h2>
          <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
            Em breve: receba posts, notas e novidades diretamente no seu email.
          </p>
          <div className="flex max-w-sm mx-auto gap-2">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-2 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled
            />
            <button
              disabled
              className="px-4 py-2 rounded-lg bg-primary/50 text-primary-foreground text-sm font-medium cursor-not-allowed"
            >
              Em breve
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
