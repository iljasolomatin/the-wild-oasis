import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY } from "./keys.js";

export const supabaseUrl = "https://mddfcemyrvezedslikos.supabase.co";
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
