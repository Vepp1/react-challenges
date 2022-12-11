import css from './App.module.css';
import NavBarForms from './components/NavBarForms';
import Sidebar from './components/Sidebar';
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      <NavBarForms />
      <Sidebar />
      <ContentAPIHooks />
    </div>
  );
}

export default App;