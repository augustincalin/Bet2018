using BetCore.Common;
using System;
using System.Collections.Generic;

namespace BetCore.Model
{
    public class Setting: Entity
    {
        public override int Id { get; set; }
        public DateTime FromDate { get; set; }
        public int ResultPoints { get; set; }
        public int GoalsPoints { get; set; }
    }
}
