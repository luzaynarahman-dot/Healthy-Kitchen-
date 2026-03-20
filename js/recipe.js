// ===== GET RECIPE ID FROM URL =====
const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id') || 'doner-kebab';

// ===== RECIPE DATABASE =====
const recipeDatabase = {
    'doner-kebab': {
        title: 'Authentic Döner Kebab',
        category: 'Main Dish',
        cuisine: 'Turkish',
        prepTime: '45 mins',
        calories: '520 cal',
        rating: '4.9 (234 reviews)',
        difficulty: 'Medium',
        chef: 'Emine Teyze',
        chefAvatar: 'food-blog-img/kitchen-pfp(1).png',
        image: 'food-blog-img/doner-kebab.png',
        badge: '🔥 Most Popular',
        description: 'Traditional Turkish döner with perfectly spiced meat...',
        nutrition: { calories: '520', protein: '32g', carbs: '45g', fat: '22g', fiber: '6g', sugar: '8g' },
        time: { prep: '20 mins', cook: '25 mins', total: '45 mins' },
        equipment: ['Large knife', 'Cutting board', 'Mixing bowls', 'Grill or pan', 'Meat thermometer'],
        tags: ['Turkish', 'Kebab', 'Grilled', 'High Protein', 'Dinner', 'Traditional'],
        tip: 'For extra flavor, add a pinch of sumac to the yogurt sauce!'
    },
    'lahmacun': {
        title: 'Turkish Lahmacun',
        category: 'Main Dish',
        cuisine: 'Turkish',
        prepTime: '1.5 hr',
        calories: '380 cal',
        rating: '5.0 (189 reviews)',
        difficulty: 'Medium',
        chef: 'Emine Teyze',
        chefAvatar: 'food-blog-img/kitchen-pfp(1).png',
        image: 'food-blog-img/lahmachun.png',
        badge: '🥇 Chef\'s Pick',
        description: 'Crispy thin flatbread topped with spiced minced meat...',
        nutrition: { calories: '380', protein: '18g', carbs: '42g', fat: '15g', fiber: '4g', sugar: '6g' },
        time: { prep: '45 mins', cook: '45 mins', total: '1.5 hr' },
        equipment: ['Rolling pin', 'Baking sheet', 'Mixing bowls', 'Knife', 'Pastry brush'],
        tags: ['Turkish', 'Flatbread', 'Street Food', 'Lunch', 'Dinner'],
        tip: 'Serve with fresh parsley and a squeeze of lemon!'
    },
    'manti': {
        title: 'Handmade Manti',
        category: 'Main Dish',
        cuisine: 'Turkish',
        prepTime: '2 hr',
        calories: '450 cal',
        rating: '4.8 (156 reviews)',
        difficulty: 'Hard',
        chef: 'Emine Teyze',
        chefAvatar: 'food-blog-img/kitchen-pfp(1).png',
        image: 'food-blog-img/manti.png',
        badge: '🥟 Family Secret',
        description: 'Tiny dumplings filled with spiced lamb...',
        nutrition: { calories: '450', protein: '22g', carbs: '48g', fat: '18g', fiber: '3g', sugar: '5g' },
        time: { prep: '1.5 hr', cook: '30 mins', total: '2 hr' },
        equipment: ['Rolling pin', 'Large pot', 'Mixing bowls', 'Small knife', 'Colander'],
        tags: ['Turkish', 'Dumplings', 'Traditional', 'Comfort Food'],
        tip: 'Make extra and freeze for later!'
    },
    'baklava': {
        title: 'Pistachio Baklava',
        category: 'Dessert',
        cuisine: 'Turkish',
        prepTime: '3 hr',
        calories: '320 cal',
        rating: '5.0 (312 reviews)',
        difficulty: 'Hard',
        chef: 'Emine Teyze',
        chefAvatar: 'food-blog-img/kitchen-pfp(1).png',
        image: 'food-blog-img/baklava.png',
        badge: '🍯 Signature',
        description: 'Layers of flaky phyllo with crushed pistachios...',
        nutrition: { calories: '320', protein: '5g', carbs: '38g', fat: '18g', fiber: '2g', sugar: '24g' },
        time: { prep: '2 hr', cook: '1 hr', total: '3 hr' },
        equipment: ['Baking dish', 'Pastry brush', 'Knife', 'Small saucepan', 'Food processor'],
        tags: ['Turkish', 'Dessert', 'Pastry', 'Holiday', 'Sweet'],
        tip: 'Make a day ahead for best flavor!'
    }
};

