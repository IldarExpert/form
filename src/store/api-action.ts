import axios from 'axios';
import {ThunkActionResult} from '../types/actions';
import {UserInfo} from '../types/user-info';
import {saveCurrentUserData, saveUsersData, updateLoadingStatus, updateSortedUsersData} from './actions';

export const fetchUserList = (): ThunkActionResult => {
  return async (dispatch, _getState, _api) => {
    try {
      dispatch(updateLoadingStatus(true));
      const {data} = await axios.get<UserInfo[]>('https://jsonplaceholder.typicode.com/users');
      dispatch(saveUsersData(data));
      dispatch(updateSortedUsersData(data));
    } catch (e) {
      console.log('error', e);
    } finally {
      dispatch(updateLoadingStatus(false));
    }
  }
}

export const fetchUser = (id: number | string): ThunkActionResult => {
  return async (dispatch, _getState, _api) => {
    try {
      dispatch(updateLoadingStatus(true));
      const {data} = await axios.get<UserInfo>(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch(saveCurrentUserData(data));
    } catch (e) {
      console.log('error', e);
    } finally {
      dispatch(updateLoadingStatus(false));
    }
  }
}
