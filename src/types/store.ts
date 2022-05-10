import {RootState} from '../store/root-reducer';
import {UserInfo} from './user-info';

export type UserReducerType = {
  userList: UserInfo[],
  sortedUserList: UserInfo[],
  currentUser: UserInfo,
  isLoading: boolean,
}

export type State = RootState;
