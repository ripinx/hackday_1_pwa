namespace ProgressiveSinglePageWebApp.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using ProgressiveSinglePageWebApp.DataAccess.Models;
    using ProgressiveSinglePageWebApp.Services;

    [Route("api/[controller]")]
    public class SampleItemController : Controller
    {
        SampleItemService service = new SampleItemService();

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(service.GetAll());
        }

        //[HttpGet]
        //public IActionResult Get(int id)
        //{
        //    return Ok(service.Get(id));
        //}

        [HttpPost]
        public IActionResult Post()
        {
            return Ok(service.GetAll());
        }

        [HttpPut]
        public IActionResult Put(int id, SampleItem item)
        {
            return Ok(service.Update(item));
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            return Ok(service.Delete(id));
        }
    }
}
