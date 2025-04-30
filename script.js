document.addEventListener('DOMContentLoaded', function() {
    const flashcard = document.getElementById('flashcard');
    const flipBtn = document.getElementById('flip-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const cardCounter = document.getElementById('card-counter');
    const nightModeBtn = document.querySelector('.option-btn:nth-child(3)');
    
    // Данные карточек
    const cards = [
        {
            front: {
                title: "Закон Кулона",
                content: "Как математически выражается закон Кулона?"
            },
            back: {
                title: "Формула закона Кулона",
                content: "F = k * |q₁ * q₂| / r²<br><br>где:<br>F - сила взаимодействия,<br>k - постоянная Кулона,<br>q₁, q₂ - величины зарядов,<br>r - расстояние между зарядами"
            }
        },
        {
            front: {
                title: "Электрическое поле",
                content: "Что такое напряжённость электрического поля?"
            },
            back: {
                title: "Напряжённость электрического поля",
                content: "Напряжённость электрического поля (E) - это векторная величина, характеризующая электрическое поле и равная отношению силы, действующей на пробный заряд, к величине этого заряда:<br><br>E = F/q<br><br>Единица измерения - Н/Кл или В/м"
            }
        },
        {
            front: {
                title: "Потенциал",
                content: "Что такое электрический потенциал?"
            },
            back: {
                title: "Электрический потенциал",
                content: "Электрический потенциал (φ) - это скалярная энергетическая характеристика электрического поля, определяющая потенциальную энергию заряда в данной точке поля:<br><br>φ = W/q<br><br>Единица измерения - Вольт (В)"
            }
        },
        {
            front: {
                title: "Конденсатор",
                content: "Что такое электроёмкость конденсатора?"
            },
            back: {
                title: "Электроёмкость",
                content: "Электроёмкость (C) - это физическая величина, определяющая способность проводника накапливать заряд:<br><br>C = q/Δφ<br><br>Для плоского конденсатора:<br>C = ε₀εS/d<br><br>Единица измерения - Фарад (Ф)"
            }
        },
        {
            front: {
                title: "Диэлектрики",
                content: "Что происходит с диэлектриком в электрическом поле?"
            },
            back: {
                title: "Поляризация диэлектриков",
                content: "В электрическом поле диэлектрик поляризуется - происходит смещение связанных зарядов (электронов относительно ядер) или ориентация полярных молекул. Это ослабляет внутреннее поле в диэлектрике."
            }
        }
    ];
    
    let currentCardIndex = 0;
    
    updateCard();
    
    flashcard.addEventListener('click', flipCard);
    flipBtn.addEventListener('click', flipCard);
    
    function flipCard() {
        flashcard.classList.toggle('flipped');
    }
    
    prevBtn.addEventListener('click', showPrevCard);
    nextBtn.addEventListener('click', showNextCard);
    
    function showPrevCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateCard();
        }
    }
    
    function showNextCard() {
        if (currentCardIndex < cards.length - 1) {
            currentCardIndex++;
            updateCard();
        }
    }
    
    function updateCard() {
        const card = cards[currentCardIndex];
        const front = flashcard.querySelector('.flashcard-front');
        const back = flashcard.querySelector('.flashcard-back');
        
        front.innerHTML = `<h2>${card.front.title}</h2><p>${card.front.content}</p>`;
        back.innerHTML = `<h2>${card.back.title}</h2><p>${card.back.content}</p>`;
        
        cardCounter.textContent = `${currentCardIndex + 1}/${cards.length}`;
        
        if (flashcard.classList.contains('flipped')) {
            flashcard.classList.remove('flipped');
        }
    }
    
    nightModeBtn.addEventListener('click', toggleNightMode);
    
    function toggleNightMode() {
        document.body.classList.toggle('dark-mode');
        const icon = nightModeBtn.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            nightModeBtn.innerHTML = '<i class="fas fa-sun"></i> День';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            nightModeBtn.innerHTML = '<i class="fas fa-moon"></i> Ночь';
        }
    }
    
    const modeButtons = document.querySelectorAll('.mode-btn');
    modeButtons.forEach(button => {
        button.addEventListener('click', function() {
            modeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active-section'));
            
            this.classList.add('active');
            
            const sectionId = this.getAttribute('href');
            document.querySelector(sectionId).classList.add('active-section');
        });
    });
    
    const themeBtn = document.getElementById('theme-btn');
    const bookmarkBtn = document.getElementById('bookmark-btn');
    
    themeBtn.addEventListener('click', toggleTheme);
    bookmarkBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        alert('Карточка добавлена в закладки!');
    });
    
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        console.log('Поиск:', searchTerm);
    });
    
    const readButtons = document.querySelectorAll('.read-btn');
    readButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const cardTitle = this.closest('.theory-card').querySelector('h3').textContent;
            alert(`Открываем материал: "${cardTitle}"`);
        });
    });
    
    setInterval(() => {
        const progressBar = document.querySelector('.progress-bar');
        const currentWidth = parseFloat(progressBar.style.width) || 65;
        const newWidth = Math.min(currentWidth + Math.random() * 2, 100);
        progressBar.style.width = `${newWidth}%`;
        document.querySelector('.progress-text').textContent = 
            `${Math.round(newWidth)}% материала изучено`;
    }, 3000);
});
