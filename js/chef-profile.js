// ===== GET CHEF ID FROM URL =====
const urlParams = new URLSearchParams(window.location.search);
const chefId = urlParams.get('chef') || 'emine';

// ===== CHEF DATABASE =====
const chefDatabase = {
    'emine': {
        name: 'Emine Teyze',
        title: "Sultan'ın Sofrası",
        location: 'Istanbul, Turkey',
        recipes: '127',
        followers: '15.2k',
        rating: '4.9',
        reviews: '3.4k',
        bio: "Merhaba! I'm Emine Teyze, a traditional Turkish chef from Istanbul with over 25 years of cooking experience.",
        bio2: 'I believe in using fresh, organic ingredients and traditional cooking methods passed down through generations.',
        avatar: 'food-blog-img/kitchen-pfp(1).png',
        cover: 'food-blog-img/kitchen-cover.jpg',
        specialties: ['Traditional Turkish', 'Ottoman Cuisine', 'Baklava', 'Kebabs', 'Mezes', 'Desserts'],
        languages: 'Turkish, English',
        experience: '25+ years',
        awards: 'Golden Ladle 2023',
        students: '48',
        social: {
            instagram: '@emine_teyze',
            youtube: 'Emine\'s Kitchen',
            pinterest: 'Turkish Recipes',
            facebook: 'Sultan\'s Table'
        }
    },
    
    'cool-dude': {
        name: 'Cool Dude',
        title: 'Lazy Cravings',
        location: 'New York, USA',
        recipes: '86',
        followers: '8.7k',
        rating: '4.8',
        reviews: '2.1k',
        bio: "Hey! I'm Cool Dude. I create quick, delicious, and nutritious recipes for people with busy lifestyles.",
        bio2: 'From 5-minute breakfasts to meal prep ideas - real food for real people!',
        avatar: 'food-blog-img/kitchen-pfp.jpeg',
        cover: 'food-blog-img/kitchen-cover.jpg',
        specialties: ['Quick Meals', 'Healthy Breakfast', 'Meal Prep', 'Low-Calorie', 'High Protein'],
        languages: 'English, Spanish',
        experience: '8 years',
        awards: 'Rising Chef 2024',
        students: '124',
        social: {
            instagram: '@cool_dude_eats',
            youtube: 'Cool Dude Kitchen',
            pinterest: 'Quick Healthy Meals',
            facebook: 'Lazy Cravings'
        }
    },
    
    'ayse': {
        name: 'Ayşe Hatun',
        title: 'Anatolian Kitchen',
        location: 'Izmir, Turkey',
        recipes: '94',
        followers: '12.3k',
        rating: '5.0',
        reviews: '2.8k',
        bio: "Hoş geldiniz! I'm Ayşe, sharing authentic Anatolian recipes passed down for generations.",
        bio2: 'My cooking combines traditional Turkish techniques with fresh village ingredients.',
        avatar: 'food-blog-img/kitchen-pfp(1).png',
        cover: 'food-blog-img/kitchen-cover.jpg',
        specialties: ['Vegetarian Turkish', 'Village Cooking', 'Bread Baking', 'Olive Oil Dishes'],
        languages: 'Turkish, English',
        experience: '30+ years',
        awards: 'Traditional Cuisine Award 2023',
        students: '67',
        social: {
            instagram: '@ayse_anatolian',
            youtube: 'Anatolian Kitchen',
            pinterest: 'Turkish Village Recipes',
            facebook: 'Ayşe\'s Anatolian Table'
        }
    },
    
    'marco': {
        name: 'Marco Esposito',
        title: 'Italian Kitchen',
        location: 'Rome, Italy',
        recipes: '112',
        followers: '21.5k',
        rating: '4.9',
        reviews: '4.1k',
        bio: "Ciao! I'm Marco, sharing my family's authentic Italian recipes from Rome.",
        bio2: 'Simple ingredients, traditional techniques, and lots of love - that\'s Italian cooking!',
        avatar: 'food-blog-img/kitchen-pfp.jpeg',
        cover: 'food-blog-img/kitchen-cover.jpg',
        specialties: ['Pasta Making', 'Pizza', 'Italian Desserts', 'Sauces', 'Regional Italian'],
        languages: 'Italian, English',
        experience: '20 years',
        awards: 'Best Pasta 2024',
        students: '156',
        social: {
            instagram: '@marco_cooks',
            youtube: 'Marco\'s Italian Kitchen',
            pinterest: 'Authentic Italian',
            facebook: 'Marco Esposito Cuisine'
        }
    },
    
    'kenji': {
        name: 'Kenji Tanaka',
        title: 'Sakura Palace',
        location: 'Tokyo, Japan',
        recipes: '78',
        followers: '18.9k',
        rating: '5.0',
        reviews: '3.2k',
        bio: "Konnichiwa! I'm Chef Kenji Tanaka, sharing the art of Japanese cuisine.",
        bio2: 'Precision, respect for ingredients, and beautiful presentation - the Japanese way.',
        avatar: 'food-blog-img/kitchen-pfp(1).png',
        cover: 'food-blog-img/kitchen-cover.jpg',
        specialties: ['Sushi', 'Knife Skills', 'Japanese Soups', 'Tempura', 'Bento'],
        languages: 'Japanese, English',
        experience: '22 years',
        awards: 'Sushi Master 2023',
        students: '89',
        social: {
            instagram: '@kenji_sakura',
            youtube: 'Kenji\'s Japanese Kitchen',
            pinterest: 'Japanese Cooking',
            facebook: 'Sakura Palace Kitchen'
        }
    },
    
    'ricardo': {
        name: 'Ricardo Gomez',
        title: 'La Parrilla Ahumada',
        location: 'Mexico City, Mexico',
        recipes: '67',
        followers: '14.2k',
        rating: '4.8',
        reviews: '1.9k',
        bio: "¡Hola! I'm Ricardo, sharing authentic Mexican cuisine and grilling techniques.",
        bio2: 'From street tacos to celebratory feasts - colorful, bold, and full of flavor.',
        avatar: 'food-blog-img/kitchen-pfp.jpeg',
        cover: 'food-blog-img/kitchen-cover.jpg',
        specialties: ['Grilling', 'Tacos', 'Moles', 'Salsas', 'Tortillas'],
        languages: 'Spanish, English',
        experience: '18 years',
        awards: 'Best Tacos 2024',
        students: '52',
        social: {
            instagram: '@ricardo_grill',
            youtube: 'Parrilla Ahumada',
            pinterest: 'Mexican Recipes',
            facebook: 'La Parrilla Ahumada'
        }
    }
};

