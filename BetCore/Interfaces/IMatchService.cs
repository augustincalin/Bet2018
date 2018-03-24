using BetCore.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BetCore.Interfaces
{
    public interface IMatchService
    {
        Task<IEnumerable<Match>> GetPastMatches(int userId);
        Task<IEnumerable<Match>> GetNextMatches(int userId);
    }
}
