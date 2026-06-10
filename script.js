(function(){
  const PASS = "ValtecisValteq";
  const KEY = "valtec_auth";
  const SESSION_HOURS = 8;

  function check() {
    const stored = sessionStorage.getItem(KEY);
    if (stored) {
      const { ts } = JSON.parse(stored);
      if (Date.now() - ts < SESSION_HOURS * 60 * 60 * 1000) return;
    }
    const input = prompt("Valtec PM Toolkit\n\nEnter password:");
    if (input === PASS) {
      sessionStorage.setItem(KEY, JSON.stringify({ ts: Date.now() }));
    } else {
      const deniedHtml = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#888">Access denied.</div>';
      if (document.body) {
        document.body.innerHTML = deniedHtml;
      } else {
        document.write(deniedHtml);
      }
    }
  }

  check();
})();

const T = {
  en: {
    depLabel:'Deployments', newDep:'New Deployment', navTools:'Tools',
    toolCharter:'Charter', toolTracker:'Tracker', toolEod:'EOD Report', toolRisk:'Risk Log', toolRetro:'Retrospective',
    export:'Export', send:'Send', reviewSend:'Review & Send', addRow:'Add', cancel:'Cancel', create:'Create',
    charterInfo:'Project Info', milestones:'Milestones', addMs:'Add milestone',
    fName:'Project Name', fId:'Project ID', fClient:'Client', fVessel:'Vessel', fLocation:'Location',
    fPm:'Project Manager', fStart:'Estimated Deployment Start Date', fEnd:'Estimated Acceptance Date', fGoal:'Objective', fSuccess:'Success Criteria (one per line)', fDetail:'Detailed Information',
    depStatusLabel:'Deployment Status',
    total:'Total', done:'Done', inprog:'In Progress', delayed:'Delayed',
    thCommitment:'Commitment', thOwner:'Owner', thDue:'Due Date', thStatus:'Status', thNote:'Note',
    thDesc:'Description', thSev:'Sev.', thAction:'Action', thCat:'Category',
    thProb:'Prob.', thImpact:'Impact', thScore:'Score', thMit:'Mitigation', thDate:'Date Found', thRiskDesc:'Risk',
    eodDate:'Report Date', eodReporter:'Reporter', eodWeather:'Weather',
    eodDone:'Completed Today', eodPlan:'Planned for Tomorrow', eodIssues:'Issues & Blockers',
    riskReg:'Risk Register', issueLog:'Issue Log', addRisk:'Add risk', addIssue:'Add issue',
    retroDate:'Retro Date', retroResult:'Outcome', retroGood:'What went well',
    retroBad:'Needs improvement', retroAct:'Action items', closure:'Closure Checklist',
    retroFull:'Full delivery', retroPartial:'Partial delivery', retroMiss:'Not delivered',
    newDepTitle:'New Deployment', depStatus:'Status',
    stPlanning:'Planning', stActive:'Active', stDone:'Done',
    zoneProjects:'Projects', viewOngoing:'Ongoing Projects', viewHistory:'History',
    slackKickoff:'Kick-off notice', slackTracker:'Tracker summary', slackEod:'EOD Report',
    slackRisk:'Risk summary', slackRetro:'Retrospective summary',
    slackPreviewTitle:'Review Message',
    slackPreviewNote:'Review and edit the message below before sending to Slack.',
    slackSendBtn:'Send to #project-management',
    quickCmds:'Quick commands',
    cl1:'All deliverables signed off', cl2:'Equipment inventoried & logged',
    cl3:'Flight records archived', cl4:'Client training docs handed over', cl5:'Lessons learned updated to SOP',
    msStatus:['Pending','In Progress','Done','Delayed'],
    tStatus:['Pending','In Progress','Done','Delayed','Cancelled'],
    rStatus:['Open','Monitoring','Closed'],
    iStatus:['Open','In Progress','Closed'],
    sevOpts:['P1','P2','P3','P4'],
    statusLabel:{planning:'Planning', active:'Active', done:'Done'},
    pageInfo:{
      charter:{title:'Charter',sub:'Project definition — scope, milestones, stakeholders'},
      tracker:{title:'Commitment Tracker',sub:'Track all commitments and ownership'},
      eod:{title:'EOD Report',sub:'Daily close-out — completed, planned, issues'},
      risk:{title:'Risk & Issue Log',sub:'Risk register + issue log'},
      retro:{title:'Retrospective',sub:'Project review — wins, improvements, actions'},
    },
    aiWelcome:'AI Agent ready. Switch deployments and all five tools stay in sync.',
    aiPanelTitle:'AI Agent',
    aiPlaceholder:'Ask AI…',
    quick:{
      charter:['Generate ClickUp tasks','Draft kick-off email','Assess milestone risks'],
      tracker:['Analyse delayed items','Suggest priorities','Draft Slack summary'],
      eod:['Draft client update','Analyse today\'s issues','Generate EOD Slack'],
      risk:['Deep risk analysis','Top risk mitigation plan','Generate risk alert'],
      retro:['Summarise lessons learned','Generate action items','Draft closure report'],
    },
    toastSent:'Sent to #project-management',
    alertNoId:'Please enter a Project ID.',
    alertDup:'This ID already exists.',
    alertMin:'At least one deployment must remain.',
    alertConfirmDel:(id)=>`Delete ${id}?`,
    alertExport:'Export supported for Tracker and Risk Log only.',
  },
  zh: {
    depLabel:'部署專案', newDep:'新增部署', navTools:'工具',
    toolCharter:'Charter', toolTracker:'Tracker', toolEod:'EOD 報告', toolRisk:'風險紀錄', toolRetro:'回顧',
    export:'匯出', send:'發送', reviewSend:'確認並發送', addRow:'新增', cancel:'取消', create:'建立',
    charterInfo:'專案基本資訊', milestones:'里程碑', addMs:'新增里程碑',
    fName:'專案名稱', fId:'專案編號', fClient:'客戶', fVessel:'船隻', fLocation:'作業地點',
    fPm:'專案經理', fStart:'預計部署開始日期', fEnd:'預計驗收日期', fGoal:'主要目標', fSuccess:'成功標準（每行一條）', fDetail:'詳細資訊',
    depStatusLabel:'部署狀態',
    total:'總計', done:'完成', inprog:'進行中', delayed:'延遲',
    thCommitment:'承諾事項', thOwner:'負責人', thDue:'截止日', thStatus:'狀態', thNote:'備註',
    thDesc:'描述', thSev:'嚴重度', thAction:'應對措施', thCat:'類別',
    thProb:'機率', thImpact:'影響', thScore:'分數', thMit:'應對措施', thDate:'發現日期', thRiskDesc:'風險描述',
    eodDate:'報告日期', eodReporter:'回報人', eodWeather:'天候',
    eodDone:'今日完成', eodPlan:'明日計畫', eodIssues:'問題 & 障礙',
    riskReg:'風險登錄', issueLog:'問題登錄', addRisk:'新增風險', addIssue:'新增問題',
    retroDate:'回顧日期', retroResult:'最終結果', retroGood:'做得好',
    retroBad:'需改進', retroAct:'Action Items', closure:'結案 Checklist',
    retroFull:'全數達成', retroPartial:'部分達成', retroMiss:'未達成',
    newDepTitle:'新增 Deployment', depStatus:'狀態',
    stPlanning:'規劃中', stActive:'進行中', stDone:'已完成',
    zoneProjects:'專案', viewOngoing:'進行中專案', viewHistory:'歷史紀錄',
    slackKickoff:'Kick-off 通知', slackTracker:'Tracker 摘要', slackEod:'EOD 報告',
    slackRisk:'風險摘要', slackRetro:'回顧摘要',
    slackPreviewTitle:'確認訊息',
    slackPreviewNote:'發送至 Slack 前，請確認以下訊息內容。',
    slackSendBtn:'發送至 #project-management',
    quickCmds:'快速指令',
    cl1:'交付物清單已全部 Sign-off', cl2:'所有設備已盤點 & 紀錄',
    cl3:'飛行紀錄已存檔', cl4:'客戶培訓文件已移交', cl5:'Lessons Learned 已更新至 SOP',
    msStatus:['待開始','進行中','完成','延遲'],
    tStatus:['待處理','進行中','完成','延遲','取消'],
    rStatus:['開啟','監控中','關閉'],
    iStatus:['開啟','處理中','關閉'],
    sevOpts:['P1','P2','P3','P4'],
    statusLabel:{planning:'規劃中', active:'進行中', done:'已完成'},
    pageInfo:{
      charter:{title:'Charter',sub:'啟案文件 — 定義範疇、里程碑、利害關係人'},
      tracker:{title:'Commitment Tracker',sub:'承諾事項追蹤'},
      eod:{title:'EOD 報告',sub:'每日結案報告'},
      risk:{title:'風險 & 問題紀錄',sub:'風險登錄 + 問題登錄'},
      retro:{title:'回顧',sub:'專案回顧'},
    },
    aiWelcome:'AI Agent 已就緒。切換 Deployment 時，五個工具資料全部同步。',
    aiPanelTitle:'AI Agent',
    aiPlaceholder:'問 AI…',
    quick:{
      charter:['產生 ClickUp 任務','起草 Kick-off 信件','評估里程碑風險'],
      tracker:['分析延遲項目','建議優先順序','產生 Slack 摘要'],
      eod:['起草客戶更新信','分析今日問題','產生 EOD Slack'],
      risk:['深度風險分析','建議應對策略','產生風險警示'],
      retro:['歸納 Lessons Learned','產生 Action Items','起草結案摘要'],
    },
    toastSent:'已發送至 #project-management',
    alertNoId:'請填寫專案編號。',
    alertDup:'此編號已存在。',
    alertMin:'至少保留一個 Deployment。',
    alertConfirmDel:(id)=>`確定刪除 ${id}？`,
    alertExport:'目前支援 Tracker 和 Risk Log 匯出。',
  }
};

