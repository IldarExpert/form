import React from 'react';
import styles from './user-card-item.module.scss';
import {UserCardItemProps} from './user-card-item.props';

const UserCardItem = ({description, value}: UserCardItemProps): JSX.Element => {
  return (
    <li className={styles.item}>
      <span className={styles.description}>{description}: </span>{value}
    </li>
  );
};

export default UserCardItem;
