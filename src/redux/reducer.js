import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./actions";
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

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return [...state.contacts.items, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.contacts.items.filter((item) => item.id !== action.payload);
  },
  [filterContacts]: (state, action) => {
    return state.contacts.items.map((item) => {
      if (item.id !== action.payload) {
        return item;
      }
      return {
        ...item,
      };
    });
  },
});

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "contacts/addContact": {
//       return {
//         ...state,

//         contacts: [...state.contacts, action.payload],
//       };
//     }

//     case "contacts/deleteContact":
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           (contact) => contact.id !== action.payload
//         ),
//       };

//     case "filters/filterContacts":
//       return {
//         ...state,
//         filterInputValue: action.payload,
//       };

//     default:
//       return state;
//   }
// };
