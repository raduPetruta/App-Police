using Microsoft.Extensions.Options;
using policedep_backend.Database;
using policedep_backend.Models;
using policedep_backend.Services.BaseService;

namespace policedep_backend.Services
{
    public class MeetingService: BaseEntityService<Meeting>
    {
        public MeetingService(IOptions<MongoDBSettings> mongoDBSettings) : base(mongoDBSettings, "Meeting")
        {
        }
    }
}
