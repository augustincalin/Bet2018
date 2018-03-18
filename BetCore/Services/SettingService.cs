using BetCore.Interfaces;
using BetCore.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BetCore.Services
{
    public class SettingService : ISettingService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ISettingRepository _settingRepository;
        public SettingService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _settingRepository = _unitOfWork.Settings;
        }
        public async Task<Setting> GetCurrentSetting()
        {
            return await _settingRepository.GetCurrentSetting();
        }
    }
}
