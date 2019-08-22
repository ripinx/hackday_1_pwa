namespace ProgressiveSinglePageWebApp.Services
{
    using ProgressiveSinglePageWebApp.DataAccess.Models;
    using ProgressiveSinglePageWebApp.DataAccess.Repositories;
    using System;
    using System.Linq;

    public class SampleItemService
    {
        SampleItemRepository repository = new SampleItemRepository();

        public SampleItem Get(int id)
        {
            return repository.Get(id);
        }

        public IQueryable<SampleItem> GetAll()
        {
            return repository.GetAll();
        }

        public SampleItem Create(SampleItem item)
        {
            SetUsername(item);
            return repository.Create(item);
        }

        public SampleItem Update(SampleItem item)
        {
            SetUsername(item);
            return repository.Update(item);
        }

        public bool Delete(int id)
        {
            return repository.Delete(id);
        }

        private void SetUsername(SampleItem item)
        {
            item.ChangedBy = GetUsername();
            item.ChangedOn = DateTimeOffset.Now;
        }

        private string GetUsername()
        {
            // send username with each request
            return "Me";
        }
    }
}
