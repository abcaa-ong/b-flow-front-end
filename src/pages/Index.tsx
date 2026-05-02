import { ArrowRight, Check, CircleGauge, Layers3, Rocket } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const highlights = [
  {
    title: "Vite + React + TypeScript",
    description: "Estrutura pronta para desenvolvimento rápido com tipagem forte.",
    icon: Rocket,
  },
  {
    title: "Tailwind + shadcn",
    description: "Base visual preparada para componentes acessíveis e consistentes.",
    icon: Layers3,
  },
  {
    title: "API + React Query",
    description: "Integração pensada para consumir a API que você já criou.",
    icon: CircleGauge,
  },
];

const checklist = [
  "Projeto isolado na branch `developer`.",
  "Alias `@` configurado para `src`.",
  "Tema claro/escuro habilitado.",
  "Base pronta para criar telas reais do Lovable.",
];

export function IndexPage() {
  return (
    <main className="page-shell">
      <section className="relative overflow-hidden rounded-3xl border bg-background/80 px-6 py-8 shadow-sm backdrop-blur sm:px-10 sm:py-12">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 inline-flex rounded-full border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              Setup inicial do projeto
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Base pronta para receber o código do Lovable sem recriar do zero.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Organizei a fundação do app em React + TypeScript com as bibliotecas que já vieram no
              pacote, deixando o projeto pronto para evoluir na branch `developer`.
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="relative mt-8 flex flex-wrap gap-3">
          <Button>
            Ir para a base
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline">Ver estrutura</Button>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="h-full">
              <CardHeader>
                <div className="mb-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>O que ficou pronto agora</CardTitle>
            <CardDescription>
              A estrutura foi montada para entrar no fluxo normal de desenvolvimento.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximos passos naturais</CardTitle>
            <CardDescription>
              Assim que o código fonte completo estiver disponível, é só encaixar as telas e os
              componentes reais.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>1. Colocar as páginas reais dentro de `src/pages`.</p>
            <p>2. Substituir a landing de setup pelos fluxos do produto.</p>
            <p>3. Ligar a API, rotas e estado conforme a aplicação exigir.</p>
            <p>4. Manter os componentes shadcn como base de UI.</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
