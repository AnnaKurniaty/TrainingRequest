using Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace EmployeeApp.View.Employees
{
    public class IndexModel : PageModel
    {
        public List<Employee> Employees { get; set; }
        public void OnGet()
        {
        }
    }
}
