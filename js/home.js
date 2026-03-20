// ===== RECIPE CARD CLICK - SINGLE CLICK ONLY =====
document.querySelectorAll('.card-item').forEach(card => {
    card.addEventListener('click', function(e) {
        e.stopPropagation(); // Stop from triggering parent container
        const recipeId = this.dataset.recipe;
        if (recipeId) {
            window.location.href = `recipe.html?id=${recipeId}`;
        }
    });
});

// ===== KITCHEN CONTAINER CLICK - ONLY IF NOT CLICKING ON RECIPE CARD =====
document.querySelectorAll('.kitchen-section .container').forEach(container => {
    container.addEventListener('click', function(e) {
        // Don't redirect if clicking on recipe card or its children
        if (e.target.closest('.card-item')) {
            return;
        }
        const chef = this.dataset.chef;
        if (chef) {
            window.location.href = `chef-profile.html?chef=${chef}`;
        }
    });
});

// ===== CUISINE CARD CLICK =====
document.querySelectorAll('.cuisine-cards .card').forEach(card => {
    card.addEventListener('click', function(e) {
        e.stopPropagation();
        const recipeId = this.dataset.recipe;
        if (recipeId) {
            window.location.href = `recipe.html?id=${recipeId}`;
        }
    });
});

// ===== TAB FUNCTIONALITY =====
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.cuisine-cards .card');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.stopPropagation();
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const selected = tab.dataset.cuisine;
        cards.forEach(card => {
            if (card.dataset.cuisine === selected) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    });
});

// ===== SPOTLIGHT SAVE BUTTON =====
const saveBtn = document.querySelector('.spotlight-featured .save-btn');
if (saveBtn) {
    saveBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            this.style.background = '#e74c3c';
            this.style.color = 'white';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            this.style.background = 'transparent';
            this.style.color = '#4caf50';
        }
    });
}

// ===== SPOTLIGHT RECIPE BUTTON =====
const recipeBtn = document.querySelector('.spotlight-featured .recipe-btn');
if (recipeBtn) {
    recipeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.location.href = 'recipe.html?id=grilled-fish';
    });
}

// ===== PREVIEW CARD CLICK =====
const previewCard = document.querySelector('.preview-card');
if (previewCard) {
    previewCard.addEventListener('click', () => {
        window.location.href = 'recipe.html?id=fajita';
    });
}

// ===== SEARCH =====
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) alert(`Searching for "${query}"...`);
    });
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });
}

// ===== NEWSLETTER =====
const subscribeBtn = document.querySelector('.subscribe-btn');
const emailInput = document.querySelector('.newsletter-box input');

if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener('click', () => {
        const email = emailInput.value.trim();
        if (email && email.includes('@') && email.includes('.')) {
            alert('Thanks for subscribing! 🎉');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email');
        }
    });
}

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

// ===== INITIAL CUISINE CARDS =====
document.querySelectorAll('.card[data-cuisine="turkish"]').forEach(card => {
    card.classList.add('show');
});

console.log('✅ All click handlers loaded - No double click issues!');
