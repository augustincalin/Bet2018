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
    public class UserRepository : EFRepository<User>, IUserRepository
    {
        public UserRepository(DbContext context) : base(context) { }

        public async Task<IEnumerable<User>> GetTopUsers(int count)
        {
            return await Task.FromResult(_entities.Include(u=>u.Result).OrderByDescending(u => u.Result.Sum(r=>r.PointsEarned)).Take(count));
        }
    }
}
