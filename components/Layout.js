import React  from "react";
import Head from 'next/head';
const Layout = (props) => {
  
    const  {username, hideStartDetails} = props;

    return (
    <>
    <Head>

      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Gain work experience by contributing to React Node and Java Projects. Manage and showcase your skills portofolio to your next potential employer" />
      <meta name="author" content="HackFreeApps" />

      <title>HackFreeApps</title>


      <link
rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
crossOrigin="anonymous"
/>


      <link href="/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />


    

      <link href="/css/freelancer.css" rel="stylesheet" />
      <link rel="icon" href="img/favicon.png" />

    </Head>


    <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/">HackFreeApps</a>
      
        <button className="navbar-toggler  text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" >
          Menu
        <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
       
          <ul className="navbar-nav ml-auto">
          
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/auth/github"> {username?username:<span>Login</span>}</a>
            </li> 
          
          </ul>
        </div>
      </div>
    </nav>

   {hideStartDetails? <></>:
    <header className="masthead bg-primary text-white text-center">
      <div className="container">
        <h3 className="font-weight-dark mb-0">Need coding experience ?</h3>
        <img className="img-fluid mt-2 mb-2 d-block mx-auto" style={{  width: '20%' }} src="/img/profile.png" alt="" />
        <h3 className="font-weight-dark mb-0">Find <i>`Most relevant`</i> and <i>`Easy to Get Started`</i> projects</h3>
      </div>
    </header>
   }


    {props.children}


    <footer id="about" className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-uppercase mb-4">Manage a portfolio of all your contributions</h4>
              <p className="lead mb-0">Sharpen your coding skills, interact with remote teams, and also gain new business knowledge by contributing to open source software. Get feedback from the project owners and showcase it to your next potential employer  @  
              <a href="http://hackfreeapps.org">hackfreeapps.org</a>.</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; hackfreeapps.org 2020</small>
        </div>
      </div>


      <div className="scroll-to-top d-lg-none position-fixed ">
        <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>


      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>



    </>
    );
}

export default Layout;