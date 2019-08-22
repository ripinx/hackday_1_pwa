namespace ProgressiveSinglePageWebApp.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using ProgressiveSinglePageWebApp.DataAccess.Models;
    using ProgressiveSinglePageWebApp.Services;
    using System;

    [Route("api/[controller]")]
    public class SampleItemController : Controller
    {
        SampleItemService service = new SampleItemService();

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(service.GetAll());
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult Get(int id)
        {
            var entity = service.Get(id);
            if (entity == null) return NotFound();

            return Ok(service.Get(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] SampleItem item)
        {
            var username = TryGetUsername();
            return Ok(service.Create(item, username));
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Put(int id, [FromBody] SampleItem item)
        {
            var username = TryGetUsername();
            if (id != item.Id) return BadRequest();
            SampleItem result;

            try
            {
                result = service.Update(item, username);
                return Ok(result);
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Conflict();
            }
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var entity = service.Get(id);
            if (entity == null) return NotFound();

            return Ok(service.Delete(entity));
        }

        private string TryGetUsername()
        {
            // TODO get it from where it actually sits
            Request.Cookies.TryGetValue("username", out string result);
            return result;
        }
    }
}
