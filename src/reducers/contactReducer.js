import { createSlice } from "@reduxjs/toolkit";

let initState = {
  contacts: [
    {
      name: "Steve",
      phoneNumber: 50328332728,
      location: "Accra",
      id: crypto.randomUUID(),
    },
    {
      name: "Louisa",
      phoneNumber: 4478824592,
      location: "London",
      id: crypto.randomUUID(),
    },
    {
      name: "Denise",
      phoneNumber: 1279023552,
      location: "Rome",
      id: crypto.randomUUID(),
    },
  ],
};

export const contactSlice = createSlice({
  name: "contacts",
  initState,
  reducers: {
    addContact: function(state, action){
      state.contacts.push(action.payload);
    },
    editContact: function(state, action){
      state.contacts = state.contacts.map(contact=>(contact.id === action.payload.id) ? action.payload.updatedUser : contact);
    },
    deleteContact: function(state,action){
      state.contacts = state.contacts.filter(contact=>{
          if(contact.id !== action.payload)
            return contact
      });
    },
  },
});
export const { addContact, editContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
