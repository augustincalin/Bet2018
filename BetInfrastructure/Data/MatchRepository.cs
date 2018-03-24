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
    public class MatchRepository : EFRepository<Match>, IMatchRepository
    {
        public MatchRepository(DbContext context) : base(context)
        {

        }
        public async Task<IEnumerable<Match>> GetNextMatches(int userId)
        {
            DateTime date = new DateTime(2018, 6, 16);
            //DateTime date = DateTime.Now;

            return await _entities
                .Include(m => m.Result)
                .Include(m => m.Team1)
                .Include(m => m.Team2)
                .Where(m => m.MatchTime > date
                   /* && m.Result.SingleOrDefault(r => r.MatchId == m.Id && r.UserId == userId) != null*/)
                .OrderBy(m => m.MatchTime).ToListAsync();
        }

        public async Task<IEnumerable<Match>> GetPastMatches(int userId)
        {
            DateTime date = new DateTime(2018, 6, 16);
            //DateTime date = DateTime.Now;
            return await _entities
                .Include(m => m.Result)
                .Include(m => m.Team1)
                .Include(m => m.Team2)
                .Where(m => m.MatchTime < date
                    /*&& m.Result.SingleOrDefault(r => r.MatchId == m.Id && r.UserId == userId) != null*/)
                .OrderBy(m => m.MatchTime).ToListAsync();
        }
    }
}
