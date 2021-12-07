import React, { useState } from 'react' //import usestate hooks...

function Forms() {
    /* usestate method hooks start here... */
    const [username,setusername] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    /* usestate error message hooks start here... */
    const [errusername,seterrusername] = useState('')
    const [erremail,seterremail] = useState('')
    const [errpassword,seterrpassword] = useState('')
 
    /* function method start here...*/
    function validate(){
        if(username.length > 8){
            seterrusername('');
        }
        else{
            seterrusername('username must be 8 digit long');
        }
        if(email.includes('@gmail.com')){
            seterremail('')
        }
        else{
            seterremail('email must @gmail.com')
        }
        if(password.length > 7 && password.includes('.')){
            seterrpassword('')
        }
        else{
            seterrpassword('password must be 7 digit longs and including (.)')
        }
        
    }
     
    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-4 shadow p-3 mb-5 bg-white rounded'>
                    {/* this is main hedding */}
                    <h1>E-mail Form Validation</h1>

                    {/* input field start here... */}
                    <p>Firstname :<input type='text' placeholder='Username' className='Form-control'
                    value={username} onChange={(e)=>{setusername(e.target.value)}}
                    /></p>

                    <i>{errusername}</i>

                    <p>Email - id : <input type='text' placeholder='Email' className='Form-control'
                    value={email} onChange={(e)=>setemail(e.target.value)}/></p>
                    <i>{erremail}</i>
                    
                    <p>Password : <input type='text' placeholder='Password' className='Form-control'
                    value={password} onChange={(e)=>setpassword(e.target.value)}/></p>
                    <i>{errpassword}</i>

                    {/* this is sign-up button... */}
                    <button className='btn btn-primary' onClick={validate}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Forms;
