import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import css from "./App.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/selectors";

function App() {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <SearchBox />}
      <ContactList />
    </div>
  );
}

export default App;