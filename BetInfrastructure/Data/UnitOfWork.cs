using BetCore.Interfaces;
using BetCore.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BetInfrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly CMBETContext _context;
        public IUserRepository Users { get; private set; }
        public ISettingRepository Settings { get; private set; }

        public UnitOfWork(CMBETContext context)
        {
            _context = context;
            Users = new UserRepository(_context);
            Settings = new SettingRepository(_context);
        }

        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
