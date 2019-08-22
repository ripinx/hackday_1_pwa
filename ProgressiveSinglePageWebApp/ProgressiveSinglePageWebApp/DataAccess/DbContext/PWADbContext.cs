namespace ProgressiveSinglePageWebApp.DataAccess
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
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
                .Property(s => s.Name)
                .IsRequired();

            modelBuilder.Entity<SampleItem>()
                .Property(s => s.Longitude)
                .IsRequired();

            modelBuilder.Entity<SampleItem>()
                .Property(s => s.Latitude)
                .IsRequired();

            modelBuilder.Entity<SampleItem>()
                .Property(s => s.Version)
                .IsRowVersion()
                //.HasConversion(new SqliteTimestampConverter())
                //.HasColumnType("BLOB")
                //.HasDefaultValueSql("CURRENT_TIMESTAMP")
                ;

            // https://stackoverflow.com/questions/52684458/updating-entity-in-ef-core-application-with-sqlite-gives-dbupdateconcurrencyexce
            var timestampProperties = modelBuilder.Model
                .GetEntityTypes()
                .SelectMany(t => t.GetProperties())
                .Where(p => p.ClrType == typeof(byte[])
                && p.ValueGenerated == ValueGenerated.OnAddOrUpdate
                && p.IsConcurrencyToken);

            foreach (var property in timestampProperties)
            {
                property.SetValueConverter(new SqliteTimestampConverter());
                property.Relational().DefaultValueSql = "CURRENT_TIMESTAMP";
            }
        }

        public void Migrate()
        {
            Database.Migrate();
        }
    }
}
