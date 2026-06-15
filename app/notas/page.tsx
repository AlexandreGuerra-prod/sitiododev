import { Metadata } from 'next';
import Link from 'next/link';
import { getAllNotas } from '@/lib/mdx';
import { StickyNote, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Notas',
  description: 'Notas rápidas, reflexões e atualizações sobre tecnologia e aprendizado.',
};

export default async function NotasPage() {
  const notas = await getAllNotas();

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground mb-2 flex items-center gap-2">
          <StickyNote className="w-7 h-7 text-primary" />
          Notas
        </h1>
        <p className="text-muted-foreground">
          Pensamentos curtos, reflexões e anotações rápidas.
        </p>
      </div>

      <div className="space-y-3">
        {(notas ?? []).map((nota: any) => (
          <Link
            key={nota?.slug}
            href={`/notas/${nota?.slug}`}
            className="block p-5 rounded-lg bg-card hover:bg-muted/50 transition-all duration-200 group"
            style={{ boxShadow: 'var(--shadow-sm)' }}
          >
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
              {nota?.frontmatter?.title ?? ''}
            </h3>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {new Date(nota?.frontmatter?.date ?? '').toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
