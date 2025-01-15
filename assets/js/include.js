// assets/js/include.js
document.addEventListener('DOMContentLoaded', function() {
    // 사이드바 로드
    fetch('/components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            
            // 현재 페이지 정보 가져오기
            const currentPage = document.body.dataset.page;
            const currentSection = document.body.dataset.section;

            // 네비게이션 아이템 스타일링
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                // 기본 스타일 적용
                item.classList.add('flex', 'items-center', 'px-3', 'py-2', 'rounded-lg', 'text-sm');
                
                if (item.dataset.page === currentPage) {
                    // 활성 아이템 스타일
                    item.classList.add('bg-gray-800', 'text-white');
                    // 해당 섹션 열기
                    const section = item.dataset.section;
                    if (section) {
                        openSection(section);
                    }
                } else {
                    // 비활성 아이템 스타일
                    item.classList.add('text-gray-400', 'hover:bg-gray-800', 'hover:text-white');
                }
            });

            // 섹션 토글 기능 추가
            const sectionButtons = document.querySelectorAll('.nav-section');
            sectionButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const section = button.dataset.section;
                    toggleSection(section);
                });
            });
        });
});

// 섹션 열기 함수
function openSection(section) {
    const content = document.querySelector(`.nav-section-content[data-section="${section}"]`);
    const button = document.querySelector(`.nav-section[data-section="${section}"]`);
    if (content && button) {
        content.style.display = 'block';
        button.querySelector('.fa-chevron-down').classList.add('rotate-180');
    }
}

// 섹션 토글 함수
function toggleSection(section) {
    const content = document.querySelector(`.nav-section-content[data-section="${section}"]`);
    const button = document.querySelector(`.nav-section[data-section="${section}"]`);
    if (content && button) {
        const isHidden = content.style.display === 'none';
        content.style.display = isHidden ? 'block' : 'none';
        button.querySelector('.fa-chevron-down').classList.toggle('rotate-180');
    }
}

