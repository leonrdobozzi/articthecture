import React from 'react';

import { AboutWrapper } from './style';

function About() {
  return (
      <AboutWrapper>
          <h1>
              THE MINIMUM IS MORE
          </h1>
          <section className="about-minimun">
            <div>
                <div className="minimalist">
                    <h3>MINIMALIST</h3>
                    <p>Never do more than necessary, do what is necessary to be the best.</p>
                </div>
                <div className="well-done">
                    <h3>WELL DONE</h3>
                    <p>There are several ways to draw attention, one of them is the job well done.</p>
                </div>
            </div>
          </section>
      </AboutWrapper>
  );
}

export default About;