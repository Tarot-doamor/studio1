import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Award,
  BookOpen,
  BrainCircuit,
  CheckCircle,
  ChevronsRight,
  Download,
  InfinityIcon,
  Library,
  LineChart,
  Lock,
  Rocket,
  Smartphone,
  Sparkles,
  Target,
  Wallet,
} from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Empresário',
    avatar: 'C',
    quote:
      'Estes áudios mudaram completamente minha mentalidade sobre dinheiro. Em 6 meses, consegui triplicar minha renda aplicando os conceitos que aprendi.',
    highlight: 'Triplicou a renda em 6 meses',
  },
  {
    name: 'Marina Santos',
    role: 'Investidora',
    avatar: 'M',
    quote:
      'A clareza que ganhei sobre investimentos foi impressionante. Finalmente entendi como construir um patrimônio sólido e sustentável.',
    highlight: 'Clareza total sobre investimentos',
  },
  {
    name: 'Roberto Oliveira',
    role: 'Executivo',
    avatar: 'R',
    quote:
      'Os livros de carreira me ajudaram a conquistar a promoção que eu tanto queria. As estratégias realmente funcionam na prática.',
    highlight: 'Conquistou a promoção desejada',
  },
];

const topics = [
  {
    icon: Wallet,
    title: 'Finanças',
    description:
      'Domine a psicologia do dinheiro e transforme sua relação com as finanças.',
  },
  {
    icon: LineChart,
    title: 'Investimentos',
    description:
      'Estratégias e insights de especialistas para multiplicar seu patrimônio.',
  },
  {
    icon: Target,
    title: 'Carreira',
    description:
      'Aprenda com grandes autores como Stephen Covey e acelere sua carreira.',
  },
  {
    icon: BrainCircuit,
    title: 'Mentalidade',
    description: "Molde seu mindset com clássicos como 'Quem Pensa Enriquece'.",
  },
];

const features = [
  {
    icon: InfinityIcon,
    title: 'Acesso Vitalício',
    description:
      'Uma vez seu, será sempre seu. Sem mensalidades ou taxas adicionais.',
  },
  {
    icon: Smartphone,
    title: 'Compatível com Qualquer Dispositivo',
    description:
      'Ouça no smartphone, tablet, computador ou qualquer player de áudio.',
  },
  {
    icon: Download,
    title: 'Download Ilimitado',
    description: 'Baixe todos os áudios e ouça offline, quando e onde quiser.',
  },
  {
    icon: Award,
    title: 'Atualizações e Bônus Constantes',
    description:
      'Sempre adicionamos novos títulos e bônus exclusivos para nossos membros.',
  },
];

const faqItems = [
  {
    question: 'Como vou receber meu acesso?',
    answer:
      'O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções e o link para acessar a plataforma.',
  },
  {
    question: 'Posso ler e baixar em qualquer dispositivo?',
    answer:
      'Sim! Nossa plataforma é compatível com smartphones, tablets, computadores e qualquer outro dispositivo com acesso à internet. Você pode baixar os áudios e PDFs para ouvir e ler offline.',
  },
  {
    question: 'Posso comprar depois?',
    answer:
      'Esta é uma oferta de lançamento com preço promocional e vagas limitadas. O valor pode voltar ao preço original de R$ 97,00 a qualquer momento. Recomendamos garantir sua vaga o quanto antes.',
  },
  {
    question: 'Os livros são completos e na íntegra?',
    answer:
      'Sim, todos os áudios e livros em PDF são versões completas e íntegras dos best-sellers selecionados.',
  },
  {
    question: 'Como funciona a garantia?',
    answer:
      'Você tem 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito com o conteúdo, basta nos enviar um e-mail e devolveremos 100% do seu investimento, sem perguntas.',
  },
  {
    question: 'Preciso pagar mensalidade?',
    answer:
      'Não! O pagamento é único. Você paga apenas R$ 19,90 e tem acesso vitalício a todo o material, incluindo futuras atualizações e bônus.',
  },
];

