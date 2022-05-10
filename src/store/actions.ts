import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/actions';
import {UserInfo} from '../types/user-info';

export const saveUsersData = createAction<UserInfo[]>(ActionType.saveUsersData);
export const updateSortedUsersData = createAction<UserInfo[]>(ActionType.updateSortedUsersData);
export const saveCurrentUserData = createAction<UserInfo>(ActionType.saveCurrentUserData);
export const updateLoadingStatus = createAction<boolean>(ActionType.updateLoadingStatus);
