document.addEventListener('DOMContentLoaded', function() {
  // 현재 페이지 식별자
  const currentPage = document.body.dataset.page;
  // 모든 nav-item 선택 (하위에 있는 nav-item 모두 선택)
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    // 현재 페이지와 일치하는 항목이면 active 스타일을 적용
    if (item.dataset.page === currentPage) {
      item.classList.add('bg-gray-800', 'text-white');
      // active 항목은 불투명하게 처리 (opacity-100은 기본)
      item.classList.remove('opacity-50');
    }
  });

    // 2. 사이드바 섹션 접기/펼치기 기능
    document.querySelectorAll('.nav-section').forEach(button => {
    button.addEventListener('click', function() {
    // data-section 값을 기준으로 해당 섹션 콘텐츠 선택
    const section = this.dataset.section;
    const content = document.querySelector(`.nav-section-content[data-section="${section}"]`);
    if (content) {
        // hidden 클래스를 토글하여 보이기/숨기기 처리
        content.classList.toggle('hidden');
    }
    // 버튼 내의 chevron 아이콘 회전 토글 (rotate-180: 180도 회전)
    const icon = this.querySelector('i.fas.fa-chevron-down');
    if (icon) {
        icon.classList.toggle('rotate-180');
    }
    });

});

});