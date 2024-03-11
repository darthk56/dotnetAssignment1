using Microsoft.AspNetCore.Mvc;


namespace Northwind.Controllers
{
    public class CustomerController(DataContext db) : Controller
    {
        // this controller depends on the NorthwindRepository
        private readonly DataContext _dataContext = db;
                public IActionResult Register() => View(new Customer());
                //   [HttpPost]
                //   [ValidateAntiForgeryToken]
                // public IActionResult Register(string name){
                //     if (ModelState.IsValid)
                //     {
                //     if (_dataContext.Customers.Any(c => c.CompanyName == model.CompanyName))
                //     {
                //         ModelState.AddModelError("", "Name must be unique");
                //     }
                //     else
                //     {
                //         _dataContext.Register(model);
                //         return RedirectToAction("Index");
                //     }
                //     }
                //     return View();
                // }
    }
}
