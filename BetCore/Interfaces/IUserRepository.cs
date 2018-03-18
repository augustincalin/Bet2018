using BetCore.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BetCore.Interfaces
{
    public interface IUserRepository: IRepository<User>
    {
        Task<IEnumerable<User>> GetTopUsers(int count);
    }
}
