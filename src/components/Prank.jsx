import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Cookie from 'js-cookie'
import copy from 'copy-to-clipboard'


function Prank ()
{


        const [ fname, setfname ] = useState( '' );
      const [ lname, setlname ] = useState( '' );
      const [ cfname, setcfname ] = useState( '' );
      const [ clname, setclname ] = useState( '' );
      const [ cmsg, setcmsg ] = useState( '' );

      const {id} = useParams()

      const [ storefiles, setstorefiles ] = useState( [] )
      
        const navigate = useNavigate()

      const submitreport = (e) =>
      { 
            e.preventDefault();

            let dbut = document.querySelector("#dbut")

            if (fname.length < 2)
            { 
                  alert( "Please Enter Your FirstName")  
            }

            else if (fname !== fname.split(" ")[0])
            { 
                    alert( "Please Just Type in Your FirstName, Just Your First name. Leave no space after")   
            }
                  
                  else if (lname.length < 2)
            { 
                  alert( "Please Enter Your LastName")  
            }

            else if (lname !== lname.split(" ")[0])
            { 
                    alert( "Please Just Type in Your LastName, Just Your last name. Leave no space after")   
            }


            else if (cfname.length < 2)
            { 
                  alert( "Enter Your Crush FirstName")  
            }

            else if (cfname !== cfname.split(" ")[0])
            { 
                    alert("Please Just Type in The FirstName of your Crush. Just The first Name")   
            }
                  
                  else if (clname.length < 2)
            { 
                  alert( "Please Enter Your Crush LastName")  
            }

            else if (clname !== clname.split(" ")[0])
            { 
                    alert( "Please Just Type in Your Crush LastName, Just Your Crush last name. Leave no space after")   
            }

            else if ( cmsg.length < 20 )
            { 
                  alert("Your message length must be greater than or equal to 20. not less than... ")
            }


             else if ( cmsg.length > 600 )
            { 
                  alert("This is too much. We've Sense Violation to the query.")
            }

            else
            { 



                   const datasform = new FormData();
                  datasform.append( "******", 1 );
                  datasform.append( "fname", fname );
                  datasform.append( "lname", lname );
                  datasform.append( "cfname", cfname );
                  datasform.append( "clname", clname );
                  datasform.append( "cmsg", cmsg );
                  datasform.append( "idofusersendto", id );



                  dbut.setAttribute( "disabled", "disabled" )
                  dbut.innerHTML = "Preparing...";

                  var quest = new XMLHttpRequest();
                  quest.open( "POST", "https://TautStandardLifecycle.badzybaddest.repl.co/insertinto.php", true );
                  quest.onload = function ()
                  {
                        let getdat = JSON.parse( this.response );

                        if ( getdat === "success" )
                        { 
                                 dbut.innerHTML = "done";
                              Cookie.set( "usrprev", "ok" )
                               dbut.removeAttribute("disabled", "disabled")
                              navigate( "../Laugh/" + id + "" )
                              
                        }
                  };

                  quest.send( datasform );



                  
            }
            
      }

        let link_fof_you_part = document.querySelector( ".link_fof_you_part" )

      const copytoclip = () =>
      { 
            
           copy(link_fof_you_part.innerHTML)
            alert("Copied")
      }

      const sharetosocials = async () =>
      {
            let url = link_fof_you_part.innerHTML;
            let title = document.title;
            let text = "Hi, Thanks For Sharing";
            const shareDetails = { url, title, text };


            if ( navigator.share )
            {
                  try
                  {
                        await navigator
                              .share( shareDetails )
                              .then( () =>
                                    console.log( "Hooray! Your content was shared to tha world" )
                              );
                  } catch ( error )
                  {
                        alert(error)
                  }
            } else
            {
                 alert("not supported by your browser")
            }

            
      };


      useEffect( () =>
      { 
            if ( Cookie.get( "_8log_in_cod_e" ) === id )
            { 
                  navigate("../")
            }
      })



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
            
      }, [])


      return (
            <div className='ovea'>
                  <title>Crush / Love Calculator / {storefiles.fname} </title>
                  <div className="prank_say_hi">
                        <div className="myLogo">
                        <img src="../Images/s.png" alt="" />
                        <h4>Sanity</h4>
                        <div className="welcome_txt">
                              Welcome!
                              </div>
                              
                        </div>
                         <div className="tool_top">
                        <div className="link_fof_you_part">
                             { window.location.origin  + "/" + "prank/" + storefiles.unic_id }
                        </div>
                        <div className="bottons_">
                              <div onClick={copytoclip} id='copyme'>
                                    <i className="fa fa-copy"></i>
                                    Copy
                              </div>
                              <div onClick={sharetosocials} id='shareme'>
                                    <i className="fa fa-share"></i>
                                    share
                              </div>
                        </div>
                  </div>
                        <div className="short_intro">
                            Welcome to Free True Love Detector. Check if Someone really likes your,  <b>("CRUSH")</b>
                              <hr />
                              <h4>Let's get Started</h4>
                        </div>
                        <div className="start_m">
                              Start Checking... It's quick and Easy
                        </div>
                        <form id='myforms' onSubmit={submitreport} action="">
                              <div className="col">
                                     <input onChange={(e) => setfname(e.target.value) } placeholder='Your FirstName' type="text" name="" id="" />
                                     <input onChange={(e) => setlname(e.target.value) } placeholder='Your LastName' type="text" name="" id="" />
                              </div>
                              
                              <div className="col">
                                     <input onChange={(e) => setcfname(e.target.value) } placeholder='Crush FirstName' type="text" name="" id="" />
                                     <input onChange={(e) => setclname(e.target.value) } placeholder='Crush LastName' type="text" name="" id="" />
                              </div>
                              <div className="col">
                                    <textarea onChange={(e) => setcmsg(e.target.value) } name="" id="" placeholder='What Would you like to Say'></textarea>
                              </div>
                              <div className="col">
                                    <button id='dbut'>Send</button>
                              </div>
                        </form>
                  </div>
                  <div className="popup_s_o">
                        <div style={{border:"none"}} className="break">
                              <i className="fa fa-check"></i>
                        </div>
                        <p>Your Message was delivered to your <b>CRUSH</b> successfully.</p>
                  </div>
            </div>
      );
}

export default Prank;
