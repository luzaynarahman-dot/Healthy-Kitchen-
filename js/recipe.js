// ===== GET RECIPE ID FROM URL =====
const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id') || 'mojito';

// ===== COMPLETE RECIPE DATABASE (16 RECIPES) =====
const recipes = {
    // Emine Teyze's Recipes
    'mojito': {
        title: 'Easy Mojito', category: 'Drink', cuisine: 'Cuban', prepTime: '10 mins', calories: '150 cal',
        rating: '4.8 (156)', difficulty: 'Easy', chef: 'Emine Teyze', chefAvatar: 'food-blog-img/kitchen-pfp(1).png',
        image: 'food-blog-img/mojito.jpeg', badge: '🍹 Refreshing', shortDesc: 'Fresh mint lime cocktail',
        description: 'A classic Cuban cocktail with fresh mint, lime, rum, and soda water. Perfect for summer!',
        nutrition: { calories: '150', protein: '0g', carbs: '12g', fat: '0g', fiber: '1g', sugar: '10g' },
        time: { prep: '10 mins', cook: '0 mins', total: '10 mins' },
        equipment: ['Muddler', 'Tall glass', 'Straw', 'Jigger'],
        tags: ['Drink', 'Cocktail', 'Summer', 'Refreshing'],
        tip: 'Use fresh mint leaves for the best flavor!',
        ingredients: [{ group: 'Main', items: ['10 fresh mint leaves', '1 lime, cut into wedges', '2 tbsp simple syrup', '2 oz white rum', 'Club soda', 'Ice cubes'] }],
        instructions: ['Muddle mint and lime with syrup.', 'Fill glass with ice.', 'Pour rum over ice.', 'Top with club soda.', 'Stir and garnish with mint.']
    },
    'mayonese': {
        title: 'Homemade Mayonnaise', category: 'Condiment', cuisine: 'French', prepTime: '10 mins', calories: '90 cal',
        rating: '4.9 (234)', difficulty: 'Medium', chef: 'Emine Teyze', chefAvatar: 'food-blog-img/kitchen-pfp(1).png',
        image: 'food-blog-img/mayonese.jpeg', badge: '🥚 Homemade', shortDesc: 'Creamy homemade mayo',
        description: 'Creamy, rich homemade mayonnaise with just 3 ingredients. So much better than store-bought!',
        nutrition: { calories: '90', protein: '0g', carbs: '0g', fat: '10g', fiber: '0g', sugar: '0g' },
        time: { prep: '10 mins', cook: '0 mins', total: '10 mins' },
        equipment: ['Blender', 'Mixing bowl', 'Measuring spoons'],
        tags: ['Condiment', 'Sauce', 'Easy', 'Homemade'],
        tip: 'Use room temperature eggs for better emulsion!',
        ingredients: [{ group: 'Ingredients', items: ['1 large egg', '1 cup neutral oil', '1 tbsp lemon juice', '1/2 tsp salt', '1 tsp mustard'] }],
        instructions: ['Place egg, lemon juice, salt, mustard in blender.', 'Blend until combined.', 'Slowly drizzle oil while blending until thick.', 'Adjust seasoning.']
    },
    'manti': {
        title: 'Handmade Manti', category: 'Main Dish', cuisine: 'Turkish', prepTime: '2 hr', calories: '450 cal',
        rating: '4.8 (156)', difficulty: 'Hard', chef: 'Emine Teyze', chefAvatar: 'food-blog-img/kitchen-pfp(1).png',
        image: 'food-blog-img/manti.png', badge: '🥟 Family Secret', shortDesc: 'Turkish dumplings',
        description: 'Tiny dumplings filled with spiced lamb, served with garlic yogurt.',
        nutrition: { calories: '450', protein: '22g', carbs: '48g', fat: '18g', fiber: '3g', sugar: '5g' },
        time: { prep: '1.5 hr', cook: '30 mins', total: '2 hr' },
        equipment: ['Rolling pin', 'Large pot', 'Mixing bowls', 'Small knife'],
        tags: ['Turkish', 'Dumplings', 'Traditional', 'Comfort Food'],
        tip: 'Make extra and freeze for later!',
        ingredients: [
            { group: 'Dough', items: ['2 cups flour', '2 eggs', '1/2 cup water', '1 tsp salt'] },
            { group: 'Filling', items: ['250g ground lamb', '1 onion, grated', '1 tsp salt', '1/2 tsp pepper'] },
            { group: 'Sauce', items: ['1 cup yogurt', '2 cloves garlic', '2 tbsp butter', '1 tsp paprika'] }
        ],
        instructions: ['Make dough, rest 30 min.', 'Mix filling.', 'Roll thin, cut squares.', 'Fill and pinch closed.', 'Boil 15-20 min.', 'Serve with garlic yogurt and hot butter.']
    },
    'lahmacun': {
        title: 'Turkish Lahmacun', category: 'Main Dish', cuisine: 'Turkish', prepTime: '1.5 hr', calories: '380 cal',
        rating: '5.0 (189)', difficulty: 'Medium', chef: 'Emine Teyze', chefAvatar: 'food-blog-img/kitchen-pfp(1).png',
        image: 'food-blog-img/lahmachun.png', badge: '🥇 Chef\'s Pick', shortDesc: 'Turkish pizza',
        description: 'Crispy thin flatbread topped with spiced minced meat.',
        nutrition: { calories: '380', protein: '18g', carbs: '42g', fat: '15g', fiber: '4g', sugar: '6g' },
        time: { prep: '45 mins', cook: '45 mins', total: '1.5 hr' },
        equipment: ['Rolling pin', 'Baking sheet', 'Mixing bowls', 'Pastry brush'],
        tags: ['Turkish', 'Flatbread', 'Street Food', 'Lunch'],
        tip: 'Serve with fresh parsley and lemon!',
        ingredients: [
            { group: 'Dough', items: ['3 cups flour', '1 cup water', '1 tsp salt', '1 tbsp olive oil'] },
            { group: 'Topping', items: ['300g ground lamb', '1 onion', '2 tomatoes, grated', '2 tbsp tomato paste', '1 tbsp red pepper paste', '1 tsp cumin', '1 tsp paprika'] }
        ],
        instructions: ['Mix dough, knead 10 min, rest 30 min.', 'Mix topping.', 'Divide dough into 8, roll thin.', 'Spread topping.', 'Bake at 250°C for 5-7 min.']
    },
    
    // Cool Dude's Recipes
    'avocado-toast': {
        title: '5-min Avocado Toast', category: 'Breakfast', cuisine: 'International', prepTime: '5 mins', calories: '320 cal',
        rating: '4.8 (156)', difficulty: 'Easy', chef: 'Cool Dude', chefAvatar: 'food-blog-img/kitchen-pfp.jpeg',
        image: 'food-blog-img/avocado-toast.jpeg', badge: '⚡ Quick Meal', shortDesc: 'Quick healthy breakfast',
        description: 'Healthy breakfast with poached egg and avocado on toast.',
        nutrition: { calories: '320', protein: '12g', carbs: '28g', fat: '18g', fiber: '8g', sugar: '3g' },
        time: { prep: '5 mins', cook: '5 mins', total: '10 mins' },
        equipment: ['Toaster', 'Small pot', 'Fork', 'Knife'],
        tags: ['Breakfast', 'Quick', 'Healthy', 'Avocado'],
        tip: 'Add red pepper flakes for a spicy kick!',
        ingredients: [{ group: 'Ingredients', items: ['2 slices sourdough', '1 ripe avocado', '2 eggs', 'Salt and pepper', 'Red pepper flakes', 'Lemon juice'] }],
        instructions: ['Toast bread.', 'Mash avocado with salt, pepper, lemon.', 'Poach eggs 3-4 min.', 'Spread avocado on toast.', 'Top with eggs, season.']
    },
    'fruit-salad': {
        title: 'Fresh Fruit Salad', category: 'Dessert', cuisine: 'International', prepTime: '10 mins', calories: '150 cal',
        rating: '4.9 (89)', difficulty: 'Easy', chef: 'Cool Dude', chefAvatar: 'food-blog-img/kitchen-pfp.jpeg',
        image: 'food-blog-img/fruit-salad.jpeg', badge: '🥗 Healthy', shortDesc: 'Colorful fruit medley',
        description: 'Mixed seasonal fruits with honey lime dressing.',
        nutrition: { calories: '150', protein: '2g', carbs: '38g', fat: '0g', fiber: '5g', sugar: '28g' },
        time: { prep: '10 mins', cook: '0 mins', total: '10 mins' },
        equipment: ['Cutting board', 'Sharp knife', 'Mixing bowl'],
        tags: ['Fruit', 'Healthy', 'Breakfast', 'Vegan'],
        tip: 'Add mint for extra freshness!',
        ingredients: [
            { group: 'Fruits', items: ['1 cup strawberries', '1 cup blueberries', '2 kiwis', '1 banana', '1 orange', '1/2 cup grapes'] },
            { group: 'Dressing', items: ['2 tbsp honey', '1 tbsp lime juice', 'Fresh mint'] }
        ],
        instructions: ['Wash and prepare fruits.', 'Combine in bowl.', 'Whisk honey and lime.', 'Pour dressing, toss gently.', 'Garnish with mint.']
    },
    'italian-pasta': {
        title: 'Italian Pasta', category: 'Main Dish', cuisine: 'Italian', prepTime: '20 mins', calories: '420 cal',
        rating: '4.9 (234)', difficulty: 'Medium', chef: 'Cool Dude', chefAvatar: 'food-blog-img/kitchen-pfp.jpeg',
        image: 'food-blog-img/pasta.jpeg', badge: '🍝 Crowd Favorite', shortDesc: 'Creamy garlic pasta',
        description: 'Creamy garlic pasta with mushrooms and herbs.',
        nutrition: { calories: '420', protein: '14g', carbs: '55g', fat: '16g', fiber: '4g', sugar: '5g' },
        time: { prep: '10 mins', cook: '10 mins', total: '20 mins' },
        equipment: ['Large pot', 'Frying pan', 'Colander'],
        tags: ['Pasta', 'Italian', 'Quick', 'Dinner'],
        tip: 'Reserve pasta water for creamier sauce!',
        ingredients: [{ group: 'Main', items: ['200g pasta', '2 tbsp olive oil', '4 garlic cloves', '200g mushrooms', '1/2 cup cream', '1/4 cup Parmesan', 'Parsley'] }],
        instructions: ['Cook pasta, reserve water.', 'Sauté garlic and mushrooms.', 'Add cream and Parmesan.', 'Add pasta, toss, add water if needed.', 'Season and serve.']
    },
    'lava-cake': {
        title: 'Chocolate Lava Cake', category: 'Dessert', cuisine: 'French', prepTime: '25 mins', calories: '380 cal',
        rating: '5.0 (178)', difficulty: 'Medium', chef: 'Cool Dude', chefAvatar: 'food-blog-img/kitchen-pfp.jpeg',
        image: 'food-blog-img/lava-cake.jpeg', badge: '🍫 Decadent', shortDesc: 'Molten chocolate cake',
        description: 'Warm gooey center, perfectly baked with melted chocolate.',
        nutrition: { calories: '380', protein: '6g', carbs: '38g', fat: '22g', fiber: '3g', sugar: '28g' },
        time: { prep: '10 mins', cook: '15 mins', total: '25 mins' },
        equipment: ['Ramekins', 'Mixing bowls', 'Whisk'],
        tags: ['Dessert', 'Chocolate', 'Baking', 'Decadent'],
        tip: 'Don\'t overbake! Center should be soft.',
        ingredients: [{ group: 'Ingredients', items: ['100g dark chocolate', '100g butter', '2 eggs', '2 egg yolks', '1/2 cup sugar', '1/4 cup flour'] }],
        instructions: ['Preheat oven to 200°C.', 'Melt chocolate and butter.', 'Whisk eggs, yolks, sugar until pale.', 'Fold in chocolate.', 'Add flour, mix.', 'Bake 10-12 min.', 'Serve immediately.']
    },
    
    // Bengali Recipes
    'rosogolla': {
        title: 'Soft Rosogolla', category: 'Dessert', cuisine: 'Bengali', prepTime: '45 mins', calories: '280 cal',
        rating: '5.0 (312)', difficulty: 'Medium', chef: 'Ruby Rahman', chefAvatar: 'food-blog-img/kitchen-pfp(2).png',
        image: 'food-blog-img/rosogolla.png', badge: '🍬 Bengali Sweet', shortDesc: 'Bengali cottage cheese balls',
        description: 'Soft, spongy cottage cheese balls in light sugar syrup.',
        nutrition: { calories: '280', protein: '8g', carbs: '42g', fat: '8g', fiber: '0g', sugar: '35g' },
        time: { prep: '20 mins', cook: '25 mins', total: '45 mins' },
        equipment: ['Large pot', 'Cheesecloth', 'Colander'],
        tags: ['Bengali', 'Dessert', 'Sweet', 'Traditional'],
        tip: 'Knead chhena until very smooth!',
        ingredients: [
            { group: 'Chhena', items: ['1 liter milk', '2 tbsp lemon juice'] },
            { group: 'Syrup', items: ['2 cups sugar', '4 cups water', '2 cardamom pods'] }
        ],
        instructions: ['Boil milk, add lemon to curdle.', 'Strain, rinse, hang 30 min.', 'Knead until smooth.', 'Shape into balls.', 'Boil in syrup 15-20 min.']
    },
    'panta-ilish': {
        title: 'Panta Ilish', category: 'Main Dish', cuisine: 'Bengali', prepTime: '30 mins', calories: '450 cal',
        rating: '4.9 (256)', difficulty: 'Medium', chef: 'Ruby Rahman', chefAvatar: 'food-blog-img/kitchen-pfp(2).png',
        image: 'food-blog-img/panta-ilish.png', badge: '🇧🇩 Traditional', shortDesc: 'Fermented rice with hilsa',
        description: 'Fermented rice with fried hilsa, onions, and green chilies.',
        nutrition: { calories: '450', protein: '25g', carbs: '48g', fat: '18g', fiber: '2g', sugar: '3g' },
        time: { prep: '10 mins', cook: '20 mins', total: '30 mins' },
        equipment: ['Frying pan', 'Large bowl'],
        tags: ['Bengali', 'Fish', 'Traditional', 'Festival'],
        tip: 'Soak rice overnight for best fermentation!',
        ingredients: [{ group: 'Main', items: ['2 cups cooked rice (soaked overnight)', '4 hilsa pieces', '2 tbsp mustard oil', '2 onions sliced', '4-5 green chilies'] }],
        instructions: ['Soak rice overnight.', 'Marinate hilsa with salt.', 'Fry hilsa until crisp.', 'Serve with fermented rice, onions, chilies.']
    },
    'mishti-doi': {
        title: 'Misti Doi', category: 'Dessert', cuisine: 'Bengali', prepTime: '6 hrs', calories: '220 cal',
        rating: '5.0 (189)', difficulty: 'Hard', chef: 'Ruby Rahman', chefAvatar: 'food-blog-img/kitchen-pfp(2).png',
        image: 'food-blog-img/misti-doi.png', badge: '🍮 Signature', shortDesc: 'Sweet caramelized yogurt',
        description: 'Caramelized yogurt dessert, creamy and perfectly sweet.',
        nutrition: { calories: '220', protein: '6g', carbs: '28g', fat: '9g', fiber: '0g', sugar: '25g' },
        time: { prep: '15 mins', cook: '15 mins', total: '6 hrs' },
        equipment: ['Heavy pan', 'Clay pot', 'Whisk'],
        tags: ['Bengali', 'Dessert', 'Yogurt', 'Traditional'],
        tip: 'Use full-fat milk for creamier result!',
        ingredients: [{ group: 'Ingredients', items: ['1 liter full-fat milk', '1/2 cup sugar', '2 tbsp water', '2 tbsp yogurt starter'] }],
        instructions: ['Caramelize sugar with water.', 'Boil milk, reduce, add caramel.', 'Cool to 45°C.', 'Whisk in yogurt starter.', 'Set in warm place 4-6 hours.']
    },
    'sorshe-ilish': {
        title: 'Shorshe Ilish', category: 'Main Dish', cuisine: 'Bengali', prepTime: '40 mins', calories: '520 cal',
        rating: '4.9 (278)', difficulty: 'Medium', chef: 'Ruby Rahman', chefAvatar: 'food-blog-img/kitchen-pfp(2).png',
        image: 'food-blog-img/sorshe-ilish.png', badge: '🔥 Most Popular', shortDesc: 'Hilsa in mustard sauce',
        description: 'Hilsa fish cooked in mustard gravy, a Bengali classic.',
        nutrition: { calories: '520', protein: '32g', carbs: '8g', fat: '38g', fiber: '2g', sugar: '2g' },
        time: { prep: '15 mins', cook: '25 mins', total: '40 mins' },
        equipment: ['Frying pan', 'Blender'],
        tags: ['Bengali', 'Fish', 'Spicy', 'Traditional'],
        tip: 'Use fresh mustard paste for authentic flavor!',
        ingredients: [{ group: 'Main', items: ['4 hilsa pieces', '4 tbsp mustard seeds', '2 green chilies', '1 tsp turmeric', '3 tbsp mustard oil'] }],
        instructions: ['Soak mustard seeds, blend to paste.', 'Marinate hilsa with turmeric.', 'Heat oil, fry hilsa lightly.', 'Add mustard paste, green chilies.', 'Add water, simmer 5-7 min.']
    },
    
    // Italian Recipes
    'lasagna': {
        title: 'Classic Lasagna', category: 'Main Dish', cuisine: 'Italian', prepTime: '2.5 hr', calories: '580 cal',
        rating: '4.9 (198)', difficulty: 'Hard', chef: 'Marco Esposito', chefAvatar: 'food-blog-img/kitchen-pfp.jpeg',
        image: 'food-blog-img/lasagna.png', badge: '🥇 Family Favorite', shortDesc: 'Traditional Italian lasagna',
        description: 'Layers of pasta, meat sauce, béchamel, and Parmesan.',
        nutrition: { calories: '580', protein: '32g', carbs: '45g', fat: '28g', fiber: '4g', sugar: '8g' },
        time: { prep: '30 mins', cook: '2 hr', total: '2.5 hr' },
        equipment: ['Baking dish', 'Large pot', 'Saucepan'],
        tags: ['Italian', 'Pasta', 'Baked', 'Comfort Food'],
        tip: 'Let lasagna rest 15 min before serving!',
        ingredients: [
            { group: 'Meat Sauce', items: ['500g ground beef', '1 onion', '2 garlic cloves', '800g crushed tomatoes', '1 tsp oregano'] },
            { group: 'Béchamel', items: ['4 tbsp butter', '1/4 cup flour', '3 cups milk', '1/2 cup Parmesan'] },
            { group: 'Assembly', items: ['12 lasagna noodles', '2 cups mozzarella', '1 cup Parmesan'] }
        ],
        instructions: ['Make meat sauce, simmer 1 hour.', 'Make béchamel sauce.', 'Cook lasagna noodles.', 'Layer: sauce, noodles, béchamel, cheese.', 'Bake at 180°C for 45 min.']
    },
    'tiramisu': {
        title: 'Tiramisu', category: 'Dessert', cuisine: 'Italian', prepTime: '30 mins', calories: '320 cal',
        rating: '5.0 (356)', difficulty: 'Medium', chef: 'Marco Esposito', chefAvatar: 'food-blog-img/kitchen-pfp.jpeg',
        image: 'food-blog-img/tiramisu.png', badge: '☕ Perfecto', shortDesc: 'Coffee-flavored Italian dessert',
        description: 'Coffee-soaked ladyfingers with mascarpone cream.',
        nutrition: { calories: '320', protein: '6g', carbs: '28g', fat: '18g', fiber: '0g', sugar: '20g' },
        time: { prep: '30 mins', cook: '0 mins', total: '4 hrs' },
        equipment: ['Mixing bowls', 'Whisk', 'Dish'],
        tags: ['Italian', 'Dessert', 'Coffee', 'No-Bake'],
        tip: 'Refrigerate at least 4 hours for best flavor!',
        ingredients: [{ group: 'Ingredients', items: ['3 egg yolks', '1/2 cup sugar', '1 cup mascarpone', '1 cup heavy cream', '24 ladyfingers', '1 cup strong coffee', 'Cocoa powder'] }],
        instructions: ['Whisk yolks and sugar until pale.', 'Add mascarpone and cream.', 'Dip ladyfingers in coffee.', 'Layer: cream, ladyfingers, cream.', 'Refrigerate 4 hours.', 'Dust with cocoa.']
    },
    'pizza': {
        title: 'Margherita Pizza', category: 'Main Dish', cuisine: 'Italian', prepTime: '20 mins', calories: '650 cal',
        rating: '5.0 (412)', difficulty: 'Medium', chef: 'Marco Esposito', chefAvatar: 'food-blog-img/kitchen-pfp.jpeg',
        image: 'food-blog-img/pizza.png', badge: '🔥 Wood-Fired', shortDesc: 'Classic Neapolitan pizza',
        description: 'San Marzano tomatoes, fresh mozzarella, basil.',
        nutrition: { calories: '650', protein: '24g', carbs: '78g', fat: '22g', fiber: '5g', sugar: '6g' },
        time: { prep: '15 mins', cook: '5 mins', total: '20 mins' },
        equipment: ['Pizza stone', 'Rolling pin'],
        tags: ['Italian', 'Pizza', 'Quick', 'Dinner'],
        tip: 'Use a pizza stone for crispy crust!',
        ingredients: [{ group: 'Ingredients', items: ['1 pizza dough', '1/2 cup tomato sauce', '200g fresh mozzarella', 'Fresh basil', 'Olive oil', 'Salt'] }],
        instructions: ['Roll out dough.', 'Spread tomato sauce.', 'Add torn mozzarella and basil.', 'Bake at 250°C for 5-7 min.', 'Drizzle olive oil.']
    },
    'pasta': {
        title: 'Homemade Pasta', category: 'Main Dish', cuisine: 'Italian', prepTime: '45 mins', calories: '380 cal',
        rating: '4.9 (267)', difficulty: 'Medium', chef: 'Marco Esposito', chefAvatar: 'food-blog-img/kitchen-pfp.jpeg',
        image: 'food-blog-img/pasta.png', badge: '🍝 Nonna\'s Recipe', shortDesc: 'Fresh egg pasta',
        description: 'Fresh egg pasta, rolled thin and cut perfectly.',
        nutrition: { calories: '380', protein: '12g', carbs: '65g', fat: '6g', fiber: '3g', sugar: '2g' },
        time: { prep: '30 mins', cook: '15 mins', total: '45 mins' },
        equipment: ['Pasta machine', 'Rolling pin', 'Large pot'],
        tags: ['Italian', 'Pasta', 'Homemade', 'Traditional'],
        tip: 'Let dough rest for best texture!',
        ingredients: [{ group: 'Ingredients', items: ['2 cups flour', '3 eggs', '1/2 tsp salt', '1 tbsp olive oil'] }],
        instructions: ['Mix flour and salt.', 'Make well, add eggs and oil.', 'Knead 10 min, rest 30 min.', 'Roll thin, cut into shapes.', 'Boil 3-4 min.']
    }
};