let lang = 'en';
let deps = {}, currentDep = null, currentTool = 'charter', aiOpen = false;
let riskCount = 0, issueCount = 0;
let projectView = 'ongoing';
let _slackPreviewTool = null;

const STATUS_COLOR = {planning:'#f59e0b', active:'#10b981', done:'#94a3b8'};

function t(path){
  const segments = path.split('.');
  let value = T[lang];
  for (const segment of segments) {
    if (value == null) break;
    value = value[segment];
  }
  if (value != null) return value;
  value = T['en'];
  for (const segment of segments) {
    if (value == null) break;
    value = value[segment];
  }
  return value != null ? value : path;
}

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.getElementById('btn-en').classList.toggle('active', l==='en');
  document.getElementById('btn-zh').classList.toggle('active', l==='zh');
  applyI18n();
  updatePageInfo();
  renderQuickBtns();
  const aiInp = document.getElementById('ai-inp');
  if (aiInp) aiInp.placeholder = t('aiPlaceholder');
  document.getElementById('ai-welcome').textContent = t('aiWelcome');
  refreshApiKeyUI();
  if(currentDep) renderDynamic();
}

function switchProjectView(view) {
  projectView = view;
  document.getElementById('view-ongoing').classList.toggle('active', view === 'ongoing');
  document.getElementById('view-history').classList.toggle('active', view === 'history');
  renderDepTabs();
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-val]').forEach(el => {
    el.value = t(el.dataset.i18nVal);
  });
}

