import { ContactActions, ContactDataType } from "../types";
import { ADD_CONTACT } from "../action-types/action-tp";

export const AddContact = (payload: ContactDataType["contactList"]): ContactActions => {
  return{
    type: ADD_CONTACT,
    payload
  }
}