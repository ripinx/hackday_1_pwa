namespace ProgressiveSinglePageWebApp.DataAccess
{
    using Microsoft.EntityFrameworkCore;
    using ProgressiveSinglePageWebApp.DataAccess.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class PWADbContext : DbContext
    {
        public DbSet<SampleItem> SampleItems { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(Program.ConnectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SampleItem>()
                .HasKey(s => s.Id);
            modelBuilder.Entity<SampleItem>()
                .Property(s => s.Id)
                .ValueGeneratedOnAdd();

            modelBuilder.Entity<SampleItem>()
                .Property(s => s.Longitude)
                .IsRequired();

            modelBuilder.Entity<SampleItem>()
                .Property(s => s.Latitude)
                .IsRequired();
        }

        public void Migrate()
        {
            Database.Migrate();
        }
    }
}
