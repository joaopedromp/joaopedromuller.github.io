import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const read=f=>readFileSync(resolve(root,f),'utf8');
const html=read('index.html'),js=read('app.js');
test('CSP blocks inline code, remote scripts, active embeds and requests',()=>{
 const csp=html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/)[1];
 for(const directive of ["script-src 'self'","style-src 'self'","connect-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'","frame-src 'none'"])assert.ok(csp.includes(directive));
 assert.ok(!/unsafe-inline|unsafe-eval/.test(csp));
 assert.ok(!/<script(?![^>]*\bsrc=)[^>]*>/i.test(html));
 assert.ok(!/\son\w+\s*=/i.test(html));
});
test('All local page assets and resume links exist; external links use HTTPS',()=>{
 for(const [,url] of (html+'\n'+js).matchAll(/(?:src|href)="([^"$]+)"/g)){
  if(url.startsWith('https://'))continue;
  assert.ok(!/^[a-z]+:/i.test(url),'Unexpected URL scheme');
  assert.ok(existsSync(resolve(root,url.split('#')[0])),`Missing asset: ${url}`);
 }
 assert.ok(js.includes('href="joao-pereira-resume.pdf"'));
 assert.ok(readFileSync(resolve(root,'joao-pereira-resume.pdf')).subarray(0,5).toString()==='%PDF-');
});
test('JavaScript syntax and no dynamic executable-code APIs',()=>{
 for(const file of ['app.js','theme.js'])execFileSync(process.execPath,['--check',resolve(root,file)]);
 assert.ok(!/\beval\s*\(|new\s+Function\s*\(|document\.write\s*\(/.test(js));
 assert.ok(!/location\.(?:search|hash)|URLSearchParams/.test(js));
});
test('Domain and public title remain correct',()=>{
 assert.equal(read('CNAME').trim(),'joaopedromuller.me');
 assert.ok(html.includes('<title>João Pereira</title>'));
 assert.ok(html.includes('Joao Pereira.'));
});
test('Unique LAN access ports and separate WAN/uplink',()=>{
 const mapping=js.match(/const linkPorts=(\{[^;]+\});/)[1];
 const access=[...mapping.matchAll(/:'(Fa0\/\d+)'/g)].map(m=>m[1]);
 assert.equal(access.length,5);assert.equal(new Set(access).size,5);
 assert.ok(mapping.includes("contact:'Gi0/0 · WAN'"));
 assert.ok(mapping.includes("about:'Gi0/1'"));
 assert.ok(read('styles.css').includes('.wires{pointer-events:none;'));
});
test('No unintended private configuration or build artifacts',()=>{
 for(const name of readdirSync(root))assert.ok(!/^\.env(?:\.|$)|node_modules|id_rsa|credentials/i.test(name));
});
