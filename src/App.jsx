import './App.css';

const name = "Murat"
const surname = "Yılmaz"
const isLoggedIn = false;
function App() {
  return (
    <>
    <h1>
      {isLoggedIn ? `Kullanıcı Adı: ${name} soyadı: ${surname}`: `Giriş yapın` }
    </h1> 
    </>
  );
}

export default App;

