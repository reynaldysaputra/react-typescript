import React, {FC, FormEvent, useState} from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAlert } from '../store/actions/alertActions';
import {actionCreators} from '../store/actions';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState<string>("");
  const { setLoading, getWeather } = bindActionCreators(actionCreators, dispatch)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(city.trim() === ''){
      return dispatch(setAlert('City is required!'));
    }

    setLoading();
    getWeather(city);
    setCity('');
  }

  return (
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="py-5" onSubmit={submitHandler}>
            <input 
              type="text"
              className="input has-text-centered mb-2"
              placeholder="Enter city name"
              style={{maxWidth: 300}}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search;