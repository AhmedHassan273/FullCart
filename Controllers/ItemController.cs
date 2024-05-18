using FullCart.Models;
using FullCart.Services.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace FullCart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemService itemService;
        public ItemController(IItemService service)
        {
            itemService = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllItems()
        {
            var items = await itemService.GetAllAsync();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItemById(int id)
        {
            var item = await itemService.GetByIdAsync(id);
            if (item == null)
                return NotFound();

            return Ok(item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateItem(int id, [FromBody] Item updatedItem)
        {
            var existingItem = await itemService.GetByIdAsync(id);
            if (existingItem == null)
                return NotFound();

            existingItem.Name = updatedItem.Name;
            existingItem.Description = updatedItem.Description;
            existingItem.Price = updatedItem.Price;
            existingItem.Quantity = updatedItem.Quantity;
            existingItem.Image = updatedItem.Image;

            await itemService.UpdateAsync(existingItem);

            return Ok(existingItem);
        }

        [HttpPost]
        public async Task<IActionResult> AddNewItem([FromBody] Item newItem)
        {
            // Validate newItem properties
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            newItem.IsActive = true;
            newItem.CreatedAt = DateTime.Now;
            await itemService.AddAsync(newItem);

            return CreatedAtAction(nameof(GetItemById), new { id = newItem.Id }, newItem);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var result = await itemService.DeleteAsync(id);
            if(result == false) 
                return NotFound();
            return Ok(true);
        }
    }
}
