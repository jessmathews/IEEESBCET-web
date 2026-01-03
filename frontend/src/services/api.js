import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)


 export async function fetchExecom(year) {
  const { data, error } = await supabase
    .from("execom")
    .select("*")
    .eq("year", year)
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    return;
  }

  return data;
}

