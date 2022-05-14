import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const s = {
  container: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'rgb(205, 247, 222)',
    paddingBottom: 10,
  },
  title: {
    marginBottom: 10,
    paddingTop: 10,
  },
};

const PhonebookView = () => (
  <div style={s.container}>
    <h1 style={s.title}>Phonebook</h1>
    <ContactForm />

    <h2 style={s.title}>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);

export default PhonebookView;
