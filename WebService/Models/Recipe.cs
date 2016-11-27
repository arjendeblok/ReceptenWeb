using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebService.Models
{
  public class Recipe
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Subtitle { get; set; }
    public string ImageUrl { get; set; }
    public IList<Ingredient> Ingredients { get; set; }
    public IList<string> Preparations { get; set; }
  }

  public class Ingredient
  {
    public string Name { get; set; }
    public int Count { get; set; }
    public string Dimension { get; set; }
  }
}