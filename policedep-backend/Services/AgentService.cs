namespace policedep_backend.Services
{
    using Microsoft.Extensions.Options;
    using policedep_backend.Database;
    using policedep_backend.Models;
    using policedep_backend.Services.BaseService;

    public class AgentService : BaseEntityService<Agent>
    {
        public AgentService(IOptions<MongoDBSettings> mongoDBSettings) : base(mongoDBSettings, "Agent")
        {
        }

    }
}
