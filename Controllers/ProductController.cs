using Microsoft.AspNetCore.Mvc;

public class ProductController(DataContext db) : Controller
{
  // this controller depends on the DataContext
  private readonly DataContext _dataContext = db;

  public IActionResult Category() => View(_dataContext.Categories);


  public IActionResult ProductDetail(int id) => View(new ProductViewModel
  {
    category = _dataContext.Categories.FirstOrDefault(c => c.CategoryId == id),
    Products = _dataContext.Products.Where(p => p.CategoryId == id)
  });

}