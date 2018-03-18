using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BetCore.Interfaces;
using Microsoft.AspNetCore.Authorization;
using BetWeb.ViewModel.Main;
using BetCore.Model;

namespace BetWeb.Controllers
{
    [Produces("application/json")]
    [Authorize]
    [Route("api/[controller]")]
    public class MainController : Controller
    {
        private readonly IUserService _userService;
        private readonly ISettingRepository _settingRepository;
        public MainController(IUserService userService, ISettingRepository settingRepository)
        {
            _userService = userService;
            _settingRepository = settingRepository;
        }

        [HttpGet]
        [Route("/api/main/getmaindata")]
        public async Task<IActionResult> GetMainData()
        {
            MainData mainData = new MainData();
            User user = await _userService.GetUserByNameAsync(User.Identity.Name);
            if (null == user)
            {
                user = await _userService.SaveUser(User.Identity.Name);
            }
            mainData.Username = user.DisplayName;
            mainData.TopUsers = (await _userService.GetTop(5))
                .Select(u => new TopUserData {
                    DisplayName = u.DisplayName,
                    Points = u.Result.Sum(r => r.PointsEarned.GetValueOrDefault())
                }).ToList();
            Setting actualSettings = await _settingRepository.GetCurrentSetting();
            mainData.Settings = new SettingData { GoalsPoints = actualSettings.GoalsPoints, ResultPoints = actualSettings.ResultPoints};
            return new OkObjectResult(mainData);
        }
    }
}
