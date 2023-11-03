"use client"
import Link from 'next/link'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { BrowserRouter} from 'react-router-dom';

function BlogPage(){
    return (
      <div>
  

  {/* <body className="brand-main"> */}

    {/* <!-- credit Aaron Griffin https://codepen.io/uurrnn/pen/WNLVdN --> */}
    <div id="leaves">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i> 
    </div>

    {/* <!-- Navigation --> */}
    {/* <BrowserRouter> */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark brand fixed-top">
        <div className="container">
          <Link className="navbar-brand" href="/">Vanessa's Blog</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"></li>
              <li><Link className="nav-link" href="/about">About Me</Link></li>
            </ul>
          </div>
        </div>
      </nav> */}
    {/* </BrowserRouter> */}

    {/* <!-- Page Content --> */}
    <div className="container">
      <div className="row">
        {/* <!-- /.col-lg-3 --> */}

        <div>
          <div className="row d-none d-lg-block">
            <div className="col-lg-12 d-lg-block my-4">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {/* <!-- Bootstrap Item --> */}
                  <div className="carousel-item active">
                    <img
                      src="https://cdn.glitch.com/35629163-c36f-412c-8c36-5159d684a379%2Fbootstrap-banner.png?v=1584545281813"
                      alt="bootstrap"
                    />
                  </div>
                  {/* <!-- End Bootstrap Item --> */}

                  {/* <!-- CSS Item --> */}
                  <div className="carousel-item">
                    <img
                      src="https://cdn.glitch.com/35629163-c36f-412c-8c36-5159d684a379%2Fcss3-banner.png?v=1584545387506"
                      alt="css"
                    />
                  </div>
                  {/* <!-- HTML Item --> */}
                  <div className="carousel-item">
                    <img
                      src="https://cdn.glitch.com/35629163-c36f-412c-8c36-5159d684a379%2Fhtml5-banner.png?v=1584545385084"
                      alt="html"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            {/* <!-- Cards go here --> */}
            <div className ="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              
                
              
             
                <img className="card-header"
                  src="https://images.pexels.com/photos/4316425/pexels-photo-4316425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
           
              <div className="card-body">
                <h4><a href="https://vanessadickey.github.io/silly-story-generator/">Silly Story Generator</a></h4>
                <p className="card-text text-truncate-11">
                 
                A fun app that generates random silly stories.

                </p>
              </div>
              <div className="card-footer">
                <a href="https://github.com/vanessadickey/silly-story-generator">Github</a>
              </div>
            </div>
              </div>
          

          <div className ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100">
            
              <img className="card-header"
                src="https://images.pexels.com/photos/9430777/pexels-photo-9430777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            
            <div className="card-body">
              <h4><a href="https://vanessadickey.github.io/alarm-clock-simpler/">Alarm Clock</a></h4>
              <p className="card-text text-truncate-11">
                An alarm clock with digital display.

              </p>
            </div>
            <div className="card-footer">
              <a href="https://github.com/vanessadickey/alarm-clock-simpler">Github</a>
            </div>
          </div>
          </div>

          <div className ="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
           
              <img className="card-header"
                src="https://images.pexels.com/photos/4769486/pexels-photo-4769486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            
            <div className="card-body">
              <h4><a href="https://vanessadickey.github.io/mind-reader/">Mind Reader</a></h4>
              <p className="card-text text-truncate-11">
              A single page web app that plays a game with the user to read their mind.
              </p>
            </div>
            <div className="card-footer">
              <a href="https://github.com/vanessadickey/mind-reader">Github</a>
            </div>
          </div>
            </div>

          <div className ="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
            
              <img className="card-header"
                src="https://images.pexels.com/photos/4066295/pexels-photo-4066295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            
            <div className="card-body">
              <h4><a href="https://vanessadickey.github.io/bootcamp-blog/styleguide.html">Contact Card</a></h4>
              <p className="card-text text-truncate-11">
               A contact card for my blog.
              </p>
            </div>
            <div className="card-footer">
              <a href="https://github.com/vanessadickey/bootcamp-blog/blob/main/styleguide.html?authuser=0">Github</a>
            </div>
          </div>
            </div>

          <div className ="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
            
              <img className="card-header"
                src="https://images.pexels.com/photos/1828305/pexels-photo-1828305.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            
            <div className="card-body">
              <h4><a href="https://vanessadickey.github.io/project-weather-app/">Weather App</a></h4>
              <p className="card-text text-truncate-11">
              A webpage that prompts users to enter a zip code, then displays current weather information for that location or a friendly error message if the zip code is not found.

              </p>
            </div>
            <div className="card-footer">
              <a href="https://github.com/vanessadickey/project-weather-app">Github</a>
            </div>
          </div>
            </div>

          <div className ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100">
            
              <img className="card-header text-truncate-11"
                src="https://images.pexels.com/photos/15961685/pexels-photo-15961685/free-photo-of-tic-tac-toe-with-hearts-on-cake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            
            <div className="card-body">
              <h4><a href="https://vanessadickey.github.io/tic-tac-toe/?authuser=0">Tic-Tac-Toe</a></h4>
              <p className="card-text text-truncate-11">
              A webpage that recreates the childhood classNameic game, tic-tac-toe, using JavaScript, HTML, and the Bootstrap CSS framework (minimal custom CSS).
              </p>
            </div>
            <div className="card-footer">
              <a href="https://github.com/vanessadickey/tic-tac-toe?authuser=0">Github</a>
            </div>
          </div>
          </div>

          <div className ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100">
         
              <img className="card-header"
                src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            
            <div className="card-body">
              <h4><a href="https://github.com/vanessadickey/react-random-restaurant">Random Restaurant</a></h4>
              <p className="card-text text-truncate-11">
              A menu website for a new restaurant using an API to generate a sample menu.
              </p>
            </div>
            <div className="card-footer">
              <a href="https://github.com/vanessadickey/react-random-restaurant">Github</a>
            </div>
          </div>
          </div>

          <div className ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100">
           
              <img className="card-header"
                src="https://images.pexels.com/photos/7718677/pexels-photo-7718677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            
            <div className="card-body">
              <h4><a href="https://github.com/vanessadickey/to-do-list-2">To-Do List</a></h4>
              <p className="card-text text-truncate-11">
              An online to-do list manager application using React to keep track of todos with full CRUD (Create/Read/Update/Delete) functionality. 
              </p>
            </div>
            <div className="card-footer">
              <a href="https://github.com/vanessadickey/to-do-list-2">Github</a>
            </div>
          </div>
          </div>

          <div className ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100">
           
              <img className="card-header"
                src="https://images.pexels.com/photos/4279811/pexels-photo-4279811.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            
            <div className="card-body">
              <h4><a href="https://vanessaimagegallery.glitch.me">Image Gallery</a></h4>
              <p className="card-text text-truncate-11">
              A JavaScript-powered image gallery.
              </p>
            </div>
            <div className="card-footer">
              <a href="https://glitch.com/edit/#!/vanessaimagegallery">Glitch</a>
            </div>
          </div>
          </div>

          <div className ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div className="card h-100">
           
              <img className="card-header"
                src="https://images.pexels.com/photos/6491953/pexels-photo-6491953.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            
            <div className="card-body">
              <h4><a href="https://cleaned-up-mind-reader.glitch.me">Mind Reader Trick</a></h4>
              <p className="card-text text-truncate-11">
              A "Peter Answers" clone prank website where you input a secret answer and it appears as if a 
              psychic entity is answering the questions.
              </p>
            </div>
            <div className="card-footer">
              <a href="https://glitch.com/edit/#!/cleaned-up-mind-reader">Glitch</a>
            </div>
          </div>
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.col-lg-9 --> */}
      </div>
      {/* <!-- /.row --> */}
    </div>
    {/* <!-- /.container --> */}
</div>
    {/* <!-- Footer --> */}
    <footer className="py-5 brand footer">
      <div className="container">
        <p className="m-0 text-center text-white">
          Copyright &copy; Vanessa's Blog 2023
          </p>
            </div>
          </footer>
        {/* </body> */}
      </div>
    );
  }

export default BlogPage;