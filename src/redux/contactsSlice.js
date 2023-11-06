import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    {
      id: '1',
      name: 'Ivan Petrenko',
      number: '099-122-32-20',
    },
    {
      id: '2',
      name: 'Ivan Babich',
      number: '099-122-32-23',
    },
    {
      id: '3',
      name: 'Ivan Kobzar',
      number: '099-122-32-22',
    },
    {
      id: '4',
      name: 'Ivan Roberto',
      number: '099-122-32-21',
    },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
      state.filter = '';
    },

    deleteContact: (state, { payload }) => {
      const index = state.contacts.findIndex(contact => contact.id === payload);
      state.contacts.splice(index, 1);
    },

    filterContactAC: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContactAC } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
