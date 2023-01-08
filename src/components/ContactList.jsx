import { nanoid } from "nanoid";
import Button from "./Button";

function ContactList({ contactList, filterInputValue, onClick }) {
  let contacts = contactList
    .filter((item) =>
      item.name.toLowerCase().includes(filterInputValue.toLowerCase())
    )
    .map((item) => (
      <li key={nanoid()}>
        {item.name}:{item.number}
        <Button type="button" label="Delete" onClick={() => onClick(item.id)} />
      </li>
    ));

  return contacts;
}

export default ContactList;
