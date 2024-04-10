namespace policedep_backend.Services
{
    using Microsoft.Extensions.Options;
    using MongoDB.Bson;
    using MongoDB.Driver;
    using policedep_backend.Database;
    using policedep_backend.Models;
    using policedep_backend.Services.BaseService;
    public class CityService : BaseEntityService<City>
    {
        public CityService(IOptions<MongoDBSettings> mongoDBSettings) : base(mongoDBSettings, "City")
        {
        }
    }
}
