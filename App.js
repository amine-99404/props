import "./App.css";
import Profile from "./Profile/Profile";
import Image from "./Image.jpg";
function App() {
  const Listprof = [
    {
      fullName: "Hamdi",
      bio:
        "This is probably the clearest I've ever watched anyone explain async/await and promises before. Well done!",
      profession: "boulanger",
    },
  ];
  const displayName=(name)=>{
    alert(`the profile name is ${name}`)
  }

  return (
    <div>
      <Profile Listprof={Listprof} displayName={displayName}>{Image}</Profile>
    </div>
  );
}
export default App;
