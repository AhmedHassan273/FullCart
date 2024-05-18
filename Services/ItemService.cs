using FullCart.Data;
using FullCart.Models;
using FullCart.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FullCart.Services
{
    public class ItemService : IItemService
    {
        private readonly ApplicationDbContext _context;

        public ItemService(ApplicationDbContext dbContext)
        {
            _context = dbContext;
        }

        public async Task<Item> AddAsync(Item item)
        {
            await _context.Items.AddAsync(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var item = await GetByIdAsync(id);
            if(item == null)
            {
                return false;
            }

            item.IsActive = false;
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<List<Item>> GetAllAsync()
        {
            var items = await _context.Items.Where(s => s.IsActive == true).ToListAsync();
            return items;
        }

        public async Task<Item?> GetByIdAsync(int id)
        {
            var item = await _context.Items.FirstOrDefaultAsync(s => s.Id == id && s.IsActive == true);
            return item;
        }

        public async Task<Item> UpdateAsync(Item item)
        {
            await _context.SaveChangesAsync();
            return item;
        }
    }
}