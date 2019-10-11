import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import TeamPage from './components/TeamPage'
import './App.css';

function App() {
  
  const [teamMember, setTeamMember] = useState([
    {
    name: 'Chris Shockley',
    email: 'cishockleysr@gmail.com',
    role: 'Software Engineer'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };

    
    setTeamMember([...teamMember, newMember]);
  }

  return (
    <div className='App'>
      <h1>Team Builders</h1>
      <TeamPage addNote={addNewMember}/>
      <Form membersList={teamMember}/>
      
    </div>
    
  );
}

export default App;
