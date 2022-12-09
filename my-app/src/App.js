import css from './App.module.css';
import NavBarForms from './components/NavBarForms';
import Sidebar from './components/Sidebar';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      <NavBarForms />
      <Sidebar />
      <ContentHooks />
    </div>
  );
}

export default App;