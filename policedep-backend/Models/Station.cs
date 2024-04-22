using MongoDB.Bson.Serialization.Attributes;

namespace policedep_backend.Models
{
    public class Station
    {
        [BsonId]
        public required string id { get; set; }
        public required string name {  get; set; }
        public List<string> AgentsNames { get; set; }
        public required float longitude { get; set; }
        public required float latitude { get; set; }
    }
}
