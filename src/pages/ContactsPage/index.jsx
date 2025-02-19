import React from 'react'
import ContactsForm from "../../components/Contacts/ContactsForm/ContactsForm"
import ContactsList from "../../components/Contacts/ContactsList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"

export default function index() {
  return (
    <div>
      <ContactsForm/>
      <SearchBox/>
      <ContactsList/>
    </div>
  )
}