const CTAButton = ({
  className = '',
  text = 'GARANTIR MEU ACESSO AGORA - R$ 19,90',
}: {
  className?: string;
  text?: string;
}) => (
  <Button
    size="lg"
    className={`w-full max-w-md text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-shadow rounded-full animate-pulse ${className}`}
  >
    <Rocket className="mr-2 h-5 w-5" />
    {text}
  </Button>
);

export default function Home() {
  return (
    <div className="bg-background text-foreground w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            <span className="text-primary">A Chave</span> para o Seu Próximo
            Nível
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            200 Áudios Livros Best-Sellers que transformam sua mentalidade,
            aceleram seu crescimento pessoal e impulsionam suas finanças.
          </p>
          <div className="flex justify-center my-8">
            <Image
              src="https://sdmntpreastus.oaiusercontent.com/files/00000000-ff24-61f9-aa93-7a7b1c83cb26/raw?se=2025-08-31T16%3A25%3A08Z&sp=r&sv=2024-08-04&sr=b&scid=fe6c2531-46ad-5a33-991d-b36c1b8393fc&skoid=c156db82-7a33-468f-9cdd-06af263ceec8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-30T19%3A16%3A31Z&ske=2025-08-31T19%3A16%3A31Z&sks=b&skv=2024-08-04&sig=/fmlqa5c3Z46PaPDVly5u3t3m/yQ9sGxVeuPRw2zEc8%3D"
              alt="Pack 200 Áudios Livros Best-Sellers"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
              data-ai-hint="product mockup"
            />
          </div>
          <div className="flex justify-center mb-6">
            <CTAButton text="Quero meu acesso agora" />
          </div>
          <p className="text-sm text-primary flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4" />
            Acesso imediato após o pagamento
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" /> Acesso Vitalício
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" /> Download
              Ilimitado
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" /> Garantia 7 dias
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme sua vida em 4 áreas essenciais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Cada áudio livro foi cuidadosamente selecionado para acelerar seu
            crescimento pessoal e profissional
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topics.map((topic, index) => (
              <Card
                key={index}
                className="bg-background/50 border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <topic.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                  <p className="text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Veja o que nossos <span className="text-primary">leitores</span> estão dizendo
            </h2>
            <p className="text-muted-foreground mt-2">
              Milhares de pessoas já transformaram suas vidas com nosso pack
              exclusivo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between bg-secondary border-border/50"
              >
                <CardContent className="p-6">
                  <p className="text-primary font-semibold flex items-center gap-2 mb-4">
                    <Sparkles className="h-4 w-4" /> {testimonial.highlight}
                  </p>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
                <div className="p-6 pt-0 flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que escolher nosso <span className="text-primary">Pack Exclusivo?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Não é apenas uma coleção de áudios, é um investimento no seu
                futuro.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <Card className="p-6 bg-background/50 border-border/50">
                <h3 className="text-4xl font-bold text-primary">200+</h3>
                <p className="text-muted-foreground mt-2">
                  Áudios Livros Premium
                </p>
              </Card>
              <Card className="p-6 bg-background/50 border-border/50">
                <h3 className="text-4xl font-bold text-primary">3.500+</h3>
                <p className="text-muted-foreground mt-2">Livros PDF Bônus</p>
              </Card>
              <Card className="p-6 bg-background/50 border-border/50 col-span-2">
                <InfinityIcon className="h-10 w-10 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Valor para Toda Vida</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-secondary to-background/30 border-primary/20 p-8 md:p-12 text-center shadow-2xl shadow-primary/10">
            <p className="text-primary font-bold tracking-widest uppercase">
              OFERTA IMPERDÍVEL - TEMPO LIMITADO
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold my-4">
              Sua Transformação <span className="text-primary">Começa Agora!</span>
            </h2>

            <div className="my-8">
              <p className="text-muted-foreground">
                Valor normal dos 200 áudios:
              </p>
              <p className="text-2xl text-muted-foreground/50 line-through">
                R$ 97,00
              </p>
              <p className="mt-4 text-primary font-semibold">
                🎯 PREÇO PROMOCIONAL DE LANÇAMENTO:
              </p>
              <p className="text-6xl md:text-8xl font-black text-foreground my-2">
                R$19,90
              </p>
              <p className="text-primary font-bold">
                ⚡ Economia de mais de R$ 77,00!
              </p>
            </div>

            <Card className="bg-background/50 border-primary/20 max-w-lg mx-auto p-4 my-8 text-left">
              <p className="font-bold flex items-center gap-2">
                <ChevronsRight className="h-5 w-5 text-primary" /> BÔNUS
                EXCLUSIVO INCLUSO:
              </p>
              <p className="text-muted-foreground ml-7">
                + 3.500 livros em PDF, best-sellers selecionados para acelerar
                sua evolução.
              </p>
              <p className="text-muted-foreground/70 ml-7">
                <span className="font-bold text-primary">
                  Valor estimado: R$ 10.000,00
                </span>{' '}
                - GRÁTIS!
              </p>
            </Card>

            <div className="flex flex-col items-center">
              <CTAButton />
              <p className="text-sm mt-4 text-muted-foreground flex items-center justify-center gap-2">
                <Lock className="h-4 w-4" /> Pagamento 100% seguro • Acesso
                imediato
              </p>
            </div>

            <div className="mt-12">
              <p className="font-bold text-lg">
                Garantia Incondicional de <span className="text-primary">7 Dias</span>
              </p>
              <p className="text-muted-foreground max-w-md mx-auto">
                Se não gostar, devolvemos 100% do seu dinheiro
              </p>
              <p className="mt-4 text-sm text-yellow-500 font-bold flex items-center justify-center gap-2">
                ⚠️ Poucas vagas disponíveis — não deixe para depois!
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Dúvidas Frequentes
            </h2>
            <p className="text-muted-foreground mt-2">
              Tudo o que você precisa saber sobre o pack mais completo de áudios
              livros
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="bg-background/50 border-border/50 rounded-lg mb-2 px-4"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="text-center text-muted-foreground mt-8">
            Ainda tem dúvidas? <span className="text-primary">Entre em contato conosco!</span>
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-bold text-2xl">
            ÚLTIMAS VAGAS DISPONÍVEIS!
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Não perca esta <span className="text-primary">oportunidade única!</span>
          </h2>
          <p className="text-red-500 font-semibold mt-4">
            🚨 Esta oferta especial pode sair do ar a qualquer momento.
          </p>
          <p className="text-muted-foreground mb-8">
            Garante o seu agora e transforme sua vida!
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="p-4 bg-secondary flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold">200 Áudios Livros</p>
                <p className="text-sm text-muted-foreground">
                  Best-sellers completos
                </p>
              </div>
            </Card>
            <Card className="p-4 bg-secondary flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Library className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold">3.500 PDFs Bônus</p>
                <p className="text-sm text-muted-foreground">
                  Biblioteca completa
                </p>
              </div>
            </Card>
            <Card className="p-4 bg-secondary flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold">Apenas R$ 19,90</p>
                <p className="text-sm text-muted-foreground">
                  Preço promocional
                </p>
              </div>
            </Card>
          </div>

          <div className="flex flex-col items-center">
            <CTAButton text="COMPRAR AGORA POR R$ 19,90" />
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" /> Pagamento
                Seguro
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" /> Acesso Imediato
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" /> Garantia 7
                dias
              </div>
            </div>
            <p className="bg-destructive/80 text-destructive-foreground font-bold p-3 rounded-lg text-sm mt-6 max-w-md">
              ⚠️ ATENÇÃO: Esta é uma oferta limitada para os primeiros 500
              compradores. Após atingirmos este número, o preço voltará ao
              valor normal de R$ 97,00
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
