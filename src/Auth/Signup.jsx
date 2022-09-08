import React, {  useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css'


function Signup ()
{

      let navigate = useNavigate();

      const [ fname, setfname ] = useState( '' );
      const [ lname, setlname ] = useState( '' );
      const [ email, setEmail ] = useState( '' );
      const [ passwd, setPasswd ] = useState( '' );
      const aging = 70;



      const handle_submit_api = ( e ) =>
      {

            e.preventDefault();

            let sheidhd = document.querySelector( "#sheidhd" );
            let hishdiod = document.querySelector( "#thsis" );
            let daysval = document.querySelector( "#daysval" );
            let months = document.querySelector( "#months" );
            const nameregix = /^[a-zA-Z ]+$/;
            const emailregix = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            const passwordregix = /^(?=.*[0-9])(?=.*[!@?#$%^&*])[a-zA-Z0-9!@?#$%^&*]{8,16}$/;


            if ( months.value.includes( "Feb" ) && daysval.value > 29 )
            {

                  alert( "February Doesn't have " + daysval.value + " days " );

            }


            else if ( !passwd.match( passwordregix ) )
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


            else if ( !lname.match( nameregix ) )
            {
                  alert( "Last Name " + lname + " Does not match our required name inputs" );
            }

            else if ( lname !== lname.split( " " )[ 0 ] )
            {
                  alert( "No spacing allowed between Words. Just Type in your Last name" );
            }

            else if ( lname.length < 2 )
            {
                  alert( "" + lname.length + " letter as a name can't be read" );
            }


            else if ( lname === "" )
            {
                  alert( "Please Type in your name." );
            }



            else if ( !fname.match( nameregix ) )
            {
                  alert( "First Name " + fname + "  Does not match our required name inputs" );
            }



            else if ( fname !== fname.split( " " )[ 0 ] )
            {
                  alert( "No spacing allowed between Words. Just Type in your first name" );
            }

            else if ( fname.length < 2 )
            {
                  alert( "" + fname.length + " letter as a name can't be read" );
            }


            else if ( fname === "" )
            {
                  alert( "Please Type in your name." );
            }

            else
            {

                  const formdata = new FormData();
                  formdata.append( "******", 1 );
                  formdata.append( "fname", fname );
                  formdata.append( "lname", lname );
                  formdata.append( "email", email );
                  formdata.append( "pass", passwd );
                  formdata.append( "genders", sheidhd.value );
                  formdata.append( "interest", hishdiod.value );



                  var xhr = new XMLHttpRequest();
                  xhr.open( "POST", "https://authen.badzybaddest.repl.co/app.php", true );
                  xhr.onload = function ()
                  {
                        let getdat = JSON.parse( this.response );
                        if ( getdat.names === "success" )
                        {
                              navigate( '../verify' );
                        }
                        else
                        {
                              alert( getdat );
                        }
                  };

                  xhr.send( formdata );



            }



      };

      useEffect( () =>
      {
            let Pasteforme = document.querySelector( "#Pasteforme" );
            let daysm = document.querySelector( "#daysm" );

            let date = new Date();
            let y = date.getFullYear() - 18;
            let appme;
            for ( var i = 0; i < aging; i++ )
            {
                  let negative = i - y;
                  negative = Math.abs( negative );

                  appme = `<option  value="${ negative }">${ negative }</option>`;

                  Pasteforme.innerHTML += appme;



            }





      } );

      // https://socialmedzy.000webhostapp.com/app.php


      return (
            <div className='logincont'>
                  <form onSubmit={ handle_submit_api } action="">

                        <title>Join / Sanity</title>

                        <div className="spana">
                              <img src="../Images/s.png" alt="" />
                              <span>anity</span>
                        </div>
                        <hr />
                        <div className="insper">
                              Signup, It's quick and easy.
                              <hr />
                        </div>
                        <div className="error_msg"></div>

                        <div className="fname_page">
                              <input onChange={ ( e ) =>
                              {
                                    setfname( e.target.value );
                              } } autoComplete='true' type="text" name="ndidnd" placeholder='First Name' id="thdid" />
                              <input onChange={ ( e ) =>
                              {
                                    setlname( e.target.value );
                              } } autoComplete='true' type="text" name="ndind" placeholder='Last Name' id="thasis" />
                        </div>

                        <input onChange={ ( e ) =>
                        {
                              setEmail( e.target.value );
                        } } autoComplete='true' placeholder='Email' type="email" name="naidnd" id="email" />
                        <input onChange={ ( e ) =>
                        {
                              setPasswd( e.target.value );
                        } } autoComplete='true' placeholder='Password' type="password" name="naidn" id="passwd" />
                        <div style={ { textAlign: "center", fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" } } className="shab">
                              D.O.B
                        </div>
                        <div className="dob">
                              <div className="ggroup">
                                    <select name="hidhso" id="daysval">
                                          <optgroup id="daysm" label='Days'>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">11</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                          </optgroup>
                                    </select>
                              </div>

                              <div className="ggroup">
                                    <select name="hidhso" id="months">
                                          <optgroup label='Months'>
                                                <option value="Jan">Jan</option>
                                                <option value="Feb">Feb</option>
                                                <option value="Mar">Mar</option>
                                                <option value="Apr">Apr</option>
                                                <option value="May">May</option>
                                                <option value="Jun">Jun</option>
                                                <option value="Jul">Jul</option>
                                                <option value="Aug">Aug</option>
                                                <option value="Sep">Sep</option>
                                                <option value="Oct">Oct</option>
                                                <option value="Nov">Nov</option>
                                                <option value="Dec">Dec</option>
                                          </optgroup>
                                    </select>
                              </div>
                              <div className="ggroup">
                                    <select name="hidhso" id="years">
                                          <optgroup id='Pasteforme' label='Year'></optgroup>
                                    </select>
                              </div>
                        </div>

                        <div style={ { textAlign: "center", fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px" } } className="shab">
                              <hr />
                              Gender
                        </div>

                        <div className="genders">
                              <div className="ggroup">
                                    <label htmlFor="">
                                          <span className='material-symbols-outlined'>person</span>
                                          <span>Gender</span>
                                    </label>
                                    <select name="hidhso" id="sheidhd">
                                          <optgroup label='Gender'>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                          </optgroup>
                                    </select>
                              </div>
                              <div className="ggroup">
                                    <label htmlFor="">
                                          <span className='material-symbols-outlined'>favorite</span>
                                          <span>Interest</span>
                                    </label>
                                    <select name="hishdiod" id="thsis">
                                          <optgroup label='Interest'>
                                                <option value="Men">Men</option>
                                                <option value="Women">Women</option>
                                          </optgroup>
                                    </select>
                              </div>
                        </div>
                        <button>Signup</button>
                        <p>
                              have an account? <Link to="../login">Login</Link>
                        </p>
                  </form>
            </div>
      );
}

export default Signup;