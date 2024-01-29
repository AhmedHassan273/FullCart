using FullCart.Models;

namespace FullCart.Services.Interfaces
{
    public interface IUserService
    {
        Task<List<User>> GetAllAsync();
        Task<User> AddAsync(User user);
        Task<User> UpdateAsync(User user);
        Task<bool> DeleteAsync(int id);
        Task<User?> GetByIdAsync(int id);
        Task<bool> CanAuthenticateThisUserAsync(User user);
    }
}