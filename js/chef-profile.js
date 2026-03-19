// ===== GET CHEF ID FROM URL =====
const urlParams = new URLSearchParams(window.location.search);
const chefId = urlParams.get('chef') || 'emine';

// ===== CHEF DATABASE WITH RECIPE MAPPING =====
const chefDatabase = {
    'emine': {
        name: 'Emine Teyze',
        title: "Sultan'ın Sofrası",
        location: 'Istanbul, Turkey',
        recipes: '127',
        followers: '15.2k',
        rating: '4.9',
        reviews: '3.4k',
        bio: "Merhaba! I'm Emine Teyze, a traditional Turkish chef from Istanbul with over 25 years of cooking experience. I learned the secrets of Ottoman cuisine from my grandmother and have been sharing these authentic recipes with the world.",
        bio2: "I believe in using fresh, organic ingredients and traditional cooking methods. Every recipe I share has been passed down through generations and tested in my own kitchen. Join me on this delicious journey through Turkish cuisine!",
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
        },
        // EXACT recipes from explore page
        recipeList: [
            {
                name: 'Authentic Döner Kebab',
                image: 'food-blog-img/doner-kebab.png',
                badge: '🔥 Most Popular',
                time: '45 min',
                calories: '520 cal',
                rating: '4.9 (234)',
                description: 'Traditional Turkish döner with perfectly spiced meat...',
                difficulty: 'Medium',
                difficultyClass: 'easy'
            },
            {
                name: 'Turkish Lahmacun',
                image: 'food-blog-img/lahmachun.png',
                badge: '🥇 Chef\'s Pick',
                time: '1.5 hr',
                calories: '380 cal',
                rating: '5.0 (189)',
                description: 'Crispy thin flatbread topped with spiced minced meat...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            },
            {
                name: 'Handmade Manti',
                image: 'food-blog-img/manti.png',
                badge: '🥟 Family Secret',
                time: '2 hr',
                calories: '450 cal',
                rating: '4.8 (156)',
                description: 'Tiny dumplings filled with spiced lamb, served with garlic yogurt...',
                difficulty: 'Hard',
                difficultyClass: 'hard'
            },
            {
                name: 'Pistachio Baklava',
                image: 'food-blog-img/baklava.png',
                badge: '🍯 Signature',
                time: '3 hr',
                calories: '320 cal',
                rating: '5.0 (312)',
                description: 'Layers of flaky phyllo with crushed pistachios and honey syrup...',
                difficulty: 'Hard',
                difficultyClass: 'hard'
            }
        ]
    },
    
    'cool-dude': {
        name: 'Cool Dude',
        title: 'Lazy Cravings',
        location: 'New York, USA',
        recipes: '86',
        followers: '8.7k',
        rating: '4.8',
        reviews: '2.1k',
        bio: "Hey! I'm Cool Dude. I believe that eating healthy doesn't have to be boring or complicated. I create quick, delicious, and nutritious recipes for people with busy lifestyles.",
        bio2: "From 5-minute breakfasts to meal prep ideas that save you time all week, my recipes are designed to be simple, tasty, and actually healthy. No fancy equipment, no hard-to-find ingredients - just real food for real people!",
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
        },
        // EXACT recipes from explore page
        recipeList: [
            {
                name: 'Fresh Fruit Salad',
                image: 'food-blog-img/fruit-salad.jpeg',
                badge: '🥗 Healthy Choice',
                time: '10 min',
                calories: '150 cal',
                rating: '4.9 (89)',
                description: 'Mixed seasonal fruits with honey lime dressing...',
                difficulty: 'Easy',
                difficultyClass: 'easy'
            },
            {
                name: '5-min Avocado Toast',
                image: 'food-blog-img/avocado-toast.jpeg',
                badge: '⚡ Quick Meal',
                time: '5 min',
                calories: '320 cal',
                rating: '4.8 (156)',
                description: 'Healthy breakfast with poached egg and avocado...',
                difficulty: 'Easy',
                difficultyClass: 'easy'
            },
            {
                name: 'Italian Pasta',
                image: 'food-blog-img/pasta.jpeg',
                badge: '🍝 Crowd Favorite',
                time: '20 min',
                calories: '420 cal',
                rating: '4.9 (234)',
                description: 'Creamy garlic pasta with mushrooms and herbs...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            },
            {
                name: 'Chocolate Lava Cake',
                image: 'food-blog-img/lava-cake.jpeg',
                badge: '🍫 Decadent',
                time: '25 min',
                calories: '380 cal',
                rating: '5.0 (178)',
                description: 'Warm gooey center, perfectly baked with melted chocolate...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            }
        ]
    },
    
    'ruby': {
        name: 'Ruby Rahman',
        title: 'Ghoroa Rannabanna',
        location: 'Dhaka, Bangladesh',
        recipes: '94',
        followers: '12.3k',
        rating: '5.0',
        reviews: '2.8k',
        bio: "As-salamu alaykum! I'm Ruby Rahman, sharing authentic Bengali home-style recipes passed down through generations in my family. My kitchen brings the true taste of Bangladesh to your home.",
        bio2: "From traditional pitha to flavorful bhuna khichuri, I specialize in recreating the exact flavors I grew up with. Every recipe tells a story of Bengali culture and tradition.",
        avatar: 'food-blog-img/kitchen-pfp(2).png',
        cover: 'food-blog-img/kitchen-cover.jpg',
        specialties: ['Bengali Cuisine', 'Village Cooking', 'Traditional Desserts', 'Pitha', 'Fish Curries'],
        languages: 'Bengali, English',
        experience: '15+ years',
        awards: 'Best Home Cook 2023',
        students: '67',
        social: {
            instagram: '@rubys_kitchen',
            youtube: 'Ghoroa Rannabanna',
            pinterest: 'Bengali Recipes',
            facebook: 'Rubys Kitchen'
        },
        // EXACT recipes from explore page
        recipeList: [
            {
                name: 'Soft Rosogolla',
                image: 'food-blog-img/rosogolla.png',
                badge: '🍬 Bengali Sweet',
                time: '45 min',
                calories: '280 cal',
                rating: '5.0 (312)',
                description: 'Soft, spongy cottage cheese balls in light sugar syrup...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            },
            {
                name: 'Panta Ilish',
                image: 'food-blog-img/panta-ilish.png',
                badge: '🇧🇩 Traditional',
                time: '30 min',
                calories: '450 cal',
                rating: '4.9 (256)',
                description: 'Fermented rice with fried hilsa, onions, and green chilies...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            },
            {
                name: 'Misti Doi',
                image: 'food-blog-img/misti-doi.png',
                badge: '🍮 Signature',
                time: '6 hrs',
                calories: '220 cal',
                rating: '5.0 (189)',
                description: 'Caramelized yogurt dessert, creamy and perfectly sweet...',
                difficulty: 'Hard',
                difficultyClass: 'hard'
            },
            {
                name: 'Shorshe Ilish',
                image: 'food-blog-img/sorshe-ilish.png',
                badge: '🔥 Most Popular',
                time: '40 min',
                calories: '520 cal',
                rating: '4.9 (278)',
                description: 'Hilsa fish cooked in mustard gravy, a Bengali classic...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            }
        ]
    },
    
    'marco': {
        name: 'Marco Esposito',
        title: 'Italian Kitchen',
        location: 'Rome, Italy',
        recipes: '112',
        followers: '21.5k',
        rating: '4.9',
        reviews: '4.1k',
        bio: "Ciao! I'm Marco, a third-generation chef from Rome. My nonna taught me that Italian cooking is about simplicity, quality ingredients, and lots of love. After working in restaurants across Italy, I decided to share my family's recipes with the world.",
        bio2: "From perfect pasta to wood-fired pizzas, I'll show you the secrets of authentic Italian cooking. No cream in carbonara, no garlic in authentic marinara - just pure, traditional Italian flavors.",
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
        },
        recipeList: [
            {
                name: 'Homemade Pasta',
                image: 'food-blog-img/pasta.png',
                badge: '🍝 Nonna\'s Recipe',
                time: '45 min',
                calories: '380 cal',
                rating: '4.9 (267)',
                description: 'Fresh egg pasta, rolled thin and cut perfectly...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            },
            {
                name: 'Margherita Pizza',
                image: 'food-blog-img/pizza.png',
                badge: '🔥 Wood-Fired',
                time: '20 min',
                calories: '650 cal',
                rating: '5.0 (412)',
                description: 'San Marzano tomatoes, fresh mozzarella, basil...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            },
            {
                name: 'Classic Lasagna',
                image: 'food-blog-img/lasagna.png',
                badge: '🥇 Family Favorite',
                time: '2.5 hrs',
                calories: '580 cal',
                rating: '4.9 (198)',
                description: 'Layers of pasta, ragu, béchamel, and Parmesan...',
                difficulty: 'Hard',
                difficultyClass: 'hard'
            },
            {
                name: 'Tiramisu',
                image: 'food-blog-img/tiramisu.png',
                badge: '☕ Perfecto',
                time: '30 min',
                calories: '320 cal',
                rating: '5.0 (356)',
                description: 'Coffee-soaked ladyfingers with mascarpone cream...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            }
        ]
    },
    
    'kenji': {
        name: 'Kenji Tanaka',
        title: 'Sakura Palace',
        location: 'Tokyo, Japan',
        recipes: '78',
        followers: '18.9k',
        rating: '5.0',
        reviews: '3.2k',
        bio: "Konnichiwa! I'm Chef Kenji Tanaka. I grew up in my family's sushi restaurant in Tokyo, where I learned that sushi is an art form that takes a lifetime to master. After 15 years of training, I now want to share the beauty of Japanese cuisine with home cooks.",
        bio2: "My classes focus on technique, precision, and respect for ingredients. Whether you want to learn proper knife skills, make perfect sushi rice, or understand the nuances of dashi, I will guide you through every step.",
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
        },
        recipeList: [
            {
                name: 'Nigiri Sushi',
                image: 'food-blog-img/sushi.png',
                badge: '🍣 Masterpiece',
                time: '1 hr',
                calories: '320 cal',
                rating: '5.0 (289)',
                description: 'Hand-pressed sushi with fresh fish and seasoned rice...',
                difficulty: 'Hard',
                difficultyClass: 'hard'
            },
            {
                name: 'Tonkotsu Ramen',
                image: 'food-blog-img/ramen.png',
                badge: '🍜 Rich Broth',
                time: '8 hrs',
                calories: '580 cal',
                rating: '4.9 (234)',
                description: 'Creamy pork bone broth with chashu and soft egg...',
                difficulty: 'Hard',
                difficultyClass: 'hard'
            },
            {
                name: 'Crispy Tempura',
                image: 'food-blog-img/tempura.png',
                badge: '🥢 Light & Crispy',
                time: '30 min',
                calories: '420 cal',
                rating: '4.8 (167)',
                description: 'Perfectly battered and fried seafood and vegetables...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            },
            {
                name: 'Matcha Mochi',
                image: 'food-blog-img/mochi.png',
                badge: '🍵 Sweet Treat',
                time: '45 min',
                calories: '180 cal',
                rating: '4.9 (145)',
                description: 'Chewy rice cakes filled with sweet red bean paste...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            }
        ]
    },
    
    'ricardo': {
        name: 'Ricardo Gomez',
        title: 'La Parrilla Ahumada',
        location: 'Mexico City, Mexico',
        recipes: '67',
        followers: '14.2k',
        rating: '4.8',
        reviews: '1.9k',
        bio: "¡Hola, amigos! I'm Ricardo, and I'm passionate about Mexican cuisine - especially food cooked over fire. My restaurant 'La Parrilla Ahumada' (The Smoky Grill) has been serving authentic Mexican dishes for 12 years.",
        bio2: "From perfect tortillas to complex moles, from street tacos to celebratory feasts - Mexican food is diverse, colorful, and full of flavor. I focus on traditional techniques, regional specialties, and the vibrant ingredients that make Mexican cuisine unique.",
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
        },
        recipeList: [
            {
                name: 'Street Tacos',
                image: 'food-blog-img/tacos.png',
                badge: '🌮 Al Pastor',
                time: '30 min',
                calories: '350 cal',
                rating: '4.9 (234)',
                description: 'Corn tortillas with marinated pork, pineapple, and onion...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            },
            {
                name: 'Quesadillas',
                image: 'food-blog-img/quesadilla.png',
                badge: '🧀 Cheesy',
                time: '15 min',
                calories: '420 cal',
                rating: '4.8 (156)',
                description: 'Flour tortillas filled with Oaxaca cheese and huitlacoche...',
                difficulty: 'Easy',
                difficultyClass: 'easy'
            },
            {
                name: 'Guacamole',
                image: 'food-blog-img/guacamole.png',
                badge: '🥑 Fresh',
                time: '10 min',
                calories: '180 cal',
                rating: '5.0 (312)',
                description: 'Creamy avocados with lime, cilantro, and serrano...',
                difficulty: 'Easy',
                difficultyClass: 'easy'
            },
            {
                name: 'Churros',
                image: 'food-blog-img/churros.png',
                badge: '🍩 Crispy',
                time: '25 min',
                calories: '290 cal',
                rating: '4.9 (189)',
                description: 'Fried dough pastries rolled in cinnamon sugar...',
                difficulty: 'Medium',
                difficultyClass: 'medium'
            }
        ]
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
    
    // ===== UPDATE RECIPES GRID =====
    const recipesGrid = document.querySelector('.recipes-grid');
    if (recipesGrid && chef.recipeList) {
        recipesGrid.innerHTML = ''; // Clear existing recipes
        
        chef.recipeList.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            
            recipeCard.innerHTML = `
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    <span class="recipe-badge">${recipe.badge}</span>
                    <button class="save-recipe"><i class="far fa-bookmark"></i></button>
                </div>
                <div class="recipe-info">
                    <h3 class="recipe-title">${recipe.name}</h3>
                    <div class="recipe-meta">
                        <span><i class="far fa-clock"></i> ${recipe.time}</span>
                        <span><i class="fas fa-fire"></i> ${recipe.calories}</span>
                        <span><i class="fas fa-star"></i> ${recipe.rating}</span>
                    </div>
                    <p class="recipe-desc">${recipe.description}</p>
                    <div class="recipe-footer">
                        <span class="difficulty ${recipe.difficultyClass}"><i class="fas fa-thermometer-half"></i> ${recipe.difficulty}</span>
                        <a href="recipe.html?recipe=${encodeURIComponent(recipe.name.toLowerCase().replace(/\s+/g, '-'))}" class="view-recipe">View Recipe →</a>
                    </div>
                </div>
            `;
            
            recipesGrid.appendChild(recipeCard);
        });
        
        // Re-attach save recipe event listeners to new buttons
        attachSaveRecipeListeners();
    }
    
    // Update "View All" link text
    const viewAllLink = document.querySelector('.view-all-link');
    if (viewAllLink) {
        viewAllLink.innerHTML = `View All (${chef.recipes}) <i class="fas fa-arrow-right"></i>`;
    }
    
    // Page title
    document.title = `${chef.name} | Healthy Kitchen`;
    
    console.log(`Loaded chef: ${chef.name} with ${chef.recipeList.length} recipes`);
}

// ===== ATTACH SAVE RECIPE LISTENERS =====
function attachSaveRecipeListeners() {
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

// ===== VIEW RECIPE BUTTONS (will be overridden by dynamic ones) =====
// This is just a fallback for any static buttons
const viewRecipeBtns = document.querySelectorAll('.view-recipe:not(.dynamic)');

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

// Animate all cards (will run after DOM loads)
function animateCards() {
    document.querySelectorAll('.recipe-card, .category-card, .review-card, .class-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Run animation after content updates
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateCards, 100); // Small delay to ensure recipes are loaded
});

// Re-run animation when recipes are updated
const originalUpdate = updateChefProfile;
updateChefProfile = function() {
    originalUpdate();
    setTimeout(animateCards, 100);
};
