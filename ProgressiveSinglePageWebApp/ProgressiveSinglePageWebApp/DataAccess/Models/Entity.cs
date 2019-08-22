namespace ProgressiveSinglePageWebApp.DataAccess.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    public class Entity<TKey>
    {
        [Key]
        public TKey Id { get; set; }

        public DateTimeOffset ChangedOn { get; set; }

        public string ChangedBy { get; set; }
    }
}
