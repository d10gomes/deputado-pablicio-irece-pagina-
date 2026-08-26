import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type LeadInsert = {
  nome: string;
  whatsapp: string;
  cidade: string;
  bairro: string | null;
  participacao: string;
  temas: string[];
  autoriza_whatsapp: boolean;
};
