import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1>Our Story</h1>
          <p>
          Our journey began with a simple idea – to make a difference in the lives of people who struggle every day to make ends meet. What started as a small community initiative has grown into a powerful platform for change. We saw a need and felt compelled to act, driven by the belief that no one should have to suffer the consequences of poverty. Over the years, with the support of kind-hearted donors, we have touched countless lives, offering not just financial support but hope for a better future.
          </p>
          <h3> Our Moto :- "Breaking the Cycle of Poverty, Building a Future of Dignity."</h3>
          
        </div>
        <div className="banner">
          <img src="/about.png" alt="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;