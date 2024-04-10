using MongoDB.Bson.Serialization.Attributes;

namespace policedep_backend.Models
{
    public class Criminal
    {
        [BsonId]
        public required string id { get; set; }
        public required string name { get; set; }
        public required string motive { get; set; }
        public required int age { get; set; }
        public required Document criminalDocument { get; set; }
    }
}
