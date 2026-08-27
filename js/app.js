const cfg=window.SUPABASE_CONFIG||{};
let supabase=null;
async function init(){
 if(!cfg.url||!cfg.key)return;
 supabase=window.supabase.createClient(cfg.url,cfg.key);
}
init();