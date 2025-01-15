# TAPS Dataset Website

This is the official website for the TAPS (Throat and Acoustic Pairing Speech Dataset) project. The website provides comprehensive documentation and information about the dataset.

## Website Structure
# TAPS Dataset Website

This is the official website for the TAPS (Throat and Acoustic Pairing Speech Dataset) project. The website provides comprehensive documentation and information about the dataset.

## Website Structure

```plaintext
project-root/
│
├── index.html              # 메인 페이지
├── pages/                  # 각 페이지 HTML 파일들
│   ├── about.html
│   ├── documentation.html
│   │   ├── hardware.html
│   │   ├── software.html
│   │   ├── recording.html
│   │   └── postprocessing.html
│   ├── speechenhancement.html
│   │   └── baselines.html
│   ├── download.html
│   ├── credits.html
│   └── license.html
│
├── assets/                 # 정적 자원들
│   ├── css/               # 스타일시트 파일들
│   │   ├── main.css
│   │   ├── layout.css
│   │   └── components.css
│   │
│   ├── js/                # 자바스크립트 파일들
│   │   ├── main.js
│   │   └── utils.js
│   │
│   └── images/            # 이미지 파일들
│       ├── logo.png
│       └── icons/
│
├── components/             # 재사용 가능한 HTML 컴포넌트들
│   └── sidebar.html
│
└── docs/                   # 문서화 관련 파일들
   ├── README.md
   └── CONTRIBUTING.md
```

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript
- Font Awesome Icons
- GitHub Pages

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/hina3271/taps-dataset.git
cd taps-dataset
```
2. Run a local server:
```bash
# Using Python
python -m http.server 8000

# Or using Node.js
npx serve
```
3. Open http://localhost:8000 in your browser

## Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License
This website is released under the MIT License.