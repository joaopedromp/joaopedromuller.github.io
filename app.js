const sections={
 about:{title:'Joao Pereira',text:'I study cybersecurity and networking. I tutor, build Tutor Track, and compete in professional esports.'},
 experience:{title:'Experience',text:'Internship experience.',note:'Role and highlights to add.'},
 project:{title:'Tutor Track',text:'My personal project.',note:'Project details and screenshots to add.'},
 running:{title:'Off the clock',stat:true,text:'Recreational runner and half-marathon finisher. I also enjoy getting outside for a walk.'},
 esports:{title:'Esports',text:'Professional esports player.',note:'Player name and competitive highlights to add.'},
 tutoring:{title:'Tutoring',text:'Another part of my experience: helping others learn.',note:'Subjects and experience to add.'},
 contact:{title:'Connect',text:'Find my professional work and projects online.',note:'LinkedIn and GitHub profile links to add.'},
 skills:{title:'Skills & study',text:'My studies focus on cybersecurity and networking.',note:'Specific protocols, tools, and certifications to confirm.'}
};
const devices={contact:['ISP-CLOUD','Internet','WAN'],about:['CORE-RTR','Router','Gi0/0 · Gi0/1'],experience:['WORK-PC','Workstation','Fa0'],project:['PROJ-SRV','Server','Fa0'],running:['AP-RUNNER','Access point','Eth0'],esports:['GAME-PC','Workstation','Fa0'],tutoring:['STUDY-PC','Workstation','Fa0'],skills:['ACCESS-SW','Switch','Gi0/1 · Fa0/1–5']};
const linkPorts={contact:'Gi0/0 · WAN',about:'Gi0/1',experience:'Fa0/1',project:'Fa0/2',running:'Fa0/3',esports:'Fa0/4',tutoring:'Fa0/5'};
const facts={about:[['Focus','Cybersecurity'],['Study','Networking'],['Project','Tutor Track'],['Outside work','Running & esports']],running:[['Distance','21.1 km'],['Activity','Recreational running'],['Running for','About 28–29 weeks'],['Finish time','Awaiting race result']],skills:[['Study areas','Cybersecurity<br>Networking'],['Applied experience','Internship<br>Tutoring']]};
// Confirmed user details and public professional profile information.
Object.assign(sections,{
 about:{title:'Joao Pereira',text:'Networking and cybersecurity student at St. Clair College, with SOC experience at ISH Tecnologia. I build TutorTrack, tutor fellow students, and compete in varsity Valorant.'},
 experience:{title:'Work experience',text:'Security operations and technical teaching.',extra:'<article class="entry"><h2>Cybersecurity Intern</h2><p class="entry-meta">ISH Tecnologia · Vila Velha, Brazil<br>Jan–Jul 2024</p><ul><li>Supported SOC operations and SIEM/SOAR setup and maintenance.</li><li>Troubleshot Linux, Windows, and security-platform issues.</li><li>Created security-log parsers with RegEx and RSA Log Parser.</li></ul><div class="chips"><span>NetWitness</span><span>Securonix</span><span>Harpia</span></div></article><article class="entry"><h2>Peer Tutor</h2><p class="entry-meta">St. Clair College · Windsor, Canada<br>Sep 2026–present · Part-time</p><p>Help students understand technical concepts and work through problems in Linux, Java, JavaScript, Mathematics, Web Design, and Networking.</p></article><article class="entry"><h2>Mathematics Tutor</h2><p class="entry-meta">Cumberland University · Lebanon, TN<br>Aug 2024–May 2025</p><p>Tutored 50+ undergraduate students in College Algebra through individual and group sessions, covering assignments, test preparation, and problem solving.</p></article>'},
 project:{title:'TutorTrack',text:'I built a local-first tutoring management app to keep the administrative side of tutoring in one place.',extra:'<div class="feature-list"><div><h2>Students & sessions</h2><p>Manage student records and tutoring sessions.</p></div><div><h2>Hours & payroll</h2><p>Track work hours and organize payroll periods.</p></div><div><h2>Calendar sync</h2><p>Synchronize with Google Calendar.</p></div></div><details class="more"><summary>How it is built</summary><p>A PWA with an Electron desktop app. IndexedDB stores the data locally, without a backend or external database.</p><div class="chips"><span>React</span><span>TypeScript</span><span>Vite</span><span>Tailwind CSS</span><span>Electron</span><span>IndexedDB</span></div></details>'},
 running:{title:'Off the clock',text:'Recreational runner. Half-marathon finisher. I also enjoy getting outside for a walk.',extra:'<div class="race-result"><strong>1:53:54</strong><span>Half marathon · 21.1 km</span></div>'},
 tutoring:{title:'Peer tutoring',text:'I help students understand technical concepts and develop practical problem-solving skills. At St. Clair College, I tutor the subjects below. Previously, I tutored 50+ Cumberland students in College Algebra through individual and group sessions (Aug 2024–May 2025).',extra:'<div class="chips subjects"><span>Linux</span><span>Java</span><span>JavaScript</span><span>Mathematics</span><span>Web Design</span><span>Networking</span></div>'},
 skills:{title:'Skills & education',text:'Built through coursework, SOC operations, tutoring, and personal projects.',extra:'<details class="more"><summary>Education</summary><article class="entry"><h2>St. Clair College</h2><p>Computer Systems Technology – Networking<br>Aug 2025–May 2028 · 4.0 GPA</p></article><article class="entry"><h2>Cumberland University</h2><p>Information Technology studies<br>Aug 2024–May 2025 · 4.0 GPA</p></article></details><details class="more"><summary>Training & recognition</summary><p>ISC2 Certified in Cybersecurity (CC).</p><p>CompTIA Security+ and Cisco CCNA — in progress.</p><p>D3 Security Technical Training, Levels 1 and 2 (v16.0), 2024.</p><p>Alpha Lambda Delta academic recognition, 2025.</p></details>'},
 contact:{title:'Connect',text:'Professional experience, projects, and contact.',extra:'<a class="profile-link" href="https://www.linkedin.com/in/joao-pereira-6960822a4/" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a class="profile-link" href="https://github.com/joaopedromp" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a><a class="profile-link" href="joao-pereira-resume.pdf">Résumé <span>PDF ↗</span></a>'},
 esports:{title:'Competitive Valorant',text:'I compete as jayp. My team history spans Brazil and North America, including SG e-Sports, Cardume, Cumberland Phoenix, 2Game Esports, and St. Clair Saints.',extra:'<div class="results"><div><strong>5th–6th</strong><span>College VALORANT Championship 2026<small>St. Clair Saints</small></span></div><div><strong>4th</strong><span>College VALORANT Championship 2025<small>Cumberland Phoenix</small></span></div><div><strong>3rd–4th</strong><span>CECC Finals 2025<small>Cumberland Phoenix</small></span></div><div><strong>7th–8th</strong><span>Esports World Cup 2025 · Americas Qualifier<small>2Game Esports</small></span></div><div><strong>3rd</strong><span>Liga Gamers Club Série A · 2023 Finals<small>Cardume</small></span></div></div><a class="profile-link" href="https://www.vlr.gg/player/5300/jayp" rel="noopener noreferrer">Full results & team history on VLR.gg <span aria-hidden="true">↗</span></a>'}
});
Object.assign(facts,{
 about:[['Based in','Windsor, Canada'],['Languages','Portuguese & English'],['Study','Networking & cybersecurity'],['GPA','4.0']],
 running:[['Running for','About 28–29 weeks'],['Average race pace','5:24 / km']],
 tutoring:[['College','St. Clair College'],['Since','September 2026']],
 skills:[['Security operations','SIEM / SOAR<br>NetWitness · Securonix · Harpia'],['Systems & parsing','Linux · Windows<br>RegEx · RSA Log Parser'],['Development','React · TypeScript<br>Java · JavaScript'],['Local applications','Electron · IndexedDB<br>PWA development']]
});

