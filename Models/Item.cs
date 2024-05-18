using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullCart.Models
{
    public class Item : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string Image { get; set; }
    }
}