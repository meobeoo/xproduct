using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Xproduct.Models;

namespace Xproduct.Controllers
{
    public class UserController : Controller
    {
        DBContext _db = new DBContext();
        // GET: User
        [HttpGet]
        public ActionResult Index()
        {

            return View();
        }


        //[HttpPost]
        //public ActionResult Index()
        //{
        //    return View();
        //}
    }
     
   
}