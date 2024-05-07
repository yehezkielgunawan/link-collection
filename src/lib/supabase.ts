import { createClient } from "@supabase/supabase-js";
import { PROJECT_URL, API_KEY } from "$env/static/private";

const supabaseUrl = PROJECT_URL;
const supabaseKey = API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
