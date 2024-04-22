using Microsoft.AspNetCore.Mvc;
using policedep_backend.Controllers.BaseController;
using policedep_backend.Models;
using policedep_backend.Services;
using policedep_backend.Services.BaseService;
using SharpCompress.Common;
using System.Text;

namespace policedep_backend.Controllers
{
    [Controller]
    [Route("/[controller]")]
    public class StationController : BaseEntityController<Station>
    {
        public StationService stationService; 
        public StationController(BaseEntityService<Station> entityService, StationService stationService) : base(entityService)
        {
            this.stationService = stationService;
        }
        [HttpPost("/create")]
        public async Task<ActionResult> CreateStation(Station station)
        {
            await this.stationService.CreateStation(station);
            return Ok(station);
        }

        [HttpPost("/station/addAgent")]
        public async Task<IActionResult> AddAgentNameToStation(string stationName, string name)
        {
            try
            {
                // Validate inputs
                if (string.IsNullOrEmpty(stationName) || string.IsNullOrEmpty(name))
                {
                    return BadRequest("Invalid input data");
                }

                // Call the service method to add agent name to station
                await stationService.AddAgentNameToStation(stationName, name);
                return Ok("Agent name added to station successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while adding agent name to station");
            }
        }
    }
}