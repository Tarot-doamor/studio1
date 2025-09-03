'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X } from 'lucide-react';
import { Card } from './ui/card';

const sales = [
  { name: 'Maria C.', location: 'São Paulo, SP' },
  { name: 'João P.', location: 'Rio de Janeiro, RJ' },
  { name: 'Ana S.', location: 'Belo Horizonte, MG' },
  { name: 'Lucas F.', location: 'Salvador, BA' },
  { name: 'Fernanda L.', location: 'Porto Alegre, RS' },
  { name: 'Ricardo A.', location: 'Curitiba, PR' },
  { name: 'Juliana M.', location: 'Fortaleza, CE' },
  { name: 'Pedro H.', location: 'Brasília, DF' },
  { name: 'Beatriz R.', location: 'Manaus, AM' },
  { name: 'Gustavo O.', location: 'Recife, PE' },
];

const times = [
  'há poucos segundos',
  'há 1 minuto',
  'há 2 minutos',
  'há 5 minutos',
  'há 8 minutos',
];

const SaleNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState(sales[0]);
  const [currentTime, setCurrentTime] = useState(times[0]);

  const showRandomNotification = () => {
    const randomSaleIndex = Math.floor(Math.random() * sales.length);
    const randomTimeIndex = Math.floor(Math.random() * times.length);
    setCurrentSale(sales[randomSaleIndex]);
    setCurrentTime(times[randomTimeIndex]);
    setIsVisible(true);

    const audio = new Audio('https://cdn.freesound.org/previews/573/573381_6890472-lq.mp3');
    audio.play();

    setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Fica visível por 5 segundos
  };

  useEffect(() => {
    const randomInterval = () => {
      showRandomNotification();
      // Próxima notificação entre 7 e 20 segundos
      const nextTime = Math.random() * (20000 - 7000) + 7000;
      setTimeout(randomInterval, nextTime);
    };

    // Inicia a primeira notificação após um pequeno atraso
    const initialTimeout = setTimeout(randomInterval, 5000);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="w-full max-w-xs"
          >
            <Card className="p-3 bg-secondary/80 backdrop-blur-lg border-border/20 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-primary/10 rounded-full">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-xs text-foreground">
                    Nova compra!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">{currentSale.name}</span> de{' '}
                    {currentSale.location} comprou.
                  </p>
                  <p className="text-[10px] text-muted-foreground/70 mt-0.5">
                    {currentTime}
                  </p>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 text-muted-foreground hover:text-foreground self-start"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SaleNotification;
