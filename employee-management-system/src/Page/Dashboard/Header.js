import React from 'react';

function Header ({ setIsAdding }) {
    return (
       <header>
        <h1 style={{marginTop: '30px', marginBottom: '18px', marginLeft:'10px', fontSize: '40px', fontWeight: 'bold', color: '#1A1A1A'}}>Employee Management Software</h1>
        <div style={{ marginTop: '30px', marginBottom: '18px', marginLeft:'10px' }}>
            <button style={{ backgroundColor:'#835DF4' }} onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>
        </div>
       </header>
    );
}


export default Header;