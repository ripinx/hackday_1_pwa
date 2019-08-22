namespace ProgressiveSinglePageWebApp.DataAccess.Repositories
{
    using ProgressiveSinglePageWebApp.DataAccess.Models;
    using System.Linq;

    public class SampleItemRepository
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

        public SampleItem Create(SampleItem item)
        {
            context.Set<SampleItem>().Add(item);
            context.SaveChanges();

            return item;
        }

        public SampleItem Update(SampleItem item)
        {
            context.Set<SampleItem>().Update(item);
            context.SaveChanges();

            return item;
        }

        public bool Delete(int id)
        {
            var entity = Get(id);

            if (entity == null) return false;

            context.Set<SampleItem>().Remove(entity);

            return true;
        }
    }
}
