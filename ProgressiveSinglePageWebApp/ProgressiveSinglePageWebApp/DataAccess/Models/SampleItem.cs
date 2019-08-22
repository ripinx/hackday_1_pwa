namespace ProgressiveSinglePageWebApp.DataAccess.Models
{
    public class SampleItem : SynchronisableEntity<int>
    {
        public double Longitude { get; set; }

        public double Latitude { get; set; }

        public string Observations { get; set; }

        public int MyIntProperty { get; set; }
    }
}