'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating ad copy variations that include social proof elements.
 *
 * - generateAdCopyWithSocialProof - A function to generate ad copy with social proof.
 * - GenerateAdCopyWithSocialProofInput - The input type for the generateAdCopyWithSocialProof function.
 * - GenerateAdCopyWithSocialProofOutput - The output type for the generateAdCopyWithSocialProof function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAdCopyWithSocialProofInputSchema = z.object({
  offerDetails: z
    .string()
    .describe('Details of the offer, including the main product/service and any bonuses.'),
  price: z.string().describe('The promotional price of the offer.'),
  benefits: z
    .string()
    .describe(
      'Key benefits of the offer, such as lifetime access, unlimited downloads, device compatibility, and content focus.'
    ),
  tone: z
    .string()
    .describe(
      'The desired tone of communication (e.g., clear, motivational, persuasive).'
    ),
});
export type GenerateAdCopyWithSocialProofInput = z.infer<
  typeof GenerateAdCopyWithSocialProofInputSchema
>;

const GenerateAdCopyWithSocialProofOutputSchema = z.object({
  adCopy: z.string().describe('Generated ad copy incorporating social proof.'),
});
export type GenerateAdCopyWithSocialProofOutput = z.infer<
  typeof GenerateAdCopyWithSocialProofOutputSchema
>;

export async function generateAdCopyWithSocialProof(
  input: GenerateAdCopyWithSocialProofInput
): Promise<GenerateAdCopyWithSocialProofOutput> {
  return generateAdCopyWithSocialProofFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAdCopyWithSocialProofPrompt',
  input: {schema: GenerateAdCopyWithSocialProofInputSchema},
  output: {schema: GenerateAdCopyWithSocialProofOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in digital ads.

You will generate compelling ad copy variations incorporating social proof elements to enhance credibility and drive engagement. Use quotes from famous authors or statistics about successful users to support the offer.

Offer Details: {{{offerDetails}}}
Price: {{{price}}}
Benefits: {{{benefits}}}
Tone: {{{tone}}}

Incorporate phrases like "Learn from great names like Stephen Covey" or mention best-selling status.
Focus on transforming mindset, enhancing finances, and accelerating personal and professional growth.

Create ad copy that highlights value for a symbolic price.

Ad Copy:`,
});

const generateAdCopyWithSocialProofFlow = ai.defineFlow(
  {
    name: 'generateAdCopyWithSocialProofFlow',
    inputSchema: GenerateAdCopyWithSocialProofInputSchema,
    outputSchema: GenerateAdCopyWithSocialProofOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
