/* 여행 목록 (좌측 drawer) — 모든 여행 페이지가 공유
   새 여행 추가: 폴더(예: japan/index.html)를 만들고 아래에 한 줄 추가 · path는 이 파일 기준 상대경로
   각 페이지에는 #drawer · #tripList · #menuBtn 마크업과 <script src="(상대경로)/trips.js"> 필요 */
const TRIPS = [
  {name:'홍콩', date:'2026.11.06 – 11.09', path:'./'}
];

(() => {
  const base = document.currentScript.src;
  const here = location.origin + location.pathname.replace(/index\.html$/, '');
  document.getElementById('tripList').innerHTML = TRIPS.map(t => {
    const u = new URL(t.path, base).href;
    return '<a class="btn raise trip" href="' + u + '"' + (u === here ? ' aria-current="page"' : '') + '>' +
      '<b>' + t.name + '</b><small>' + t.date + '</small></a>';
  }).join('');
  const dlg = document.getElementById('drawer');
  document.getElementById('menuBtn').addEventListener('click', () => dlg.showModal());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
})();
