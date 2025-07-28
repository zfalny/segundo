// Product data
    const products = [
      {
        id: 1,
        name: "HYPEX - Internal Elevate",
        image: "https://i.postimg.cc/PJtgt72g/internal-elevate.png",
        features: {
          "🎯 AIMBOT": [
            "Enable / Auto Shoot / Trigger",
            "RCS / No Spread / Visible",
            "FOV / Show / Smooth / Bone"
          ],
          "🧠 ESP": [
            "Box 3D / Skeleton / Head",
            "Name / Weapon / Agent",
            "Health / Armor / Distance",
            "Spikeinfo"
          ],
          "🛠️ MISC": [
            "Third Person (T) / Aspect / FOV"
          ],
          "⚙️ MODS": [
            "Unlock All / Finishers",
            "Buddy Changer (ID) / Config Save & Load"
          ],
          "🎯 ESP ADICIONAL": [
            "Skills Esp",
            "Name Esp",
            "Visible Esp",
            "Skeleton"
          ]
        },
        extras: [
          "Bypass all restrictions (HVCI,TPM,Secure Boot)",
          "VANGUARD Emulator"
        ],
        requirements: [
          "Windows 10 & 11 (All Winver)",
          "AMD & Intel Processors",
          "All Resolutions Supported",
          "Supports HVCI (Core Isolation) On/Off"
        ],
        prices: [
          { period: "Diário", price: "R$ 60,00" },
          { period: "Semanal", price: "R$ 170,00" },
          { period: "Mensal", price: "R$ 260,00" },
          { period: "Lifetime", price: "R$ 400,00" }
        ]
      },
      {
        id: 2,
        name: "HYPEX - Aim+ESP",
        image: "https://i.postimg.cc/kGfkDyHB/aim-esp.png",
        features: {
          "🎯 AIM": [
            "Aim",
            "Visible Check",
            "Draw FOV",
            "Recoil Control System",
            "Draw Recoil Crosshair",
            "Recoil Crosshair",
            "No Spread",
            "Aim Radius",
            "Smoothness",
            "Aim-Bone"
          ],
          "🧠 VISUALS": [
            "ESP",
            "Skeleton",
            "Snapline",
            "Health",
            "Head",
            "Distance",
            "Health-Bar",
            "Esp Distance",
            "2D Box",
            "Corner Box",
            "3D Box",
            "Weapon Name",
            "Agent Name",
            "Shield Bar",
            "Radar",
            "Chams",
            "Spike Timer"
          ]
        },
        requirements: [
          "Windows 10 & 11 (All Winver)",
          "AMD & Intel Processors",
          "All Resolutions Supported",
          "Supports HVCI (Core Isolation) On/Off"
        ],
        prices: [
          { period: "Semanal", price: "R$ 85,00" },
          { period: "Mensal", price: "R$ 175,00" },
          { period: "Lifetime", price: "R$ 280,00" }
        ]
      },
      {
        id: 3,
        name: "HYPEX - Only Esp 👁️‍🗨️",
        image: "https://i.postimg.cc/Ghf5N9nw/esp.png",
        features: {
          "🎯 ESP": [
            "Skills Esp",
            "Name Esp",
            "Visible Esp",
            "Skeleton",
            "Lines",
            "Box 3D",
            "Life Esp",
            "Stream proof",
            "Save configs",
            "Web Configurável"
          ]
        },
        prices: [
          { period: "Diário", price: "R$ 40,00" },
          { period: "Semanal", price: "R$ 110,00" },
          { period: "Mensal", price: "R$ 165,00" }
        ]
      },
      {
        id: 4,
        name: "HYPEX - HWID SPOOFER 🛡",
        image: "https://i.postimg.cc/W4LfNK45/spoofer.png",
        features: {
          "🛡 RECURSOS": [
            "Formatar o computador",
            "Necessidade de atualizar o BIOS",
            "ASUS, Gigabyte, ASrock, MSI, entre outros compatíveis",
            "Necessário pendrive",
            "Bypass TPM",
            "Sem suporte placas japonesas, bios antigas abaixo de 2018, acer nitro e mancer"
          ]
        },
        prices: [
          { period: "Diário", price: "R$ 80,00" },
          { period: "Mensal", price: "R$ 150,00" },
          { period: "Lifetime", price: "R$ 180,00" }
        ]
      },
      {
        id: 5,
        name: "HYPEX - BYPASS + HWID Unban",
        image: "https://i.postimg.cc/YS6Dh3GM/produto-5.png",
        features: {
          "🛠️ Tested & Working On": [
            "✅ Valorant",
            "✅ Fortnite",
            "✅ Call of Duty",
            "✅ Apex Legends",
            "✅ Rainbow Six Siege",
            "✅ FiveM",
            "✅ Overwatch",
            "✅ Rust",
            "✅ League of Legends",
            "✅ Dead By Daylight",
            "✅ DayZ",
            "✅ Forza Horizon",
            "✅ Sea of Thieves",
            "✅ War Frame",
            "✅ Pub G"
          ],
          "👑 Services": [
            "HWID Unban Guide for All Games",
            "VGK Bypass - TPM / Secure Boot / HVCI",
            "IP Ban Fix",
            "Customer HWID Reset Tool"
          ],
          "🖥 Motherboards Supported": [
            "✅ Gigabyte Technology",
            "✅ Lenovo Legion",
            "✅ ASROCK",
            "✅ Biostar",
            "✅ Aorus",
            "✅ Colorful",
            "✅ Evga",
            "✅ ASUS",
            "✅ MSI",
            "✅ Alienware",
            "✅ HP",
            "✅ Dell",
            "✅ Acer"
          ]
        },
        prices: [
          { period: "HWID Unban 1 Time", price: "R$ 120,00" },
          { period: "HWID Unban Lifetime", price: "R$ 250,00" }
        ]
      }
    ];
    
    // Initialize app
    document.addEventListener('DOMContentLoaded', () => {
      const app = document.getElementById('app');
      
      // Create loading screen
      const loadingScreen = createLoadingScreen();
      app.appendChild(loadingScreen);
      
      // Create main content
      setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
          app.innerHTML = '';
          app.appendChild(createHeader());
          
          // Check if we should show instructions page
          if (window.location.hash === '#instructions') {
            app.appendChild(createInstructionsPage());
          } else {
            app.appendChild(createHero());
            app.appendChild(createProductsSection());
            app.appendChild(createFeaturesSection());
          }
          
          app.appendChild(createFooter());
          
          // Initialize animations
          initializeAnimations();
          initializeScrollEffects();
          initializeNavigation();
        }, 500);
      }, 1500);
    });
    
    function createLoadingScreen() {
      const div = document.createElement('div');
      div.className = 'loading-screen';
      div.innerHTML = '<div class="loader"></div>';
      return div;
    }
    
    function createHeader() {
      const header = document.createElement('header');
      header.className = 'header';
      header.innerHTML = `
        <div class="header-content">
          <div class="logo-container">
            <img src="https://i.postimg.cc/2yrD1y8X/PNG.png" alt="HYPEX Logo" class="logo">
            <span class="logo-text">HYPEX</span>
          </div>
          <nav class="nav">
            <a href="#home" class="nav-link" data-page="home">Início</a>
            <a href="#products" class="nav-link" data-page="home">Produtos</a>
            <a href="#features" class="nav-link" data-page="home">Recursos</a>
            <a href="#instructions" class="nav-link" data-page="instructions">Instruções</a>
            <a href="https://discord.gg/hypex" class="discord-btn">Discord</a>
          </nav>
          <button class="mobile-menu-toggle">☰</button>
        </div>
      `;
      return header;
    }
    
    function createHero() {
      const section = document.createElement('section');
      section.className = 'hero';
      section.id = 'home';
      section.innerHTML = `
        <div class="hero-bg"></div>
        <div class="hero-content">
          <h1 class="hero-title">Bem-vindo à HYPEX Store</h1>
          <p class="hero-subtitle">
            Produtos premium com tecnologia de ponta. 
            Desempenho excepcional, segurança garantida e suporte dedicado.
          </p>
          <a href="#products" class="hero-cta">
            Explorar Produtos
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        <div class="scroll-indicator">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      `;
      return section;
    }
    
    function createProductsSection() {
      const section = document.createElement('section');
      section.className = 'products';
      section.id = 'products';
      
      const header = document.createElement('div');
      header.className = 'section-header';
      header.innerHTML = `
        <h2 class="section-title">Nossos Produtos</h2>
        <p class="section-subtitle">Escolha a solução perfeita para suas necessidades</p>
      `;
      
      const grid = document.createElement('div');
      grid.className = 'products-grid';
      
      products.forEach((product, index) => {
        const card = createProductCard(product);
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('stagger-in');
        grid.appendChild(card);
      });
      
      section.appendChild(header);
      section.appendChild(grid);
      
      return section;
    }
    
    function createProductCard(product) {
      const card = document.createElement('div');
      card.className = 'product-card';
      
      let featuresHTML = '';
      for (const [category, items] of Object.entries(product.features)) {
        featuresHTML += `
          <div class="feature-category">${category}</div>
          <ul class="feature-list">
            ${items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        `;
      }
      
      if (product.extras) {
        featuresHTML += `
          <div class="feature-category">🎁 Acompanha</div>
          <ul class="feature-list">
            ${product.extras.map(item => `<li>${item}</li>`).join('')}
          </ul>
        `;
      }
      
      if (product.requirements) {
        featuresHTML += `
          <div class="feature-category">💻 Requisitos</div>
          <ul class="feature-list">
            ${product.requirements.map(item => `<li>${item}</li>`).join('')}
          </ul>
        `;
      }
      
      const pricesHTML = product.prices.map(price => `
        <div class="price-tag">
          <span class="price-label">${price.period}:</span>
          <span class="price-value">${price.price}</span>
        </div>
      `).join('');
      
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-content">
          <h3 class="product-title">${product.name}</h3>
          <div class="product-features">
            ${featuresHTML}
          </div>
          <div class="product-prices">
            ${pricesHTML}
          </div>
          <a href="https://discord.gg/hypex" class="product-cta">Comprar Agora</a>
        </div>
      `;
      
      return card;
    }
    
    function createFeaturesSection() {
      const section = document.createElement('section');
      section.className = 'features';
      section.id = 'features';
      
      const features = [
        {
          icon: '🚀',
          title: 'Performance Superior',
          description: 'Otimização máxima para garantir o melhor desempenho em qualquer situação.'
        },
        {
          icon: '🛡️',
          title: 'Segurança Garantida',
          description: 'Proteção avançada com bypass de todas as restrições e sistemas anti-cheat.'
        },
        {
          icon: '💬',
          title: 'Suporte 24/7',
          description: 'Time dedicado pronto para ajudar você a qualquer momento via Discord.'
        },
        {
          icon: '⚡',
          title: 'Atualizações Constantes',
          description: 'Sempre atualizado com as últimas versões e correções de segurança.'
        },
        {
          icon: '🎯',
          title: 'Precisão Absoluta',
          description: 'Algoritmos avançados para máxima precisão e controle total.'
        },
        {
          icon: '🔧',
          title: 'Fácil Configuração',
          description: 'Interface intuitiva e configuração simples para começar rapidamente.'
        }
      ];
      
      section.innerHTML = `
        <div class="section-header">
          <h2 class="section-title">Por que escolher HYPEX?</h2>
          <p class="section-subtitle">Recursos exclusivos que fazem a diferença</p>
        </div>
        <div class="features-grid">
          ${features.map((feature, index) => `
            <div class="feature-card stagger-in" style="animation-delay: ${index * 0.1}s">
              <div class="feature-icon">${feature.icon}</div>
              <h3 class="feature-title">${feature.title}</h3>
              <p class="feature-description">${feature.description}</p>
            </div>
          `).join('')}
        </div>
      `;
      
      return section;
    }
    
    function createInstructionsPage() {
      const section = document.createElement('section');
      section.className = 'instructions-page';
      section.innerHTML = `
        <div class="instructions-container">
          <aside class="instructions-sidebar">
            <h3>Navegação</h3>
            <ul>
              <li><a href="#spoofer-section" class="sidebar-link active">Spoofer</a></li>
              <li><a href="#formatacao" class="sidebar-link">Formatação Windows</a></li>
              <li><a href="#bios" class="sidebar-link">Flash BIOS</a></li>
              <li><a href="#spoofing" class="sidebar-link">Spoofando o PC</a></li>
            </ul>
            <div class="community-feedback">
              <a href="https://discord.gg/hypex">Community Feedback</a>
            </div>
          </aside>
          
          <div class="instructions-content">
            <h1 class="page-title">Spoofer - Instruções de Instalação</h1>
            <p class="powered-by">Powered by HYPEX Store</p>
            
            <div class="instruction-section" id="formatacao">
              <h2>
                <span class="section-icon">></span>
                Formatação e Limpeza do Windows
              </h2>
              <p>Você deve realizar uma reinstalação limpa no windows, para limpar qualquer traço e qualquer logs de banimento que o valorant possa gerar no seu Windows.</p>
              
              <div class="instruction-box">
                <div class="instruction-icon">⚠️</div>
                <div class="instruction-content">
                  <h3>Desative todos os antivírus</h3>
                  <p>Desative todos os antivírus que você estiver em seu computador, você pode usar o "Control Defender" para desativar o antivirus do windows permanentemente.</p>
                  <p>Download do desativador de antivírus: <a href="https://download1580.mediafire.com/fu3qbq3ys1pgYTF5APeb_N4KLwbY52kZdAT1ha0Wbc7fWIeGwt0hSfK4FnHh6mOluUg_-S_qK-CCdSIiYZR3_p9Nwd-KSmeSK2GVP32GBSKC0iTQwcASwVz-tGaU_W7DTyOIQzWnh4KYPnNH8H1je8E_0kxPoO8QZrFOQ9XN6baAwQ/30yxgnifiufvr0y/24122024.rar" target="_blank" rel="noopener noreferrer" class="instruction-link">Clique aqui para baixar</a></p>
                  <span class="instruction-note">SENHA: sordum</span>
                </div>
              </div>
              
              <div class="instruction-box">
                <div class="instruction-icon">🔧</div>
                <div class="instruction-content">
                  <h3>Desabilite o Windows Update</h3>
                  <p>Desabilite o windows update usando o WUB</p>
                </div>
              </div>
            </div>
            
            <div class="instruction-section" id="bios">
              <h2>
                <span class="section-icon">></span>
                Flash na BIOS
              </h2>
              <p>Após o flash faça as seguintes alterações na bios:</p>
              
              <div class="bios-grid">
                <div class="bios-card">
                  <h3 class="bios-title">AMD BIOS</h3>
                  <ul class="bios-list">
                    <li>Desabilite PTT (Intel Platform Trust Technology) / TPM</li>
                    <li>Desabilite Trusted Computing / Intel Trust</li>
                    <li>Desabilite Secure Boot</li>
                    <li>Desabilite CSM (Compatibility Support Module)</li>
                    <li>Desabilite VT-x / VT-d (CPU Virtualization) na sua BIOS</li>
                  </ul>
                </div>
                
                <div class="bios-card">
                  <h3 class="bios-title">INTEL BIOS</h3>
                  <ul class="bios-list">
                    <li>Desabilite o TPM 2.0 (Trusted Platform Module)</li>
                    <li>Desabilite Trusted Computing</li>
                    <li>Desabilite Secure Boot</li>
                    <li>Desabilite CSM (Compatibility Support Module)</li>
                    <li>Desabilite SVM (CPU Virtualization) na sua BIOS</li>
                  </ul>
                </div>
              </div>
              
              <p class="bios-note">Após isso, salve as alterações e saia de sua BIOS</p>
            </div>
            
            <div class="instruction-section" id="spoofing">
              <h2>Se estiver como esperado acima, podemos continuar o processo:</h2>
              <h3>
                <span class="section-icon">></span>
                Spoofando o PC
              </h3>
              <div class="coming-soon">
                <p>Instruções detalhadas disponíveis após a compra do produto.</p>
                <a href="https://discord.gg/hypex" class="instruction-cta">Adquirir Spoofer</a>
              </div>
            </div>
            
            <div class="navigation-buttons">
              <button class="nav-btn prev-btn" disabled>Anterior</button>
              <button class="nav-btn next-btn">Próximo</button>
            </div>
            
            <div class="last-updated">
              <p>Spoofer - Instruções</p>
              <p>Última atualização: Janeiro 2025</p>
            </div>
          </div>
        </div>
      `;
      return section;
    }
    
    function createFooter() {
      const footer = document.createElement('footer');
      footer.className = 'footer';
      footer.innerHTML = `
        <div class="footer-content">
          <img src="https://i.postimg.cc/2yrD1y8X/PNG.png" alt="HYPEX Logo" class="footer-logo">
          <p class="footer-text">
            HYPEX Store - Produtos premium para gamers exigentes
          </p>
          <div class="footer-links">
            <a href="#home" class="footer-link">Início</a>
            <a href="#products" class="footer-link">Produtos</a>
            <a href="#features" class="footer-link">Recursos</a>
            <a href="#instructions" class="footer-link">Instruções</a>
            <a href="https://discord.gg/hypex" class="footer-link">Discord</a>
          </div>
          <div class="copyright">
            © 2025 HYPEX Store. Todos os direitos reservados.
          </div>
        </div>
      `;
      return footer;
    }
    
    function initializeAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.stagger-in').forEach(el => {
        observer.observe(el);
      });
    }
    
    function initializeScrollEffects() {
      const header = document.querySelector('.header');
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
      
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
    
    function initializeNavigation() {
      // Handle navigation between pages
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const page = this.dataset.page;
          const hash = this.getAttribute('href');
          
          if (hash === '#instructions') {
            window.location.hash = 'instructions';
            location.reload();
          } else if (page === 'home') {
            window.location.hash = '';
            location.reload();
          }
        });
      });
      
      // Handle sidebar navigation in instructions page
      if (window.location.hash === '#instructions') {
        document.querySelectorAll('.sidebar-link').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        });
      }
    }
