
using MongoDB.Driver;

namespace policedep_backend.Models
{
    public class User
    {
        public required string id {  get; set; }
        public required string username { get; set; }
        public required string password {  get; set; }
        public required string role {  get; set; }

        public static implicit operator User(FilterDefinition<User> v)
        {
            throw new NotImplementedException();
        }
    }
}
