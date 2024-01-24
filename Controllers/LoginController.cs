using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using Xproduct.Models;
using Xproduct.Models.Dto;


namespace Xproduct.Controllers
{
    public class LoginController : Controller
    {
        DBContext _db = new DBContext();
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Authen(DtoUser _user)
        {
            var check = _db.Users.Where(s => s.Email.Equals(_user.Email)
            && s.Password.Equals(_user.Password)).FirstOrDefault();
            if (check == null)
            {
                ViewBag.b = "Password hoặc Username sai!\r\n" +
               "Vui lòng nhập lại";
                return View("Index", _user);
            }
            else
            {
                Session["sesion"] = check;
                return RedirectToAction("Index", "User");
            }
        }

        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Register(DtoUser _user)
        {
            if (ModelState.IsValid)
            {
                var check = _db.Users.FirstOrDefault(s => s.Email == _user.Email);

                if (check == null)
                {
                    _db.Configuration.ValidateOnSaveEnabled = false;
                    _db.Users.Add(new User
                    {
                        FullName = _user.FullName,
                        Email = _user.Email,
                        Sdt = _user.Sdt,
                        Password = _user.Password

                    });
                    _db.SaveChanges();
                    //điều hướng trang web về log in
                    return RedirectToAction("Index");
                }
                else
                {
                    ViewBag.c = "Email đã tồn tại vui lòng đăng nhập bằng Email khác";
                    return View();
                }
            }
            return View();
        }

        [HttpGet]
        public ActionResult ForgotPassword()
        {
            return View();
        }
        private static Random random = new Random();

        public static string RandomTo(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
        public static string Randomnho(int length)
        {
            const string chars = "abcdefghijklmnopqrstuvwxyz";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
        public static string Randomso(int length)
        {
            const string chars = "0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
        public static string Randomkitu(int length)
        {
            const string chars = "!@#$%^&*?";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        //Check email 
        public bool IsEmailExists(string email)
        {
            var check = _db.Users.Any(s => s.Email.Equals(email));
            return check;
        }

        //Gửi email
        [HttpPost]
        public ActionResult ForgotPassword(DtoUser _user)
        {
            // Kiểm tra xem địa chỉ email có tồn tại trong DB hay không
            var emailExists = IsEmailExists(_user.Email);
            if (!emailExists)
            {
                // Xử lý khi địa chỉ email không tồn tại trong DB
                ViewBag.a = "Địa chỉ email không tồn tại trong hệ thống!\r\n" +
                            "Vui lòng nhập đúng email để tiếp tục dịch vụ !";
                return View();
            }
            // Tiếp tục xử lý khi địa chỉ email tồn tại trong DB
            var a = RandomTo(1) + Randomnho(2) + Randomkitu(2) + Randomso(5);
            var check = _db.Users.Where(s => s.Email.Equals(_user.Email)).FirstOrDefault();
            check.Password = a;
            _db.SaveChanges();
            MailMessage mail = new MailMessage();
            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

            mail.From = new MailAddress("Shinkaihakua@gmail.com");
            mail.To.Add(_user.Email);
            mail.Subject = "Đã cập nhật mật khẩu của bạn !";
            mail.IsBodyHtml = true;
            mail.Body = " <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\">\r\n   " +
                " <tr>\r\n      <td align=\"center\" style=\"background-color: #f5f5f5; padding: 40px 0;\">\r\n     " +

                "   <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" style=\"background-color: #ffffff; border: 1px solid #dddddd;\">\r\n       " +
                "   <tr>\r\n            <td align=\"center\" style=\"padding: 40px;\">\r\n              <h1 style=\"color: #3498db;\";>Mật khẩu mới</h1>\r\n            " +
                "  <p>Chào bạn,</p>\r\n       " +
                "       <p>Bạn đã yêu cầu đặt lại mật khẩu của mình. Dưới đây là mật khẩu mới:</p>\r\n            " +
                "  <p><strong>Mật khẩu mới: <span style=\"color: #ff0000;\">" + a +
                "</span></strong></p>\r\n    " +
                "          <p>Vui lòng quay lại Login để thực hiện đăng nhập với mật khẩu mới !</p>\r\n             " +
                " <p>Xin cảm ơn!</p>\r\n    " +
                "        </td>\r\n        " +
                "  </tr>\r\n        </table>\r\n   " +
                "   </td>\r\n " +
                "   </tr>\r\n" +
                "  </table>";

            mail.Priority = MailPriority.High;

            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("Shinkaihakua@gmail.com", "bhys miqy jnsq njke");
            SmtpServer.EnableSsl = true;

            SmtpServer.Send(mail);

            ViewBag.a = "Đã cập nhật mật khẩu thành công\r\n" +
                "Hãy kiểm tra hộp thư để nhận mật khẩu mới!";
            return View();
        }



    }
}
