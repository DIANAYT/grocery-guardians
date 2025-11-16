import React from 'react';

const HomePage = () => {
  return (
    <main>
      <header>
        <div className="homepage-header">
          <h1>Welcome To Grocery Guardians</h1>
          <img src="../img/favicon.png" alt="Grocery Guardians logo" />
        </div>
      </header>
      <section className="intro">
        <a href="/grocery-stores">
          <button type="button" className="btn btn-lg btn-outline-success">GET STARTED</button>
        </a>
        <div className="intro-container">
          <div className="left-column">
            <p>
              Introducing Grocery Guardians, the ultimate app designed to revolutionize your grocery shopping. Discover
              the best deals on all your grocery needs tailored to your budget. Save time, money, and effort with Grocery
              Guardians, making shopping and meal planning a breeze. Say goodbye to stress and hello to smarter, more
              efficient shopping with Grocery Guardians!
            </p>
          </div>
          <div className="right-column">
            <img src="img/hand-drawn-world-vegan-day-illustration.png" alt="people grocery shopping illustration" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
