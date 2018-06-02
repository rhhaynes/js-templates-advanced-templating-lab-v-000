function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML);
  Handlebars.registerHelper('displayIngredient', ingredient => new Handlebars.SafeString("<li>" + ingredient + "</li>"));
}

function displayEditForm(){
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById('main').innerHTML = template();
}

function createRecipe(){
  const recipe = {
    name: document.getElementsByName('name')[0].value,
    description: document.getElementsByName('description')[0].value,
    ingredients: []
  };
  for (let i=0; i<5; i++){recipe.ingredients.push( document.getElementsByName('ingredients')[i].value )}
  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById('main').innerHTML = template(recipe);
}

function updateRecipe(){
  const recipe = {
    name: document.getElementsByName('name')[0].value,
    description: document.getElementsByName('description')[0].value,
    ingredients: []
  };
  for (let i=0; i<5; i++){recipe.ingredients.push( document.getElementsByName('ingredients')[i].value )}
  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  debugger;
  document.getElementById('main').innerHTML = template(recipe);
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});
