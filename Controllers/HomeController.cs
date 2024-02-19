using Microsoft.AspNetCore.Mvc;

public class HomeController() : Controller
{
  // this controller depends on the DataContext
  // private readonly DataContext _dataContext = db;

  public IActionResult Index() => View();
}