import React, {useState} from 'react';

const Form = props => {
    
    return (
        <div className='member-list'>
            {props.membersList.map(members => {
                return(
                    <div className='member'>
                        <h2>{members.name}</h2>
                        <p>{members.email}</p>
                        <p>{members.role}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Form;