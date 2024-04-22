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
        public AgentService agentService;
        public AgentController(BaseEntityService<Agent> entityService, AgentService agentService) : base(entityService)
        {
            this.agentService = agentService;
        }

        [HttpGet("/Agent/name/{name}")]
        public async Task<ActionResult<Agent>> GetByName(string name)
        {
            var entity = await agentService.GetByName(name);
            if (entity == null)
            {
                return NotFound();
            }
            return Ok(entity);
        }
    }
}
