import { useState } from 'react';
import { puppyList } from './data';
import './index.css';
import './App.css';

//https://lighthearted-blancmange-a42a1e.netlify.app link through netlify

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  
 const featuredPup = puppies.find((puppy) => puppy.id === featPupId);
 console.log(featuredPup);
  return (
    <div className="app-container">
    {featPupId && (
      <div className="featuredPup">
      <h2 className="heading">{featuredPup.name}</h2>
      <ul>
        <li>Age: {featuredPup.age}</li>
        <li>Email: {featuredPup.email}</li>
      </ul>
    </div>
  )}
      {puppies.map((puppy)=>(
        <p onClick={() => {
          setFeatPupId(puppy.id);
          console.log(featPupId)
        }} key={puppy.id}>{puppy.name}</p>
      ))}
    </div>
  );
}

export default App;
