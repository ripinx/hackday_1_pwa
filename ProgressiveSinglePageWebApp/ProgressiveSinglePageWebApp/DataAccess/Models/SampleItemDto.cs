namespace ProgressiveSinglePageWebApp.DataAccess.Models
{
    using System;

    public class SampleItemDto
    {
        public int Id { get; set; }

        public string ChangedBy { get; set; }

        public DateTimeOffset ChangedOn { get; set; }

        public double Longitude { get; set; }

        public double Latitude { get; set; }

        public double Temperature { get; set; }

        public string Observations { get; set; }

        public Weather Weather { get; set; }

        public string Name { get; set; }
    }
}