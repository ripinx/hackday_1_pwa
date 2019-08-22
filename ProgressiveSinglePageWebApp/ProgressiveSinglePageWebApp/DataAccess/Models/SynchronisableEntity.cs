namespace ProgressiveSinglePageWebApp.DataAccess.Models
{
    public class SynchronisableEntity<TKey> : Entity<TKey>
    {
        public long VersionNumber { get; set; }
    }
}
