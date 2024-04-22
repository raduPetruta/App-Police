namespace policedep_backend.Services
{
    using Microsoft.Extensions.Options;
    using MongoDB.Driver;
    using policedep_backend.Database;
    using policedep_backend.Models;
    using policedep_backend.Services.BaseService;

    public class AgentService : BaseEntityService<Agent>
    {
        public AgentService(IOptions<MongoDBSettings> mongoDBSettings) : base(mongoDBSettings, "Agent")
        {
        }
        public virtual async Task<Agent> GetByName(string name)
        {
            var filter = Builders<Agent>.Filter.Eq("name", name);
            return await _collection.Find(filter).FirstOrDefaultAsync();
        }
    }
}