// ===== GET CURRENT RECIPE =====
const recipe = recipes[recipeId] || recipes['mojito'];

// ===== UPDATE PAGE =====
function updatePage() {
    document.getElementById('recipeTitle').textContent = recipe.title;
    document.getElementById('recipeCategory').textContent = recipe.category;
    document.getElementById('recipeCuisine').textContent = recipe.cuisine;
    document.getElementById('prepTime').textContent = recipe.prepTime;
    document.getElementById('calories').textContent = recipe.calories;
    document.getElementById('rating').textContent = recipe.rating;
    document.getElementById('difficulty').textContent = recipe.difficulty;
    document.getElementById('chefName').textContent = recipe.chef;
    document.getElementById('chefAvatar').src = recipe.chefAvatar;
    document.getElementById('recipeImage').src = recipe.image;
    document.getElementById('recipeBadge').textContent = recipe.badge;
    document.getElementById('recipeDescription').textContent = recipe.description;
    document.getElementById('recipeShortDesc').textContent = recipe.shortDesc;
    
    document.getElementById('nutCalories').textContent = recipe.nutrition.calories;
    document.getElementById('nutProtein').textContent = recipe.nutrition.protein;
    document.getElementById('nutCarbs').textContent = recipe.nutrition.carbs;
    document.getElementById('nutFat').textContent = recipe.nutrition.fat;
    document.getElementById('nutFiber').textContent = recipe.nutrition.fiber;
    document.getElementById('nutSugar').textContent = recipe.nutrition.sugar;
    
    document.getElementById('timePrep').textContent = recipe.time.prep;
    document.getElementById('timeCook').textContent = recipe.time.cook;
    document.getElementById('timeTotal').textContent = recipe.time.total;
    
    const equipList = document.getElementById('equipmentList');
    equipList.innerHTML = '';
    recipe.equipment.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle"></i> ${item}`;
        equipList.appendChild(li);
    });
    
    const tagsContainer = document.getElementById('tagsContainer');
    tagsContainer.innerHTML = '';
    recipe.tags.forEach(tag => {
        const span = document.createElement('span');
        span.textContent = tag;
        tagsContainer.appendChild(span);
    });
    
    document.getElementById('chefTip').innerHTML = `<i class="fas fa-lightbulb"></i><div><strong>Chef's Tip:</strong> ${recipe.tip}</div>`;
    
    const ingredientsContainer = document.getElementById('ingredientsList');
    ingredientsContainer.innerHTML = '';
    recipe.ingredients.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'ingredient-group';
        groupDiv.innerHTML = `<h4>${group.group}</h4>`;
        group.items.forEach(item => {
            const label = document.createElement('label');
            label.className = 'ingredient';
            label.innerHTML = `<input type="checkbox"><span>${item}</span>`;
            groupDiv.appendChild(label);
        });
        ingredientsContainer.appendChild(groupDiv);
    });
    
    const instructionsContainer = document.getElementById('instructionsList');
    instructionsContainer.innerHTML = '';
    recipe.instructions.forEach((inst, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step';
        stepDiv.innerHTML = `<div class="step-number">${index + 1}</div><div class="step-content"><p>${inst}</p></div>`;
        instructionsContainer.appendChild(stepDiv);
    });
    
    document.title = `${recipe.title} | Healthy Kitchen`;
}

