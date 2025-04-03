import React from 'react'

const Location = () => {
  return (
    <div>
      <div>
        <div className=" pt-8 pb-16" >
            <h1 className='inline-block border-l-8 border-emerald-400/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl'>Location to visit</h1>
            <div className='rounded-xl pt-4'>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63215409558!2d79.77380269715204!3d6.921831560816243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1743099957629!5m2!1sen!2slk"
                    frameBorder="0"
                    width="100%"
                    height="360"
                    allowFullScreen=""
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    style={{borderRadius: "20px"}}
                >
                </iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Location
