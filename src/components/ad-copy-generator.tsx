"use client";

import { useState, useEffect } from 'react';
import { generateAdCopyWithSocialProof, type GenerateAdCopyWithSocialProofInput } from '@/ai/flows/generate-ad-copy-with-social-proof';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles } from 'lucide-react';

export function AdCopyGenerator() {
  const [adCopy, setAdCopy] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdCopy = async () => {
      setLoading(true);
      const input: GenerateAdCopyWithSocialProofInput = {
        offerDetails: "200 Best-Seller audios that transform mindset, enhance finances, and accelerate personal and professional growth, plus a bonus of 3,500 PDF books.",
        price: "From R$97.00 to just R$19.90.",
        benefits: "Lifetime access, unlimited downloads, compatible with any device, guaranteed updates. Content selected for finance, investments, career, and mindset.",
        tone: "Clear, motivational, and persuasive.",
      };
      try {
        const result = await generateAdCopyWithSocialProof(input);
        setAdCopy(result.adCopy);
      } catch (error) {
        console.error("Error generating ad copy:", error);
        setAdCopy("Aprenda com os maiores especialistas e transforme sua vida. Uma oportunidade única para seu crescimento pessoal e profissional.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdCopy();
  }, []);

  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-2 text-primary text-base">
          <Sparkles className="h-4 w-4" />
          <span>Dica de Mestre</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : (
          <p className="text-foreground/90 italic text-sm">"{adCopy}"</p>
        )}
      </CardContent>
    </Card>
  );
}
