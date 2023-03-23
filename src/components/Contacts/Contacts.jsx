import { Component } from "react";
import css from 'components/Contacts/Contacts.module.css'

export default class Contacts extends Component {
  onClick = ({ target }) => {
    const { deleteContact } = this.props;

    const id = target.parentElement.getAttribute('data-key');
    deleteContact(id);
  }

  render() {
    const { contacts } = this.props;

    return <ul className={css.list}>
      {contacts.map((contact) => { return <li key={contact.id} data-key={contact.id } className={css.item}>{contact.name} : { contact.number} <button onClick={this.onClick} className={css.btn}>Delete</button></li>})}
    </ul>
  }
};