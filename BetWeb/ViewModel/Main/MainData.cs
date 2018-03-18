using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BetWeb.ViewModel.Main
{
    public class MainData
    {
        public string Username { get; set; }
        public IList<TopUserData> TopUsers { get; set; }
        public SettingData Settings { get; set; }
    }
}
