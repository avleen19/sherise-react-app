import React from 'react'
import Motivation from './Motivation'
import './Inspire.css'
export default function Inspire() {
  return (
    <>
    <div className='complbox'>
    <h1 className='heading'>OUR INSPIRATION</h1>
    <div className="row my-3 mx-4">
      <div className="col md-3">
      <Motivation title="FIRST LADY PM"  url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijwJSoavqQhD5KQHiPPTPNZbVet_ehFWVsmwmGS-1Vw&s" descr="Indira Gandhi was highly influential in shaping India's political landscape.Her leadership was marked by achievements" color="contain1" id="p1"/>
      </div>
      <div className="col md-3">
      <Motivation title="Server of God" url="https://cdn.britannica.com/09/117709-050-14F8F41D/Mother-Teresa-of-Calcutta-1975.jpg" descr="Throughout her lifetime, Mother Teresa exemplified the true meaning of compassion and selfless service to humanity.
      Humanitarian." color="contain2" id="p2"/>
      </div>
      <div className="col md-3">
      <Motivation title="Oympic athelete" url="https://cdn.zeebiz.com/sites/default/files/2016/08/19/5821-19pti-pti8192016000287a.jpg" descr="Pusarla Venkata(PV) Sindhu is an Indian badminton player. Considered one of India's most successful sportspersons." color="contain3" id="p3"/>
      </div> 
      </div>
    </div>
    </>
  )
}
