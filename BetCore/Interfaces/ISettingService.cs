using BetCore.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BetCore.Interfaces
{
    public interface ISettingService
    {
        Task<Setting> GetCurrentSetting();
    }
}
