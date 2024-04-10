using MongoDB.Bson.Serialization.Attributes;

namespace policedep_backend.Models
{
    public class Document
    {
        [BsonId]
        public required string id {  get; set; }
        public required string contents { get; set; }
    }
}
