using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullCart.Models
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }   
        public string Image { get; set; }
    }
}