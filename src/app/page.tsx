
'use client';

import { CheckCircle, ShieldCheck, Star, Award, Tv, Users, FileText, BarChart2, MessageCircle, ShoppingCart, Smartphone, HelpCircle, FilePlus, CreditCard, Mail, Search, Globe } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

const HowItWorksIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex size-24 items-center justify-center rounded-full bg-primary/10 text-primary">
    <div className="flex size-20 items-center justify-center rounded-full bg-primary/20">
      {children}
    </div>
  </div>
);


export default function LandingPage() {
  return (
    <div className="flex w-full flex-col bg-background text-foreground">
      <main className="flex-1">
        {/* Header */}
        <header className="bg-red-600 py-2 text-center text-sm font-bold text-primary-foreground">
          OFERTA ESPECIAL POR TEMPO LIMITADO
        </header>

        {/* Hero Section */}
        <section className="bg-background py-16 text-center md:py-24">
          <div className="container">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              <span className="text-yellow-500">+300 Mídias</span> Profissionais para sua Salgaderia Vender Mais
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
              Chega de passar horas criando posts! Com nosso pacote, você terá artes prontas e editáveis para transformar suas redes sociais em uma máquina de vendas.
            </p>
            <div className="mt-10 flex justify-center">
              <Image src="https://i.postimg.cc/7LqqyCQG/hero-salgadaria-DG27qde-U.jpg" data-ai-hint="food social media" alt="Exemplo de Post de Salgadaria" width={1080} height={1080} className="max-w-full rounded-lg shadow-2xl md:max-w-2xl" />
            </div>
            <Button size="lg" className="mt-10 animate-pulse px-16 py-8 text-2xl font-bold uppercase">
              Quero Aumentar Minhas Vendas
            </Button>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-primary" />
              <span>Compra Segura | Acesso Imediato</span>
            </div>
          </div>
        </section>

        {/* What you'll get Section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold md:text-4xl">O que Você Vai Receber?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Um arsenal completo de marketing para sua salgaderia bombar!</p>
            <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Tv className="size-8 text-primary" />
                    +200 Posts para Feed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Artes prontas e editáveis para você se destacar no Instagram e Facebook.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Award className="size-8 text-primary" />
                    +100 Stories Criativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Modelos para enquetes, caixas de perguntas e promoções para engajar sua audiência.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <FileText className="size-8 text-primary" />
                    Legendas Prontas (Copy e Cola)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Textos persuasivos para acompanhar seus posts e gerar mais interação.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Star className="size-8 text-primary" />
                    Capas para Destaques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Deixe seu perfil com uma aparência profissional e organizada.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <ShoppingCart className="size-8 text-primary" />
                    Cardápios Editáveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Modelos de cardápio para WhatsApp e para imprimir.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <Users className="size-8 text-primary" />
                    Cartão de Visita Digital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Compartilhe seu contato e redes sociais de forma moderna e interativa.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How it Works Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Como Funciona?</h2>
            <div className="relative flex flex-col items-center gap-12">
              {/* Dashed Line */}
              <div className="absolute top-12 left-1/2 -ml-px hidden h-full w-0.5 border-l-2 border-dashed border-primary/50 md:block" />

              {/* Step 1 */}
              <div className="relative z-10 flex w-full flex-col items-center gap-6 md:flex-row">
                <div className="flex justify-center md:w-1/2 md:justify-end md:pr-12">
                   <HowItWorksIcon>
                     <Globe className="size-10" />
                   </HowItWorksIcon>
                </div>
                <div className="text-center md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-2xl font-bold">1. Você acessa nosso site...</h3>
                  <p className="text-muted-foreground">Navegue e conheça nosso pacote de mídias.</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 flex w-full flex-col-reverse items-center gap-6 md:flex-row">
                 <div className="text-center md:w-1/2 md:pr-12 md:text-right">
                   <h3 className="text-2xl font-bold">2. Tire suas dúvidas</h3>
                   <p className="text-muted-foreground">Nossa equipe está pronta para te ajudar no que for preciso.</p>
                 </div>
                 <div className="flex justify-center md:w-1/2 md:justify-start md:pl-12">
                   <HowItWorksIcon>
                     <HelpCircle className="size-10" />
                   </HowItWorksIcon>
                 </div>
               </div>

              {/* Step 3 */}
              <div className="relative z-10 flex w-full flex-col items-center gap-6 md:flex-row">
                <div className="flex justify-center md:w-1/2 md:justify-end md:pr-12">
                  <HowItWorksIcon>
                    <FileText className="size-10" />
                  </HowItWorksIcon>
                </div>
                <div className="text-center md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-2xl font-bold">3. Escolha o melhor plano</h3>
                  <p className="text-muted-foreground">Selecione a oferta que mais se encaixa na sua necessidade.</p>
                </div>
              </div>

              {/* Step 4 */}
               <div className="relative z-10 flex w-full flex-col-reverse items-center gap-6 md:flex-row">
                 <div className="text-center md:w-1/2 md:pr-12 md:text-right">
                   <h3 className="text-2xl font-bold">4. Faça o pagamento</h3>
                   <p className="text-muted-foreground">Pagamento 100% seguro em um ambiente criptografado.</p>
                 </div>
                 <div className="flex justify-center md:w-1/2 md:justify-start md:pl-12">
                  <HowItWorksIcon>
                    <div className="relative flex size-12 items-center justify-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/></svg>
                       <CheckCircle className="absolute -right-2 -top-2 size-6 fill-green-500 text-background" />
                    </div>
                  </HowItWorksIcon>
                 </div>
               </div>
              
              {/* Step 5 */}
              <div className="relative z-10 flex w-full flex-col items-center gap-6 md:flex-row">
                <div className="flex justify-center md:w-1/2 md:justify-end md:pr-12">
                  <HowItWorksIcon>
                    <Mail className="size-10" />
                  </HowItWorksIcon>
                </div>
                <div className="text-center md:w-1/2 md:pl-12 md:text-left">
                  <h3 className="text-2xl font-bold">5. Receba rapidamente!</h3>
                  <p className="text-muted-foreground">Acesso imediato no seu e-mail.</p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* Bonus Section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container text-center">
             <h2 className="text-3xl font-bold md:text-4xl">E ainda tem <span className="text-yellow-500">6 Bônus Exclusivos!</span></h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Comprando hoje, você leva de graça tudo que precisa para gerenciar e crescer seu negócio.</p>
             <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background/50 p-6">
                  <BarChart2 className="mx-auto mb-4 size-10 text-primary"/>
                  <h3 className="font-bold">Planilha de Controle Financeiro</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Organize suas finanças de forma simples e eficiente.</p>
              </div>
              <div className="rounded-lg border bg-background/50 p-6">
                  <FileText className="mx-auto mb-4 size-10 text-primary"/>
                  <h3 className="font-bold">Guia de Estratégia para Redes Sociais</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Aprenda a planejar seu conteúdo para ter os melhores resultados.</p>
              </div>
              <div className="rounded-lg border bg-background/50 p-6">
                  <Tv className="mx-auto mb-4 size-10 text-primary"/>
                  <h3 className="font-bold">Guia Prático do Instagram para Negócios</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Descubra os segredos para um perfil de sucesso.</p>
              </div>
              <div className="rounded-lg border bg-background/50 p-6">
                  <MessageCircle className="mx-auto mb-4 size-10 text-primary"/>
                  <h3 className="font-bold">Scripts de Atendimento no WhatsApp</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Modelos de mensagens para agilizar e profissionalizar seu atendimento.</p>
              </div>
              <div className="rounded-lg border bg-background/50 p-6">
                  <CheckCircle className="mx-auto mb-4 size-10 text-primary"/>
                  <h3 className="font-bold">Checklist de Atendimento ao Cliente</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Garanta um atendimento impecável e fidelize seus clientes.</p>
              </div>
              <div className="rounded-lg border bg-background/50 p-6">
                  <Users className="mx-auto mb-4 size-10 text-primary"/>
                  <h3 className="font-bold">Planilha de Cadastro de Clientes</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Mantenha um registro organizado dos seus clientes para ações de marketing.</p>
              </div>
             </div>
          </div>
        </section>


        {/* Plans Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Escolha a Melhor Oferta Para Você</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start lg:gap-12">
              {/* Pacote Básico */}
              <Card className="bg-secondary/70">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">Pacote Básico</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <p className="my-4 text-4xl font-extrabold text-primary">R$10</p>
                  <ul className="my-6 space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="size-5 text-primary" /> 10 Posts Prontos</li>
                    <li className="flex items-center gap-2"><CheckCircle className="size-5 text-primary" /> 5 Stories</li>
                    <li className="flex items-center gap-2"><CheckCircle className="size-5 text-primary" /> 10 Legendas</li>
                    <li className="flex items-center gap-2"><CheckCircle className="size-5 text-primary" /> Garantia de 7 dias</li>
                  </ul>
                  <Button variant="outline" className="w-full">Quero essa opção!</Button>
                </CardContent>
              </Card>

              {/* Pacote Completo */}
              <Card className="relative border-2 border-primary bg-background shadow-2xl shadow-primary/20">
                <Badge variant="default" className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 text-base font-bold text-primary-foreground">Mais Vendido</Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">Pacote Completo</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <p className="text-2xl text-muted-foreground">De <span className="line-through">R$97</span> por apenas:</p>
                  <p className="my-4 text-5xl font-extrabold text-primary">R$27</p>
                  <ul className="my-6 space-y-3 text-left text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>PACOTE COMPLETO:</strong></li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> +200 POSTS PRONTOS</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> + 100 STOYS ENGAJADORES</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> LEGENDAS PARA TODOS OS POSTS</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> DESTAQUES PARA BIO NO INSTAGRAM</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> MODELOS DE PLACA PIX PARA UTILIZAR!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>BÔNUS 1:</strong> Planilha Administrativa 2.0 – Organização Total!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>BÔNUS 2:</strong> Estratégia para Redes Sociais – Sucesso Garantido!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>BÔNUS 3:</strong> Venda Muito com Instagram – Guia Definitivo!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>BÔNUS 4:</strong> 28 Scripts Prontos para Atendimento no WhatsApp – Comunicação Eficiente!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>BÔNUS 5:</strong> Checklist para o Atendimento Perfeito – Surpreenda Seus Clientes!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>BÔNUS 6:</strong> Super Planilha para Cadastro e Controle de Clientes – Gerenciamento Simplificado!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>BÔNUS EXTRA:</strong> Super Surpresa para o Plano Completo – Não Perca!</li>
                  </ul>
                  <Button size="lg" className="w-full animate-pulse py-8 text-2xl font-bold uppercase">
                    SIM! Quero essa super oferta
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Quem Comprou e Aprovou</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-background/50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-0.5">
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                  </div>
                  <p className="mt-4 text-muted-foreground">&quot;Pacote incrível, entrega super rápida no WhatsApp e no e-mail. As artes são muito profissionais e fáceis de usar. Recomendo demais!&quot;</p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image src="https://picsum.photos/40/40" data-ai-hint="male profile" alt="Guilherme Yager" width={40} height={40} className="rounded-full" />
                    <div>
                      <CardTitle className="text-base">Guilherme Yager</CardTitle>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="bg-background/50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-0.5">
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                  </div>
                  <p className="mt-4 text-muted-foreground">&quot;As artes são de altíssima qualidade. Meu engajamento aumentou muito depois que comecei a usar o material. Valeu cada centavo.&quot;</p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image src="https://picsum.photos/40/41" data-ai-hint="male profile" alt="Marcos Cezzar" width={40} height={40} className="rounded-full" />
                    <div>
                      <CardTitle className="text-base">Marcos Cezzar</CardTitle>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="bg-background/50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-0.5">
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                    <Star className="size-5 fill-primary text-primary" />
                  </div>
                  <p className="mt-4 text-muted-foreground">&quot;Notei um aumento real no interesse e no número de clientes. O pacote é completo e me ajudou a profissionalizar minha divulgação.&quot;</p>
                </CardContent>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image src="https://picsum.photos/41/40" data-ai-hint="female profile" alt="Julia Macedo" width={40} height={40} className="rounded-full" />
                    <div>
                      <CardTitle className="text-base">Julia Macedo</CardTitle>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl items-center rounded-lg bg-secondary/30 p-8 md:flex md:gap-8">
              <Image src="https://picsum.photos/200/200" data-ai-hint="satisfaction guarantee badge" alt="Selo de Garantia" width={200} height={200} className="mx-auto mb-6 shrink-0 md:mx-0 md:mb-0" />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold">Garantia de 7 Dias! Risco Zero!</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Sua satisfação é nossa prioridade. Se em até 7 dias você não estiver 100% satisfeito com o pacote de mídias, basta nos enviar um e-mail e nós devolveremos cada centavo do seu investimento, sem perguntas e sem complicação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container max-w-3xl">
            <h2 className="text-center text-3xl font-bold md:text-4xl">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="mt-8 w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Como vou receber o acesso?</AccordionTrigger>
                <AccordionContent>
                  O acesso é imediato! Após a confirmação do pagamento, você receberá tudo no seu e-mail e também no seu WhatsApp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Preciso saber editar?</AccordionTrigger>
                <AccordionContent>
                  Não precisa ser um expert! As artes são 100% editáveis no Canva gratuito. Você pode editar pelo celular ou computador. Além disso, incluímos tutoriais para te ajudar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Por quanto tempo terei acesso?</AccordionTrigger>
                <AccordionContent>
                  O acesso é vitalício! Você pode baixar e usar os materiais sempre que quiser, sem prazo de validade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>O pagamento é seguro?</AccordionTrigger>
                <AccordionContent>
                  Sim, 100% seguro. O pagamento é processado pela maior plataforma de produtos digitais do Brasil, com criptografia de ponta a ponta.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
