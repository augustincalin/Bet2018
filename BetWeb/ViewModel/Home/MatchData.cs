using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BetWeb.ViewModel.Home
{
    public class MatchData
    {
        public string Team1 { get; set; }
        public string Team2 { get; set; }
        public int Goals1 { get; set; }
        public int Goals2 { get; set; }
        public int Team1Id { get; set; }
        public int Team2Id { get; set; }
        public int? Bet1 { get; set; }
        public int? Bet2 { get; set; }
        public int Points { get; set; }
        public DateTime MatchTime { get; set; }
        public bool IsPlaceHolder { get; set; }
    }
}
