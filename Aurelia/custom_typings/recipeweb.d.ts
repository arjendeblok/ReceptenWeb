
interface IIngredient
{
    Name: string;
    Count: number;
    Dimension: string;
}

interface IRecipe
{
    Id: number;
    Title: string;
    Subtitle: string;
    Ingredients: IIngredient[];
    Preparations: string[];
}

interface IRecipeService
{
    initialize(): Promise<void>;
    retrieve(): Promise<IRecipe[]>;
    get(id: number): Promise<IRecipe>;
    post(recipe: IRecipe): Promise<number>;
    put(recipe: IRecipe): Promise<number>;
}
