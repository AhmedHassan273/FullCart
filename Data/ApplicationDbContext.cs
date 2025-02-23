using FullCart.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace FullCart.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<Category> categories { get; set; }
        public DbSet<Item> Items { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public ApplicationDbContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("Users");
            base.OnModelCreating(modelBuilder);
        }

        public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
        {
            public ApplicationDbContext CreateDbContext(string[] args)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.Development.json")
                    .Build();
                var builder = new DbContextOptionsBuilder<ApplicationDbContext>();
                var connectionString = configuration.GetConnectionString("DefaultConnection");
                builder.UseSqlServer(connectionString);
                return new ApplicationDbContext(builder.Options);
            }
        }
    }
}