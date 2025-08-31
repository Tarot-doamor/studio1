import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Infinity as InfinityIcon,
  CloudDownload,
  Laptop,
  Tablet,
  Smartphone,
  ShieldCheck,
  BookOpen,
  LineChart,
  TrendingUp,
  Landmark,
  ArrowRight,
} from 'lucide-react';

import { AdCopyGenerator } from '@/components/ad-copy-generator';
import { Logo } from '@/components/logo';

const benefits = [
  { icon: InfinityIcon, text: 'Acesso vitalício' },
  { icon: CloudDownload, text: 'Download ilimitado' },
  {
    icon: (props: React.ComponentProps<'div'>) => (
      <div className="flex items-center justify-center gap-1" {...props}>
        <Laptop className="h-4 w-4" />
        <Tablet className="h-4 w-4" />
        <Smartphone className="h-4 w-4" />
      </div>
    ),
    text: 'Acesso em qualquer dispositivo',
  },
  { icon: ShieldCheck, text: 'Atualizações garantidas' },
];

const topics = [
  {
    value: 'financas',
    label: 'Finanças',
    icon: Landmark,
    books: [
      {
        title: 'Pai Rico, Pai Pobre',
        hint: 'book cover rich dad poor dad',
        img: 'https://picsum.photos/120/180?random=1',
      },
      {
        title: 'Os Segredos da Mente Milionária',
        hint: 'book cover secrets millionaire mind',
        img: 'https://picsum.photos/120/180?random=2',
      },
      {
        title: 'Do Mil ao Milhão',
        hint: 'book cover from thousand to million',
        img: 'https://picsum.photos/120/180?random=3',
      },
    ],
  },
  {
    value: 'investimentos',
    label: 'Investimentos',
    icon: LineChart,
    books: [
      {
        title: 'O Investidor Inteligente',
        hint: 'book cover the intelligent investor',
        img: 'https://picsum.photos/120/180?random=4',
      },
      {
        title: 'Ações Comuns, Lucros Incomuns',
        hint: 'book cover common stocks uncommon profits',
        img: 'https://picsum.photos/120/180?random=5',
      },
      {
        title: 'Um Passeio Aleatório por Wall Street',
        hint: 'book cover random walk wall street',
        img: 'https://picsum.photos/120/180?random=6',
      },
    ],
  },
  {
    value: 'carreira',
    label: 'Carreira',
    icon: TrendingUp,
    books: [
      {
        title: 'A Coragem de Ser Imperfeito',
        hint: 'book cover gifts imperfection',
        img: 'https://picsum.photos/120/180?random=7',
      },
      {
        title: 'Mindset',
        hint: 'book cover mindset carol dweck',
        img: 'https://picsum.photos/120/180?random=8',
      },
      {
        title: 'Como Fazer Amigos e Influenciar Pessoas',
        hint: 'book cover how win friends influence people',
        img: 'https://picsum.photos/120/180?random=9',
      },
    ],
  },
  {
    value: 'mentalidade',
    label: 'Mentalidade',
    icon: BookOpen,
    books: [
      {
        title: 'O Poder do Hábito',
        hint: 'book cover power habit',
        img: 'https://picsum.photos/120/180?random=10',
      },
      {
        title: 'Rápido e Devagar',
        hint: 'book cover thinking fast slow',
        img: 'https://picsum.photos/120/180?random=11',
      },
      {
        title: 'Os 7 Hábitos das Pessoas Altamente Eficazes',
        hint: 'book cover 7 habits highly effective people',
        img: 'https://picsum.photos/120/180?random=12',
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background p-4 sm:p-8 flex items-center justify-center">
      <Card className="w-full max-w-2xl shadow-2xl rounded-2xl overflow-hidden border-2 border-primary/10">
        <CardHeader className="text-center bg-primary/5 p-6">
          <Logo className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold font-headline text-primary tracking-tight">
            Desbloqueie seu Potencial Máximo
          </h1>
          <p className="text-foreground/80 mt-2 max-w-md mx-auto">
            Com 200 Áudios Best-Sellers que transformam mentalidade, finanças e
            carreira.
          </p>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="https://picsum.photos/300/400"
                alt="Think and Grow Rich Book Cover"
                width={300}
                height={400}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
                data-ai-hint="book cover think grow rich"
              />
              <div className="absolute top-2 left-2">
                <Badge variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Best-Seller
                </Badge>
              </div>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-lg text-primary">
                Mais um bônus exclusivo:
              </p>
              <h2 className="text-2xl font-bold font-headline">
                +3.500 livros em PDF
              </h2>
              <p className="text-foreground/70">
                Uma biblioteca completa para acelerar seu desenvolvimento em
                todas as áreas da vida.
              </p>
              <AdCopyGenerator />
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h3 className="font-semibold text-xl text-primary font-headline">
              Tudo que você recebe:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-primary/5 text-center"
                >
                  <benefit.icon className="h-6 w-6 text-accent" />
                  <span className="text-xs font-medium text-foreground/80">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
             <h3 className="font-semibold text-xl text-primary font-headline text-center">
              Explore os conteúdos
            </h3>
            <Tabs defaultValue="financas" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                {topics.map(topic => (
                   <TabsTrigger key={topic.value} value={topic.value} className="flex flex-col sm:flex-row gap-2 py-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                     <topic.icon className="h-4 w-4" />
                     <span>{topic.label}</span>
                   </TabsTrigger>
                ))}
              </TabsList>
              {topics.map(topic => (
                <TabsContent key={topic.value} value={topic.value}>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {topic.books.map(book => (
                       <div key={book.title} className="relative aspect-[2/3] rounded-md overflow-hidden group">
                         <Image
                           src={book.img}
                           alt={book.title}
                           fill
                           className="object-cover transition-transform group-hover:scale-110"
                           data-ai-hint={book.hint}
                         />
                       </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </CardContent>
        <CardFooter className="bg-primary/5 p-6 flex flex-col items-center gap-4 text-center">
          <div>
            <span className="text-lg text-destructive line-through">
              De R$97,00
            </span>
            <p className="text-foreground/80">por apenas:</p>
            <p className="text-5xl font-extrabold text-primary my-1">
              <span className="text-2xl font-normal align-top">R$</span>
              19,90
            </p>
            <p className="text-foreground/70 text-sm">Pagamento único. Sem mensalidades.</p>
          </div>
          <Button size="lg" className="w-full text-lg font-bold animate-pulse">
            EU QUERO ACESSO IMEDIATO <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
