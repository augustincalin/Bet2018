using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BetWeb.ViewModel.Home
{
    public class HomeData
    {
        public List<MatchData> PastMatches { get; set; }
        public List<MatchData> NextMatches { get; set; }
        public HomeData()
        {
            PastMatches = new List<MatchData>();
            NextMatches = new List<MatchData>();
        }

    }
}
