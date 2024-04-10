using MongoDB.Bson.Serialization.Attributes;

namespace policedep_backend.Models
{
    public class Station
    {
        [BsonId]
        public required string id { get; set; }
        public required string name {  get; set; }
        public required List<Agent> Agents { get; set; }
    }
}
