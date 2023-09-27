import './App.css';
import AppDrawer from './AppDrawer';

const menuItems = ['About', 'Get Started', 'Sign In'];

function App() {
  return (
    <>
      <AppDrawer heading={'Menu'} items={menuItems} />
    </>
  );
}

export default App;