// ===== RELATED RECIPES =====
function loadRelatedRecipes() {
    const relatedGrid = document.getElementById('relatedGrid');
    const allRecipes = Object.keys(recipes);
    const currentIndex = allRecipes.indexOf(recipeId);
    const related = allRecipes.filter((id, i) => i !== currentIndex).slice(0, 4);
    
    relatedGrid.innerHTML = '';
    related.forEach(id => {
        const r = recipes[id];
        const card = document.createElement('div');
        card.className = 'related-card';
        card.onclick = () => window.location.href = `recipe.html?id=${id}`;
        card.innerHTML = `<img src="${r.image}" alt="${r.title}"><div class="related-info"><h4>${r.title}</h4><div class="related-meta"><span><i class="far fa-clock"></i> ${r.prepTime}</span><span><i class="fas fa-star"></i> ${r.rating.split(' ')[0]}</span></div></div>`;
        relatedGrid.appendChild(card);
    });
}

// ===== SAVE BUTTON =====
document.getElementById('saveBtn')?.addEventListener('click', function() {
    const icon = this.querySelector('i');
    const text = this.querySelector('span');
    if (this.classList.contains('saved')) {
        this.classList.remove('saved');
        icon.className = 'far fa-bookmark';
        text.textContent = 'Save Recipe';
    } else {
        this.classList.add('saved');
        icon.className = 'fas fa-bookmark';
        text.textContent = 'Saved!';
    }
    this.style.transform = 'scale(0.95)';
    setTimeout(() => this.style.transform = '', 150);
});

