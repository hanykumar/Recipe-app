class Meal {
  constructor(
    id,
    catagoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenfree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.catagoryIds = catagoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.complexity = complexity;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenfree = isGlutenfree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}
export default Meal;
