namespace ProgressiveSinglePageWebApp.DataAccess.Models
{
    public class SampleItem : SynchronisableEntity<int>
    {
        public double Longitude { get; set; }

        public double Latitude { get; set; }

        public double Temperature { get; set; }

        public string Observations { get; set; }

        public Weather Weather { get; set; } = Weather.Sunny;

        public string Name { get; set; }
    }
}