using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using policedep_backend.Database;

namespace policedep_backend.Services.BaseService
{
    public abstract class BaseEntityService<TEntity>
    {
        protected readonly IMongoCollection<TEntity> _collection;

        public BaseEntityService(IOptions<MongoDBSettings> mongoDBSettings, string collectionName)
        {
            MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _collection = database.GetCollection<TEntity>(collectionName);
        }

        public virtual async Task<List<TEntity>> GetAll()
        {
            return await _collection.Find(new BsonDocument()).ToListAsync();
        }

        public virtual async Task Create(TEntity entity)
        {
            await _collection.InsertOneAsync(entity);
        }

        public virtual async Task Delete(string id)
        {
            // Implement delete logic here
        }

        public virtual async Task<TEntity> GetById(string id)
        {
            var filter = Builders<TEntity>.Filter.Eq("_id", id);
            return await _collection.Find(filter).FirstOrDefaultAsync();
        }

        public virtual async Task<TEntity> Update(string id, TEntity updatedEntity)
        {
            var filter = Builders<TEntity>.Filter.Eq("_id", id);
            var result = await _collection.ReplaceOneAsync(filter, updatedEntity);
            if (result.IsAcknowledged && result.ModifiedCount > 0)
            {
                return updatedEntity;
            }
            else
            {
                throw new Exception("Failed to update the entity.");
            }
        }
    }
}
