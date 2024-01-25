using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Xproduct.Models;
using Xproduct.Models.Dto;

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

        [HttpGet]
        public ActionResult Profile()
        {
            User user = (User)Session["sesion"];
            var a = _db.Users.Where(x => x.idUser == user.idUser).Select(x => new DtoUser()
            {
                idUser = x.idUser,
                FullName = x.FullName,
                Email = x.Email,
                Sdt = x.Sdt,
                Password = x.Password,
                GioiTinh = x.GioiTinh,
                IdPhongBan = x.IdPhongBan,
                IdChucVu = x.IdChucVu,
                CCCD = x.CCCD,
                Image = x.Image,
                NgaySinh = x.NgaySinh
                
            }).FirstOrDefault();   
            ViewBag.listPhongBan = _db.PhongBans.ToList();
            ViewBag.listChucVu = _db.ChucVus.ToList();
            return View(a);
        }
        [HttpPost]
        public ActionResult Profile(DtoUser _dtoUser)
        {
            var item = _db.Users.Find(_dtoUser.idUser);
            if (item != null)
            {
                item.NgaySinh = _dtoUser.NgaySinh;
                item.IdPhongBan = _dtoUser.IdPhongBan;
                item.IdChucVu = _dtoUser.IdChucVu;
                item.CCCD = _dtoUser.CCCD;
                item.DiaChi = _dtoUser.DiaChi;
                item.Sdt = _dtoUser.Sdt;
                _db.SaveChanges();
            }
        return Profile();

        }

        public ActionResult UpImage()
        {


            return View();
        }


    }




    }