using System;
using System.Collections.Generic;

namespace BetCore.Model
{
    public partial class User
    {
        public User()
        {
            Result = new HashSet<Result>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }

        public ICollection<Result> Result { get; set; }
    }
}
