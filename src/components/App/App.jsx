import { useState, useEffect } from 'react'
import css from './App.module.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import defContacts from "../../contact.json"


export default function App() {

const [value, setValue] = useState('');

const [contacts, setContacts] = useState(() => {
    const storageContact = window.localStorage.getItem("saveContact");
    return storageContact !== null
      ? JSON.parse(storageContact)
      : defContacts;
});
  
useEffect(() => {
    window.localStorage.setItem("saveContact", JSON.stringify(contacts));
}, [contacts]);
  
  const onDelete = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

     const visibleContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(value.toLowerCase())
  );
    
    const addNewUser = (newUser) => {
setContacts((prevContact)=>{
      return[...prevContact, newUser]     
    })}

    return <div className={css.container}>
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm onAdd={addNewUser} />
        <SearchBox value={value} onFilter={setValue}/>
        <ContactList contacts={visibleContacts}  onDelete={onDelete}/>
    </div>
}
