using BetCore.Common;
using System;
using System.Collections.Generic;

namespace BetCore.Model
{
    public class Match : Entity
    {
        public Match()
        {
            Result = new HashSet<Result>();
        }

        public override int Id { get; set; }
        public int Team1Id { get; set; }
        public int Team2Id { get; set; }
        public DateTime MatchTime { get; set; }
        public int? Team1Goals { get; set; }
        public int? Team2Goals { get; set; }

        public Team Team1 { get; set; }
        public Team Team2 { get; set; }
        public ICollection<Result> Result { get; set; }
    }
}
