import {State} from '../../types/store';

export const getUserList = (state: State) => state.user.userList;
export const getSortedUserList = (state: State) => state.user.sortedUserList;
export const getCurrentUser = (state: State) => state.user.currentUser
export const getIsLoading = (state: State) => state.user.isLoading;
