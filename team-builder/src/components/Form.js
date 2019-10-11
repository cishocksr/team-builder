import React, {useState} from 'react';

const Form = props => {
    
    return (
        <div className='member-list'>
            {props.membersList.map(members => {
                return(
                    <div className='member' key={members.id}>
                        <h3>{members.name}</h3>
                        <p>{members.email}</p>
                        <p>{members.role}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Form;