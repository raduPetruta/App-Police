using MongoDB.Bson.Serialization.Attributes;

namespace policedep_backend.Models
{
    public class City
    {
        [BsonId]
        public required string Id { get; set; }
        public required string name { get; set; }
        public string? location { get; set; }
    }
}
