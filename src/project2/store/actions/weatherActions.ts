import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherData, WeatherError } from "../types";

export const getWeather = (city: string): ThunkAction<void, null, RootState, WeatherAction> => {
  return async dispatch => {
    try {
      const API_KEY = process.env.REACT_APP_API_KEY_WEATHER;
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09ce7bd90e1846c62e51ef5154ff0186`);

      if(!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const restData: WeatherData = await res.json(); 
      dispatch({
        type: GET_WEATHER,
        payload: restData
      })
    }catch(error: any) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      });
    }
  }
}

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}