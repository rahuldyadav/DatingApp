using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        [StringLength(25,MinimumLength=3,ErrorMessage="Username length must between 4 and 8 character")]
        public string Username  { get; set; }

        [Required]
        [StringLength(8,MinimumLength=4,ErrorMessage="Password length must between 4 and 8 character")]
        public string Password { get; set; }
    }
}