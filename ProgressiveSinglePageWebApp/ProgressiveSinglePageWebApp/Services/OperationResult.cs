namespace ProgressiveSinglePageWebApp.Services
{
    using System;

    public class OperationResult
    {
        public string Message { get; set; }

        public Exception Exception { get; set; }

        public bool IsSuccess { get; set; }
    }
}
