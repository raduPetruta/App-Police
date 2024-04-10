using Microsoft.AspNetCore.Mvc;
using policedep_backend.Controllers.BaseController;
using policedep_backend.Models;
using policedep_backend.Services.BaseService;

namespace policedep_backend.Controllers
{
    [Controller]
    [Route("/[controller]")]
    public class StationController : BaseEntityController<Station>
    {
        public StationController(BaseEntityService<Station> entityService) : base(entityService)
        {
        }
    }
}