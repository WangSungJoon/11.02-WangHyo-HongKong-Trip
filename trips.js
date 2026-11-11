/* 여행 목록 (가운데 팝업) — 모든 여행 페이지가 공유
   새 여행 추가: 폴더(예: japan/index.html)를 만들고 아래에 한 줄 추가 · path는 이 파일 기준 상대경로
   스타일은 common.css 공유 · 각 페이지에는 #drawer · #tripList · #menuBtn 마크업과 <script src="(상대경로)/trips.js"> 필요 */
const TRIPS = [  // 날짜순 정렬은 아래에서 자동
  {name:'홍콩', date:'2026.11.06 – 11.09', path:'./'},
  {name:'호찌민 · 호짬', date:'2026.08.07 – 08.11', path:'hotram/'}
];

(() => {
  const base = document.currentScript.src;
  const here = location.origin + location.pathname.replace(/index\.html$/, '');
  document.getElementById('tripList').innerHTML = [...TRIPS].sort((a, b) => a.date.localeCompare(b.date)).map(t => {
    const u = new URL(t.path, base).href;
    const cur = u === here;
    return '<a class="btn raise trip" href="' + u + '"' + (cur ? ' aria-current="page"' : '') + '>' +
      '<b>' + t.name + '</b><small>' + t.date + '</small>' + (cur ? '<span class="tag now">보는 중</span>' : '') + '</a>';
  }).join('');
  const dlg = document.getElementById('drawer');
  document.getElementById('menuBtn').addEventListener('click', () => dlg.showModal());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
})();
