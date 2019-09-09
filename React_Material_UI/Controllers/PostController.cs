using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace React_Material_UI.Controllers
{
    [Route("api/[controller]")]
    public class PostController : ControllerBase
    {
        string posts = @"[
                             {
                              'title': 'My first post',
                              'excerpt': 'This is my first post with more content inside',
                              image: 'https://bit.ly/2WNi2Ml'
                             },
                            
                             {
                              'title': 'My second post',
                              'excerpt': 'This is my second post with more content inside',
                              image: 'https://bit.ly/2WNi2Ml'
                             },
                            
                             {
                              'title': 'My third post',
                              'excerpt': 'This is my third post with more content inside',
                              image: 'https://bit.ly/2WNi2Ml'
                             },
                            
                             {
                              'title': 'My fourth post',
                              'excerpt': 'This is my fourth post with more content inside',
                              image: 'https://bit.ly/2WNi2Ml'
                             },
                            
                             {
                              'title': 'My fifth post',
                              'excerpt': 'This is my fifth post with more content inside',
                              image: 'https://bit.ly/2WNi2Ml'
                             },
                            
                             {
                              'title': 'My sixth post',
                              'excerpt': 'This is my sixth post with more content inside',
                              image: 'https://bit.ly/2WNi2Ml'
                             }
                            ]";


        [HttpGet("[action]")]
        public List<Modals.Posts> GetPosts()
        {
            var samplePosts = new List<Modals.Posts>();
            JsonSerializer serializer = new JsonSerializer();
            JsonTextReader reader = new JsonTextReader(new StringReader(posts));
            samplePosts = serializer.Deserialize<List<Modals.Posts>>(reader);
            return samplePosts;
        }
    }
}