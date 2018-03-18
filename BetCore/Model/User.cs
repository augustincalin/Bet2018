using BetCore.Common;
using System;
using System.Collections.Generic;

namespace BetCore.Model
{
    public class User: Entity
    {
        public User()
        {
            Result = new HashSet<Result>();
        }

        public override int Id { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }

        public ICollection<Result> Result { get; set; }
    }
}
