// ===== RECIPE CARD CLICK - GO TO RECIPE PAGE =====
document.querySelectorAll('.card-item').forEach(card => {
    card.addEventListener('click', function(e) {
        e.stopPropagation(); // Stop from triggering parent container
        e.preventDefault();
        
        // Get recipe name from card
        const recipeTitle = this.querySelector('.card-title')?.textContent;
        
        // Map recipe names to IDs
        const recipeMap = {
            'Easy Mojito': 'mojito',
            'Homemade Mayonnaise': 'mayonese',
            'Steamed Momos': 'manti',
            'Turkish Lahmacun': 'lahmacun',
            'Fresh Fruit Salad': 'fruit-salad',
            '5-min Avocado Toast': 'avocado-toast',
            'Italian Pasta': 'italian-pasta',
            'Chocolate Lava Cake': 'lava-cake'
        };
        
        const recipeId = recipeMap[recipeTitle];
        
        if (recipeId) {
            window.location.href = `recipe.html?id=${recipeId}`;
        }
    });
});

// ===== KITCHEN CONTAINER CLICK - GO TO CHEF PROFILE =====
document.querySelectorAll('.kitchen-section .container').forEach((container, index) => {
    container.style.cursor = 'pointer';
    
    container.addEventListener('click', function(e) {
        // Don't redirect if clicking on recipe card
        if (e.target.closest('.card-item')) {
            return;
        }
        
        // First container = Emine Teyze, Second = Cool Dude
        const chefId = index === 0 ? 'emine' : 'cool-dude';
        window.location.href = `chef-profile.html?chef=${chefId}`;
    });
});

// ===== CUISINE CARD CLICK - GO TO RECIPE PAGE =====
document.querySelectorAll('.cuisine-cards .card').forEach(card => {
    card.addEventListener('click', function() {
        const recipeTitle = this.querySelector('h3')?.textContent;
        
        const recipeMap = {
            'Döner Kebab': 'doner-kebab',
            'Lahmacun': 'lahmacun',
            'Manti': 'manti',
            'Baklava': 'baklava',
            'Dolma': 'dolma',
            'Turkish plater': 'turkish-platter',
            'Biryani': 'biryani',
            'Chicken Karhai': 'chicken-karhai',
            'Butter Chicken': 'butter-chicken',
            'Dosa': 'dosa',
            'Grilled Skewers': 'grilled-skewers',
            'Carne Asada': 'carne-asada',
            'Pasta': 'italian-pasta',
            'Pizza': 'pizza',
            'Sushi': 'sushi',
            'Grilled Salmon': 'grilled-salmon',
            'Bossam Platter': 'bossam-platter'
        };
        
        const recipeId = recipeMap[recipeTitle];
        if (recipeId) {
            window.location.href = `recipe.html?id=${recipeId}`;
        }
    });
});

// ===== SPOTLIGHT RECIPE BUTTONS =====
document.querySelector('.spotlight-featured .recipe-btn')?.addEventListener('click', () => {
    window.location.href = 'recipe.html?id=grilled-fish';
});

document.querySelector('.spotlight-featured .save-btn')?.addEventListener('click', function(e) {
    e.stopPropagation();
    const icon = this.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        this.style.background = '#e74c3c';
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        this.style.background = '';
    }
});

document.querySelector('.preview-card')?.addEventListener('click', () => {
    window.location.href = 'recipe.html?id=fajita';
});

// ===== SEARCH FUNCTIONALITY =====
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for "${query}"...`);
            // You can redirect to search page
            // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// ===== NEWSLETTER SUBSCRIBE =====
const subscribeBtn = document.querySelector('.subscribe-btn');
const emailInput = document.querySelector('.newsletter-box input');

if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        if (email && email.includes('@') && email.includes('.')) {
            alert('Thanks for subscribing! 🎉');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address');
        }
    });
}

// ===== TAB FUNCTIONALITY =====
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.cuisine-cards .card');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const selectedCuisine = tab.textContent.toLowerCase();
        
        cards.forEach(card => {
            if (card.dataset.cuisine === selectedCuisine) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    });
});

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.scroll-section').forEach(section => {
    observer.observe(section);
});

// ===== FLOATING BUTTON (if exists) =====
const fabMain = document.getElementById('fabMain');
const floatingAction = document.querySelector('.floating-action');

if (fabMain) {
    fabMain.addEventListener('click', () => {
        floatingAction?.classList.toggle('active');
        const icon = fabMain.querySelector('i');
        if (icon) {
            icon.style.transform = floatingAction?.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0deg)';
        }
    });
    
    document.addEventListener('click', (e) => {
        if (floatingAction && !floatingAction.contains(e.target)) {
            floatingAction.classList.remove('active');
            const icon = fabMain.querySelector('i');
            if (icon) icon.style.transform = 'rotate(0deg)';
        }
    });
}

// ===== FOLLOW BUTTONS (if any in home page) =====
document.querySelectorAll('.follow-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (this.textContent === '+ Follow') {
            this.textContent = 'Following ✓';
            this.style.background = '#4caf50';
            this.style.color = 'white';
        } else {
            this.textContent = '+ Follow';
            this.style.background = 'transparent';
            this.style.color = '#4caf50';
        }
    });
});

console.log('Index.js loaded - Ready to navigate!');