function updatePageInfo() {
  const info = t('pageInfo')[currentTool] || {title: currentTool, sub:''};
  document.getElementById('page-title').textContent = info.title;
  document.getElementById('page-sub').textContent = info.sub;
}

function renderDynamic() {
  renderMilestones(deps[currentDep].milestones);
  renderTracker(deps[currentDep].tracker);
  renderRisks(deps[currentDep].risks);
  renderIssues(deps[currentDep].issues);
}

function newDepData(id, client, vessel, location, status) {
  return {
    id, client, vessel, location, status,
    charter: {name:'', id, client, vessel, location, pm:'', start:'', end:'', goal:'', success:'', detail:''},
    milestones: [
      {name:'T-30', date:'', sIdx:0, done:false},
      {name:'T-14', date:'', sIdx:0, done:false},
      {name:'T-0', date:'', sIdx:0, done:false},
      {name:'Installation & flight test', date:'', sIdx:0, done:false},
      {name:'Sign-off', date:'', sIdx:0, done:false},
    ],
    tracker: [],
    eod: {date:new Date().toISOString().slice(0,10), reporter:'', weather:'', done:[], plan:[], issues:[]},
    risks: [
      {desc:'Vessel schedule change', cat:'Logistics', prob:'H', impact:'H', score:9, mit:'Reconfirm T-7; flexible departure', owner:'PM', sIdx:0},
      {desc:'Equipment customs hold', cat:'Logistics', prob:'M', impact:'H', score:6, mit:'Prepare import documents early', owner:'PM', sIdx:0},
    ],
    issues: [],
    retro: {proj:id, date:new Date().toISOString().slice(0,10), rIdx:0, good:[], bad:[], actions:[]},
  };
}

function createDep() {
  const id = document.getElementById('ndm-id').value.trim();
  if(!id){alert(t('alertNoId'));return;}
  if(deps[id]){alert(t('alertDup'));return;}
  const d = newDepData(id,
    document.getElementById('ndm-client').value.trim(),
    document.getElementById('ndm-vessel').value.trim(),
    document.getElementById('ndm-location').value.trim(),
    document.getElementById('ndm-status').value
  );
  deps[id] = d; hideModal(); renderDepTabs(); switchDep(id);
}

function renderDepTabs() {
  const c = document.getElementById('dep-tabs');
  const filteredIds = Object.keys(deps).filter(id => {
    const s = deps[id].status;
    return projectView === 'history' ? s === 'done' : (s === 'planning' || s === 'active');
  });
  c.innerHTML = filteredIds.map(id => {
    const d = deps[id]; const act = id===currentDep?'active':'';
    const slabel = t('statusLabel')[d.status] || d.status;
    return `<div class="dep-tab ${act}" onclick="switchDep('${id}')">
      <span class="ds" style="background:${STATUS_COLOR[d.status]}"></span>
      <span class="dep-tab-id">${id}</span>
      <span class="dep-status-badge dep-status-${d.status}">${slabel}</span>
      <span class="dep-tab-client">${d.client?'· '+d.client.slice(0,12):''}</span>
      <span class="ddel" onclick="event.stopPropagation();deleteDep('${id}')" title="Delete"><i class="ti ti-x" aria-hidden="true"></i></span>
    </div>`;
  }).join('');
}

function switchDep(id) {
  if(currentDep) saveCurrent();
  currentDep = id; renderDepTabs(); loadDep(id);
  document.getElementById('dep-badge').textContent = id;
  const d = deps[id];
  const slabel = t('statusLabel')[d.status] || d.status;
  const sEl = document.getElementById('dep-status-inline');
  if (sEl) sEl.innerHTML = `<span class="dep-status-badge dep-status-${d.status}">${slabel}</span>`;
}

function deleteDep(id) {
  if(Object.keys(deps).length<=1){alert(t('alertMin'));return;}
  if(!confirm(t('alertConfirmDel')(id))) return;
  delete deps[id];
  if(currentDep===id){const first=Object.keys(deps)[0]; currentDep=null; switchDep(first);}    
  renderDepTabs();
}

