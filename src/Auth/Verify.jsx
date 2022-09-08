import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function Verify ()
{

      const [ emailval, setEailval ] = useState( '' );
      const navigate = useNavigate();



      useEffect( () =>
      {
            let fly_down = document.querySelector( ".fly_down" );
            setInterval( () =>
            {

                  if ( window.innerHeight <= 400 )
                  {
                        fly_down.style.display = "none";
                  }
                  else
                  {
                        fly_down.style.display = "block";
                  }

            } );
      } );


      const submit_login = ( e ) =>
      {
            let error_repoter = document.querySelector( ".error_repoter" );
            let emailvalo = document.querySelector( "#emailval" );
            let passvalo = document.querySelector( "#passval" );
            let disp = document.querySelector( "#disp" );

            let auds = document.createElement( "audio" );


            if ( emailval.length === 8 )
            {

                  const formdata = new FormData();
                  formdata.append( "verifyme", 1 );
                  formdata.append( "vcode", emailval );

                  var xhr = new XMLHttpRequest();
                  xhr.open( "POST", "https://authen.badzybaddest.repl.co/verify.php", true );
                  xhr.onload = function ()
                  {
                        let getdat = JSON.parse( this.response );
                        if ( getdat === "success" )
                        {
                              navigate( '../login' );
                        }
                        else
                        {

                              error_repoter.innerHTML = getdat;
                              emailvalo.focus();
                              setTimeout( () =>
                              {

                                    error_repoter.innerHTML = "";

                              }, 8000 );

                        }

                  };

                  xhr.send( formdata );


            }

            else
            {

                  error_repoter.innerHTML = "verification code length must be eight";
                  emailvalo.focus();
                  setTimeout( () =>
                  {

                        error_repoter.innerHTML = "";

                  }, 8000 );



            };




      };


      return (
            <div className='form_cov'>
                  <title>Verify Your Sign In</title>
                  <div className="error_gain">
                        <div className="logo_holder">
                              <img src="../Images/s.png" alt="" />
                              <span style={ { fontSize: "2.4rem" } }>Sanity</span>
                        </div>
                        <hr />
                        <p>Check Your Email For Your Verification Code</p>
                        <div className="login_rom">
                              <input onChange={ ( e ) => setEailval( e.target.value ) } placeholder='12345678 ~ Enter your Code' type="text" name="labalu" id="emailval" />
                              <button style={ { backgroundColor: "var(--maincl)", color: "var(--mainbg)" } } id="disp" onClick={ submit_login }>Verify</button>
                        </div>
                        <div className="error_repoter"></div>
                  </div>
                  <div className="fly_down">
                        <h4>Welcome To <b style={ { color: "var(--hovercl)" } }>Sanity</b></h4>
                        <p>Please Check Your Email Fro Your Verification Code.</p>
                  </div>
            </div>

      );
}

export default Verify;
