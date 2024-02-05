using System;
using System.Collections.Generic;
using System.EnterpriseServices.CompensatingResourceManager;
using System.Globalization;
using System.IO;
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
        public ActionResult ChangePasswordPage()
        {

            return View();
        }
        [HttpGet]
        public ActionResult Notification()
        {

            return View();
        }
        [HttpGet]
        public ActionResult Product()
        {

            return View();
        }
        [HttpGet]
        public ActionResult Setting()
        {

            return View();
        }
        [HttpGet]
        public ActionResult Statistical()
        {

            return View();
        }
        [HttpGet]
        public ActionResult Support()
        {

            return View();
        }
        [HttpGet]
        public ActionResult UpgradeAccount()
        {

            return View();
        }
        //=======================


        [HttpGet]
        public ActionResult ProfileUser()
        {
            User user = (User)Session["sesion"];
            var a = _db.Users.Where(x => x.idUser == user.idUser).ToList().Select(x => new DtoUser()
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
                NgaySinh = x.NgaySinh.HasValue ? x.NgaySinh.Value.ToString("dd/MM/yyyy") : null,
                DiaChi = x.DiaChi
            }).FirstOrDefault();
            ViewBag.listPhongBan = _db.PhongBans.ToList();
            ViewBag.listChucVu = _db.ChucVus.ToList();
            return View(a);
        }
        [HttpPost]
        public ActionResult ProfileUser(DtoUser _dtoUser)
        {
            var item = _db.Users.Find(_dtoUser.idUser);
            if (item != null)
            {
                if (string.IsNullOrEmpty(_dtoUser.NgaySinh))
                {
                    item.NgaySinh = null;
                }
                else
                {
                    DateTime ngaySinh;
                    if (DateTime.TryParseExact(_dtoUser.NgaySinh, "dd/MM/yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out ngaySinh))
                    {
                        item.NgaySinh = ngaySinh;
                    }
                    else
                    {
                        ModelState.AddModelError("NgaySinh", "Ngày sinh không hợp lệ");
                        return ProfileUser();
                    }
                }
                item.IdPhongBan = _dtoUser.IdPhongBan;
                item.IdChucVu = _dtoUser.IdChucVu;
                item.CCCD = _dtoUser.CCCD;
                item.DiaChi = _dtoUser.DiaChi;
                item.Sdt = _dtoUser.Sdt;
                item.GioiTinh = _dtoUser.GioiTinh;


                var image = Request.Files.AllKeys.FirstOrDefault();
                if (!string.IsNullOrEmpty(image))
                {
                    var imageFile = Request.Files[image];
                    if (imageFile.ContentLength > 0)
                    {
                        using (var binaryReader = new BinaryReader(imageFile.InputStream))
                        {
                            item.Image = binaryReader.ReadBytes(imageFile.ContentLength);
                        }
                    }
                }
                _db.SaveChanges();

                Session["sesion"] = item;
            }
            return ProfileUser();
        }
    }
}