function saveCurrent() {
  if(!currentDep||!deps[currentDep]) return;
  const d = deps[currentDep];
  ['name','id','client','vessel','location','pm','start','end','goal','success','detail'].forEach(f=>{
    const el=document.querySelector(`[data-field="${f}"]`); if(el) d.charter[f]=el.value;
  });
  d.milestones = [...document.querySelectorAll('#ms-list .ms-row')].map(r=>({
    name:r.querySelector('input.ie')?.value||'',
    date:r.querySelectorAll('input')[1]?.value||'',
    sIdx:r.querySelector('select')?t('msStatus').indexOf(r.querySelector('select').value):0,
    done:r.querySelector('.chk')?.classList.contains('done')||false,
  }));
  d.tracker = [...document.querySelectorAll('#tracker-body tr')].map(tr=>{
    const ins=tr.querySelectorAll('input,select');
    return{item:ins[0]?.value||'',owner:ins[1]?.value||'',due:ins[2]?.value||'',sIdx:t('tStatus').indexOf(ins[3]?.value)||0,note:ins[4]?.value||''};
  });
  const g=id=>{const el=document.getElementById(id);return el?el.value:''};
  d.eod.date=g('eod-date');d.eod.reporter=g('eod-reporter');d.eod.weather=g('eod-weather');
  d.eod.done=[...document.querySelectorAll('#eod-done-list .eod-txt')].map(s=>s.textContent);
  d.eod.plan=[...document.querySelectorAll('#eod-plan-list .eod-txt')].map(s=>s.textContent);
  d.eod.issues=[...document.querySelectorAll('#eod-issue-body tr')].map(tr=>{
    const ins=tr.querySelectorAll('input,select');
    return{desc:ins[0]?.value||'',sevIdx:t('sevOpts').indexOf(ins[1]?.value)||2,action:ins[2]?.value||'',statusIdx:t('iStatus').indexOf(ins[3]?.value)||0};
  });
  d.risks=[...document.querySelectorAll('#risk-body tr')].map(tr=>{
    const ins=tr.querySelectorAll('input'); const sels=tr.querySelectorAll('select'); const badge=tr.querySelector('.rl');
    return{desc:ins[0]?.value||'',cat:ins[1]?.value||'',prob:sels[0]?.value||'H',impact:sels[1]?.value||'H',score:parseInt(badge?.textContent||'9'),mit:ins[2]?.value||'',owner:ins[3]?.value||'',sIdx:t('rStatus').indexOf(sels[2]?.value)||0};
  });
  d.issues=[...document.querySelectorAll('#issue-body tr')].map(tr=>{
    const ins=tr.querySelectorAll('input,select');
    return{desc:ins[0]?.value||'',date:ins[1]?.value||'',sevIdx:t('sevOpts').indexOf(ins[2]?.value)||2,impact:ins[3]?.value||'',action:ins[4]?.value||'',owner:ins[5]?.value||'',statusIdx:t('iStatus').indexOf(ins[6]?.value)||0};
  });
  d.retro.proj=g('retro-proj');d.retro.date=g('retro-date');
  d.retro.rIdx=['Full','Partial','Miss'].indexOf(document.getElementById('retro-result')?.value)||0;
  d.retro.good=[...document.querySelectorAll('#retro-good .ri span')].map(s=>s.textContent);
  d.retro.bad=[...document.querySelectorAll('#retro-bad .ri span')].map(s=>s.textContent);
  d.retro.actions=[...document.querySelectorAll('#retro-action .ri span')].map(s=>s.textContent);
}

function loadDep(id) {
  const d=deps[id];
  ['name','id','client','vessel','location','pm','start','end','goal','success','detail'].forEach(f=>{
    const el=document.querySelector(`[data-field="${f}"]`); if(el) el.value=d.charter[f]||'';
  });
  const statusEl=document.querySelector('[data-field="status"]');
  if(statusEl) statusEl.value=d.status||'planning';
  renderMilestones(d.milestones);
  renderTracker(d.tracker);
  document.getElementById('eod-date').value=d.eod.date;
  document.getElementById('eod-reporter').value=d.eod.reporter;
  document.getElementById('eod-weather').value=d.eod.weather;
  renderEodList('done',d.eod.done);
  renderEodList('plan',d.eod.plan);
  renderEodIssues(d.eod.issues);
  renderRisks(d.risks);
  renderIssues(d.issues);
  document.getElementById('retro-proj').value=d.retro.proj;
  document.getElementById('retro-date').value=d.retro.date;
  const rSel=document.getElementById('retro-result');
  if(rSel) rSel.value=['Full','Partial','Miss'][d.retro.rIdx||0]||'Full';
  renderRetroCol('good',d.retro.good);
  renderRetroCol('bad',d.retro.bad);
  renderRetroCol('action',d.retro.actions);
  updateTrackerStats(); updateRiskBadge();
}

function syncField(el){
  if(!currentDep) return;
  if(el.dataset.field === 'status') {
    deps[currentDep].status = el.value;
    renderDepTabs();
    const slabel = t('statusLabel')[el.value] || el.value;
    const sEl = document.getElementById('dep-status-inline');
    if (sEl) sEl.innerHTML = `<span class="dep-status-badge dep-status-${el.value}">${slabel}</span>`;
  } else {
    deps[currentDep].charter[el.dataset.field] = el.value;
  }
}

function msStatusOpts(cur){return t('msStatus').map((s,i)=>`<option${i===cur?' selected':''}>${s}</option>`).join('');}
function tStatusOpts(cur){return t('tStatus').map((s,i)=>`<option${i===cur?' selected':''}>${s}</option>`).join('');}
function rStatusOpts(cur){return t('rStatus').map((s,i)=>`<option${i===cur?' selected':''}>${s}</option>`).join('');}
function iStatusOpts(cur){return t('iStatus').map((s,i)=>`<option${i===cur?' selected':''}>${s}</option>`).join('');}
function sevOpts(cur){return t('sevOpts').map((s,i)=>`<option${i===cur?' selected':''}>${s}</option>`).join('');}

function renderMilestones(mss){
  document.getElementById('ms-list').innerHTML=mss.map(m=>`
    <div class="ms-row">
      <div class="chk${m.done?' done':''}" onclick="toggleChk(this)"><i class="ti ti-check" style="font-size:9px" aria-hidden="true"></i></div>
      <div style="flex:1"><input class="ie" value="${m.name||''}" style="font-size:12px;font-weight:500"></div>
      <input class="ie" type="date" value="${m.date||''}" style="font-size:10px;color:var(--text-tertiary);width:110px;font-family:var(--font-mono)">
      <select class="ie" style="font-size:10px;color:var(--text-tertiary);width:65px">${msStatusOpts(m.sIdx||0)}</select>
    </div>`).join('');
}

