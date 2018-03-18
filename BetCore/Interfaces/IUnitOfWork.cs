using BetCore.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BetCore.Interfaces
{
    public interface IUnitOfWork: IDisposable
    {
        IUserRepository Users { get; }
        ISettingRepository Settings { get; }
        Task<int> CompleteAsync();
    }
}
