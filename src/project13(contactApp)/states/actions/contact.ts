import { ContactActions, ContactDataType } from "../types";
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "../action-types/action-tp";

export const AddContact = (payload: ContactDataType["contactList"]): ContactActions => {
  return{
    type: ADD_CONTACT,
    payload
  }
}

export const EditContact = (payload: ContactDataType["contactList"]): ContactActions => {
  return{
    type: EDIT_CONTACT,
    payload
  }
}

export const DeleteContact = (payload: string): ContactActions => {
  return {
    type: DELETE_CONTACT,
    payload
  }
}