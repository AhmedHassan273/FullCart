using FullCart.Models;

namespace FullCart.Services.Interfaces
{
    public interface IItemService
    {
        Task<Item?> GetByIdAsync(int id);
        Task<List<Item>> GetAllAsync();
        Task<Item> AddAsync(Item item);
        Task<Item> UpdateAsync(Item item);
        Task<bool> DeleteAsync(int id);
    }
}
