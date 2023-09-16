import { FormEvent, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { toast } from 'react-toastify';
import './Searchbar.css';
import { IUserSubmit } from '../types/types';

const Searchbar = ({ onSubmit }: IUserSubmit) => {
  const [value, setValue] = useState<string>('');

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim() === '') {
      toast('Enter your request!');
      return;
    }
    onSubmit(value);
    setValue('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <DebounceInput
          className="SearchForm-input"
          debounceTimeout={100}
          type="text"
          autoComplete="off"
          autoFocus
          name="request"
          placeholder="Search images and photos"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        ;
      </form>
    </header>
  );
};

export default Searchbar;
