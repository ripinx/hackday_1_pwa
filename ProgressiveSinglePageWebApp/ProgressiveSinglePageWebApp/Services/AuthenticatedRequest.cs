namespace ProgressiveSinglePageWebApp.Services
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class AuthenticatedRequest<T>
    {
        public string Username { get; set; }
        public T Payload { get; set; }
    }
}
