import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../button/button';
import InputForm from '../input-form/input-form';
import TextareaForm from '../textarea-form/textarea-form';
import Title from '../title/title';
import {ProfileProps} from './profile.props';
import styles from './profile.module.scss';

const Profile = ({currentUser}: ProfileProps): JSX.Element => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [errorName, setErrorName] = useState(false);
  const [errorUserName, setErrorUserName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorStreet, setErrorStreet] = useState(false);
  const [errorCity, setErrorCity] = useState(false);
  const [errorZipCode, setErrorZipCode] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorWebsite, setErrorWebsite] = useState(false);

  const handleEditClick = () => {
    setDisabled(false);
  };

  const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
   e.currentTarget.formName.value === ''? setErrorName(true): setErrorName(false);
   e.currentTarget.userName.value === ''? setErrorUserName(true): setErrorUserName(false);
   e.currentTarget.email.value === ''? setErrorEmail(true): setErrorEmail(false);
   e.currentTarget.street.value === ''? setErrorStreet(true): setErrorStreet(false);
   e.currentTarget.city.value === ''? setErrorCity(true): setErrorCity(false);
   e.currentTarget.zipCode.value === ''? setErrorZipCode(true): setErrorZipCode(false);
   e.currentTarget.phone.value === ''? setErrorPhone(true): setErrorPhone(false);
   e.currentTarget.website.value === ''? setErrorWebsite(true): setErrorWebsite(false);
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !errorName &&
      !errorUserName &&
      !errorEmail &&
      !errorStreet &&
      !errorCity &&
      !errorZipCode &&
      !errorPhone &&
      !errorWebsite
    ) {
      setError(false);
      console.log(JSON.stringify(Array.from(new FormData(e.currentTarget))));
      navigate('/');
    } else {
      setError(true);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Title>Профиль пользоваетля</Title>
        <Button color={'blue'} onClick={handleEditClick}>Редактироввать</Button>
      </div>
      <form
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
      >
        <div className={styles.formFields}>
          <InputForm
            label={'Name'}
            name={'formName'}
            defaultValue={currentUser.name}
            disabled={disabled}
            inputError={errorName}
          />
          <InputForm
            label={'User name'}
            name={'userName'}
            defaultValue={currentUser.username}
            disabled={disabled}
            inputError={errorUserName}
          />
          <InputForm
            label={'E-mail'}
            name={'email'}
            type={'email'}
            defaultValue={currentUser.email}
            disabled={disabled}
            inputError={errorEmail}
          />
          <InputForm
            label={'Street'}
            name={'street'}
            defaultValue={currentUser.address.street}
            disabled={disabled}
            inputError={errorStreet}
          />
          <InputForm
            label={'City'}
            name={'city'}
            defaultValue={currentUser.address.city}
            disabled={disabled}
            inputError={errorCity}
          />
          <InputForm
            label={'Zip code'}
            name={'zipCode'}
            defaultValue={currentUser.address.zipcode}
            disabled={disabled}
            inputError={errorZipCode}
          />
          <InputForm
            label={'Phone'}
            name={'phone'}
            type={'tel'}
            defaultValue={currentUser.phone}
            disabled={disabled}
            inputError={errorPhone}
          />
          <InputForm
            label={'Website'}
            name={'website'}
            defaultValue={currentUser.website}
            disabled={disabled}
            inputError={errorWebsite}
          />
          <TextareaForm
            label={'Comment'}
            name={'comment'}
            disabled={disabled}
          />
        </div>
        {
          error && <p className={styles.error}>заполните обязательные поля</p>
        }
        <Button
          type={'submit'}
          color={'green'}
          style={{marginLeft: 'auto'}}
          disabled={disabled}
        >
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default Profile;
