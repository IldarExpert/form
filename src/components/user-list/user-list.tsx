import React from 'react';
import Title from '../title/title';
import UserCard from '../user-card/user-card';
import {UserListProps} from './user-list.props';
import styles from './user-list.module.scss';

const UserList = ({userList}: UserListProps): JSX.Element => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Title style={{marginBottom: '15px'}}>Список пользователей</Title>
        <ul className={styles.list}>
          {userList.map((userItem) => (
            <UserCard key={userItem.id} cardInfo={userItem}/>
          ))}
        </ul>
        <p className={styles.usersCount}>Найдено {userList.length} пользователей</p>
      </div>
    </div>
  )
    ;
};

export default UserList;
