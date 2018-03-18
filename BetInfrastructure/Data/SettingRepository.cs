using BetCore.Interfaces;
using BetCore.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BetInfrastructure.Data
{
    public class SettingRepository : EFRepository<Setting>, ISettingRepository
    {
        public SettingRepository(DbContext context) : base(context)
        {

        }
        public async Task<Setting> GetCurrentSetting()
        {
            return await _entities
                .Where(s => s.FromDate < DateTime.Now)
                .OrderByDescending(s => s.FromDate)
                .FirstOrDefaultAsync();
        }
    }
}