// ===== GET CURRENT CHEF DATA =====
const chef = chefDatabase[chefId] || chefDatabase['emine'];

// ===== UPDATE PAGE CONTENT =====
function updateChefProfile() {
    // Header section
    document.querySelector('.chef-name').textContent = chef.name;
    document.querySelector('.chef-title').textContent = chef.title;
    
    // Badges
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        if (badge.querySelector('.fa-map-marker-alt')) {
            badge.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${chef.location}`;
        }
    });
    
    // Stats
    const statValues = document.querySelectorAll('.stat-value');
    if (statValues.length >= 4) {
        statValues[0].textContent = chef.recipes;
        statValues[1].textContent = chef.followers;
        statValues[2].textContent = chef.rating;
        statValues[3].textContent = chef.reviews;
    }
    
    // Images
    document.querySelector('.chef-avatar').src = chef.avatar;
    document.querySelector('.cover-img').src = chef.cover;
    
    // Bio
    const bioParagraphs = document.querySelectorAll('.bio-text');
    if (bioParagraphs.length >= 2) {
        bioParagraphs[0].textContent = chef.bio;
        bioParagraphs[1].textContent = chef.bio2;
    }
    
    // Specialties
    const specialtyContainer = document.querySelector('.specialty-tags');
    if (specialtyContainer) {
        specialtyContainer.innerHTML = '';
        chef.specialties.forEach(specialty => {
            const tag = document.createElement('span');
            tag.className = 'specialty-tag';
            tag.textContent = specialty;
            specialtyContainer.appendChild(tag);
        });
    }
    
    // Quick info
    const infoList = document.querySelector('.info-list');
    if (infoList) {
        const infoItems = infoList.querySelectorAll('li');
        if (infoItems.length >= 5) {
            infoItems[1].innerHTML = `<i class="fas fa-language"></i> <strong>Languages:</strong> ${chef.languages}`;
            infoItems[2].innerHTML = `<i class="fas fa-clock"></i> <strong>Experience:</strong> ${chef.experience}`;
            infoItems[3].innerHTML = `<i class="fas fa-trophy"></i> <strong>Awards:</strong> ${chef.awards}`;
            infoItems[4].innerHTML = `<i class="fas fa-users"></i> <strong>Classes:</strong> ${chef.students} students`;
        }
    }
    
    // Social links
    const socialLinks = document.querySelectorAll('.social-link');
    if (socialLinks.length >= 4) {
        socialLinks[0].innerHTML = `<i class="fab fa-instagram"></i> ${chef.social.instagram}`;
        socialLinks[1].innerHTML = `<i class="fab fa-youtube"></i> ${chef.social.youtube}`;
        socialLinks[2].innerHTML = `<i class="fab fa-pinterest"></i> ${chef.social.pinterest}`;
        socialLinks[3].innerHTML = `<i class="fab fa-facebook"></i> ${chef.social.facebook}`;
    }
    
    // Page title
    document.title = `${chef.name} | Healthy Kitchen`;
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', updateChefProfile);

// ===== FOLLOW BUTTON =====
const followBtn = document.getElementById('followBtn');

if (followBtn) {
    followBtn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        const text = this.querySelector('span');
        
        if (this.classList.contains('following')) {
            this.classList.remove('following');
            icon.className = 'fas fa-plus';
            text.textContent = 'Follow';
            this.style.background = '#4CAF50';
        } else {
            this.classList.add('following');
            icon.className = 'fas fa-check';
            text.textContent = 'Following';
            this.style.background = '#ff6b6b';
        }
        
        // Simple animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
}

// ===== SHARE BUTTON =====
const shareBtn = document.getElementById('shareBtn');

if (shareBtn) {
    shareBtn.addEventListener('click', function() {
        // Just copy link to clipboard
        navigator.clipboard?.writeText(window.location.href);
        
        // Visual feedback only
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
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
    
    document.addEventListener('click', (e) => {
        if (!floatingAction.contains(e.target)) {
            floatingAction.classList.remove('active');
            fabMain.querySelector('i').style.transform = 'rotate(0deg)';
        }
    });
}

// ===== SAVE RECIPE BUTTONS =====
const saveButtons = document.querySelectorAll('.save-recipe');

saveButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const icon = this.querySelector('i');
        
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#ff6b6b';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            icon.style.color = '';
        }
        
        // Animation
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// ===== LOAD MORE REVIEWS =====
const loadMoreBtn = document.querySelector('.load-more-btn');

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
        }, 800);
    });
}

// ===== JOIN CLASS BUTTONS =====
const joinClassBtns = document.querySelectorAll('.join-class-btn');

joinClassBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Just animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// ===== VIEW RECIPE BUTTONS =====
const viewRecipeBtns = document.querySelectorAll('.view-recipe');

viewRecipeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        // Just animation
        btn.style.transform = 'translateX(5px)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
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

// Animate all cards
document.querySelectorAll('.recipe-card, .category-card, .review-card, .class-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});
