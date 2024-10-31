using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Employee : BaseEntity
    {
        [Required]
        public int NIK { get; set; }

        [StringLength(250)]
        public string FullName { get; set; }

        [StringLength(10)]
        public string Gender { get; set; }
        public DateTime?  DateOfBirth { get; set; }
        [StringLength(500)]
        public string Address {  get; set; }
        [StringLength(100)]
        public string Country { get; set; }
    }
}