// Network symbols match the roles shown in the device windows.
const pcIcon=document.querySelector('.experience svg').outerHTML;
for(const key of ['esports','tutoring'])document.querySelector(`[data-node="${key}"] svg`).outerHTML=pcIcon;
document.querySelector('.running svg').innerHTML='<path d="M12 22a42 42 0 0 1 56 0M22 32a27 27 0 0 1 36 0M32 42a12 12 0 0 1 16 0"/><circle cx="40" cy="50" r="2"/>';
document.querySelector('.project svg').innerHTML='<rect x="13" y="5" width="54" height="20" rx="3"/><rect x="13" y="33" width="54" height="20" rx="3"/><path d="M23 15h2M23 43h2M37 15h20M37 43h20"/>';

document.querySelectorAll('.node').forEach(node=>{const shell=document.createElement('span');shell.className='device-shell';const icon=node.querySelector('svg');node.prepend(shell);shell.append(icon);const code=document.createElement('small');code.className='device-code';code.textContent=devices[node.dataset.node][0];node.append(code);});
const dialog=document.querySelector('#detail');
document.querySelectorAll('[data-node]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.node,s=sections[key],d=devices[key];document.querySelector('#detail-content').innerHTML=`<div class="device-bar"><span class="bar-led" aria-hidden="true"></span><strong>${d[0]}</strong><span class="port-name">${d[2]}</span></div><div class="window-body"><div class="window-heading"><h1 id="detail-title">${s.title}</h1><span>${d[1]}</span></div><p>${s.text}</p>${s.extra||""}${facts[key]?`<dl class="fact-grid">${facts[key].map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>`:''}${s.note?`<p class="note">${s.note}</p>`:''}</div>`;dialog.setAttribute('aria-labelledby','detail-title');dialog.showModal();}));
document.querySelector('#close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});
const themeButton=document.querySelector('#theme');
function syncTheme(){const dark=document.documentElement.dataset.theme==='dark';const label=dark?'Switch to light mode':'Switch to dark mode';themeButton.setAttribute('aria-label',label);themeButton.title=label;themeButton.innerHTML=dark?'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z"/></svg>';}
themeButton.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('jm-theme',theme)}catch(e){}syncTheme();});syncTheme();

