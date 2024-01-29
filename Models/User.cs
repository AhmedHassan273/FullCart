using System.ComponentModel.DataAnnotations;

namespace FullCart.Models
{
    public class User : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public string? Token { get; set; }
        public string? Role { get; set; }
    }
}