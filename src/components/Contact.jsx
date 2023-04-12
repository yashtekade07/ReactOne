import React from 'react'

const Contact = () => {
  return <div className="contact">
    <main>
        <h1>Contact us!</h1>
        <form >
                <div>
                    <label >Name</label>
                    <input type="text" required placeholder="Name"/>
                       
                </div>
               
                <div>
                    <label >Email</label>
                    <input type="email" required placeholder="abc@gmail.com"/>                       
                </div>
                <div>
                    <label >Message</label>
                    <input type="Text" required placeholder="Tell us About Your Query..."/>                       
                </div>
                <button type="submit"> Send</button>
        </form>
    </main>
  </div>
}

export default Contact