using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using policedep_backend.Controllers.BaseController;
using policedep_backend.Models;
using policedep_backend.Services;
using policedep_backend.Services.BaseService;

namespace policedep_backend.Controllers
{
    [Controller]
    [Route("/[controller]")]
    public class UserController : BaseEntityController<User>
    {
        private UserService _userService;

        public UserController(UserService userService, BaseEntityService<User> entityService) : base(entityService)
        { 
            _userService = userService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User request)
        {  
            User user = _userService.Authenticate(request.username, request.password);
            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            // If authentication is successful, you can return some user data or a token
            return Ok(user);
        }
    }

}