function renderTracker(rows){
  document.getElementById('tracker-body').innerHTML=rows.map((r,i)=>`
    <tr><td style="font-family:var(--font-mono);color:var(--text-tertiary);font-size:10px">${String(i+1).padStart(2,'0')}</td>
    <td><input class="ie" value="${r.item||''}"></td><td><input class="ie" value="${r.owner||''}"></td>
    <td><input class="ie" type="date" value="${r.due||''}" style="font-family:var(--font-mono);font-size:10px"></td>
    <td><select class="ie" onchange="updateTrackerStats()">${tStatusOpts(r.sIdx||0)}</select></td>
    <td><input class="ie" value="${r.note||''}"></td></tr>`).join('');
  updateTrackerStats();
}

function renderEodList(type,items){
  document.getElementById(`eod-${type}-list`).innerHTML=items.map(v=>`
    <div style="display:flex;align-items:center;gap:6px;padding:3px 0;font-size:11px">
      <div class="chk" style="width:14px;height:14px" onclick="toggleChk(this)"><i class="ti ti-check" style="font-size:8px" aria-hidden="true"></i></div>
      <span class="eod-txt" style="flex:1">${v}</span>
      <i class="ti ti-x" style="font-size:11px;cursor:pointer;color:var(--text-tertiary)" onclick="this.parentElement.remove()" aria-hidden="true"></i>
    </div>`).join('');
}

function renderEodIssues(issues){
  document.getElementById('eod-issue-body').innerHTML=issues.map(r=>`
    <tr><td><input class="ie" value="${r.desc||''}"></td>
    <td><select class="ie">${sevOpts(r.sevIdx||2)}</select></td>
    <td><input class="ie" value="${r.action||''}"></td>
    <td><select class="ie">${iStatusOpts(r.statusIdx||0)}</select></td></tr>`).join('');
}

function renderRisks(risks){
  riskCount=risks.length;
  document.getElementById('risk-body').innerHTML=risks.map((r,i)=>{
    const sc=r.score||9; const cls=sc>=6?'rh':sc>=3?'rm':'rl2';
    return `<tr><td style="font-family:var(--font-mono);color:var(--text-tertiary);font-size:10px">R${String(i+1).padStart(2,'0')}</td>
    <td><input class="ie" value="${r.desc||''}"></td><td><input class="ie" value="${r.cat||''}"></td>
    <td><select class="ie" onchange="calcRisk(this)"><option${r.prob==='H'?' selected':''}>H</option><option${r.prob==='M'?' selected':''}>M</option><option${r.prob==='L'?' selected':''}>L</option></select></td>
    <td><select class="ie" onchange="calcRisk(this)"><option${r.impact==='H'?' selected':''}>H</option><option${r.impact==='M'?' selected':''}>M</option><option${r.impact==='L'?' selected':''}>L</option></select></td>
    <td><span class="rl ${cls}">${sc}</span></td>
    <td><input class="ie" value="${r.mit||''}"></td><td><input class="ie" value="${r.owner||''}"></td>
    <td><select class="ie">${rStatusOpts(r.sIdx||0)}</select></td></tr>`;
  }).join('');
  updateRiskBadge();
}

function renderIssues(issues){
  issueCount=issues.length;
  document.getElementById('issue-body').innerHTML=issues.map((r,i)=>`
    <tr><td style="font-family:var(--font-mono);color:var(--text-tertiary);font-size:10px">I${String(i+1).padStart(2,'0')}</td>
    <td><input class="ie" value="${r.desc||''}"></td>
    <td><input class="ie" type="date" value="${r.date||''}" style="font-family:var(--font-mono);font-size:10px"></td>
    <td><select class="ie">${sevOpts(r.sevIdx||2)}</select></td>
    <td><input class="ie" value="${r.impact||''}"></td><td><input class="ie" value="${r.action||''}"></td>
    <td><input class="ie" value="${r.owner||''}"></td>
    <td><select class="ie">${iStatusOpts(r.statusIdx||0)}</select></td></tr>`).join('');
}

function renderRetroCol(type,items){
  const m={good:'retro-good',bad:'retro-bad',action:'retro-action'};
  document.getElementById(m[type]).innerHTML=items.map(v=>`
    <div class="ri"><i class="ti ti-circle-dot" style="font-size:10px;flex-shrink:0;margin-top:2px;color:var(--text-tertiary)" aria-hidden="true"></i>
    <span style="flex:1">${v}</span>
    <i class="ti ti-x" style="font-size:10px;cursor:pointer;color:var(--text-tertiary)" onclick="this.parentElement.remove()" aria-hidden="true"></i></div>`).join('');
}

function updateTrackerStats(){
  const rows=document.querySelectorAll('#tracker-body tr');
  let dn=0,ip=0,dl=0;
  rows.forEach(r=>{const s=r.querySelector('select');if(!s)return;
    const v=s.value; const ds=t('tStatus');
    if(v===ds[2])dn++;else if(v===ds[1])ip++;else if(v===ds[3])dl++;
  });
  document.getElementById('t-total').textContent=rows.length;
  document.getElementById('t-done').textContent=dn;
  document.getElementById('t-inprog').textContent=ip;
  document.getElementById('t-delayed').textContent=dl;
  const b=document.getElementById('badge-delayed');
  b.style.display=dl>0?'inline':'none'; b.textContent=dl;
}