// ===== SERVING ADJUST =====
let servings = 4;
const servingSpan = document.getElementById('servingCount');
document.getElementById('minusServing')?.addEventListener('click', () => {
    if (servings > 1) { servings--; servingSpan.textContent = servings; adjustIngredients(); }
});
document.getElementById('plusServing')?.addEventListener('click', () => {
    servings++; servingSpan.textContent = servings; adjustIngredients();
});

function adjustIngredients() {
    const factor = servings / 4;
    document.querySelectorAll('.ingredient span').forEach(span => {
        const text = span.textContent;
        const match = text.match(/^(\d+(?:\.\d+)?)(\s*[a-z]+)?/i);
        if (match && !text.includes('egg') && !text.includes('butter')) {
            const num = parseFloat(match[1]);
            if (!isNaN(num)) {
                const newNum = Math.round(num * factor * 10) / 10;
                span.textContent = text.replace(/^\d+(?:\.\d+)?/, newNum);
            }
        }
    });
}

// ===== RATING STARS =====
let currentRating = 0;
document.querySelectorAll('.stars-input i').forEach(star => {
    star.addEventListener('click', () => {
        currentRating = parseInt(star.dataset.rating);
        document.querySelectorAll('.stars-input i').forEach((s, i) => {
            if (i < currentRating) { s.className = 'fas fa-star'; s.classList.add('active'); }
            else { s.className = 'far fa-star'; s.classList.remove('active'); }
        });
    });
});

// ===== COMMENT SUBMIT =====
document.querySelector('.submit-btn')?.addEventListener('click', () => {
    const textarea = document.querySelector('.add-comment textarea');
    if (textarea.value.trim()) {
        if (currentRating === 0) { alert('Please select a rating first!'); return; }
        alert('Your review has been posted!');
        textarea.value = '';
        document.querySelectorAll('.stars-input i').forEach(star => star.className = 'far fa-star');
        currentRating = 0;
    } else alert('Please write a comment!');
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

document.querySelectorAll('.card, .description-box, .ingredients-box, .instructions-box, .related-card, .comment-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease';
    observer.observe(el);
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    updatePage();
    loadRelatedRecipes();
});
