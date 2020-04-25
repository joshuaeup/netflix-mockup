import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="mainContainer" className="container-fluid">
      <div id="main-header-background">
        <div id="main-container-padding">
          <div className="main-container-header d-flex justify-content-end">
            {/* <span className="nfLogo">
              <svg id="svg-icon" viewBox="0 0 111 30" focusable="false">
                <g id="netflix-logo">
                  <path className="Fill-14" d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                </g>
              </svg>
            </span> */}
            <img id="netflixLogo" alt="netflix banner" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" />
            <button id="signin-button" className="nfButtonStyle">
              Sign In
            </button>
          </div>
          <div className="main-container-body">
            {/* <h1 className="header-title-style text-center">Unlimited movies, TV <br /> shows, and more.</h1> */}
            <h1 className="header-title-style text-center">Josh's Version of the <br /> Netflix Landing Page</h1>
            <h2 className="header-sub-style text-center">Watch anywhere. Cancel anytime.</h2>
            <div className="input-group mb-3 custom-input-group">
              <input id="email-input" type="text" class="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="basic-addon2" />
              <div className="input-group-append group-input-container">
                <button id="try-it-button" className="btn btn-outline-secondary" type="button">TRY IT NOW <i id="custom-chevron-arrow" className="align-middle fas fa-chevron-right "></i></button>
              </div>
            </div>
            <h3 className="header-sub-small-style text-center">Ready to watch? Enter your email to create or access your account.</h3>
          </div>
        </div>
      </div>
      <div className="main-body-container">
        <div className="row custom-body-row">
          <div className="col-sm-6 col-md-6 col-lg-6 d-flex justify-content-end">
            <div className="main-sub-body-left-container d-flex align-items-center">
              <div>
                <h1 className="body-title-style text-left">Enjoy on your TV.</h1>
                <h2 className="body-sub-style text-left">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="main-sub-body-right-container d-flex align-items-center">
              <div>
                <img className="tv-stand" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="TV Stand"/>
                <div className="tv-animation-container">
                  <video className="tv-animation" autoPlay playsInline muted loop>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv.m4v" type="video/mp4"></source>
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-body-container">
        <div className="row custom-body-row">
          <div className="col-sm-6 col-md-6 col-lg-6 d-flex justify-content-end">
            <div className="main-sub-body-container d-flex align-items-center">
              <div>
                <h1 className="body-title-style text-left">Enjoy on your TV.</h1>
                <h2 className="body-sub-style text-left">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
