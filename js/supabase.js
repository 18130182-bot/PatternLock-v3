const SUPABASE_URL = "https://kcncleosyltuhuaamque.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbmNsZW9zeWx0dWh1YWFtcXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0ODM3ODMsImV4cCI6MjA5OTA1OTc4M30.GWSHcxfzj_32Z0y7O00yM6aadkC1BqydQSkDBeYJsBc";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
