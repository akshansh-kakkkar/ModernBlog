import React from 'react'

export default function page(){
  return (
    <div className='flex justify-around items-center'>
      <div>
        <h2>Let's connect and build something crazy together!</h2>
        <div>Have a question about our platform or want to partner with us? Please fill this form and we will reach out to you as soon as possible.</div>
      </div>
      <div>
        <form action="">
          <div>
            <label htmlFor="">Full Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <textarea name="" id=""></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}
