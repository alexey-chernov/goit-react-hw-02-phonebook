import React, { Component } from 'react';
import Container from './components/Container';
import ContactForm from './components/FormContacts';
import ContactList from './components/ListContacts';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


class App extends Component {

    state = {
        contacts: [
            { id: 'id-1', name: 'John Smith', number: '369-11-54' },
            { id: 'id-2', name: 'Elon Mask', number: '443-89-12' },
            { id: 'id-3', name: 'Mark Shuttleworth', number: '617-48-74' },
        ],
        filter: '',
    };

    addContact = ({ name, number }) => {
        const contact = {
            id: uuidv4(),
            name,
            number,
        };

        const { contacts } = this.state;

        if (
            contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase(),
            )
        ) {
            alert(`${name} вже присутній в довіднику контактів.`);
        } else if (contacts.find(contact => contact.number === number)) {
            alert(`${number} вже присутній в довіднику.`);
        } else if (name.trim() === '' || number.trim() === '') {
            alert("Введіть назву контакту і номер телефону!");
        } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
            alert('Введіть правильний номер телефону!');
        } else {
            this.setState(({ contacts }) => ({
                contacts: [...contacts, contact],
            }));
        }
    };

    deleteContact = id =>
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(contact => contact.id !== id),
        }));

    changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    render() {
        const { filter } = this.state;
        const visibleContacts = this.getVisibleContacts();

        return (
            <Container>
                <h1>Телефонний довідник</h1>
                <ContactForm onSubmit={this.addContact} />
                <h2>Контакти</h2>
                <Filter value={filter} onChange={this.changeFilter} />
                <ContactList
                    contacts={visibleContacts}
                    onDelete={this.deleteContact}
                />
            </Container>
        );
    }

}

export default App;