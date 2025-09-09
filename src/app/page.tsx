
'use client';

import { CheckCircle, ShieldCheck, Star, Award, Tv, Users, FileText, BarChart2, MessageCircle, ShoppingCart, Volume2, VolumeX } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import * as React from 'react';
import { Progress } from '@/components/ui/progress';

const HowItWorksIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="relative flex size-20 items-center justify-center rounded-full bg-black/10 text-primary">
    <div className="flex size-16 items-center justify-center rounded-full bg-black/20">
      {children}
    </div>
  </div>
);


export default function LandingPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };


  return (
    <div className="flex w-full flex-col bg-background text-foreground">
      <main className="flex-1">
        {/* Header */}
        <header className="bg-red-600 py-2 text-center text-sm font-bold text-primary-foreground">
          OFERTA ESPECIAL POR TEMPO LIMITADO
        </header>

        {/* Hero Section */}
        <section className="bg-background py-12 text-center">
          <div className="container">
            <h1 className="text-3xl font-extrabold tracking-tight">
              <span className="text-yellow-500">+300 Mídias</span> Profissionais para sua Salgaderia Vender Mais
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Chega de passar horas criando posts! Com nosso pacote, você terá artes prontas e editáveis para transformar suas redes sociais em uma máquina de vendas.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-sm rounded-lg shadow-2xl overflow-hidden aspect-[9/16]">
                <video
                  ref={videoRef}
                  src="https://file.io/E5A8fT3kYf1d/video.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  onTimeUpdate={handleTimeUpdate}
                />
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <div className="absolute bottom-0 left-0 w-full h-1">
                   <Progress value={progress} className="h-full w-full bg-transparent" innerClassName="bg-primary" />
                </div>
              </div>
            </div>
            <a href="#oferta-principal">
              <Button size="lg" className="mt-8 w-full max-w-sm animate-pulse px-6 py-6 text-lg font-bold uppercase">
                <div className="flex flex-col items-center">
                  <span>Eu preciso</span>
                  <span className="text-base font-bold uppercase">Divulgar minha empresa</span>
                </div>
              </Button>
            </a>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-4 text-primary" />
              <span>Compra Segura | Acesso Imediato</span>
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="py-10">
          <div className="container">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                <CarouselItem className="basis-4/5">
                  <div className="p-1">
                    <Image src="https://i.postimg.cc/TYB07bg7/Any-Conv-com-72-768x960.webp" data-ai-hint="food promotion" alt="Salgados em promoção" width={400} height={500} className="rounded-lg" />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-4/5">
                  <div className="p-1">
                    <Image src="https://i.postimg.cc/6QMHBpyF/Any-Conv-com-3-2-768x960.webp" data-ai-hint="savory snacks" alt="Variedade de salgados" width={400} height={500} className="rounded-lg" />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-4/5">
                  <div className="p-1">
                     <Image src="https://i.postimg.cc/fWG8zFRW/Any-Conv-com-5-1-768x960.webp" data-ai-hint="social media post" alt="Post para rede social de salgaderia" width={400} height={500} className="rounded-lg" />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-4/5">
                  <div className="p-1">
                    <Image src="https://i.postimg.cc/tgvzLvcj/Any-Conv-com-10-768x960.webp" data-ai-hint="party platter" alt="Bandeja de salgados para festa" width={400} height={500} className="rounded-lg" />
                  </div>
                </CarouselItem>
                 <CarouselItem className="basis-4/5">
                   <div className="p-1">
                     <Image src="https://i.postimg.cc/Mpd0QrqQ/Any-Conv-com-31-768x960.webp" data-ai-hint="snack combo" alt="Combo de salgados" width={400} height={500} className="rounded-lg" />
                   </div>
                 </CarouselItem>
                 <CarouselItem className="basis-4/5">
                   <div className="p-1">
                     <Image src="https://i.postimg.cc/nLWvdjsV/Any-Conv-com-66-768x960.webp" data-ai-hint="delivery promotion" alt="Anúncio de delivery de salgados" width={400} height={500} className="rounded-lg" />
                   </div>
                 </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Image src="https://i.postimg.cc/8CMpyjXh/OIP-9-removebg-preview.png" alt="Foguete" width={100} height={100} data-ai-hint="rocket icon" />
                <h3 className="mt-4 text-lg font-bold text-foreground uppercase">Profissionalismo</h3>
              </div>
              <div className="flex flex-col items-center">
                <Image src="https://i.postimg.cc/ZqHbk1ZR/15062251-icone-de-ampulheta-plano-isolado-vetor-removebg-preview.png" alt="Ampulheta" width={100} height={100} data-ai-hint="hourglass icon" />
                <h3 className="mt-4 text-lg font-bold text-foreground uppercase">Economia de Tempo</h3>
              </div>
              <div className="flex flex-col items-center">
                <Image src="https://i.postimg.cc/mkfB7Rym/criativo-65889b64d59b6-Mj-Qv-MTIv-Mj-Ay-My-Ax-N2g1-OA-removebg-preview.png" alt="Saco de Dinheiro" width={100} height={100} data-ai-hint="money bag" />
                <h3 className="mt-4 text-lg font-bold text-foreground uppercase">Aumento nas Vendas</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Edit Colors and Texts Section */}
        <section className="py-12 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl font-extrabold text-foreground uppercase">Edite as cores e textos</h2>
            <div className="mt-8 flex justify-center">
              <Image src="https://i.postimg.cc/Y9B06Jkq/Any-Conv-com-NUTRICAO-INFANTIL-1.webp" data-ai-hint="editable social media posts" alt="Edite as cores e textos" width={800} height={800} className="w-full max-w-md rounded-lg"/>
            </div>
          </div>
        </section>
        
        {/* How it Works Section */}
        <section className="py-12">
          <div className="container">
            <h2 className="mb-10 text-center text-3xl font-bold">Como Funciona?</h2>
            <div className="flex flex-col items-center gap-8">
              {/* Step 1 */}
              <div className="flex w-full flex-col items-center gap-4 text-center">
                <HowItWorksIcon>
                   <Image src="https://i.postimg.cc/QxKyKP6y/vector-web-icon-removebg-preview.png" alt="Website icon" width={50} height={50} data-ai-hint="website icon" />
                </HowItWorksIcon>
                <div>
                  <h3 className="text-xl font-bold">1. Você acessa nosso site...</h3>
                  <p className="text-muted-foreground">Navegue e conheça nosso pacote de mídias.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex w-full flex-col items-center gap-4 text-center">
                 <HowItWorksIcon>
                  <Image src="https://i.postimg.cc/kXwLm8pn/istockphoto-536078148-170667a-removebg-preview.png" alt="Help icon" width={60} height={60} data-ai-hint="help icon" />
                 </HowItWorksIcon>
                 <div>
                   <h3 className="text-xl font-bold">2. Tire suas dúvidas</h3>
                   <p className="text-muted-foreground">Nossa equipe está pronta para te ajudar no que for preciso.</p>
                 </div>
               </div>
              {/* Step 3 */}
              <div className="flex w-full flex-col items-center gap-4 text-center">
                <HowItWorksIcon>
                  <Image src="https://i.postimg.cc/kGD9rcvt/20834726-planos-icone-vetor-removebg-preview.png" alt="Plans icon" width={50} height={50} data-ai-hint="plans icon" />
                </HowItWorksIcon>
                <div>
                  <h3 className="text-xl font-bold">3. Escolha o melhor plano</h3>
                  <p className="text-muted-foreground">Selecione a oferta que mais se encaixa na sua necessidade.</p>
                </div>
              </div>
              {/* Step 4 */}
               <div className="flex w-full flex-col items-center gap-4 text-center">
                <HowItWorksIcon>
                  <Image src="https://i.postimg.cc/tJ2vpNJF/9569863-removebg-preview.png" alt="Payment icon" width={50} height={50} data-ai-hint="payment icon" />
                </HowItWorksIcon>
                 <div>
                   <h3 className="text-xl font-bold">4. Faça o pagamento</h3>
                   <p className="text-muted-foreground">Pagamento 100% seguro em um ambiente criptografado.</p>
                 </div>
               </div>
              {/* Step 5 */}
              <div className="flex w-full flex-col items-center gap-4 text-center">
                <HowItWorksIcon>
                  <Image src="https://i.postimg.cc/T1Q9bVzQ/OIP-11-removebg-preview.png" alt="Email icon" width={50} height={50} data-ai-hint="email icon" />
                </HowItWorksIcon>
                <div>
                  <h3 className="text-xl font-bold">5. Receba rapidamente!</h3>
                  <p className="text-muted-foreground">Acesso imediato no seu e-mail.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What you'll get Section */}
        <section className="bg-secondary/50 py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold">O que Você Vai Receber?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">Um arsenal completo de marketing para sua salgaderia bombar!</p>
            <div className="mt-10 grid grid-cols-1 gap-6 text-left">
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-base">
                    <Tv className="size-7 text-primary" />
                    +200 Posts para Feed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Artes prontas e editáveis para você se destacar no Instagram e Facebook.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-base">
                    <Award className="size-7 text-primary" />
                    +100 Stories Criativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Modelos para enquetes, caixas de perguntas e promoções para engajar sua audiência.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-base">
                    <FileText className="size-7 text-primary" />
                    Legendas Prontas (Copy e Cola)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Textos persuasivos para acompanhar seus posts e gerar mais interação.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-base">
                    <Star className="size-7 text-primary" />
                    Capas para Destaques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Deixe seu perfil com uma aparência profissional e organizada.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-base">
                    <ShoppingCart className="size-7 text-primary" />
                    Cardápios Editáveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Modelos de cardápio para WhatsApp e para imprimir.</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-base">
                    <Users className="size-7 text-primary" />
                    Cartão de Visita Digital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Compartilhe seu contato e redes sociais de forma moderna e interativa.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Bonus Section */}
        <section className="bg-secondary/50 py-12">
          <div className="container text-center">
             <h2 className="text-3xl font-bold">E ainda tem <span className="text-yellow-500">6 Bônus Exclusivos!</span></h2>
             <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">Comprando hoje, você leva de graça tudo que precisa para gerenciar e crescer seu negócio.</p>
             <div className="mt-10 grid grid-cols-1 gap-6">
              <div className="rounded-lg border bg-background/50 p-6">
                  <BarChart2 className="mx-auto mb-4 size-8 text-primary"/>
                  <h3 className="font-bold text-base">Planilha de Controle Financeiro</h3>
                  <p className="mt-2 text-xs text-muted-foreground">Organize suas finanças de forma simples e eficiente.</p>
              </div>
              <div className="rounded-lg border bg-background/50 p-6">
                  <FileText className="mx-auto mb-4 size-8 text-primary"/>
                  <h3 className="font-bold text-base">Guia de Estratégia para Redes Sociais</h3>
                  <p className="mt-2 text-xs text-muted-foreground">Aprenda a planejar seu conteúdo para ter os melhores resultados.</p>
              </div>
              <div className="rounded-lg border bg-background/50 p-6">
                  <Tv className="mx-auto mb-4 size-8 text-primary"/>
                  <h3 className="font-bold text-base">Guia Prático do Instagram para Negócios</h3>
                  <p className="mt-2 text-xs text-muted-foreground">Descubra os segredos para um perfil de sucesso.</p>
              </div>
              <div className="rounded-lg border bg-background/50 p-6">
                  <MessageCircle className="mx-auto mb-4 size-8 text-primary"/>
                  <h3 className="font-bold text-base">Scripts de Atendimento no WhatsApp</h3>
                  <p className="mt-2 text-xs text-muted-foreground">Modelos de mensagens para agilizar e profissionalizar seu atendimento.</p>
              </div>
              <div className="rounded-lg border bg-background/50 p-6">
                  <CheckCircle className="mx-auto mb-4 size-8 text-primary"/>
                  <h3 className="font-bold text-base">Checklist de Atendimento ao Cliente</h3>
                  <p className="mt-2 text-xs text-muted-foreground">Garanta um atendimento impecável e fidelize seus clientes.</p>
              </div>
              <div className="rounded-lg border bg-background/50 p-6">
                  <Users className="mx-auto mb-4 size-8 text-primary"/>
                  <h3 className="font-bold text-base">Planilha de Cadastro de Clientes</h3>
                  <p className="mt-2 text-xs text-muted-foreground">Mantenha um registro organizado dos seus clientes para ações de marketing.</p>
              </div>
             </div>
          </div>
        </section>


        {/* Plans Section */}
        <section id="oferta-principal" className="py-12">
          <div className="container">
            <h2 className="text-center text-3xl font-bold">Escolha a Melhor Oferta Para Você</h2>
            <div className="mt-10 grid grid-cols-1 gap-8">
              {/* Pacote Básico */}
              <Card className="bg-secondary/70">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold">Pacote Básico</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <p className="my-4 text-3xl font-extrabold text-primary">R$10</p>
                  <ul className="my-6 space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><CheckCircle className="size-5 text-primary" /> 10 Posts Prontos</li>
                    <li className="flex items-center gap-2"><CheckCircle className="size-5 text-primary" /> 5 Stories</li>
                    <li className="flex items-center gap-2"><CheckCircle className="size-5 text-primary" /> 10 Legendas</li>
                    <li className="flex items-center gap-2"><CheckCircle className="size-5 text-primary" /> Garantia de 7 dias</li>
                  </ul>
                  <a href="https://upsaldagos.netlify.app/" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90">Quero essa opção!</Button>
                  </a>
                </CardContent>
              </Card>

              {/* Pacote Completo */}
              <Card className="relative border-2 border-primary bg-background shadow-2xl shadow-primary/20">
                <Badge variant="default" className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">Mais Vendido</Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold">Pacote Completo</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <p className="text-lg text-muted-foreground">De <span className="line-through">R$97</span> por apenas:</p>
                  <p className="my-2 text-4xl font-extrabold text-primary">R$27</p>
                  <ul className="my-6 w-full space-y-3 text-left text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>PACOTE COMPLETO:</strong></li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> +200 POSTS PRONTOS</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> + 100 STOYS ENGAJADORES</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> LEGENDAS PARA TODOS OS POSTS</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> DESTAQUES PARA BIO NO INSTAGRAM</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> MODELOS DE PLACA PIX PARA UTILIZAR!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>1. BÔNUS:</strong> Planilha Administrativa 2.0 – Organização Total!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>2. BÔNUS:</strong> Estratégia para Redes Sociais – Sucesso Garantido!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>3. BÔNUS:</strong> Venda Muito com Instagram – Guia Definitivo!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>4. BÔNUS:</strong> 28 Scripts Prontos para Atendimento no WhatsApp – Comunicação Eficiente!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>5. BÔNUS:</strong> Checklist para o Atendimento Perfeito – Surpreenda Seus Clientes!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>6. BÔNUS:</strong> Super Planilha para Cadastro e Controle de Clientes – Gerenciamento Simplificado!</li>
                    <li className="flex items-start gap-2"><CheckCircle className="mt-1 size-5 shrink-0 text-primary" /> <strong>BÔNUS EXTRA:</strong> Super Surpresa para o Plano Completo – Não Perca!</li>
                  </ul>
                  <a href="https://go.disruptybr.com.br/lz7guz44br" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button size="lg" className="w-full animate-pulse py-6 text-xl font-bold uppercase">
                      <div className="flex flex-col items-center">
                        <span>SIM! Quero essa</span>
                        <span className="text-lg font-bold uppercase">SUPER OFERTA</span>
                      </div>
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="bg-secondary/50 py-12">
          <div className="container">
            <h2 className="text-center text-3xl font-bold">Quem Comprou e Aprovou</h2>
            <div className="mt-10 grid grid-cols-1 gap-6">
              <Image src="https://i.postimg.cc/BZY8y7BN/Any-Conv-com-1-3.webp" alt="Depoimento de cliente 1" width={400} height={400} className="w-full rounded-lg mx-auto max-w-sm" data-ai-hint="customer testimonial" />
              <Image src="https://i.postimg.cc/265k7mMY/Any-Conv-com-2-2.webp" alt="Depoimento de cliente 2" width={400} height={400} className="w-full rounded-lg mx-auto max-w-sm" data-ai-hint="customer feedback" />
              <Image src="https://i.postimg.cc/HncTFzTP/Any-Conv-com-3-3.webp" alt="Depoimento de cliente 3" width={400} height={400} className="w-full rounded-lg mx-auto max-w-sm" data-ai-hint="client review" />
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="bg-background py-12">
          <div className="container">
            <div className="flex flex-col items-center rounded-lg bg-secondary/30 p-6 text-center">
              <Image src="https://i.postimg.cc/s1FNxgyJ/7-DIAS-DE-GARANTIA-610x610-removebg-preview.png" data-ai-hint="satisfaction guarantee badge" alt="Selo de Garantia" width={150} height={150} className="mb-4 shrink-0" />
              <div>
                <h2 className="text-2xl font-bold">Garantia de 7 Dias! Risco Zero!</h2>
                <p className="mt-4 text-base text-muted-foreground">
                  Sua satisfação é nossa prioridade. Se em até 7 dias você não estiver 100% satisfeito com o pacote de mídias, basta nos enviar um e-mail e nós devolveremos cada centavo do seu investimento, sem perguntas e sem complicação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-secondary/50 py-12">
          <div className="container max-w-3xl">
            <h2 className="text-center text-3xl font-bold">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="mt-8 w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base">Como vou receber o acesso?</AccordionTrigger>
                <AccordionContent className="text-sm">
                  O acesso é imediato! Após a confirmação do pagamento, você receberá tudo no seu e-mail e também no seu WhatsApp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base">Preciso saber editar?</AccordionTrigger>
                <AccordionContent className="text-sm">
                  Não precisa ser um expert! As artes são 100% editáveis no Canva gratuito. Você pode editar pelo celular ou computador. Além disso, incluímos tutoriais para te ajudar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base">Por quanto tempo terei acesso?</AccordionTrigger>
                <AccordionContent className="text-sm">
                  O acesso é vitalício! Você pode baixar e usar os materiais sempre que quiser, sem prazo de validade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base">O pagamento é seguro?</AccordionTrigger>
                <AccordionContent className="text-sm">
                  Sim, 100% seguro. O pagamento é processado pela maior plataforma de produtos digitais do Brasil, com criptografia de ponta a ponta.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-6">
        <div className="container flex flex-col items-center gap-4 text-center text-xs text-muted-foreground">
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
