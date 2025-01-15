document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = '/taps-dataset'; // repository 이름에 맞게 수정
    
    // 사이드바만 로드
    fetch(`${baseUrl}/components/sidebar.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            // 사이드바 초기화 코드...
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
            document.getElementById('sidebar-container').innerHTML = `
                <div class="p-4 text-red-500">
                    <p>Error loading sidebar: ${error.message}</p>
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

