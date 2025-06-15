
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const googleApiKey = Deno.env.get('GOOGLE_TRANSLATE_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TranslateRequest {
  text: string;
  targetLanguage: string;
  sourceLanguage?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!googleApiKey) {
      throw new Error('Google Translate API key not configured');
    }

    const { text, targetLanguage, sourceLanguage = 'auto' }: TranslateRequest = await req.json();

    if (!text || !targetLanguage) {
      throw new Error('Missing required parameters: text and targetLanguage');
    }

    console.log(`Translating text to ${targetLanguage}:`, text.substring(0, 100));

    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${googleApiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          target: targetLanguage,
          source: sourceLanguage === 'auto' ? undefined : sourceLanguage,
          format: 'text'
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google Translate API error:', errorData);
      throw new Error(`Translation failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const translatedText = data.data.translations[0].translatedText;
    const detectedLanguage = data.data.translations[0].detectedSourceLanguage;

    console.log('Translation successful:', translatedText.substring(0, 100));

    return new Response(
      JSON.stringify({ 
        translatedText,
        detectedLanguage,
        originalText: text,
        targetLanguage 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in translate-text function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        translatedText: null 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
