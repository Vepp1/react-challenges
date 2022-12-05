import css from './App.module.css';
import NavBarForms from './components/NavBarForms';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      <NavBarForms />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;