// Draw each connection from its actual device port, including after resizing.
const canvas=document.querySelector('.canvas');
const wires=document.querySelector('.wires');
const switchDevice=document.querySelector('.switch');
const networkNodes=[...document.querySelectorAll('.node[data-node]')];
const ns='http://www.w3.org/2000/svg';
function drawNetwork(){
 const bounds=canvas.getBoundingClientRect();
 const sw=switchDevice.getBoundingClientRect();
 const cx=sw.left+sw.width/2-bounds.left,cy=sw.top+sw.height/2-bounds.top;
 wires.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
 wires.replaceChildren();
 networkNodes.forEach((node,index)=>{
  const box=node.getBoundingClientRect(),key=node.dataset.node;
  const x=box.left+box.width/2-bounds.left;
  const above=box.top+box.height/2<sw.top+sw.height/2;
  const y=(above?box.bottom:box.top)-bounds.top;
  let sx=cx,sy=cy,route;
  if(key==='contact'){
   const router=document.querySelector('.profile').getBoundingClientRect();
   sy=router.top-bounds.top;
   route="M "+sx+" "+sy+" V "+y;
  }else if(key==='about'||key==='tutoring'){
   sy=(above?sw.top:sw.bottom)-bounds.top;
   route=`M ${sx} ${sy} V ${y}`;
  }else{
   const left=x<cx;
   sx=(left?sw.left:sw.right)-bounds.left;
   sy=cy+(above?-6:6);
   route=`M ${sx} ${sy} H ${x} V ${y}`;
  }
  const group=document.createElementNS(ns,'g');group.dataset.link=key;
  const line=document.createElementNS(ns,'path');line.setAttribute('d',route);group.append(line);
  const port=document.createElementNS(ns,'circle');port.setAttribute('cx',sx);port.setAttribute('cy',sy);port.setAttribute('r','2');port.setAttribute('class','port');group.append(port);
  const end=document.createElementNS(ns,'path');end.setAttribute('d',above?`M ${x-3} ${y+8} L ${x+3} ${y+8} L ${x} ${y+3} Z`:`M ${x-3} ${y-8} L ${x+3} ${y-8} L ${x} ${y-3} Z`);end.setAttribute('class','link-light');group.append(end);
  const title=document.createElementNS(ns,'title');title.textContent=`${devices[key][2]} — ${node.textContent.trim()}`;group.append(title);
  const label=document.createElementNS(ns,'text');label.setAttribute('class','port-label');label.setAttribute('x',x);label.setAttribute('y',(sy+y)/2);label.textContent=linkPorts[key];group.append(label);
  wires.append(group);
 });
}
function highlightLink(key,active){const group=wires.querySelector(`[data-link="${key}"]`);if(group)group.classList.toggle('active-link',active);}
networkNodes.forEach(node=>{
 node.addEventListener('pointerenter',()=>highlightLink(node.dataset.node,true));
 node.addEventListener('pointerleave',()=>highlightLink(node.dataset.node,false));
 node.addEventListener('focus',()=>highlightLink(node.dataset.node,true));
 node.addEventListener('blur',()=>highlightLink(node.dataset.node,false));
});
new ResizeObserver(drawNetwork).observe(canvas);
window.addEventListener('resize',drawNetwork);drawNetwork();
document.title='João Pereira';
document.querySelector('meta[name="description"]').content='Joao Pereira — cybersecurity and networking student, tutor, recreational runner, and professional esports player.';





