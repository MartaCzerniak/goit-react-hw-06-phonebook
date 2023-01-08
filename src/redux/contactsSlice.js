import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  },
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items.pop(action.payload);
    },
    filterContacts(state, action) {
      state.contacts.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
