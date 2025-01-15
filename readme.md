project-root/
│
├── index.html              # 메인 페이지
├── pages/                  # 각 페이지 HTML 파일들
│   ├── about.html
│   ├── documentation.html
│   │   ├── hardware.html   # 하드웨어 관련 문서
│   │   ├── software.html  # 소프트웨어 관련 문서
│   │   ├── recording.html  # 녹음 관련 문서
│   │   └── postprocessing.html  # 후처리 관련 문서
│   ├── speechenhancement.html
│   │   └── baselines.html      # TMSE 관련 문서
│   ├── download.html
│   ├── credits.html
│   └── license.html
│
├── assets/                 # 정적 자원들
│   ├── css/               # 스타일시트 파일들
│   │   ├── main.css      # 메인 스타일
│   │   ├── layout.css    # 레이아웃 관련 스타일
│   │   └── components.css # 재사용 가능한 컴포넌트 스타일
│   │
│   ├── js/                # 자바스크립트 파일들
│   │   ├── main.js       # 메인 스크립트
│   │   └── utils.js      # 유틸리티 함수들
│   │
│   ├── images/            # 이미지 파일들
│   │   ├── logo.png
│   │   └── icons/
│   │
│   └── fonts/             # 폰트 파일들
│
├── components/             # 재사용 가능한 HTML 컴포넌트들
│   ├── header.html
│   ├── footer.html
│   └── sidebar.html
│
└── docs/                   # 문서화 관련 파일들
    ├── README.md
    └── CONTRIBUTING.md