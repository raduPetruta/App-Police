using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace policedep_backend.Models
{
    public class Agent
    {
        [BsonId]
        public required string id { get; set; }
        public required string name { get; set; }
        public required string function { get; set; }
        public required int  age { get; set; }
        public required string profilePictureURL { get; set; }
        public required string stationName {  get; set; }
        public required string reportsTo {  get; set; }
    }
}
