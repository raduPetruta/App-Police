using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using policedep_backend.Database;
using policedep_backend.Models;
using policedep_backend.Services.BaseService;
using static System.Collections.Specialized.BitVector32;

namespace policedep_backend.Services
{
    public class StationService : BaseEntityService<Station>
    {
        public StationService(IOptions<MongoDBSettings> mongoDBSettings) : base(mongoDBSettings, "Station")
        {
        }
        public async Task<IActionResult> CreateStation([FromBody]Station station)
        {
            try
            {
                // Insert a single station into a collection
                await _collection.InsertOneAsync(station);
                return new StatusCodeResult(StatusCodes.Status201Created);
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        public async Task<IActionResult> AddAgentNameToStation(string stationName, string agentName)
        {
            try
            {
                var filter = Builders<Station>.Filter.Eq(s => s.name, stationName);
                var station = _collection.Find(filter).FirstOrDefault();

                if (station == null)
                {
                    return new StatusCodeResult(StatusCodes.Status500InternalServerError);
                }

                if (station.AgentsNames == null)
                {
                    station.AgentsNames = new List<string>();
                }
                station.AgentsNames.Add(agentName);

                // Update the station in the database
                var update = Builders<Station>.Update.Set(s => s.AgentsNames, station.AgentsNames);
                var updateResult = await _collection.UpdateOneAsync(filter, update);

                if (updateResult.ModifiedCount == 0)
                {
                    return new StatusCodeResult(StatusCodes.Status500InternalServerError);
                }

                return new StatusCodeResult(StatusCodes.Status201Created);
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine($"Error: {ex.Message}");
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        public virtual async Task<Station> GetStationById(string id)
        {
            var filter = Builders<Station>.Filter.Eq(s => s.id, id);
            return await _collection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task Update(Station station)
        {
            var filter = Builders<Station>.Filter.Eq(s => s.id, station.id);
            await _collection.ReplaceOneAsync(filter, station);
        }
    }
}