// ===== FLOATING ACTION BUTTON =====
const fabMain = document.getElementById('fabMain');
const floatingAction = document.querySelector('.floating-action');

if (fabMain) {
    fabMain.addEventListener('click', () => {
        floatingAction.classList.toggle('active');
        
        // Rotate icon
        const icon = fabMain.querySelector('i');
        if (floatingAction.classList.contains('active')) {
            icon.style.transform = 'rotate(45deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    });
    
    // Close FAB when clicking outside
    document.addEventListener('click', (e) => {
        if (!floatingAction.contains(e.target)) {
            floatingAction.classList.remove('active');
            const icon = fabMain.querySelector('i');
            icon.style.transform = 'rotate(0deg)';
        }
    });
}

// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const kitchenCards = document.querySelectorAll('.kitchen-card');

function searchKitchens() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    kitchenCards.forEach(card => {
        const kitchenName = card.querySelector('.kitchen-name').textContent.toLowerCase();
        const kitchenTitle = card.querySelector('.kitchen-title').textContent.toLowerCase();
        const location = card.querySelector('.kitchen-meta span:first-child').textContent.toLowerCase();
        
        if (kitchenName.includes(searchTerm) || 
            kitchenTitle.includes(searchTerm) || 
            location.includes(searchTerm) ||
            searchTerm === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update count
    const visibleCount = document.querySelectorAll('.kitchen-card[style="display: block"]').length;
    const countSpan = document.querySelector('.count');
    if (countSpan) {
        countSpan.textContent = `(${visibleCount} kitchens)`;
    }
}

if (searchBtn) {
    searchBtn.addEventListener('click', searchKitchens);
}

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
        
        const filter = btn.textContent.toLowerCase();
        
        kitchenCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else if (filter === 'most popular') {
                // You can add logic here
                card.style.display = 'block';
            } else if (filter === 'new') {
                card.style.display = 'block';
            } else if (filter === 'near you') {
                card.style.display = 'block';
            }
        });
    });
});

// ===== FOLLOW BUTTONS =====
const followBtns = document.querySelectorAll('.follow-btn');

followBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent === '+ Follow') {
            this.textContent = 'Following ✓';
            this.style.background = '#4CAF50';
            this.style.color = 'white';
        } else {
            this.textContent = '+ Follow';
            this.style.background = 'transparent';
            this.style.color = '#4CAF50';
        }
    });
});

// ===== LOAD MORE BUTTON =====
const loadMoreBtn = document.querySelector('.load-more-btn');
let currentPage = 1;

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        currentPage++;
        
        // Simulate loading
        this.textContent = 'Loading...';
        this.disabled = true;
        
        setTimeout(() => {
            // Here you would load more kitchens from your backend
            this.textContent = 'Load More Kitchens';
            this.disabled = false;
            
            // Show success message
            alert(`Page ${currentPage} loaded! (Demo - Add more cards here)`);
        }, 1000);
    });
}

// ===== POPULAR TAGS =====
const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
    tag.addEventListener('click', (e) => {
        e.preventDefault();
        const tagText = tag.textContent;
        searchInput.value = tagText;
        searchKitchens();
    });
});

// ===== RECIPE PREVIEW CLICK =====
const previewItems = document.querySelectorAll('.preview-item');

previewItems.forEach(item => {
    item.addEventListener('click', () => {
        const recipeName = item.querySelector('.recipe-name')?.textContent || 'Recipe';
        alert(`Viewing recipe: ${recipeName}`);
        // Here you would navigate to recipe page
    });
});

// ===== VIEW KITCHEN BUTTONS =====
const viewBtns = document.querySelectorAll('.view-kitchen-btn');

viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const kitchenName = btn.closest('.kitchen-card').querySelector('.kitchen-name').textContent;
        alert(`Navigating to ${kitchenName}'s kitchen...`);
        // Here you would go to kitchen detail page
    });
});

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

kitchenCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// ===== INITIAL COUNT =====
const initialCount = kitchenCards.length;
const countSpan = document.querySelector('.count');
if (countSpan) {
    countSpan.textContent = `(${initialCount} kitchens)`;
}