// ===== GET CURRENT RECIPE =====
const recipe = recipeDatabase[recipeId] || recipeDatabase['doner-kebab'];

// ===== UPDATE PAGE =====
function updateRecipePage() {
    document.getElementById('recipeTitle').textContent = recipe.title;
    document.querySelector('.category').textContent = recipe.category;
    document.querySelector('.cuisine').textContent = recipe.cuisine;
    document.getElementById('prepTime').textContent = recipe.prepTime;
    document.getElementById('calories').textContent = recipe.calories;
    document.getElementById('rating').textContent = recipe.rating;
    document.getElementById('difficulty').textContent = recipe.difficulty;
    document.getElementById('chefName').textContent = recipe.chef;
    document.getElementById('chefAvatar').src = recipe.chefAvatar;
    document.getElementById('recipeImage').src = recipe.image;
    document.querySelector('.recipe-badge-featured').textContent = recipe.badge;
    document.getElementById('recipeDescription').textContent = recipe.description;
    document.querySelector('.chef-tip div strong').parentElement.innerHTML = `<strong>Chef's Tip:</strong> ${recipe.tip}`;
    
    // Nutrition
    document.getElementById('nutritionCalories').textContent = recipe.nutrition.calories;
    document.getElementById('nutritionProtein').textContent = recipe.nutrition.protein;
    document.getElementById('nutritionCarbs').textContent = recipe.nutrition.carbs;
    document.getElementById('nutritionFat').textContent = recipe.nutrition.fat;
    document.getElementById('nutritionFiber').textContent = recipe.nutrition.fiber;
    document.getElementById('nutritionSugar').textContent = recipe.nutrition.sugar;
    
    // Time
    document.getElementById('timePrep').textContent = recipe.time.prep;
    document.getElementById('timeCook').textContent = recipe.time.cook;
    document.getElementById('timeTotal').textContent = recipe.time.total;
    
    // Equipment
    const equipmentList = document.getElementById('equipmentList');
    equipmentList.innerHTML = '';
    recipe.equipment.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${item}`;
        equipmentList.appendChild(li);
    });
    
    // Tags
    const tagsContainer = document.getElementById('tagsContainer');
    tagsContainer.innerHTML = '';
    recipe.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });
    
    document.title = `${recipe.title} | Healthy Kitchen`;
}

// ===== SAVE RECIPE =====
document.getElementById('saveRecipeBtn')?.addEventListener('click', function() {
    const icon = this.querySelector('i');
    const text = this.querySelector('span');
    if (this.classList.contains('saved')) {
        this.classList.remove('saved');
        icon.className = 'far fa-bookmark';
        text.textContent = 'Save';
        this.style.background = '#4caf50';
    } else {
        this.classList.add('saved');
        icon.className = 'fas fa-bookmark';
        text.textContent = 'Saved';
        this.style.background = '#e74c3c';
    }
    this.style.transform = 'scale(0.95)';
    setTimeout(() => this.style.transform = '', 150);
});

// ===== SHARE RECIPE =====
document.getElementById('shareRecipeBtn')?.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({ title: recipe.title, text: recipe.description, url: window.location.href });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
});

// ===== RELATED RECIPES =====
document.querySelectorAll('.related-card').forEach(card => {
    card.addEventListener('click', function() {
        window.location.href = `recipe.html?id=${this.dataset.recipe}`;
    });
});

// ===== COMMENT SUBMIT =====
document.querySelector('.submit-comment')?.addEventListener('click', function() {
    const textarea = document.querySelector('.comment-form textarea');
    if (textarea.value.trim()) {
        alert('Comment posted!');
        textarea.value = '';
    } else {
        alert('Please write a comment');
    }
});

// ===== SERVING ADJUST =====
let currentServing = 4;
const servingDisplay = document.getElementById('servingCount');
document.getElementById('increaseServing')?.addEventListener('click', () => {
    currentServing++;
    servingDisplay.textContent = currentServing;
});
document.getElementById('decreaseServing')?.addEventListener('click', () => {
    if (currentServing > 1) {
        currentServing--;
        servingDisplay.textContent = currentServing;
    }
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

document.querySelectorAll('.sidebar-card, .instruction-step, .related-card, .comment-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', updateRecipePage);
