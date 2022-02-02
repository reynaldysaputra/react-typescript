export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  base: string;
  clouds: {
    all: number
  };
  cod: number;
  coord: {
    lon: number;
    lat: number
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number
  };
  name: string;
  sys: {
    coutry: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    seg: number
  };
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

interface  GetWeatherActions {
  type: typeof GET_WEATHER;
  payload: WeatherData
}

interface SetLoadingError {
  type: typeof SET_LOADING
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string
}

export type WeatherAction = GetWeatherActions | SetLoadingError | SetErrorAction;

export interface AlertActions {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}