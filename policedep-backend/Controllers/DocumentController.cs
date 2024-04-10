using Microsoft.AspNetCore.Mvc;
using policedep_backend.Controllers.BaseController;
using policedep_backend.Models;
using policedep_backend.Services.BaseService;

namespace policedep_backend.Controllers
{
    [Controller]
    [Route("/[controller]")]
    public class DocumentController : BaseEntityController<Document>
    {
        public DocumentController(BaseEntityService<Document> entityService) : base(entityService)
        {
        }
    }
}
