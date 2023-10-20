"use class"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

function BlogPage(){
    return (
      <div>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="" />

    <title>Vanessa Blog</title>

    {/* <!-- Bootstrap CSS file --> */}
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
      crossorigin="anonymous"
    ></script>

    {/* <!-- Custom styles for this template --> */}
    <link href="css/style.css" rel="stylesheet" />
  </head>

  <body class="brand-main">

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
    <nav class="navbar navbar-expand-lg navbar-dark brand fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Vanessa's Blog</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"></li>
            <li><a class="nav-link" href="#">About Me </a></li>
          </ul>
        </div>
      </div>
    </nav>

    {/* <!-- Page Content --> */}
    <div class="container">
      <div class="row">
        {/* <!-- /.col-lg-3 --> */}

        <div>
          <div class="row d-none d-lg-block">
            <div class="col-lg-12 d-lg-block my-4">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  {/* <!-- Bootstrap Item --> */}
                  <div class="carousel-item active">
                    <img
                      src="https://cdn.glitch.com/35629163-c36f-412c-8c36-5159d684a379%2Fbootstrap-banner.png?v=1584545281813"
                      alt="bootstrap"
                    />
                  </div>
                  {/* <!-- End Bootstrap Item --> */}

                  {/* <!-- CSS Item --> */}
                  <div class="carousel-item">
                    <img
                      src="https://cdn.glitch.com/35629163-c36f-412c-8c36-5159d684a379%2Fcss3-banner.png?v=1584545387506"
                      alt="css"
                    />
                  </div>
                  {/* <!-- HTML Item --> */}
                  <div class="carousel-item">
                    <img
                      src="https://cdn.glitch.com/35629163-c36f-412c-8c36-5159d684a379%2Fhtml5-banner.png?v=1584545385084"
                      alt="html"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div class="row">
            {/* <!-- Cards go here --> */}
            <div class ="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card h-100">
              
                
              
             
                <img class="card-header"
                  src="https://images.pexels.com/photos/4316425/pexels-photo-4316425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
           
              <div class="card-body">
                <h4><a href="https://vanessadickey.github.io/silly-story-generator/">Silly Story Generator</a></h4>
                <p class="card-text text-truncate-11">
                 
                A fun app that generates random silly stories.

                </p>
              </div>
              <div class="card-footer">
                <a href="https://github.com/vanessadickey/silly-story-generator">Github</a>
              </div>
            </div>
              </div>
          

          <div class ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="card h-100">
            
              <img class="card-header"
                src="https://images.pexels.com/photos/9430777/pexels-photo-9430777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            
            <div class="card-body">
              <h4><a href="https://vanessadickey.github.io/alarm-clock-simpler/">Alarm Clock</a></h4>
              <p class="card-text text-truncate-11">
                An alarm clock with digital display.

              </p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/vanessadickey/alarm-clock-simpler">Github</a>
            </div>
          </div>
          </div>

          <div class ="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card h-100">
           
              <img class="card-header"
                src="https://images.pexels.com/photos/4769486/pexels-photo-4769486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            
            <div class="card-body">
              <h4><a href="https://vanessadickey.github.io/mind-reader/">Mind Reader</a></h4>
              <p class="card-text text-truncate-11">
              A single page web app that plays a game with the user to read their mind.
              </p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/vanessadickey/mind-reader">Github</a>
            </div>
          </div>
            </div>

          <div class ="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card h-100">
            
              <img class="card-header"
                src="https://images.pexels.com/photos/4066295/pexels-photo-4066295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            
            <div class="card-body">
              <h4><a href="https://vanessadickey.github.io/bootcamp-blog/styleguide.html">Contact Card</a></h4>
              <p class="card-text text-truncate-11">
               A contact card for my blog.
              </p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/vanessadickey/bootcamp-blog/blob/main/styleguide.html?authuser=0">Github</a>
            </div>
          </div>
            </div>

          <div class ="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card h-100">
            
              <img class="card-header"
                src="https://images.pexels.com/photos/1828305/pexels-photo-1828305.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            
            <div class="card-body">
              <h4><a href="https://vanessadickey.github.io/project-weather-app/">Weather App</a></h4>
              <p class="card-text text-truncate-11">
              A webpage that prompts users to enter a zip code, then displays current weather information for that location or a friendly error message if the zip code is not found.

              </p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/vanessadickey/project-weather-app">Github</a>
            </div>
          </div>
            </div>

          <div class ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="card h-100">
            
              <img class="card-header text-truncate-11"
                src="https://images.pexels.com/photos/15961685/pexels-photo-15961685/free-photo-of-tic-tac-toe-with-hearts-on-cake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            
            <div class="card-body">
              <h4><a href="https://vanessadickey.github.io/tic-tac-toe/?authuser=0">Tic-Tac-Toe</a></h4>
              <p class="card-text text-truncate-11">
              A webpage that recreates the childhood classic game, tic-tac-toe, using JavaScript, HTML, and the Bootstrap CSS framework (minimal custom CSS).
              </p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/vanessadickey/tic-tac-toe?authuser=0">Github</a>
            </div>
          </div>
          </div>

          <div class ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="card h-100">
         
              <img class="card-header"
                src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            
            <div class="card-body">
              <h4><a href="https://github.com/vanessadickey/react-random-restaurant">Random Restaurant</a></h4>
              <p class="card-text text-truncate-11">
              A menu website for a new restaurant using an API to generate a sample menu.
              </p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/vanessadickey/react-random-restaurant">Github</a>
            </div>
          </div>
          </div>

          <div class ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="card h-100">
           
              <img class="card-header"
                src="https://images.pexels.com/photos/7718677/pexels-photo-7718677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            
            <div class="card-body">
              <h4><a href="https://github.com/vanessadickey/to-do-list-2">To-Do List</a></h4>
              <p class="card-text text-truncate-11">
              An online to-do list manager application using React to keep track of todos with full CRUD (Create/Read/Update/Delete) functionality. 
              </p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/vanessadickey/to-do-list-2">Github</a>
            </div>
          </div>
          </div>

          <div class ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="card h-100">
           
              <img class="card-header"
                src="https://images.pexels.com/photos/4279811/pexels-photo-4279811.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            
            <div class="card-body">
              <h4><a href="https://vanessaimagegallery.glitch.me">Image Gallery</a></h4>
              <p class="card-text text-truncate-11">
              A JavaScript-powered image gallery.
              </p>
            </div>
            <div class="card-footer">
              <a href="https://glitch.com/edit/#!/vanessaimagegallery">Glitch</a>
            </div>
          </div>
          </div>

          <div class ="col-lg-3 col-md-4 col-sm-6 mb-4">
          <div class="card h-100">
           
              <img class="card-header"
                src="https://images.pexels.com/photos/6491953/pexels-photo-6491953.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
            
            <div class="card-body">
              <h4><a href="https://cleaned-up-mind-reader.glitch.me">Mind Reader Trick</a></h4>
              <p class="card-text text-truncate-11">
              A "Peter Answers" clone prank website where you input a secret answer and it appears as if a 
              psychic entity is answering the questions.
              </p>
            </div>
            <div class="card-footer">
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
    <footer class="py-5 brand footer">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; Vanessa's Blog 2023
          </p>
            </div>
          </footer>
        </body>
      </div>
    );
  }

export default BlogPage;