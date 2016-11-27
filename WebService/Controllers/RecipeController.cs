using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using WebService.Models;

namespace WebService.Controllers
{
  [EnableCors(origins: "http://localhost:9000", headers: "*", methods: "*")]
  public class RecipeController : ApiController
  {
    private static IList<Recipe> recipies = new List<Recipe>();

    static RecipeController()
    {
      recipies.Add(new Recipe
      {
        Id = 1,
        Title = "Creme Brulee",
        Subtitle = "Het lekkerste toetje.",
        ImageUrl = "http://www.genial-lecker.de/archiv/creme-brulee.jpg",
        Ingredients = new Ingredient[] {
                new Ingredient { Name  ="Room", Count= 250, Dimension= "ml" },
                new Ingredient{ Name="Vanillestokje", Count= 1, Dimension= "" },
                new Ingredient { Name="Eieren", Count= 8, Dimension= "" },
                new Ingredient { Name="Suiker", Count= 80, Dimension= "mg" },
                },
        Preparations = new string[] {
                "Breng de room bijna aan de kook",
                "Snij het vanillestokje doormidden in de lengte, voeg deze toe aan de room en laat 15 minuten trekken.",
                "Splits de eieren",
                "Meng met een vork de suiker met de eierdooiers",
                "Laat het 20 minuten garen in een oven van 175 graden",
                "Laat afkoelen en zet het daarna 3 uur in de koelkast"
                }
      });
    }

    // GET: api/Recipe
    public IEnumerable<Recipe> Get()
    {
      return recipies;
    }

    // GET: api/Recipe/5
    public Recipe Get(int id)
    {
      return recipies.FirstOrDefault(r => r.Id == id);
    }

    // POST: api/Recipe
    public int Post([FromBody] Recipe recipe)
    {
      var max = recipies.Max(r => r.Id);
      recipe.Id = max + 1;
      recipies.Add(recipe);
      return recipe.Id;
    }

    // PUT: api/Recipe/5
    public void Put(int id, [FromBody] Recipe value)
    {
    }

    // DELETE: api/Recipe/5
    public void Delete(int id)
    {
      var recipe = Get(id);
      recipies.Remove(recipe);
    }
  }
}
