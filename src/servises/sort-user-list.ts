import {SortTypes} from '../conts';
import {UserInfo} from '../types/user-info';

const sortUserList = (userList: UserInfo[], sortType: string) => {
  return [...userList].sort((a, b) => {
    if (sortType === SortTypes[0]) {
      if (a.address.city > b.address.city) return 1;
      if (a.address.city === b.address.city) return 0;
      if (a.address.city < b.address.city) return -1;
    }

    if (sortType === SortTypes[1]) {
      if (a.company.name > b.company.name) return 1;
      if (a.company.name === b.company.name) return 0;
      if (a.company.name < b.company.name) return -1;
    }

    return 0;
  });
}

export default sortUserList;
