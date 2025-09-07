
'use client';

import { CheckCircle, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/50 py-20 text-center md:py-32">
          <div className="container">
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary">
              Dia 06/09/25 é o último dia para aproveitar esta promoção
            </h2>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
              +300 Mídias Profissionais prontas para aumentar as vendas da sua Salgaderia!
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
              Transforme suas redes sociais com conteúdo visual profissional e aumente o faturamento da sua empresa! Deixe a concorrência para trás e atraia uma chuva de clientes!
            </p>
            <Button size="lg" className="mt-8 animate-pulse px-12 py-8 text-xl font-bold">
              Quero meu pacote agora
            </Button>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <div className="text-center">
                <p className="text-2xl font-bold text-muted-foreground line-through">De R$97,00</p>
                <p className="text-5xl font-extrabold text-primary">Por apenas R$10</p>
              </div>
              <div className="flex items-center gap-2 rounded-lg border bg-secondary p-4 text-lg font-semibold">
                <ShieldCheck className="size-8 text-primary" />
                <span>Garantia de 7 dias | Risco Zero</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold md:text-4xl">O que você vai receber?</h2>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 text-left md:grid-cols-2">
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 size-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold">+200 posts prontos</h3>
                  <p className="text-muted-foreground">No novo formato do Instagram para máximo alcance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 size-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold">+100 stories engajadores</h3>
                  <p className="text-muted-foreground">Para manter sua audiência conectada.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 size-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold">Legendas para todos os posts</h3>
                  <p className="text-muted-foreground">Textos persuasivos prontos para usar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 size-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold">+15 destaques para bio</h3>
                  <p className="text-muted-foreground">Para organizar e profissionalizar seu perfil.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 size-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold">Modelos de placa PIX</h3>
                  <p className="text-muted-foreground">Personalizáveis para o seu negócio.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="mt-1 size-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold">+6 bônus gratuitos</h3>
                  <p className="text-muted-foreground">Ferramentas extras para impulsionar seus resultados.</p>
                </div>
              </div>
            </div>
            <p className="mt-8 text-lg text-muted-foreground">Edite as cores e textos facilmente para combinar com a sua marca.</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Depoimentos de quem já comprou</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image src="https://picsum.photos/40/40" data-ai-hint="male profile" alt="Guilherme Yager" width={40} height={40} className="rounded-full" />
                    <div>
                      <CardTitle>Guilherme Yager</CardTitle>
                      <div className="flex items-center gap-0.5">
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">&quot;Pacote incrível, entrega super rápida no WhatsApp e no e-mail. As artes são muito profissionais e fáceis de usar. Recomendo demais!&quot;</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image src="https://picsum.photos/40/41" data-ai-hint="male profile" alt="Marcos Cezzar" width={40} height={40} className="rounded-full" />
                    <div>
                      <CardTitle>Marcos Cezzar</CardTitle>
                      <div className="flex items-center gap-0.5">
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">&quot;As artes são de altíssima qualidade. Meu engajamento aumentou muito depois que comecei a usar o material. Valeu cada centavo.&quot;</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image src="https://picsum.photos/41/40" data-ai-hint="female profile" alt="Julia Macedo" width={40} height={40} className="rounded-full" />
                    <div>
                      <CardTitle>Julia Macedo</CardTitle>
                      <div className="flex items-center gap-0.5">
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                        <Star className="size-4 fill-primary text-primary" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">&quot;Notei um aumento real no interesse e no número de clientes. O pacote é completo e me ajudou a profissionalizar minha divulgação.&quot;</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="text-center">
                <CheckCircle className="mx-auto mb-4 size-12 text-primary" />
                <h3 className="text-2xl font-bold">Profissionalismo</h3>
                <p className="mt-2 text-muted-foreground">Transmita mais confiança e credibilidade com um visual profissional.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="mx-auto mb-4 size-12 text-primary" />
                <h3 className="text-2xl font-bold">Economia de Tempo</h3>
                <p className="mt-2 text-muted-foreground">Chega de perder horas criando posts. Tenha tudo pronto para postar.</p>
              </div>
              <div className="text-center">
                <CheckCircle className="mx-auto mb-4 size-12 text-primary" />
                <h3 className="text-2xl font-bold">Aumento nas Vendas</h3>
                <p className="mt-2 text-muted-foreground">Designs atraentes que geram desejo e convertem seguidores em clientes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Transforme sua Salgaderia em um Ímã de Clientes</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 size-6 shrink-0 text-primary" />
                  <span><strong>Aumente seu faturamento</strong> com uma avalanche de novos pedidos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 size-6 shrink-0 text-primary" />
                  <span><strong>Deixe a concorrência para trás</strong> com um perfil irresistível.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 size-6 shrink-0 text-primary" />
                  <span><strong>Multiplique seus clientes</strong> e veja sua agenda lotar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 size-6 shrink-0 text-primary" />
                  <span><strong>Divulgação profissional</strong> pagando um valor simbólico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 size-6 shrink-0 text-primary" />
                  <span>Receba tudo <strong>pronto no seu WhatsApp e e-mail.</strong></span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <Image src="https://picsum.photos/600/400" data-ai-hint="savory snacks" alt="Salgados deliciosos" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        {/* Offer Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Escolha o Plano Perfeito para Você</h2>
            <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:items-start">
              <Card className="flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Pacote Básico</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-center text-4xl font-bold">R$10</p>
                  <ul className="mt-6 flex-1 space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><CheckCircle className="size-5 text-primary" /><span>10 posts</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="size-5 text-primary" /><span>5 stories</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="size-5 text-primary" /><span>10 legendas</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="size-5 text-primary" /><span>Garantia de 7 dias</span></li>
                  </ul>
                  <Button variant="outline" size="lg" className="mt-6 w-full text-lg">Quero essa opção!</Button>
                </CardContent>
              </Card>

              <Card className="relative flex flex-col border-2 border-primary shadow-2xl shadow-primary/20">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                  MAIS VENDIDO / RECOMENDADO
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Pacote Completo</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-center text-4xl font-bold">R$27</p>
                  <ul className="mt-6 flex-1 space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-3"><CheckCircle className="size-5 text-primary" /><span>+200 posts prontos</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="size-5 text-primary" /><span>+100 stories engajadores</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="size-5 text-primary" /><span>Legendas para todos os posts</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="size-5 text-primary" /><span>Destaques para bio</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="size-5 text-primary" /><span>Modelos de placa PIX</span></li>
                    <li className="flex items-center gap-3"><CheckCircle className="size-5 text-primary" /><span>6 bônus exclusivos</span></li>
                     <li className="flex items-center gap-3"><CheckCircle className="size-5 text-primary" /><span>Bônus extra surpresa</span></li>
                  </ul>
                  <Button size="lg" className="mt-6 w-full animate-pulse text-lg">SIM! Quero essa super oferta</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container text-center">
            <ShieldCheck className="mx-auto mb-4 size-16 text-primary" />
            <h2 className="text-3xl font-bold md:text-4xl">Sua Compra com Risco Zero!</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Sua satisfação é nossa prioridade. Se em até 7 dias você não estiver 100% satisfeito com o pacote de mídias, basta nos enviar um e-mail e nós devolveremos cada centavo do seu investimento, sem perguntas e sem complicação.
            </p>
            <Button size="lg" className="mt-8 px-12 py-8 text-xl font-bold">
              Quero meu pacote com garantia
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Salgaderia de Sucesso. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Política de Privacidade</a>
            <a href="#" className="hover:text-primary">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
