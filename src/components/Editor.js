import React, {useState}  from 'react'
import ReactMarkdown from 'react-markdown'
import { UserAuth } from '../context/AuthContext'




export default function Editor () {
  const {user, logOut} = UserAuth()

  
    const [text, setText] = useState("")
    const handleOut = async() => {
      try {
        await logOut()
      }
      catch (e) {
        console.log(e.message)
      }
    }

  return (
    <div className='editor'>
             <div>
      <button className='btn-in btnn' onClick={handleOut} variant='primary'>Log out</button>
    </div>
       
           <h1> Markdown Editor </h1>
           <article>
            <label htmlFor="markdown"></label>
            <textarea name="textarea" className='markd' id="markdown" cols="30" rows="10" placeholder='Type...' 
            value={text} 
            onChange= {(e) =>setText(e.target.value)}/>
            </article>
           
       

        {/*Content*/}


            <div>
        
            <h1>Output here</h1>
            <ReactMarkdown className='space' children={text}/>

            </div>

     
        
        
    </div>
  )
}

