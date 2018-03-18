import { TopUserData } from "./topUserData.model";
import { SettingData } from "./settingData.model";

export class MainData {
    public username: string;
    public topUsers: TopUserData[];
    public settings: SettingData;
}
