import { PureComponent } from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

export default class App extends PureComponent {
  state = {
    contacts: [],
    filter: '',
    isDelete: false,
    isCreate: false,
  };
  componentDidMount() {
    if (localStorage.getItem('contact'))
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contact')),
      });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length > this.state.contacts.length) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
      this.setState({
        isDelete: true,
      });
      setTimeout(() => {
        this.setState({ isDelete: false });
      }, 1500);
    }
    if (prevState.contacts.length < this.state.contacts.length) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
      this.setState({
        isCreate: true,
      });
      setTimeout(() => {
        this.setState({ isCreate: false });
      }, 1500);
    }
  }

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      const updatedContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );

      return { contacts: updatedContacts };
    });
  };

  updateFilter = value => {
    this.setState({ filter: value });
  };

  getFilterValue = () => {
    return this.state.filter;
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filter === '' ? contacts : filteredContacts;
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form
          contacts={this.state.contacts}
          addContact={this.addContact}
          updateState={this.updateState}
        />
        {this.state.contacts.length !== 0 && (
          <div>
            <h2>Contacts</h2>
            <Filter
              getFilterValue={this.getFilterValue}
              updateFilter={this.updateFilter}
            />
            <Contacts
              deleteContact={this.deleteContact}
              contacts={this.filterContacts()}
            />
          </div>
        )}
      </div>
    );
  }
}
