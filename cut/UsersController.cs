using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using DATING.API.Data;
using DATING.API.Entities;
using Microsoft.AspNetCore.Authorization;
using API.Interfaces;

namespace API.Controllers
{

    [Authorize]
    public class UsersController : BaseApiController
    {
        //private readonly DataContext _context;
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
            //_context = context;
        }

        [HttpGet]
        // [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
           //var users=await _userRepository.GetUsersAsync();
          // return Ok(await _userRepository.GetUsersAsync());
        }
        //[Authorize]
        [HttpGet("{username}")]
        public async Task<ActionResult<AppUser>> GetUsers(string username)
        {
            //return await _userRepository.GetUserByUsernameAsync(username);
        }
    }
}