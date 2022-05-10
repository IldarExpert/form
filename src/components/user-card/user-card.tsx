import React from 'react';
import {Link} from 'react-router-dom';
import UserCardItem from '../user-card-item/user-card-item';
import {UserCardProps} from './user-card.props';
import styles from './user-card.module.scss';

const UserCard = ({cardInfo}: UserCardProps): JSX.Element => {

  return (
    <li className={styles.wrapper}>
      <ul>
        <UserCardItem description={'ФИО'} value={cardInfo.name} />
        <UserCardItem description={'город'} value={cardInfo.address.city} />
        <UserCardItem description={'компания'} value={cardInfo.company.name} />
      </ul>
      <Link className={styles.link} to={`/profile/${cardInfo.id}`}>Подробнее</Link>
    </li>
  );
};

export default UserCard;
