using marketplace_api.Models;
using Microsoft.EntityFrameworkCore;

namespace marketplace_api
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasOne(p => p.Author)
                .WithMany(u => u.Products)
                .HasForeignKey(p => p.authorId);
        }
    }
}
