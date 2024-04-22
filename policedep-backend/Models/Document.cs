using MongoDB.Bson.Serialization.Attributes;

namespace policedep_backend.Models
{
    public class Document
    {
        [BsonId]
        public required string id {  get; set; }
        public required string contents { get; set; }
        public required string title { get; set; }
        public required string station { get; set; }
        public required string crimeType {  get; set; }
        [BsonRequired]
        public required List<string> criminalsNames { get; set; }
        public required List<string> agentsNames { get; set; }
    }
}
