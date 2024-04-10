using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using policedep_backend.Database;
using policedep_backend.Models;
using policedep_backend.Services.BaseService;
using System.Runtime.CompilerServices;

namespace policedep_backend.Services
{
    public class UserService : BaseEntityService<User>
    { 
        public UserService(IOptions<MongoDBSettings> mongoDBSettings) : base(mongoDBSettings, "User")
        {

        }
        public User Authenticate(string username, string password)
        {
            // Find the user with the provided username and password
            var filter = Builders<User>.Filter.And(
                Builders<User>.Filter.Eq(u => u.username, username),
                Builders<User>.Filter.Eq(u => u.password, password)
            );
            var user = _collection.Find(filter).FirstOrDefault();

            // Return the authenticated user or null if authentication failed
            return user;
        }

    }

}
