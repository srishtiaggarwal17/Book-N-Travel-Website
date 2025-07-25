import React from "react"

const Location=()=>{
    return(
        <div>
            <div>
                <div className="container pb-10">
                   <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">Location to visit</h1>
                   <div className="rounded-xl">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7116.040131393306!2d83.97168138953894!3d26.90285855661167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m1!1s0x399386d31905f7c1%3A0x189dbadf0b42da46!2sNew%20Mobile%20World!5e0!3m2!1sen!2sin!4v1700902186385!5m2!1sen!2sin"
                        width="100%"
                        height="360"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{borderRadius:"20px"}}
                        frameBorder={"0"}></iframe>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Location