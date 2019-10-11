import React, {useState} from 'react';

const TeamPage = props => {
    const [members, setMembers] = useState({name: '', email: '',role: ''});


    const handleChange = event => {
        setMembers({...members, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.addMember(members);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='name' />
            <input id='name' type='text' name='name' placeholder='name' onChange={handleChange} />
            
            <label htmlFor='email' type='text' name='email' onChange={handleChange} />
            <input id='email' type='text' name='email' placeholder='email' onChange={handleChange} />
            
            <label htmlFor='role' type='text' name='role' onChange={handleChange} />
            <input id='role' type='text' name='role' placeholder='role' onChange={handleChange} />
            
            <button type='submit'>Add Member</button>
        </form>
    )
}

export default TeamPage;