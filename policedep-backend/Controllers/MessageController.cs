using Microsoft.AspNetCore.Mvc;
using policedep_backend.Controllers.BaseController;
using policedep_backend.Models;
using policedep_backend.Services.BaseService;

namespace policedep_backend.Controllers
{
    [Controller]
    [Route("/[controller]")]
    public class MessageController : BaseEntityController<Message>
    {
        public MessageController(BaseEntityService<Message> entityService) : base(entityService)
        {
        }
    }
}
