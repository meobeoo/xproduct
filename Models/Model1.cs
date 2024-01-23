using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace Xproduct.Models
{
    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=User")
        {
        }

        public virtual DbSet<ChucVu> ChucVus { get; set; }
        //public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
