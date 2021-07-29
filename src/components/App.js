import React,{useState,useEffect, useReducer} from 'react'
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import {uuid} from 'uuidv4'
import { id } from 'postcss-selector-parser';


function App() {

  const LOCAL_STORAGE_KEY='contacts';

  const [contacts,setContacts]=useState([]);

  const AddContactHandler=(contact)=>{
    console.log(contact)
    setContacts([...contacts, {id:uuid(),...contact}])
  }

  const removeContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    })
    setContacts(newContactList)
  }

 

  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts)))
    if(retrieveContacts) setContacts(retrieveContacts);
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])

 

  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={AddContactHandler}/>
      <ContactList contacts = {contacts} getContactId = {removeContactHandler}/> 
    </div>
  );
}

export default App;