function updateRiskBadge(){
  const high=[...document.querySelectorAll('#risk-body .rl')].filter(b=>parseInt(b.textContent)>=6).length;
  const b=document.getElementById('badge-risk');
  b.style.display=high>0?'inline':'none'; b.textContent=high;
}

function calcRisk(sel){
  const tr=sel.closest('tr'); const sels=tr.querySelectorAll('select');
  const m={H:3,M:2,L:1}; const score=(m[sels[0].value]||3)*(m[sels[1].value]||3);
  const badge=tr.querySelector('.rl'); if(!badge)return;
  badge.textContent=score; badge.className='rl '+(score>=6?'rh':score>=3?'rm':'rl2');
  updateRiskBadge();
}

function toggleChk(el){el.classList.toggle('done');}

function addMs(){
  const d=document.createElement('div'); d.className='ms-row';
  d.innerHTML=`<div class="chk" onclick="toggleChk(this)"><i class="ti ti-check" style="font-size:9px" aria-hidden="true"></i></div><div style="flex:1"><input class="ie" style="font-size:12px;font-weight:500"></div><input class="ie" type="date" style="font-size:10px;color:var(--text-tertiary);width:110px;font-family:var(--font-mono)"><select class="ie" style="font-size:10px;color:var(--text-tertiary);width:65px">${msStatusOpts(0)}</select>`;
  document.getElementById('ms-list').appendChild(d);
}

function addTrackerRow(){
  const n=document.querySelectorAll('#tracker-body tr').length+1;
  const tr=document.createElement('tr');
  tr.innerHTML=`<td style="font-family:var(--font-mono);color:var(--text-tertiary);font-size:10px">${String(n).padStart(2,'0')}</td><td><input class="ie"></td><td><input class="ie"></td><td><input class="ie" type="date" style="font-family:var(--font-mono);font-size:10px"></td><td><select class="ie" onchange="updateTrackerStats()">${tStatusOpts(0)}</select></td><td><input class="ie"></td>`;
  document.getElementById('tracker-body').appendChild(tr); updateTrackerStats();
}

function addEodItem(type){
  const inp=document.getElementById(`eod-${type}-in`); const val=inp.value.trim(); if(!val)return;
  const list=document.getElementById(`eod-${type}-list`);
  const div=document.createElement('div');
  div.style.cssText='display:flex;align-items:center;gap:6px;padding:3px 0;font-size:11px';
  div.innerHTML=`<div class="chk" style="width:14px;height:14px" onclick="toggleChk(this)"><i class="ti ti-check" style="font-size:8px" aria-hidden="true"></i></div><span class="eod-txt" style="flex:1">${val}</span><i class="ti ti-x" style="font-size:11px;cursor:pointer;color:var(--text-tertiary)" onclick="this.parentElement.remove()" aria-hidden="true"></i>`;
  list.appendChild(div); inp.value='';
}

function addEodIssue(){
  const tr=document.createElement('tr');
  tr.innerHTML=`<td><input class="ie"></td><td><select class="ie">${sevOpts(2)}</select></td><td><input class="ie"></td><td><select class="ie">${iStatusOpts(0)}</select></td>`;
  document.getElementById('eod-issue-body').appendChild(tr);
}

function addRiskRow(){
  riskCount++;
  const tr=document.createElement('tr');
  tr.innerHTML=`<td style="font-family:var(--font-mono);color:var(--text-tertiary);font-size:10px">R${String(riskCount).padStart(2,'0')}</td><td><input class="ie"></td><td><input class="ie"></td><td><select class="ie" onchange="calcRisk(this)"><option>H</option><option>M</option><option>L</option></select></td><td><select class="ie" onchange="calcRisk(this)"><option>H</option><option>M</option><option>L</option></select></td><td><span class="rl rh">9</span></td><td><input class="ie"></td><td><input class="ie"></td><td><select class="ie">${rStatusOpts(0)}</select></td>`;
  document.getElementById('risk-body').appendChild(tr); updateRiskBadge();
}

function addIssueRow(){
  issueCount++;
  const tr=document.createElement('tr');
  tr.innerHTML=`<td style="font-family:var(--font-mono);color:var(--text-tertiary);font-size:10px">I${String(issueCount).padStart(2,'0')}</td><td><input class="ie"></td><td><input class="ie" type="date" value="${new Date().toISOString().slice(0,10)}" style="font-family:var(--font-mono);font-size:10px"></td><td><select class="ie">${sevOpts(2)}</select></td><td><input class="ie"></td><td><input class="ie"></td><td><input class="ie"></td><td><select class="ie">${iStatusOpts(0)}</select></td>`;
  document.getElementById('issue-body').appendChild(tr);
}

function addRetro(type){
  const m={good:'r-good-in',bad:'r-bad-in',action:'r-action-in'};
  const inp=document.getElementById(m[type]); const val=inp.value.trim(); if(!val)return;
  const lm={good:'retro-good',bad:'retro-bad',action:'retro-action'};
  const div=document.createElement('div'); div.className='ri';
  div.innerHTML=`<i class="ti ti-circle-dot" style="font-size:10px;flex-shrink:0;margin-top:2px;color:var(--text-tertiary)" aria-hidden="true"></i><span style="flex:1">${val}</span><i class="ti ti-x" style="font-size:10px;cursor:pointer;color:var(--text-tertiary)" onclick="this.parentElement.remove()" aria-hidden="true"></i>`;
  document.getElementById(lm[type]).appendChild(div); inp.value='';
}

