using marketplace_api.Models;
using marketplace_api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace marketplace_api.Controllers
{
    [Controller]
    [Route("/api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUsersService _usersService;

        public UserController(IUsersService usersService)
        {
            _usersService = usersService;
        }

        [HttpGet]
        public ActionResult GetAllUsers()
        {
            try
            {
                var users = _usersService.GetAllUsers();
                return new OkObjectResult(users);
            }
            catch
            {
                return new ObjectResult("Something went wrong!")
                {
                    StatusCode = 500
                };
            }

        }

        [HttpGet("{id}")]
        public ActionResult GetUser(int id)
        {
            try
            {
                var user = _usersService.GetUser(id);
                return new OkObjectResult(user);
            }
            catch (KeyNotFoundException e)
            {
                return new NotFoundObjectResult(e.Message);
            }
            catch
            {
                return new ObjectResult("Something went wrong!")
                {
                    StatusCode = 500
                };
            }
        }

        [HttpPost]
        public ActionResult PostUser([FromBody] User user)
        {
            try
            { 
                var dbUser = _usersService.PostUser(user);
                return new OkObjectResult(dbUser);
            }
            catch
            {
                return new ObjectResult("Something went wrong!")
                {
                    StatusCode = 500
                };
            }
        }

        [HttpPut("{id}")]
        public ActionResult EditUser(int id, [FromBody] User user)
        {
            try
            {
                _usersService.EditUser(id, user);
                return new OkObjectResult(true);
            }
            catch (KeyNotFoundException e)
            {
                return new NotFoundObjectResult(e.Message);
            }
            catch
            {
                return new ObjectResult("Something went wrong!")
                {
                    StatusCode = 500
                };
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteUser(int id)
        {
            try
            {
                var dbUser = _usersService.DeleteUser(id);
                return new OkObjectResult(dbUser);
            }
            catch (KeyNotFoundException e)
            {
                return new NotFoundObjectResult(e.Message);
            }
            catch
            {
                return new ObjectResult("Something went wrong!")
                {
                    StatusCode = 500
                };
            }
        }
    }
}
