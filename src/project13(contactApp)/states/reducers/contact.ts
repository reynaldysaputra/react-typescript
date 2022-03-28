import { ADD_CONTACT } from "../action-types/action-tp";
import { ContactActions, ContactData } from "../types";

export interface IContactType extends ContactData {
  query: string;
}

const initialStateContact: IContactType = {
  dataContact: [],
  query: ""
}

export const contactReducer = (state= initialStateContact, action: ContactActions) => {
  switch(action.type){
    case ADD_CONTACT:
      return [...state.dataContact, action.payload];
    default:
      return state;
  } 
}