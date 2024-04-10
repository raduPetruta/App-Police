using Microsoft.EntityFrameworkCore;
using policedep_backend.Models;

namespace policedep_backend.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions options): base(options) 
        { 
        }

        public DbSet<User> Users {  get; set; }
    }
}
