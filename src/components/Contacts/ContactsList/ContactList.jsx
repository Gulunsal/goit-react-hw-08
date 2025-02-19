import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchContact} from "../../../redux/contacts/operations"
import {selectFilteredContacts} from "../../../redux/contacts/selectors"
import ContactItem from "../ContactItem/ContactItem"

export default function ContactList() {

  const filteredContacts = useSelector(selectFilteredContacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContact())
  },[dispatch])

  return <ul>
    {filteredContacts?.map((contact) => (
      <ContactItem contact={contact} key={contact.id}/>
    ))}
  </ul>;
}
