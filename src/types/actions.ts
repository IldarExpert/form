import {AnyAction} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {State} from './store';

export enum ActionType {
    updateLoadingStatus = 'data/update_loading_status',
    updateAuthStatus = 'user/update_auth_status',
    saveUsersData = 'user/save_users_data',
    saveCurrentUserData = 'user/save_current_user_data',
    updateSortedUsersData = 'user/update_sorted_users_data',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, unknown, AnyAction>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
