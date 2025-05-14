import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://akcrpmvzqwiuffvcjtbx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrY3JwbXZ6cXdpdWZmdmNqdGJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NDY4ODYsImV4cCI6MjA2MTMyMjg4Nn0.FMTcWSMmd9hGyGJ1H5J0dkPKRurZjf4VKJCp_RLKBc4";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
