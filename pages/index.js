import { useState } from 'react'
import Head from 'next/head'
import { LoadScript } from '@react-google-maps/api'
import MapComponent from '../components/MapComponent'
import Nav from '../components/Nav'

export default function Home() {
   const [libraries] = useState(['places']);
   const [location, setLocation] = useState({ lat: 45.424721, lng: -75.695000 })
   const [value, setValue] = useState('')

   return (
      <div>
         <Head>
            <title>Google Map Project</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main>           
            <LoadScript
               googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
               libraries={libraries}
            >
               <Nav setLocation={setLocation} />
               <div className="m-2 alert alert-primary text-center" role="alert">
                  {value}
               </div>
               <div className='container-fluid mb-2'>
                  <MapComponent location={location} setValue={setValue} />
               </div>
            </LoadScript>
         </main>
      </div>
   )
}
