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

const SaleNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState(sales[0]);

  const showRandomNotification = () => {
    const randomIndex = Math.floor(Math.random() * sales.length);
    setCurrentSale(sales[randomIndex]);
    setIsVisible(true);

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
            className="w-full max-w-sm"
          >
            <Card className="p-4 bg-secondary/95 backdrop-blur-sm border-border/30 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-sm text-foreground">
                    Nova compra!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">{currentSale.name}</span> de{' '}
                    {currentSale.location} acabou de comprar.
                  </p>
                  <p className="text-xs text-muted-foreground/80 mt-1">
                    há poucos segundos
                  </p>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
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

    