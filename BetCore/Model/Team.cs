using System;
using System.Collections.Generic;

namespace BetCore.Model
{
    public partial class Team
    {
        public Team()
        {
            MatchTeam1 = new HashSet<Match>();
            MatchTeam2 = new HashSet<Match>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public bool? IsPlaceholder { get; set; }

        public ICollection<Match> MatchTeam1 { get; set; }
        public ICollection<Match> MatchTeam2 { get; set; }
    }
}
