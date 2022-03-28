import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "../action-types/action-tp";
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
      return {
        ...state,
        dataContact: [...state.dataContact, action.payload]
      }

    case EDIT_CONTACT:
      const contactUpdate = state.dataContact.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );

      return {
        ...state,
        dataContact: contactUpdate
      }
      
    case DELETE_CONTACT:
      const updatedContact = state.dataContact.filter(contact => 
        contact.id !== action.payload && contact
      )

      return {
        ...state,
        dataContact: updatedContact
      }
    default:
      return state;
  } 
}