function switchTool(id,el){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('panel-'+id).classList.add('active');
  el.classList.add('active'); currentTool=id;
  updatePageInfo(); renderQuickBtns();
}

function renderQuickBtns(){
  const cmds=t('quick')[currentTool]||[];
  document.getElementById('ai-qbs').innerHTML=cmds.map(c=>`<div class="ai-qb" onclick="sendAI('${c.replace(/'/g,"\\'")}">${c}</div>`).join('');
}

function toggleAI(){
  aiOpen=!aiOpen;
  document.getElementById('ai-panel').classList.toggle('open',aiOpen);
  document.getElementById('cw').classList.toggle('ai-open',aiOpen);
  if(aiOpen) renderQuickBtns();
}

function showToast(msg){
  const t2=document.getElementById('toast'); document.getElementById('toast-msg').textContent=msg;
  t2.classList.add('show'); setTimeout(()=>t2.classList.remove('show'),3000);
}

function showModal(){
  const d=document.getElementById('ndm');
  if (typeof d.showModal === 'function') {
    d.showModal();
  } else {
    d.classList.add('show');
  }
}
function hideModal(){
  const d=document.getElementById('ndm');
  if (typeof d.close === 'function') {
    d.close();
  }
  d.classList.remove('show');
  ['ndm-id','ndm-client','ndm-vessel','ndm-location'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('ndm-status').value='planning';
}

document.addEventListener('DOMContentLoaded',()=>{
  const d=document.getElementById('ndm');
  if (d && typeof d.addEventListener === 'function') {
    d.addEventListener('click',e=>{ if(e.target===d) hideModal(); });
    d.addEventListener('cancel',e=>{ e.preventDefault(); hideModal(); });
  }
  const sp=document.getElementById('slack-preview');
  if (sp && typeof sp.addEventListener === 'function') {
    sp.addEventListener('click',e=>{ if(e.target===sp) hideSlackPreview(); });
    sp.addEventListener('cancel',e=>{ e.preventDefault(); hideSlackPreview(); });
  }
  refreshApiKeyUI();
});

function buildSlackMsg(tool){
  if(!currentDep) return '';
  saveCurrent(); const d=deps[currentDep]; const today=new Date().toLocaleDateString();
  if(tool==='charter'){
    const ms=d.milestones.map(m=>`${m.done?'✅':'⬜'} ${m.name} — ${t('msStatus')[m.sIdx||0]}`).join('\n');
    return `📋 *Charter — ${d.charter.name||d.id}*\nClient: ${d.charter.client||'—'} | Vessel: ${d.charter.vessel||'—'} | PM: ${d.charter.pm||'—'}\n\n*Objective:*\n${d.charter.goal||'—'}\n\n*Milestones:*\n${ms}\n\n_Valtec PM Toolkit · ${today}_`;
  }
  if(tool==='tracker'){
    const rows=d.tracker; const dl=rows.filter(r=>t('tStatus')[r.sIdx||0]===t('tStatus')[3]);
    let body=`✅ ${rows.filter(r=>t('tStatus')[r.sIdx||0]===t('tStatus')[2]).length}  🔄 ${rows.filter(r=>t('tStatus')[r.sIdx||0]===t('tStatus')[1]).length}  ⚠️ ${dl.length}  Total ${rows.length}`;
    if(dl.length){body+='\n\n*Delayed:*\n'+dl.map(r=>`• ${r.item} — ${r.owner}`).join('\n');}
    return `✅ *Tracker — ${d.id}* _(${today})_\n\n${body}\n\n_Valtec PM Toolkit_`;
  }
  if(tool==='eod'){
    return `📋 *EOD — ${d.id}* | ${d.eod.date} | ${d.eod.reporter||'—'}\n\n*✅ Done:*\n${d.eod.done.map(v=>`• ${v}`).join('\n')||'—'}\n\n*📅 Tomorrow:*\n${d.eod.plan.map(v=>`• ${v}`).join('\n')||'—'}\n\n*⚠️ Issues:*\n${d.eod.issues.length?d.eod.issues.map(r=>`• [${t('sevOpts')[r.sevIdx||2]}] ${r.desc}`).join('\n'):'None'}\n\n_Valtec PM Toolkit_`;
  }
  if(tool==='risk'){
    return `⚠️ *Risk Log — ${d.id}* _(${today})_\n\n${d.risks.map(r=>`${r.score>=6?'🔴':r.score>=3?'🟡':'🟢'} *${r.desc}* (${r.prob}×${r.impact}=${r.score})`).join('\n')||'No risks'}\n\n_Valtec PM Toolkit_`;
  }
  if(tool==='retro'){
    const outcomes=['Full delivery','Partial delivery','Not delivered'];
    return `🔁 *Retro — ${d.retro.proj||d.id}*\nOutcome: *${outcomes[d.retro.rIdx||0]}*\n\n*👍:*\n${d.retro.good.map(v=>`• ${v}`).join('\n')||'—'}\n\n*👎:*\n${d.retro.bad.map(v=>`• ${v}`).join('\n')||'—'}\n\n*⚡ Actions:*\n${d.retro.actions.map(v=>`• ${v}`).join('\n')||'—'}\n\n_Valtec PM Toolkit · ${today}_`;
  }
  return '';
}

function slackSend(tool){
  previewSlackMessage(tool || currentTool);
}

function previewSlackMessage(tool) {
  _slackPreviewTool = tool;
  const msg = buildSlackMsg(tool);
  if(!msg) return;
  document.getElementById('slack-preview-text').value = msg;
  const d = document.getElementById('slack-preview');
  if (typeof d.showModal === 'function') d.showModal();
  else d.setAttribute('open','');
}

function hideSlackPreview() {
  const d = document.getElementById('slack-preview');
  if (typeof d.close === 'function') d.close();
  else d.removeAttribute('open');
  _slackPreviewTool = null;
}

function slackSendConfirmed() {
  const text = document.getElementById('slack-preview-text').value;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(t('toastSent'))).catch(() => {
      console.log(text); showToast(t('toastSent'));
    });
  } else {
    console.log(text); showToast(t('toastSent'));
  }
  hideSlackPreview();
}

