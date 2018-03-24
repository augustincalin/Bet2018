using BetCore.Interfaces;
using BetCore.Model;
using BetWeb.ViewModel.Home;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BetWeb.Controllers
{
    [Produces("application/json")]
    [Authorize]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private readonly IUserService _userService;
        private readonly IMatchService _matchService;

        public HomeController(IUserService userService, IMatchService matchService)
        {
            _userService = userService;
            _matchService = matchService;
        }

        [HttpGet]
        [Route("/api/home/gethomedata")]
        public async Task<IActionResult> GetHomeData()
        {
            HomeData homeData = new HomeData();
            User user = await _userService.GetUserByNameAsync(User.Identity.Name);
            if (null == user)
            {
                user = await _userService.SaveUser(User.Identity.Name);
            }

            homeData.PastMatches = (await _matchService.GetPastMatches(user.Id)).Select(m => {
                Result result = m.Result.SingleOrDefault(r => r.MatchId == m.Id && r.UserId == user.Id);
                return new MatchData
                {
                    Team1Id = m.Team1Id,
                    Team2Id = m.Team2Id,
                    Team1 = m.Team1.Name,
                    Team2 = m.Team2.Name,
                    Goals1 = m.Team1Goals.GetValueOrDefault(),
                    Goals2 = m.Team2Goals.GetValueOrDefault(),
                    MatchTime = m.MatchTime,
                    Points = result != null ? result.PointsEarned.GetValueOrDefault():0,
                    Bet1 = result != null ? result.Team1Goals : (int?)null,
                    Bet2 = result != null ? result.Team2Goals : (int?)null,
                    IsPlaceHolder = false
                };
            }).ToList();
            homeData.NextMatches = (await _matchService.GetNextMatches(user.Id)).Select(m => {
                Result result = m.Result.SingleOrDefault(r => r.MatchId == m.Id && r.UserId == user.Id);
                MatchData matchData = new MatchData
                {
                    Team1Id = m.Team1Id,
                    Team2Id = m.Team2Id,
                    Team1 = m.Team1.Name,
                    Team2 = m.Team2.Name,
                    Goals1 = m.Team1Goals.GetValueOrDefault(),
                    Goals2 = m.Team2Goals.GetValueOrDefault(),
                    MatchTime = m.MatchTime,
                    Points = result != null ? result.PointsEarned.GetValueOrDefault() : 0,
                    IsPlaceHolder = m.Team1.IsPlaceholder.GetValueOrDefault() || m.Team2.IsPlaceholder.GetValueOrDefault()
                };
                if(result != null)
                {
                    matchData.Bet1 = result.Team1Goals;
                    matchData.Bet2 = result.Team2Goals;
                }
                return matchData;
            }).ToList();
            return new OkObjectResult(homeData);
        }
    }
}
