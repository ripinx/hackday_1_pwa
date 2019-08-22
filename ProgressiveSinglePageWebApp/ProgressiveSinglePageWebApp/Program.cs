namespace ProgressiveSinglePageWebApp
{
    using Microsoft.AspNetCore;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using System.IO;

    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.json");

            var configuration = builder.Build();
            ConnectionString = configuration.GetConnectionString("MyDb");

            new DataAccess.PWADbContext().Migrate();

            var item = new DataAccess.Models.SampleItem
            {
                Longitude = 123,
                MyIntProperty = 321,
                Latitude = -31,
                Observations = "Yes"
            };
            new Services.SampleItemService().Create(item);

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();

        public static string ConnectionString { get; set; } = "Data Source=ProgressiveSinglePageWebApp.db";
    }
}
