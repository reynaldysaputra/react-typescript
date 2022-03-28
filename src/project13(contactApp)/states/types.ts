import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./action-types/action-tp";

export interface ContactDataType {
  contactList: {
    id: string;
    name: string;
    email: string;
    phone: string
  };
}

export interface ContactData {
  dataContact: Array<ContactDataType["contactList"]>
}

export interface AddContact { 
  type: typeof ADD_CONTACT;
  payload: ContactDataType["contactList"];
}

export interface EditContact {
  type: typeof EDIT_CONTACT;
  payload: ContactDataType
}

export interface DeleteContact {
  type: typeof DELETE_CONTACT;
  payload: number
}

export type ContactActions = AddContact | EditContact | DeleteContact;