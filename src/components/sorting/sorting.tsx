import React from 'react';
import {useDispatch} from 'react-redux';
import sortUserList from '../../servises/sort-user-list';
import {updateSortedUsersData} from '../../store/actions';
import Button from '../button/button';
import {SortingProps} from './sorting.props';
import styles from './sorting.module.scss'


const Sorting = ({userList}: SortingProps) => {
  const dispatch = useDispatch();

  const handleSortClick = (sortType: string) => {
    dispatch(updateSortedUsersData(sortUserList(userList, sortType)));
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Сортировка</p>
      <Button
        color={'blue'}
        onClick={() => handleSortClick('byCity')}
      >
        по&nbsp;городу
      </Button>
      <Button
        color={'blue'}
        onClick={() => handleSortClick('byCompany')
        }
      >
        по&nbsp;компании
      </Button>
    </div>
  );
};

export default Sorting;
