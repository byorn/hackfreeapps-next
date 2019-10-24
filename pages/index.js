import React  from "react";
const Index = () => {

return(
    <div>
    <head>

    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <meta name="description" content="Gain work experience by contributing to React Node and Java Projects. Manage and showcase your skills portofolio to your next potential employer"/>
    <meta name="author" content="HackFreeApps"/>

    <title>HackFreeApps</title>

    
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
   
    
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css"/>

    
    <link href="vendor/magnific-popup/magnific-popup.css" rel="stylesheet" type="text/css"/>

    
    <link href="css/freelancer.css" rel="stylesheet"/>
    <link href="css/bootstrap-social.css" rel="stylesheet"/>  
    <link rel="icon" href="img/favicon.png"/>

  </head>

  <body id="page-top">

    
    <nav class="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">HackFreeApps</a>
        <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

   
    <header class="masthead bg-primary text-white text-center">
      <div class="container">
        <img class="img-fluid mb-5 d-block mx-auto" style={{width:'20%'}} src="img/profile.png" alt=""/>
        <h1 class="mb-0">HackFreeApps</h1>
        <hr class="star-light"/>
        <h2 class="font-weight-light mb-0">Gain work experience by contributing to </h2>
          <br/>
          <h2 class="font-weight-light mb-0"> <i>most relevant</i> and <i>easy to get started</i> </h2>
                <br/>
        <h2 class="font-weight-dark mb-0">React / Node / Java projects</h2>
          <br/>
          <hr class="star-light"/>
        <h2 class="font-weight-light mb-0">Showcase your skills portfolio with points and reviews earned from fixing bugs and issues</h2>
        
      </div>
    </header>

   
    <section class="bg-primary text-white mb-0" id="login">
      <div class="container">
       
        
        <div class="row">
           
          <div class="col-md-12 col-lg-12 text-center">
         
              <a class="signin" href="/auth/github"><h3 class="font-weight-light mb-0"> <span class="fa fa-github"></span> <strong>Sign in with GitHub</strong> </h3></a>
         
          </div>
            
                   
        </div>
      </div>
    </section>

  
    <section class="bg-primary text-white mb-0" id="about">
      <div class="container">
        <h2 class="text-center text-uppercase text-white">About</h2>
        <hr class="star-light mb-5"/>
        <div class="row">
          <div class="col-lg-12 ml-auto">
              <p class="lead">HackFreeApps showcases web applications developed using ReactJS, Java Spring Boot, and NodeJS, built on MySQL Databases. Source code for these web applications are completely free to clone from GitHub repositories.</p>
          </div>
        
        </div>
      
      </div>
    </section>


    <section id="contact">
      <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Contact</h2>
        <hr class="star-dark mb-5"/>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <form name="sentMessage" id="contactForm" novalidate="novalidate">
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Name</label>
                  <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name."/>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email Address</label>
                  <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."/>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Phone Number</label>
                  <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Message</label>
                  <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <br/>
              <div id="success"></div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h4 class="text-uppercase mb-4">Get work experience</h4>
            <p class="lead mb-0">Learn new technologies and new industry software by contributing to open source enterprise apps. Get feedback from the project owners and showcase it to your next potential employer.
              <a href="http://hackfreeapps.org">hackfreeapps.org</a>.</p>
          </div>
        </div>
      </div>
    </footer>

    <div class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy; hackfreeapps.org 2019</small>
      </div>
    </div>


    <div class="scroll-to-top d-lg-none position-fixed ">
      <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
      
     

  
    <script src="/vendor/jquery/jquery.min.js"></script>
    <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

   
    <script src="/vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

  
    <script src="/js/jqBootstrapValidation.js"></script>
    <script src="/js/contact_me.js"></script>

   
    <script src="/js/freelancer.min.js"></script>

  </body>
  </div>
);

}

export default Index;