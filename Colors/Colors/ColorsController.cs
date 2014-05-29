using Colors.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Colors
{
    public class ColorsController : ApiController
    {
        ColorsDemoEntities entities = new ColorsDemoEntities();

        // GET api/<controller>
        public IEnumerable<Color> Get()
        {
            return entities.Colors;
        }

        // GET api/<controller>/5
        public Color Get(int id)
        {
            return entities.Colors.SingleOrDefault(c => c.Id == id);
        }

        // POST api/<controller>
        public void Post([FromBody]Color value)
        {
            value.Id = 0;
            entities.Colors.Add(value);
            entities.SaveChanges();
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]Color value)
        {
            var colorToChange = entities.Colors.SingleOrDefault(c => c.Id == id);
            colorToChange.name = value.name;
            colorToChange.value = value.value;
            entities.SaveChanges();
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            var colorToRemove = entities.Colors.SingleOrDefault(c => c.Id == id);
            entities.Colors.Remove(colorToRemove);
            entities.SaveChanges();
        }
    }
}