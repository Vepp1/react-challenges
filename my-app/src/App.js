import css from './App.module.css';
import NavBarForms from './components/NavBarForms';

function App() {
  return (
    <div className={css.App}>
      <NavBarForms className={css.NavBarForm} />
    </div>
  );
}

export default App;