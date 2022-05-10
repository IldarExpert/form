import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import Sorting from '../../components/sorting/sorting';
import UserList from '../../components/user-list/user-list';
import {fetchUserList} from '../../store/api-action';
import {getIsLoading, getSortedUserList, getUserList} from '../../store/user-reducer/selectors';
import styles from './user-list-screen.module.scss';

const UserListScreen = () => {
  const dispatch = useDispatch();
  const userList = useSelector(getUserList);
  const isLoading = useSelector(getIsLoading);
  const sortedUserList = useSelector(getSortedUserList);

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen/>
  }

  return (
    <div className={'container'}>
      <div className={styles.userListScreen}>
        <Sorting  userList={userList}/>
        <UserList userList={sortedUserList}/>
      </div>
    </div>
  );
};

export default UserListScreen;
