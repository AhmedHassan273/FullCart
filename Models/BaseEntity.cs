using System.ComponentModel.DataAnnotations;

namespace FullCart.Models
{
    public class BaseEntity
    {
        [Key]
        public int Id { get; set; }

        public bool IsActive { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}