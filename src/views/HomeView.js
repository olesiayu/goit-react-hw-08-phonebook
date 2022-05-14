import phoneBook from './phone-book.png';

const s = {
  container: {
    height: 300,
  },
  title: {
    marginTop: 50,
    marginBottom: 50,
  },
};

const HomeView = () => (
  <div style={s.container}>
    <h1 style={s.title}>Вітаємо на Phonebook!</h1>
    <img src={phoneBook} alt="phonebook" width="100" />
  </div>
);

export default HomeView;
