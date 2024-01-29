using FullCart.Models;
using FullCart.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FullCart.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserService _userService;

        public UserController(ILogger<UserController> logger, IUserService userService)
        {
            _userService = userService;
            _logger = logger;
        }

        [HttpPost("Authenticate")]
        public async Task<IActionResult> AuthenticateAsync([FromBody] User userObj)
        {
            if (userObj == null)
            {
                return BadRequest();
            }

            if (await _userService.CanAuthenticateThisUserAsync(userObj))
            {
                return Ok();

            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost("Register")]
        public async Task<IActionResult> RegisterUserAsync([FromBody] User userObj)
        {
            if (userObj == null)
            {
                return BadRequest();
            }

            var addedUser = await _userService.AddAsync(userObj);
            return Ok(addedUser);
        }
    }
}