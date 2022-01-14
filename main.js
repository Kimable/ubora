var navbar = document.querySelector(".navigation");
var footer = document.querySelector(".footer");

// Navbar Content

navbar.innerHTML = `
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a href="#" class="navbar-brand">
      <img src="img/ubora-logo-2.png" height="40" alt="Ubora Logo" />
    </a>
    <button
      type="button"
      class="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto">
        <a href="index.html" class="nav-item nav-link active">Home</a>
        <a href="about.html" class="nav-item nav-link active">About Us</a>

        <div class="nav-item dropdown">
          <a
            href="#"
            class="nav-link dropdown-toggle active"
            data-bs-toggle="dropdown"
            >Our Services</a
          >
          <div class="dropdown-menu">
            <a href="cleaning.html" class="dropdown-item">Cleaning</a>
            <a href="waste-collection.html" class="dropdown-item"
              >Waste Collection</a
            >
            <a href="landscaping.html" class="dropdown-item"
              >Landscaping & Gardening</a
            >
            <a href="pest-control.html" class="dropdown-item"
              >Pest Control & Fumigation</a
            >
          </div>
        </div>
      </div>
      <div class="navbar-nav ms-auto">
        <a href="contact.html" class="nav-item nav-link active"
          >Get in Touch</a
        >
      </div>
    </div>
  </div>
</nav>
</header>
`;

// Footer Content
footer.innerHTML = `
<!-- Common Section before Footer -->
    <section class="clients">
      <div class="container p-5">
        <h2>Our Customers</h2>
        <div class="row">
          <div class="col-sm-3">
            <img src="img/COCACOLA.png" class="img-thumbnail" alt="Coca Cola" />
          </div>
          <div class="col-sm-3">
            <img
              src="img/ke-berg-logo-min.png"
              class="img-thumbnail"
              alt="Crown Paints"
            />
          </div>
          <div class="col-sm-3">
            <img
              src="img/avenue-health-care-hospital.png"
              class="img-thumbnail"
              alt="Coca Cola"
            />
          </div>
          <div class="col-sm-3">
            <img
              src="img/autosterile_logo.jpg"
              class="img-thumbnail"
              alt="Coca Cola"
            />
          </div>
          <div class="col-sm-3">
            <img src="img/maseno.jpg" class="img-thumbnail" alt="Coca Cola" />
          </div>
          <div class="col-sm-3">
            <img src="img/kebs.jpg" class="img-thumbnail" alt="Coca Cola" />
          </div>
          <div class="col-sm-3">
            <img
              src="img/mombasa-maize.jpg"
              class="img-thumbnail"
              alt="Coca Cola"
            />
          </div>
          <div class="col-sm-3">
            <img
              src="img/kenya-pipeline-company-kpc.jpg"
              class="img-thumbnail"
              alt="Coca Cola"
            />
          </div>
          <div class="col-sm-3">
            <img
              src="img/night-logo-4-02.png"
              class="img-thumbnail"
              alt="Coca Cola"
            />
          </div>
          <div class="col-sm-3">
            <img
              src="img/kisumu-concrete-ltd.jpg"
              class="img-thumbnail"
              alt="Coca Cola"
            />
          </div>
          <div class="col-sm-3">
            <img
              src="img/USAID-Logo.jpg"
              class="img-thumbnail"
              alt="Coca Cola"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <div class="container p-5">
        <div class="brand">
          <img src="img/ubora-logo-2.png" alt="Ubora Logo" />
          <h5>Services Limited</h5>
        </div>
        <div class="footer-links p-3">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact us</a>
        </div>
        <div class="social">
          <a href="https://www.instagram.com/uboraservicesltd">
            <img src="icons/instagram.svg" alt="" />
          </a>
          <a
            href="https://web.facebook.com/Ubora-Services-Limited-100275489230089/"
          >
            <img src="icons/facebook.svg" alt="" />
          </a>
        </div>
        <div class="contact-footer p-3">
          <span>Call Us: <a href="tel:+2540703959529">0703-959529</a> </span>
          <span>Email Us: <a href="tel:+2540703959529">0703-959529</a> </span>
        </div>
        <div class="copyright p-3">
          <p>&COPY; 2022 Ubora Services Limited</p>
        </div>
      </div>
    </footer>
`;
