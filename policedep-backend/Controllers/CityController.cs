using Microsoft.AspNetCore.Mvc;
using policedep_backend.Controllers.BaseController;
using policedep_backend.Models;
using policedep_backend.Services.BaseService;

namespace policedep_backend.Controllers
{
    [Controller]
    [Route("/[controller]")]
    public class CityController : BaseEntityController<City>
    {
        public CityController(BaseEntityService<City> entityService) : base(entityService)
        {
        }
    }
}
