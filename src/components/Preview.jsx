import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'

function Preview ()
{
      const { id } = useParams()
      
      const [ storefiles, setstorefiles ] = useState( [] )
      
            useEffect( () =>
      { 

                  const formdata = new FormData();
                  formdata.append( "fetchdatas", 1 );
                  formdata.append( "sendcookie", id);



                  var xhr = new XMLHttpRequest();
                  xhr.open( "POST", "https://LightblueDotingCylinder.badzybaddest.repl.co/fetch.php", true );
            xhr.onload = function ()
            {
                  let getdat = JSON.parse( this.response );

                  setstorefiles(getdat)
                       
               

            };

                  xhr.send( formdata );
            
      }, [])

      return (
            <div>
                  <div className="previews_now">
                        {
                              storefiles.map( ( gm ) =>
                              { 
                                    return (
                                          <div className="card_prev">
                                                <div className="head_1">
                                                      <div className="name_1">
                                                            <div>Sender Name</div>
                                                            {
                                                                  gm.fname + " " + gm.fname
                                                            }
                                                      </div>
                                                      <div className="name_1">
                                                            <div>Crush Name</div>
                                                            {
                                                                  gm.cfname + " " + gm.clname
                                                            }
                                                      </div>
                                                </div>
                                                <div className="hrm">
                                                      <hr />
                                                </div>
                                                <div className="msgs">
                                                      {
                                                            gm.msgs
                                                      }
                                                </div>
                                                <div className="hrm">
                                                      <hr />
                                                </div>
                                                <div className="control_btn">
                                                      <p>Join Now And Create Your Own Free Prank.</p>
                                                      <div className="btn_1">
                                                            <Link to="../Signup">Join Now</Link>
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

export default Preview
