using BetCore.Common;
using System;
using System.Collections.Generic;

namespace BetCore.Model
{
    public class Result:Entity
    {
        public override int Id { get; set; }
        public int MatchId { get; set; }
        public int UserId { get; set; }
        public int Team1Goals { get; set; }
        public int Team2Goals { get; set; }
        public int? PointsEarned { get; set; }

        public Match Match { get; set; }
        public User User { get; set; }
    }
}
