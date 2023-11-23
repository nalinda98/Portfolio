


function App() {
  return (
    <>
     
        {/* <!-- ======= Mobile nav toggle button ======= --> */}
        <button type="button" className="mobile-nav-toggle d-xl-none">
          <i className="icofont-navigation-menu"></i>
        </button>

        {/* <!-- ======= Header ======= --> */}
        <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <img
                src="assets/img/profile-img.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
              <h1 className="text-light">
                <a href="index.html">Nalinda Deshapriya</a>
              </h1>
              <div className="social-links mt-3 text-center">
                <a
                  href="http://www.linkedin.com/in/nalinda98"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/nalinda98" className="github">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://wa.me/94769367058" className="whatsapp">
                  <i className="bx bxl-whatsapp"></i>
                </a>
              </div>
            </div>

            <nav className="nav-menu">
              <ul>
                <li className="active">
                  <a href="#hero">
                    <i className="bx bx-home"></i> <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <i className="bx bx-user"></i> <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="#resume">
                    <i className="bx bx-file-blank"></i> <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <i className="bx bx-book-content"></i> Portfolio
                  </a>
                </li>
                <li>
                  <a href="#services">
                    <i className="bx bx-server"></i> Services
                  </a>
                </li>
                <li>
                  <a href="#blogs">
                    <i className="bx bx-calendar-week"></i> Blogs
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <i className="bx bx-envelope"></i> Contact
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- .nav-menu --> */}
            <button type="button" className="mobile-nav-toggle d-xl-none">
              <i className="icofont-navigation-menu"></i>
            </button>
          </div>
        </header>
        {/* <!-- End Header --> */}

        {/* <!-- ======= Hero Section ======= --> */}
        <section
          id="hero"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="hero-container" data-aos="fade-in">
            <h1>Nalinda Deshapriya</h1>
            <p>
              I'm a{" "}
              <span
                className="typed"
                data-typed-items="Developer, Problem Solver, Photographer"
              ></span>
            </p>
          </div>
        </section>
        {/* <!-- End Hero --> */}

        <main id="main">
          {/* <!-- ======= About Section ======= --> */}
          <section id="about" className="about">
            <div className="container">
              <div className="section-title">
                <h2>About</h2>
                <p>
                  Friendly, punctual, and dedicated IT undergraduate with a
                  passion for new challenges and knowledge exploration. Seeking
                  a vacancy to gain industry experience. Self-motivated,
                  hardworking, and eager to contribute as a collaborative team
                  member. Strong sense of accountability and a drive to make a
                  positive impact in the IT industry.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-4" data-aos="fade-right">
                  <img
                    src="assets/img/profile-img1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="col-lg-8 pt-4 pt-lg-0 content"
                  data-aos="fade-left"
                >
                  <h3>Full Stack Developer.</h3>
                  <p className="font-italic">
                    I am proud to be proficient in front end development and
                    back end web development, coding with many of programming
                    languages for the client-side and maintaining databases and
                    infrastructure server-side.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>Birthday:</strong> 10 December 1998
                        </li>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>Degree:</strong> Bachelor (Hons)
                        </li>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>City:</strong> Balangoda,Sri Lanka
                        </li>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>Phone:</strong> +94 76 936 7058
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>Age:</strong> 22
                        </li>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>Graduate at:</strong> University of Moratuwa.
                        </li>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>Email:</strong> nalinda.18@itfac.mrt.ac.lk
                        </li>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>Website:</strong> www.nalinda.ml
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    <p></p>
                    <a href="./assets/Nalinda Deshapriya.pdf" target="_blank">
                      <b>
                        <u>Click here </u>
                      </b>{" "}
                    </a>{" "}
                    for download my CV{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End About Section --> */}

          {/* <!-- ======= Facts Section ======= --> */}
          <section id="facts" className="facts">
            <div className="container">
              <div className="section-title">
                <h2>Facts</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>

              <div className="row no-gutters">
                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                >
                  <div className="count-box">
                    <i className="icofont-simple-smile"></i>
                    <span data-toggle="counter-up">232</span>
                    <p>
                      <strong>Happy Clients</strong> consequuntur quae
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="count-box">
                    <i className="icofont-document-folder"></i>
                    <span data-toggle="counter-up">521</span>
                    <p>
                      <strong>Projects</strong> adipisci atque cum quia aut
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="count-box">
                    <i className="icofont-live-support"></i>
                    <span data-toggle="counter-up">1,463</span>
                    <p>
                      <strong>Hours Of Support</strong> aut commodi quaerat
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="count-box">
                    <i className="icofont-users-alt-5"></i>
                    <span data-toggle="counter-up">15</span>
                    <p>
                      <strong>Hard Workers</strong> rerum asperiores dolor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Facts Section --> */}

          {/* <!-- ======= Skills Section ======= --> */}
          <section id="skills" className="skills section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Skills</h2>
              </div>

              <div className="row skills-content">
                <div className="col-lg-6" data-aos="fade-up">
                  <div className="progress">
                    <span className="skill">
                      MySQL <i className="val">85%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="85"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      Express.js <i className="val">85%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      React.js <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      Node.js <i className="val">85%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      Bootstrap <i className="val">95%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      JavaScript <i className="val">85%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      Github <i className="val">100%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="progress">
                    <span className="skill">
                      MongoDB <i className="val">85%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      JSX <i className="val">80%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      Angular<i className="val">80%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      React Native <i className="val">60%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      Java <i className="val">80%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      HTML <i className="val">90%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <br />
                  <div className="progress">
                    <span className="skill">
                      CSS <i className="val">75%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Skills Section --> */}

          {/* <!-- ======= Resume Section ======= --> */}
          <section id="resume" className="resume">
            <div className="container">
              <div className="section-title">
                <h2>Resume</h2>
              </div>

              <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                  <h3 className="resume-title">Summary</h3>
                  <div className="resume-item pb-0">
                    <h4>Nalinda Deshapriya</h4>
                    <p>
                      <em>
                        Innovative and deadline-driven Web Developer with 2+
                        years of experience designing and developing
                        user-centered projects material from initial concept to
                        final, polished deliverable.
                      </em>
                    </p>
                    <ul>
                      <li>Ellepola, Balangoda(70100), Sri Lanka.</li>
                      <li>(+94) 76-936 7058</li>
                      <li>nalinda.18@itfac.mrt.ac.lk</li>
                    </ul>
                  </div>

                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>
                      Bachelor of Science in Information Technology{" "}
                      <b>(Hons)</b>.{" "}
                    </h4>
                    <h5>2018 - Present</h5>
                    <p>
                      <em>University of Moratuwa, Sri Lanka.</em>
                    </p>
                    <p>
                      <ul>
                        <li>
                          I got 3.12 current G.P.A. studying as an undergraduate
                          student.
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div className="resume-item">
                    <h4>G.C.E. Advanced Level Exam.</h4>
                    <h5>2015-2017</h5>
                    <p>
                      <em>Ananda Maithreya Central College, Balangoda.</em>
                    </p>
                    <ul>
                      <li>Combined Math’s - A</li>
                      <li>ICT - B </li>
                      <li>Physics - B </li>
                      <li>District Rank - 2 </li>
                      <li>Island Rank - 20</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3 className="resume-title">Working & Other experiences</h3>
                  <div className="resume-item">
                    <h4>Senior computer operator</h4>
                    <h5>2017 - 2018</h5>
                    <p>
                      <em>
                        "New Friends" Communication (pvt) Ltd, Balangoda, Sri
                        Lanka.{" "}
                      </em>
                    </p>
                    <ul>
                      <li>
                        I got many new experiences with that job solving
                        hardware & software issues within 10 months.{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>Junior assistance</h4>
                    <h5>2015-6 months</h5>
                    <p>
                      <em>
                        "Darshana" Mobile (pvt) Ltd, Balangida, Sri Lanka.{" "}
                      </em>
                    </p>
                    <ul>
                      <li>
                        {" "}
                        As an assistance I should to do software repair for
                        mobile phones, Laptops & PCs. I worked there within 6
                        months with clients while solving their issues.
                      </li>
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>Other experiences</h4>
                    <ul>
                      <li>
                        Mini-hackathonHomeAlone Competition 2020 organized by
                        the Students’ Union of the Faculty of Information
                        Technology, University of Moratuwa.
                      </li>
                      <li>
                        FIT Code Rush Competition 2020 organized by INTECS,
                        Faculty of Information Technology, University of
                        Moratuwa.
                      </li>
                      <li>
                        HackDown Competition 2020 organized by IEEE WIE Affinity
                        Group of University of Moratuwa.
                      </li>
                      <li>
                        Hack Moral 3.0-mini hackathon Competition 2021 organized
                        by Information Society, Faculty of Information
                        Technology, University of Moratuwa.
                      </li>
                      <li>
                        Google #Hash Code, KickStart Competition 2020 organized
                        by Google Company.{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Resume Section --> */}

          {/* <!-- ======= Portfolio Section ======= --> */}
          <section id="portfolio" className="portfolio section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Portfolio</h2>
              </div>

              <div className="row" data-aos="fade-up">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">
                      All
                    </li>
                    <li data-filter=".filter-web">Web App</li>

                    <li data-filter=".filter-app">Mobile App</li>

                    <li data-filter=".filter-card">Micro Controller</li>
                  </ul>
                </div>
              </div>

              <div
                className="row portfolio-container"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="Web App 1"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details-w1.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="Micro Controler 1 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details-mc.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="Mobile App 1"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details-app.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img
                      src="assets/img/portfolio/portfolio-5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-5.jpg"
                        data-gall="portfolioGallery"
                        className="venobox"
                        title="Web App 2"
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details-w2.html" title="More Details">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Portfolio Section --> */}

          {/* <!-- ======= Services Section ======= --> */}
          <section id="services" className="services-mf pt-5 route">
            <div className="container">
              <div className="section-title">
                <h2>Services</h2>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="service-box">
                    <div className="service-ico">
                      <span className="ico-circle">
                        <i className="ion-monitor"></i>
                      </span>
                    </div>
                    <div className="service-content">
                      <h2 className="s-title">Web Design</h2>
                      <p className="s-description text-center">
                        My skilled web designers can build an optimised online
                        store using popular platforms and frameworks. And I am
                        ready to give you effective services to facilitate the
                        growth of your business.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-box">
                    <div className="service-ico">
                      <span className="ico-circle">
                        <i className="ion-code-working"></i>
                      </span>
                    </div>
                    <div className="service-content">
                      <h2 className="s-title">Web Development</h2>
                      <p className="s-description text-center">
                        I am ready to develop as you require to develop both the
                        front and back end of web applications using the most
                        effective programming languages and technologies for
                        each case.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="service-box">
                    <div className="service-ico">
                      <span className="ico-circle">
                        <i className="ion-stats-bars"></i>
                      </span>
                    </div>
                    <div className="service-content">
                      <h2 className="s-title">PROBLEM SOLVING</h2>
                      <p className="s-description text-center">
                        If anyone finds  a problem solver for any problem, yes
                        I'm there. I like to solve problems because it makes me
                        very happy. I believe I can guarantee service for you
                        with my skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Services Section --> */}

          <section id="Blogs">
            {/* <!-- Blog Section --> */}
            <div className="blog" id="blogs">
              <div className="container">
                <div className="section-title">
                  <h2>My Blogs</h2>
                </div>

                <div className="news-grid w3l-agile">
                  <div className="col-md-6 news-img">
                    <a href="#" data-toggle="modal" data-target="#myModal1">
                      {" "}
                      <img
                        src="./assets/img/Blog/b1.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="col-md-6 news-text">
                    <h3>
                      {" "}
                      <a href="#" data-toggle="modal" data-target="#myModal1">
                        OLDEST COMPUTER LANGUAGE IN WORLD
                      </a>
                    </h3>
                    <p>
                      <ul>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>Language:</strong> Fortran
                        </li>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>Year Released:</strong> 1957
                        </li>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>Designed By:</strong> John Backus
                        </li>
                        <li>
                          <i className="icofont-rounded-right"></i>{" "}
                          <strong>Developer:</strong> John Backu and IBM
                        </li>
                      </ul>
                    </p>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#myModal1"
                      className="read hvr-shutter-in-horizontal"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="clearfix"></div>
                </div>

                <div className="news-grid">
                  <div className="col-md-6 news-text two">
                    <h3>
                      {" "}
                      <a
                        href="#myModal2"
                        data-toggle="modal"
                        data-target="#myModal2"
                      >
                        FUTURE OF ASIC CHIPS
                      </a>
                    </h3>

                    <p>
                      Application Specific Integrated Circuit chips, better
                      known as ASIC chips are microchips that are designed for
                      specific applications, such as for developing and training
                      AI algorithms. Currently, there are four major types of
                      hardware technologies that are leveraged to develop AI
                      algorithms and deep neural networks,
                    </p>
                    <a
                      data-toggle="modal"
                      data-target="#myModal2"
                      className="read hvr-shutter-in-horizontal"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="col-md-6 news-img two">
                    <a
                      href="#myModal"
                      data-toggle="modal"
                      data-target="#myModal2"
                    >
                      {" "}
                      <img
                        src="./assets/img/Blog/b2.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="news-grid">
                  <div className="col-md-6 news-img">
                    <a href="#" data-toggle="modal" data-target="#myModal3">
                      {" "}
                      <img
                        src="./assets/img/Blog/b3.jpg"
                        alt=" "
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="col-md-6 news-text">
                    <h3>
                      {" "}
                      <a href="#" data-toggle="modal" data-target="#myModal3">
                        WHAT IS THE MECHANISM FOR PRINTING PCB?
                      </a>
                    </h3>

                    <p>
                      A printed circuit board (PCB) mechanically supports and
                      electrically connects electronic components using
                      conductive tracks, pads and other features etched from one
                      or more sheet layers of copper laminated onto and/or
                      between sheet layers of a non-conductive substrate.
                    </p>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#myModal3"
                      className="read hvr-shutter-in-horizontal"
                    >
                      Read More
                    </a>
                  </div>

                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            {/* <!-- top-grids --> */}
            {/* <!-- /blog-pop--> */}
            <div
              className="modal ab fade"
              id="myModal1"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
            >
              <div className="modal-dialog about" role="document">
                <div className="modal-content about">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close ab"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body about">
                    <div className="about">
                      <div className="about-inner">
                        <img
                          src="./assets/img/Blog/b1-1.jpg"
                          alt="about"
                          width="100%"
                        />
                        <h4 className="tittle">A Fews words about Fortran</h4>
                        <p>
                          <b>
                            Fortran, formerly FORTRAN, was first commercially
                            released in 1957, making it the oldest programming
                            language still in use.
                          </b>{" "}
                          The programming language was originally developed by a
                          team of programmers at IBM led by John Backus. In late
                          1953, Backus submitted a proposal to his superiors at
                          IBM to develop a more practical alternative to
                          assembly language for programming their IBM 704
                          mainframe computer. A year later, Fortran was ready
                          for use and was released to the public three years
                          later. Fortran quickly changed the computer
                          programming landscape and the language has been
                          continuously used for the past six decades.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal ab fade"
              id="myModal2"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
            >
              <div className="modal-dialog about" role="document">
                <div className="modal-content about">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close ab"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body about">
                    <div className="about">
                      <div className="about-inner">
                        <img
                          src="./assets/img/Blog/b2-1.jpg"
                          alt="about"
                          width="100%"
                        />
                        <h4 className="tittle">Future in ASIC chips</h4>
                        <p>
                          Application Specific Integrated Circuit chips, better
                          known as ASIC chips are microchips that are designed
                          for specific applications, such as for developing and
                          training AI algorithms. Currently, there are four
                          major types of hardware technologies that are
                          leveraged to develop AI algorithms and deep neural
                          networks, namely, CPUs, GPUs, FPGAs, and GPUs. CPU,
                          although having the advantage of being highly
                          programmable, has limited performance. FPGAs are used
                          for machine learning, AI algorithms, and other
                          specialized applications, but it is difficult to find
                          professionals having the skill to program the FPGA
                          hardware. Additionally, FPGAs lack in performance when
                          compared to a high-end GPU for certain operations.
                          Technically, GPUs and ASIC chips are the same.
                          However, ASIC chips allow instructions to be
                          programmed to operate as an accelerator for
                          simultaneous algorithms. It can allow for multiple AI
                          algorithms to operate at the same time without any
                          compromise on the computing power. As ASIC chips hold
                          an advantage over other technologies, they will likely
                          be the future of AI development and training.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal ab fade"
              id="myModal3"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
            >
              <div className="modal-dialog about" role="document">
                <div className="modal-content about">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close ab"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body about">
                    <div className="about">
                      <div className="about-inner">
                        <img
                          src="./assets/img/Blog/b3-1.jpg"
                          alt="about"
                          width="100%"
                        />
                        <h4 className="tittle">PCB Printing Machanism</h4>
                        <p>
                          Alternatives to PCBs include wire wrap and
                          point-to-point construction, both once popular but now
                          rarely used. PCBs require additional design effort to
                          lay out the circuit, but manufacturing and assembly
                          can be automated. Electronic computer-aided design
                          software is available to do much of the work of
                          layout. Mass-producing circuits with PCBs is cheaper
                          and faster than with other wiring methods, as
                          components are mounted and wired in one operation.
                          Large numbers of PCBs can be fabricated at the same
                          time, and the layout only has to be done once. PCBs
                          can also be made manually in small quantities, with
                          reduced benefits.
                        </p>
                        <p>
                          PCBs can be single-sided (one copper layer),
                          double-sided (two copper layers on both sides of one
                          substrate layer), or multi-layer (outer and inner
                          layers of copper, alternating with layers of
                          substrate). Multi-layer PCBs allow for much higher
                          component density, because circuit traces on the inner
                          layers would otherwise take up surface space between
                          components. The rise in popularity of multilayer PCBs
                          with more than two, and especially with more than
                          four, copper planes was concurrent with the adoption
                          of surface mount technology. However, multilayer PCBs
                          make repair, analysis, and field modification of
                          circuits much more difficult and usually impractical.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- //blog-pop--> */}
          </section>

          {/* <!-- ======= Testimonials Section ======= --> */}
          <section id="testimonials" className="testimonials section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Testimonials</h2>
                <b>
                  I think it's more important to know how others think of us
                  than what we call ourselves
                </b>
              </div>

              <div className="owl-carousel testimonials-carousel">
                <div className="testimonial-item" data-aos="fade-up">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>I
                    can say he is the best computer operator I have ever had. I
                    saw a variant of talent from him and with his came increased
                    my clients. Because of his qualities, abilities and talents
                    I think.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Shantha Kumara</h3>
                  <h4>Founder Friends Communication</h4>
                </div>

                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    He is interested in improving his knowledge of unknown facts
                    and will very quickly. I'm glad to work with him. We worked
                    remotely on a project but I can recommend his service with
                    his qualities.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Gaurav Chaurasia</h3>
                  <h4>Freelancer</h4>
                </div>

                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    If there is a problem I am contacting Nalinda and somehow he
                    solves it. Another thing is that solutions are marvelous and
                    most suitable for there. I have never seen a problem solver
                    like him.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-4.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Anuradha Liyanage</h3>
                  <h4>Undergraduater</h4>
                </div>

                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    It was such a great experience to work with Nalinda. I
                    highly recommend his service. His great insightful advice
                    really helped me to solve some questions in my university
                    individual project.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-3.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Chamika Gangul</h3>
                  <h4>Software Engineer</h4>
                </div>

                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    After I gave my database assignment via freelancer he did it
                    very fast and it was helpful to submit before the deadline.
                    And I got 100% marks for that. So I can highly recommend his
                    service. 
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-5.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Ishara Silva</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- ======= Contact Section ======= --> */}
          <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                  I'm so happy you're interested in getting touch with me!
                  Please fill in the form below or email me directly @{" "}
                  <b> nalinda.18@itfac.mrt.ac.lk</b>
                </p>
                <p>I'll personally respond within 1-2 days. Thank you...</p>
              </div>

              <div className="row" data-aos="fade-in">
                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="icofont-google-map"></i>
                      <h4>Location:</h4>
                      <p>Ellepola, Balangoda, Sri Lanka, PC 70100.</p>
                    </div>

                    <div className="email">
                      <i className="icofont-envelope"></i>
                      <h4>Email:</h4>
                      <p>nalinda.18@itfac.mt.ac.lk</p>
                    </div>

                    <div className="phone">
                      <i className="icofont-phone"></i>
                      <h4>Call:</h4>
                      <p>+94 76 936 7058</p>
                    </div>

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2356.3998079564158!2d80.6997431377106!3d6.649858890748605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1625080569777!5m2!1sen!2slk" frameborder="0" 
            style={"border:0; width: 100%; height: 290px;}" allowfullscreen></iframe> */}
                  </div>
                </div>

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="name">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 4 chars"
                        />
                        <div className="validate"></div>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="name">Your Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          data-rule="email"
                          data-msg="Please enter a valid email"
                        />
                        <div className="validate"></div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="name">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group">
                      <label for="name">Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="10"
                        data-rule="required"
                        data-msg="Please write something for us"
                      ></textarea>
                      <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Contact Section --> */}
        </main>
        {/* <!-- End #main --> */}

        {/* <!-- ======= Footer ======= --> */}
        {/* <!-- End  Footer --> */}

        <a href="#" className="back-to-top">
          <i className="icofont-simple-up"></i>
        </a>
   
    </>
  );
}

export default App;
