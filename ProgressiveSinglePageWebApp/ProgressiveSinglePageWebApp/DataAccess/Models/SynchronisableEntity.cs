﻿using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System.Linq;

namespace ProgressiveSinglePageWebApp.DataAccess.Models
{
    public class SynchronisableEntity<TKey> : Entity<TKey>
    {
        public byte[] Version { get; set; }
    }

    class SqliteTimestampConverter : ValueConverter<byte[], string>
    {
        public SqliteTimestampConverter() : base(
            v => v == null ? null : ToDb(v),
            v => v == null ? null : FromDb(v))
        { }
        static byte[] FromDb(string v) =>
            v.Select(c => (byte)c).ToArray(); // Encoding.ASCII.GetString(v)

        static string ToDb(byte[] v) =>
            new string(v.Select(b => (char)b).ToArray()); // Encoding.ASCII.GetBytes(v))
    }
}
