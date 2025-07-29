import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mddfcemyrvezedslikos.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kZGZjZW15cnZlemVkc2xpa29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NDcxMzQsImV4cCI6MjA2NzEyMzEzNH0.gHT4T1ridkTJ2LLOr8aoSTenKa88qYNpH9bdYJ0rPqw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
