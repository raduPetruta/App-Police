using MongoDB.Bson.Serialization.Attributes;

namespace policedep_backend.Models
{
    public class Meeting
    {
        [BsonId]
        public required string id { get; set; }
        public required DateTime Date { get; set; }
        public required TimeSpan Time { get; set; }
        public required List<Agent> participantsAgents { get; set; }
        public required string StationName { get; set; }
        public string? Details { get; set; }
        public required string reason { get; set; }
    }
}
