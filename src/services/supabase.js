import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cmkondatsegzjeapwsgp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNta29uZGF0c2VnemplYXB3c2dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwODI3ODYsImV4cCI6MjA0NzY1ODc4Nn0.wM6xouwKWduzLcrDn2_OU-vU_1INep_MlVaG705Lr_Q";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
