import { reactive } from 'vue';
import * as Config from '../../config';
import { MemberType } from './MemberTypeEnum';
import { Role } from './RoleEnum';

export type UserData = {
  id: string | null;
  email: string;
  username: string;
  role: Role;
  memberType: MemberType;
};

const EMPTY_USER: UserData = {
  id: null,
  email: '',
  memberType: MemberType.Common,
  role: Role.User,
  username: '',
};

class AuthManager {
  public user = reactive<UserData>(EMPTY_USER);

  get isLogged(): boolean {
    return this.user.id !== null;
  }

  private setUser(user: UserData) {
    Object.assign(this.user, user);
  }

  public async login() {
    // Future Login logic...
    await new Promise((res) => setTimeout(res, 1000));

    this.setUser({
      id: Config.MockedUser.id,
      username: Config.MockedUser.username,
      email: Config.MockedUser.email,
      role: Config.MockedUser.role,
      memberType: Config.MockedUser.memberType,
    });
  }

  public async logout() {
    this.setUser(EMPTY_USER);
  }
}

export default new AuthManager();
