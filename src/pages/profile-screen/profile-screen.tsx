import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import Profile from '../../components/profile/profile';
import Sorting from '../../components/sorting/sorting';
import {fetchUser} from '../../store/api-action';
import {getCurrentUser, getIsLoading, getUserList} from '../../store/user-reducer/selectors';
import styles from './profile-screen.module.scss';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const isLoading = useSelector(getIsLoading);
  const userList = useSelector(getUserList);
  const currentUser = useSelector(getCurrentUser);

  useEffect(() => {
    id && dispatch(fetchUser(id));
  }, []);

  if (isLoading) {
    return <LoadingScreen/>
  }

  return (
    <div className={'container'}>
      <div className={styles.wrapper}>
        <Sorting userList={userList}/>
        <Profile currentUser={currentUser}/>
      </div>
    </div>
  );
};

export default ProfileScreen;
