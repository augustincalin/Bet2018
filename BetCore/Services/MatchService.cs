using BetCore.Interfaces;
using BetCore.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BetCore.Services
{
    public class MatchService : IMatchService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMatchRepository _matchRepository;

        public MatchService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _matchRepository = _unitOfWork.Matches;
        }

        public async Task<IEnumerable<Match>> GetNextMatches(int userId)
        {
            return await _matchRepository.GetNextMatches(userId);
        }

        public async Task<IEnumerable<Match>> GetPastMatches(int userId)
        {
            return await _matchRepository.GetPastMatches(userId);
        }
    }
}
