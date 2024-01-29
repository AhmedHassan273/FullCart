using Microsoft.AspNetCore.Identity;
using FullCart.Data;
using FullCart.Models;
using FullCart.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FullCart.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;
        private readonly IPasswordHasher<User> _passwordHasher;

        public UserService(ApplicationDbContext context, IPasswordHasher<User> passwordHasher)
        {
            _context = context;
            _passwordHasher = passwordHasher;
        }

        public async Task<List<User>> GetAllAsync()
        {
            return await _context.Users.Where(u => u.IsActive).ToListAsync();
        }

        public async Task<User?> GetByIdAsync(int id)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Id == id && u.IsActive);
        }



        public async Task<User> AddAsync(User user)
        {
            user.IsActive = true;
            user.CreatedAt = DateTime.UtcNow;

            // Hash the password
            user.Password = _passwordHasher.HashPassword(user, user.Password);

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User> UpdateAsync(User user)
        {
            _context.Update(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var user = await GetByIdAsync(id);
            if (user == null)
            {
                return false;
            }
            user.IsActive = false;
            await UpdateAsync(user);

            return true;
        }

        public async Task<bool> CanAuthenticateThisUserAsync(User user)
        {
            var originalPassword = user.Password;
            user.Password = _passwordHasher.HashPassword(user, user.Password);

            var authenticatedUser = await _context.Users.FirstOrDefaultAsync(x => x.IsActive &&
                                                                                  x.Username == user.Username &&
                                                                                  x.Password == user.Password);

            // Revert the password back to its original value
            user.Password = originalPassword;

            return authenticatedUser != null;
        }
    }
}