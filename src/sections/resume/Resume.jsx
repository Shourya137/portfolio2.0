import React from 'react';
import Section from 'layout/Section';
import Slider from 'react-slick';
// import SimpleSlider from 'components/slider/SimpleSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Resume = ({ data: { skills } }) => {
  const SkillIcons = skills.map(skill => (
    <div className="skill-icon-container">
      <i
        key={skill}
        className={`${skill} skill-icon has-text-grey`}
      />
    </div>
  ));

  // const SkillIconSlider = <SimpleSlider items={SkillIcons} className="skill-icons-container" />;
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: true,
    speed: 500,
  };
  return (
    <Section name="resume" size="fullHeight" id="resume" title="resume">
      <div className="columns is-multiline">

        <div className="column is-12">
          <div className="box">
            <div className="section">
              <h1>Skills</h1>
              <div className="skill-icons-container">
              </div>
            </div>
          </div>
        </div>

        <div className="column is-12">
          <div className="box">
            <h2>Courses and Reading</h2>
            <div className="section" >


              <div>
                <h2>Center Mode</h2>
                <Slider {...settings}>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                  <div><h3>5</h3></div>
                  <div><h3>6</h3></div>
                  <div><h3>7</h3></div>
                  <div><h3>8</h3></div>
                  <div><h3>9</h3></div>
                </Slider>
              </div>

            </div>
          </div>
        </div>

        <div className="column is-12">
          <div className="box">
            <h2>Related Works experience</h2>
          </div>
        </div>

      </div>
    </Section>
  );
};
Resume.propTypes = {};
Resume.defaultProps = {};

export default Resume;
