const CUR="₽",SEW=450;
const F=[
{n:"Тюль вуаль",c:"Полиэстер",w:2.8,p:350,d:"Лёгкая и воздушная, пропускает свет",col:"#f1ece4",t:""},
{n:"Органза",c:"Полиэстер",w:2.8,p:520,d:"Благородный блеск для гостиной",col:"#e6d9c6",t:""},
{n:"Лён",c:"Лён 70%",w:2.8,p:780,d:"Натуральный, фактурный, дышащий",col:"#cdb99b",t:"Хит"},
{n:"Блэкаут",c:"Полиэстер",w:2.8,p:890,d:"Полностью защищает от света",col:"#5a4d45",t:""},
{n:"Жаккард",c:"Полиэстер",w:2.8,p:1250,d:"Плотный рисунок, классика",col:"#8a6a4a",t:""},
{n:"Бархат (велюр)",c:"Полиэстер",w:1.4,p:1650,d:"Роскошный вид и шумоизоляция",col:"#6b2f3a",t:"Премиум"}];
const fm=x=>Math.round(x).toLocaleString("ru-RU")+" "+CUR;
cards.innerHTML=F.map(f=>`<div class="card"><div class="sw" style="background:linear-gradient(135deg,${f.col},${f.col}cc)"></div><div class="b">${f.t?`<span class="tag">${f.t}</span>`:""}<h3>${f.n}</h3><small>${f.d}</small><div class="p">${fm(f.p)}</div><small>за 1 метр</small></div></div>`).join("");
rows.innerHTML=F.map(f=>`<tr><td><b>${f.n}</b></td><td>${f.c}</td><td>${f.w} м</td><td><b>${fm(f.p)}</b></td></tr>`).join("");
sew.textContent=fm(SEW);
fabric.innerHTML=F.map((f,i)=>`<option value="${i}">${f.n} — ${fm(f.p)}/м</option>`).join("");
function calc(){const W=+w.value||0,m=W*k.value,f=F[fabric.value];const t=m*f.p+(s.checked?W*SEW:0);out.textContent=fm(t);det.textContent=`Ткани: ${m.toFixed(1)} м × ${fm(f.p)}${s.checked?` + пошив ${fm(W*SEW)}`:""}`}
[fabric,w,k,s].forEach(e=>e.addEventListener("input",calc));calc();