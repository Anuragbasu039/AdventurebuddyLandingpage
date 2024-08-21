import React from 'react';
import './Founder.css';
import founder1 from '../../assets/Farhan.JPG';
import founder2 from '../../assets/arbaz.jpg';
import founder3 from '../../assets/Atik.JPG';
const teamMembers = [
  {
    name: 'Farhan Hashmi',
    title: 'Founder & CEO',
    image: founder1,
  },
  {
    name: 'Arbaz Khan',
    title: 'Co-Founder & COO',
    image: founder2,
  },
  {
    name: 'Atik Uddin',
    title: 'Cheif Financial',
    image: founder3,
  },
];

function App() {
  return (
    <div className="app">
      <h1>The Faces of Our Company</h1>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div key={index} className="member">
            <img src={member.image} alt={member.name} className="member-image" />
            <h2>{member.name}</h2>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
