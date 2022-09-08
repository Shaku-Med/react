import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';

function Login ()
{
      const navigate = useNavigate();

      const [ email, setEmail ] = useState( '' );
      const [ passwd, setPasswd ] = useState( '' );

      useEffect( () =>
      {
            if ( Cookie.get( "_8log_in_cod_e" ) )
            {
                  navigate( "../" );
            }
      } );



      const handle_submit_api = ( e ) =>
      {

            e.preventDefault();

            const emailregix = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            const passwordregix = /^(?=.*[0-9])(?=.*[!@?#$%^&*])[a-zA-Z0-9!@?#$%^&*]{8,16}$/;


            if ( !passwd.match( passwordregix ) )
            {
                  alert( "To get a very secured password, it must be up to 8 and above and must contain different kinds of symbols, uppercases, lowercases letters... Please Would you do that for us?" );
            }

            else if ( passwd.length > 15 )
            {
                  alert( "You've reached our password limit. Please Type in Password below this length. " + passwd.length + "" );
            }

            else if ( passwd.length < 8 )
            {
                  alert( "To get a very secured password, it must be up to 8 and above and must contain different kinds of symbols, uppercases, lowercases letters... Please Would you do that for us?" );
            }

            else if ( !email.match( emailregix ) )
            {
                  alert( "please Remember to include @domain.com at the end of your email." );
            }

            else if ( email < 6 )
            {
                  alert( "Please Enter Your Correct Email. Cuz you may have to verify your email" );
            }

            else if ( email === "" )
            {
                  alert( "Email Is Required" );
            }
            else
            {

                  const formdata = new FormData();
                  formdata.append( "logindone", 1 );
                  formdata.append( "email", email );
                  formdata.append( "pass", passwd );



                  var xhr = new XMLHttpRequest();
                  xhr.open( "POST", "https://authen2.badzybaddest.repl.co/login.php", true );
                  xhr.onload = function ()
                  {
                        let getdat = JSON.parse( this.response );




                        if ( getdat.names === "success" )
                        {
                              Cookie.set( "_8log_in_cod_e", getdat.age );
                              navigate( "../" );

                        }
                        else
                        {

                              alert( getdat );
                        }

                  };

                  xhr.send( formdata );


            }

      };

      return (
            <div className='logincont'>
                  <title>Login / Sanity</title>
                  <form id='loco' onSubmit={ handle_submit_api } action="">
                        <div className="spana">
                              <img src="../Images/s.png" alt="" />
                              <span>anity</span>
                        </div>
                        <hr />
                        <div className="error_msg"></div>
                        <input onChange={ ( e ) =>
                        {
                              setEmail( e.target.value );
                        } } placeholder='Email' type="email" name="land" id="email" />
                        <input onChange={ ( e ) =>
                        {
                              setPasswd( e.target.value );
                        } } placeholder='Password' autoComplete='true' type="password" name="dhdis" id="passwd" />
                        <button>Login</button>
                        <p>
                              Do not have an account? <Link to="../Signup">Signup</Link>
                        </p>
                  </form>
            </div>
      );
}

export default Login;