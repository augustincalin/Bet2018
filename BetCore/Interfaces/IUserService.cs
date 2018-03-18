using BetCore.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BetCore.Interfaces
{
    public interface IUserService
    {
        Task<User> GetUserByNameAsync(string name);
        Task<User> SaveUser(string userName);
        Task<IEnumerable<User>> GetTop(int count);
    }
}
