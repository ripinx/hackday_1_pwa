namespace ProgressiveSinglePageWebApp.Services
{
    using Microsoft.EntityFrameworkCore;
    using ProgressiveSinglePageWebApp.DataAccess;
    using ProgressiveSinglePageWebApp.DataAccess.Models;
    using System;
    using System.Linq;

    public class SampleItemService
    {
        PWADbContext context = new PWADbContext();

        public SampleItem Get(int id)
        {
            return context.SampleItems.Find(id);
        }

        public IQueryable<SampleItem> GetAll()
        {
            return context.SampleItems.AsQueryable();
        }

        public SampleItem Create(SampleItem item, string username)
        {
            SetUsername(item, username);
            context.Set<SampleItem>().Add(item);
            context.SaveChanges();

            return item;
        }

        public SampleItem Update(SampleItem item, string username)
        {
            SetUsername(item, username);

            context.Entry(item).State = EntityState.Modified;
            context.SaveChanges();

            return item;
        }

        public bool Delete(SampleItem item)
        {
            context.Set<SampleItem>().Remove(item);

            return true;
        }

        private void HandleConcurrencyException(Action action)
        {
            try
            {
                action();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                // do stuff
            }
        }

        private void SetUsername(SampleItem item, string username)
        {
            item.ChangedBy = username;
            item.ChangedOn = DateTimeOffset.Now;
        }
    }
}
