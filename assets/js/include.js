document.addEventListener('DOMContentLoaded', function() {
    // 사이드바 로드
    fetch('components/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            
            // 현재 페이지 정보 가져오기
            const currentPage = document.body.dataset.page;
            const currentSection = document.body.dataset.section;

            // 네비게이션 아이템 스타일링
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                if (item.dataset.page === currentPage) {
                    item.classList.add('bg-gray-800', 'text-white');
                } else {
                    item.classList.add('text-gray-400', 'hover:bg-gray-800', 'hover:text-white');
                }
            });
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
            document.getElementById('sidebar-container').innerHTML = `
                <div class="p-4 text-red-500">
                    <p>Error loading sidebar: ${error.message}</p>
                    <p>Path: components/sidebar.html</p>
                </div>
            `;
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
