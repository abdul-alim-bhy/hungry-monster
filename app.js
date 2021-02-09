const searchMeals = () => {
    const randomSearch = document.getElementById('search-field').value;
    // console.log(randomSearch);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${randomSearch}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))

}

const displayMeals = meals => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = '';
    meals.forEach(strMeal => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'single-result row align-items-center my-3 p3';
        foodDiv.innerHTML =
            `<div class="col-md-9">
                <div class="img-div">
                    <img src="${strMeal.strMealThumb}" width= 280px; height=200px; > 
                </div>
                <div>
                    <h3 class="food-name">${strMeal.strMeal}</h3>
                </div>
                 <button onclick = "getDetails('${strMeal.strIngredient}')">Details</button>    
                      
                        
              </div>
                
    
         `;
    
        foodContainer.appendChild(foodDiv);
        
    });

}
const getDetails = ingredient =>{
    
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${strMeal.strIngredient}`;
   
}
