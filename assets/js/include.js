document.addEventListener('DOMContentLoaded', function() {
    // GitHub Pages의 repository 이름을 고려한 경로 설정
    const baseUrl = '/taps-dataset'; // repository 이름에 맞게 수정
    
    // 사이드바 로드
    fetch(`${baseUrl}/components/sidebar.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            
            // 현재 페이지 정보 가져오기
            const currentPage = document.body.dataset.page;
            const currentSection = document.body.dataset.section;

            // 네비게이션 아이템 스타일링
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                // Update href paths
                const href = item.getAttribute('href');
                if (href && href.startsWith('/')) {
                    item.setAttribute('href', `${baseUrl}${href}`);
                }
                
                if (item.dataset.page === currentPage) {
                    item.classList.add('bg-gray-800', 'text-white');
                } else {
                    item.classList.add('text-gray-400', 'hover:bg-gray-800', 'hover:text-white');
                }
            });
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
            document.getElementById('sidebar-container').innerHTML = 
                '<p class="text-red-500 p-4">Error loading sidebar. Please refresh the page.</p>';
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

