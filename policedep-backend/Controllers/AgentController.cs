using Microsoft.AspNetCore.Mvc;
using policedep_backend.Controllers.BaseController;
using policedep_backend.Models;
using policedep_backend.Services;
using policedep_backend.Services.BaseService;


namespace policedep_backend.Controllers
{
    [Controller]
    [Route("/[controller]")]
    public class AgentController : BaseEntityController<Agent>
    {
        public AgentController(BaseEntityService<Agent> entityService) : base(entityService)
        {
        }
    }
}
