// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const kitchenCards = document.querySelectorAll('.kitchen-card');

function searchKitchens() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;
    
    kitchenCards.forEach(card => {
        const kitchenName = card.querySelector('.kitchen-name').textContent.toLowerCase();
        const kitchenTitle = card.querySelector('.kitchen-title').textContent.toLowerCase();
        const location = card.querySelector('.kitchen-meta span:first-child').textContent.toLowerCase();
        
        if (kitchenName.includes(searchTerm) || 
            kitchenTitle.includes(searchTerm) || 
            location.includes(searchTerm) ||
            searchTerm === '') {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update count only
    const countSpan = document.querySelector('.count');
    if (countSpan) {
        countSpan.textContent = `(${visibleCount} kitchens)`;
    }
}

// Search button click
if (searchBtn) {
    searchBtn.addEventListener('click', searchKitchens);
}

// Search on Enter key
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchKitchens();
        }
    });
}

// ===== FILTER BUTTONS =====
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        btn.classList.add('active');
        
        const filter = btn.textContent.toLowerCase().trim();
        
        // Filter logic
        kitchenCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else if (filter === 'most popular') {
                const rating = parseFloat(card.querySelector('.rating-text').textContent.split(' ')[0]);
                card.style.display = rating >= 4.8 ? 'block' : 'none';
            } else if (filter === 'new') {
                const index = Array.from(kitchenCards).indexOf(card);
                card.style.display = index < 3 ? 'block' : 'none';
            } else if (filter === 'near you') {
                const location = card.querySelector('.kitchen-meta span:first-child').textContent;
                card.style.display = (location.includes('USA') || location.includes('New York')) ? 'block' : 'none';
            }
        });
        
        // Update count
        const visibleCount = document.querySelectorAll('.kitchen-card[style="display: block"]').length;
        const countSpan = document.querySelector('.count');
        if (countSpan) {
            countSpan.textContent = `(${visibleCount} kitchens)`;
        }
    });
});

// ===== POPULAR TAGS =====
const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
    tag.addEventListener('click', (e) => {
        e.preventDefault();
        searchInput.value = tag.textContent;
        searchKitchens();
    });
});

// ===== FOLLOW BUTTONS =====
const followBtns = document.querySelectorAll('.follow-btn');

followBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (this.textContent === '+ Follow') {
            this.textContent = 'Following ✓';
            this.style.background = '#4CAF50';
            this.style.color = 'white';
            this.style.border = 'none';
        } else {
            this.textContent = '+ Follow';
            this.style.background = 'transparent';
            this.style.color = '#4CAF50';
            this.style.border = '2px solid #4CAF50';
        }
        
        // Simple animation only
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// ===== VIEW KITCHEN BUTTONS =====
// Just let HTML links work naturally - no JavaScript interference

// ===== RECIPE PREVIEW CLICK =====
const previewItems = document.querySelectorAll('.preview-item:not(.more)');

previewItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        // Just animation, no alerts
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// ===== "MORE" PREVIEW CLICK =====
const morePreviews = document.querySelectorAll('.preview-item.more');

morePreviews.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation();
        // Just animation, no alerts
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// ===== LOAD MORE BUTTON =====
const loadMoreBtn = document.querySelector('.load-more-btn');

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        // Simple loading state
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 800);
    });
}

// ===== FLOATING ACTION BUTTON =====
const fabMain = document.getElementById('fabMain');
const floatingAction = document.querySelector('.floating-action');

if (fabMain) {
    fabMain.addEventListener('click', () => {
        floatingAction.classList.toggle('active');
        
        const icon = fabMain.querySelector('i');
        icon.style.transform = floatingAction.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0deg)';
    });
    
    // Close FAB when clicking outside
    document.addEventListener('click', (e) => {
        if (!floatingAction.contains(e.target)) {
            floatingAction.classList.remove('active');
            fabMain.querySelector('i').style.transform = 'rotate(0deg)';
        }
    });
}

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

// Animate cards
document.querySelectorAll('.kitchen-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Initial count
const initialCount = kitchenCards.length;
const countSpan = document.querySelector('.count');
if (countSpan) {
    countSpan.textContent = `(${initialCount} kitchens)`;
}