function saveApiKey(val){
  const key=val.trim();
  if(key){localStorage.setItem('valtec_api_key',key);}else{localStorage.removeItem('valtec_api_key');}
  refreshApiKeyUI();
}
function refreshApiKeyUI(){
  const key=localStorage.getItem('valtec_api_key')||'';
  const row=document.getElementById('ai-key-row');
  const inp=document.getElementById('ai-key-inp');
  const status=document.getElementById('ai-key-status');
  if(!row)return;
  if(key){
    inp.value=key;
    row.classList.add('has-key');
    status.textContent=lang==='zh'?'✓ 已設定':'✓ Set';
  } else {
    row.classList.remove('has-key');
    status.textContent='';
  }
}
async function sendAI(msg){
  const inp=document.getElementById('ai-inp');
  const text=msg||inp.value.trim(); if(!text)return;
  const apiKey=localStorage.getItem('valtec_api_key')||'';
  if(!apiKey){
    if(!aiOpen)toggleAI();
    addAIMsg('a',lang==='zh'?'請先在上方輸入 Anthropic API Key。':'Please enter your Anthropic API key above first.');
    return;
  }
  inp.value=''; if(!aiOpen) toggleAI();
  addAIMsg('u',text);
  const ld=addAIMsg('a',lang==='zh'?'分析中…':'Thinking…');
  ld.style.fontStyle='italic'; ld.style.color='var(--text-tertiary)';
  saveCurrent();
  const ctx={dep:currentDep,tool:currentTool,lang,data:currentDep?deps[currentDep]:{}};
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'x-api-key':apiKey,
        'anthropic-version':'2023-06-01',
        'anthropic-dangerous-direct-browser-access':'true'
      },
      body:JSON.stringify({
        model:'claude-sonnet-4-6',
        max_tokens:900,
        system:`You are a PM AI Agent for Valtec UAV maritime deployments. Reply in ${lang==='zh'?'Traditional Chinese':'English'}. Be direct, professional, specific.`,
        messages:[{role:'user',content:`Tool: ${currentTool}\nData: ${JSON.stringify(ctx,null,1)}\n\nRequest: ${text}`}]
      })
    });
    const data=await res.json();
    ld.style.fontStyle=''; ld.style.color='';
    if(data.error){
      ld.textContent=`API Error: ${data.error.message}`;
      ld.style.color='#ef4444';
      console.error('Anthropic API error:',data.error);
      return;
    }
    ld.innerHTML=(data.content?.[0]?.text||'No response').replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  }catch(e){
    ld.style.fontStyle='';
    ld.style.color='#ef4444';
    ld.textContent=`Error: ${e.message}`;
    console.error('sendAI error:',e);
  }
  document.getElementById('ai-msgs').scrollTop=99999;
}

function addAIMsg(cls,text){
  const m=document.getElementById('ai-msgs');
  const d=document.createElement('div'); d.className=`ai-msg ${cls}`;
  d.innerHTML=text.replace(/\n/g,'<br>');
  m.appendChild(d); m.scrollTop=m.scrollHeight; return d;
}

function exportCSV(){
  if(!currentDep){return;}
  saveCurrent(); const d=deps[currentDep];
  let csv='',fn=`${currentDep}_${currentTool}.csv`;
  if(currentTool==='tracker'){
    csv='Item,Owner,Due,Status\n';
    d.tracker.forEach(r=>{csv+=[r.item,r.owner,r.due,t('tStatus')[r.sIdx||0]].map(v=>'"'+(v||'').replace(/"/g,'""')+'"').join(',')+'\n';});
  } else if(currentTool==='risk'){
    csv='Risk,Category,Prob,Impact,Score,Mitigation\n';
    d.risks.forEach(r=>{csv+=[r.desc,r.cat,r.prob,r.impact,r.score,r.mit].map(v=>'"'+(v||'').replace(/"/g,'""')+'"').join(',')+'\n';});
  } else{alert(t('alertExport'));return;}
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\uFEFF'+csv],{type:'text/csv;charset=utf-8'}));a.download=fn;a.click();
}

deps['DLY007']=newDepData('DLY007','LungSoon Ocean Group','PJ8','Majuro, Marshall Islands','active');
deps['DLY007'].charter.pm='Mia Lin';
deps['DLY007'].tracker=[
  {item:'Equipment customs clearance',owner:'PM',due:'2026-06-15',sIdx:1,note:''},
  {item:'Jack flight confirmed',owner:'PM',due:'2026-06-10',sIdx:2,note:''},
  {item:'GCS software update',owner:'Jack',due:'2026-06-12',sIdx:0,note:''},
];
switchDep('DLY007');
renderDepTabs();
applyI18n();
updatePageInfo();
renderQuickBtns();
document.getElementById('ai-welcome').textContent=t('aiWelcome');
const aiInpEl=document.getElementById('ai-inp');
if(aiInpEl) aiInpEl.placeholder=t('aiPlaceholder');
