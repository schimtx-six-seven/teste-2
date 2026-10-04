const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 8787;
const DATA = path.join(__dirname, 'rankings.json');
const seed = [
  {player_id:'atlas-ca',player_name:'Atlas Mining',company_name:'Atlas Mining',country_code:'CA',total_money:9400000000,play_seconds:8704800},
  {player_id:'mare-jp',player_name:'Mare Tranquillitatis',company_name:'Mare Tranquillitatis',country_code:'JP',total_money:8100000000,play_seconds:7164000},
  {player_id:'aurora-br',player_name:'Aurora Industrial',company_name:'Aurora Industrial',country_code:'BR',total_money:6300000000,play_seconds:1447200}
];
function read(){try{return JSON.parse(fs.readFileSync(DATA,'utf8'))}catch{return seed}}
function write(rows){fs.writeFileSync(DATA,JSON.stringify(rows,null,2))}
function json(res, code, body){res.writeHead(code, {'content-type':'application/json','access-control-allow-origin':'*'});res.end(JSON.stringify(body))}
const api=http.createServer((req,res)=>{
  if(req.method==='OPTIONS'){res.writeHead(204,{'access-control-allow-origin':'*','access-control-allow-methods':'GET,POST,OPTIONS','access-control-allow-headers':'content-type'});return res.end()}
  if(req.url.startsWith('/health')) return json(res,200,{ok:true});
  if(req.url.startsWith('/rankings')&&req.method==='GET'){
    const u=new URL(req.url,'http://localhost');const metric=u.searchParams.get('metric')==='time'?'play_seconds':'total_money';const country=u.searchParams.get('country');let rows=read().filter(r=>!country||r.country_code===country).sort((a,b)=>b[metric]-a[metric]).slice(0,100);return json(res,200,{ok:true,metric,country:country||'global',rows});
  }
  if(req.url==='/rankings'&&req.method==='POST'){let body='';req.on('data',c=>body+=c);req.on('end',()=>{try{const p=JSON.parse(body);if(!p.player_id)throw Error('player_id required');const rows=read().filter(r=>r.player_id!==p.player_id);rows.push({...p,total_money:Number(p.total_money)||0,play_seconds:Number(p.play_seconds)||0,updated_at:new Date().toISOString()});write(rows);json(res,200,{ok:true})}catch(e){json(res,400,{ok:false,error:e.message})}});return}
  json(res,404,{ok:false,error:'not found'});
});api.listen(PORT,'0.0.0.0',()=>console.log(`Space Tycoon ranking API on :${PORT}`));
