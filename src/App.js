import "./App.css";
import ProfileImage from "./assets/profileImage.jpg";
import Header from "./components/Header.tsx";

function App() {
  return (
    <div className="container">
      <div className="profile-container">
        <img src={ProfileImage} alt="Profile" className="profile-image" />
        <div>설명</div>
      </div>
      <div className="contents-container">
        <Header />
        <header>헤더</header>
        <div>안녕하세요</div>
      </div>
    </div>
  );
}

export default App;
