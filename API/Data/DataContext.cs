using DATING.API.Entities;
using Microsoft.EntityFrameworkCore;
namespace DATING.API.Data
{
    public class DataContext : DbContext
    {
      public DataContext(DbContextOptions <DataContext> options):base(options)  
        {}
        public DbSet<AppUser> Users { get; set; }
        
        
        
    }
}