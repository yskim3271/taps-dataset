# TAPS Dataset Website

This is the official website for the TAPS (Throat and Acoustic Pairing Speech Dataset) project. The website provides comprehensive documentation and information about the dataset.

## Website Structure
project-root/
├── index.html              # Main page
├── pages/                  # Page HTML files
│   ├── about.html
│   ├── documentation.html
│   │   ├── hardware.html   # Hardware documentation
│   │   ├── software.html   # Software documentation
│   │   ├── recording.html  # Recording documentation
│   │   └── postprocessing.html  # Post-processing documentation
│   ├── speechenhancement.html
│   │   └── baselines.html      # TMSE documentation
│   ├── download.html
│   ├── credits.html
│   └── license.html
├── assets/                 # Static resources
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   └── images/            # Images and icons
└── components/            # Reusable HTML components
└── sidebar.html

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