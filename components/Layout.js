import React  from "react";
import Head from 'next/head';
const Layout = (props) => (
  
        <div>
              <Head>
                <title>HackFreeApps</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content="Get work experience by contributing to common business related open source software projects."/>
                <meta name="author" content="HackFreeApps"/>
                <link href="http://www.hackfreeapps.org/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"/>
                <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css"/>
                <link href="http://www.hackfreeapps.org/vendor/magnific-popup/magnific-popup.css" rel="stylesheet" type="text/css"/>
                <link href="http://www.hackfreeapps.org/css/freelancer.min.css" rel="stylesheet"/>
                <link rel="icon" href="img/favicon.png"/>
             </Head>

                
                <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">HackFreeApps</a>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                        <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="http://www.hackfreeapps.org/#portfolio">Projects</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                        <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="http://www.hackfreeapps.org/#about">About</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                        <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="http://www.hackfreeapps.org/#contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>

  

               <section className="bg-primary text-white mb-0" id="about">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12 ml-auto">
                            <p className="lead">

                               {props.children}

                            </p>
                        </div>
                        
                        </div>
                    
                    </div>
                </section>

              
                <style jsx>{`
            

              `}</style>


    <script src="http://www.hackfreeapps.org/vendor/jquery/jquery.min.js"></script>
    <script src="http://www.hackfreeapps.org/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="http://www.hackfreeapps.org/vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="http://www.hackfreeapps.org/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
    <script src="http://www.hackfreeapps.org/js/jqBootstrapValidation.js"></script>
    <script src="http://www.hackfreeapps.org/js/contact_me.js"></script>
    <script src="http://www.hackfreeapps.org/js/freelancer.min.js"></script>
          
        </div>
)

export default Layout;