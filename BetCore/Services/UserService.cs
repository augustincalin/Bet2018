using BetCore.Interfaces;
using BetCore.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BetCore.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _userRepository = unitOfWork.Users;
        }

        public async Task<IEnumerable<User>> GetTop(int count)
        {
            return await _userRepository.GetTopUsers(count);
        }

        public async Task<User> GetUserByNameAsync(string username)
        {
            IEnumerable<User> users = await _userRepository.FindAsync(u => u.Name == username || u.DisplayName == username);
            return users.FirstOrDefault();
        }

        public async Task<User> SaveUser(string userName)
        {
            User user = new User { DisplayName = userName, Name = userName };
            await _userRepository.AddAsync(user);
            await _unitOfWork.CompleteAsync();
            return user;
        }
    }
}
