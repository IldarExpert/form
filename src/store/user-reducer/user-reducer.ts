import {createReducer} from '@reduxjs/toolkit';
import {UserReducerType} from '../../types/store';
import {updateSortedUsersData, saveUsersData, updateLoadingStatus, saveCurrentUserData} from '../actions';

export const initialState: UserReducerType = {
  userList: [{
    "id": 0,
    "name": "",
    "username": "",
    "email": "",
    "address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": "",
      "geo": {
        "lat": "",
        "lng": ""
      }
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": "",
      "bs": ""
    }
  }],
  sortedUserList: [{
    "id": 0,
    "name": "",
    "username": "",
    "email": "",
    "address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": "",
      "geo": {
        "lat": "",
        "lng": ""
      }
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": "",
      "bs": ""
    }
  }],
  currentUser: {
    "id": 0,
    "name": "",
    "username": "",
    "email": "",
    "address": {
      "street": "",
      "suite": "",
      "city": "",
      "zipcode": "",
      "geo": {
        "lat": "",
        "lng": ""
      }
    },
    "phone": "",
    "website": "",
    "company": {
      "name": "",
      "catchPhrase": "",
      "bs": ""
    }
  },
  isLoading: false,
}

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(saveUsersData, (state, action) => {
      state.userList = action.payload;
    })
    .addCase(saveCurrentUserData, (state, action) => {
      state.currentUser = action.payload;
    })
    .addCase(updateSortedUsersData, (state, action) => {
      state.sortedUserList = action.payload;
    })
    .addCase(updateLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
});
