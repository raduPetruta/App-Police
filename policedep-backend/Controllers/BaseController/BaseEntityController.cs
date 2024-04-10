using Microsoft.AspNetCore.Mvc;
using policedep_backend.Services.BaseService;

namespace policedep_backend.Controllers.BaseController
{
    public abstract class BaseEntityController<TEntity> : ControllerBase where TEntity : class
    {
        protected readonly BaseEntityService<TEntity> _entityService;

        public BaseEntityController(BaseEntityService<TEntity> entityService)
        {
            _entityService = entityService;
        }

        [HttpGet]
        public async Task<ActionResult<List<TEntity>>> GetAll()
        {
            var entities = await _entityService.GetAll();
            return Ok(entities);
        }

        [HttpPost]
        public async Task<ActionResult<TEntity>> Create(TEntity entity)
        {
            await _entityService.Create(entity);
            return Ok(entity);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            await _entityService.Delete(id);
            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TEntity>> GetById(string id)
        {
            var entity = await _entityService.GetById(id);
            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, TEntity updatedEntity)
        {
            try
            {
                var entity = await _entityService.Update(id, updatedEntity);
                if (entity == null)
                    return NotFound();
                return Ok(entity);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while updating the entity: {ex.Message}");
            }
        }
    }
}
