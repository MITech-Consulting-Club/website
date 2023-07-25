'use client';
import '../../_styles/alumni.scss';

const Alumni = () => {
  return (
    <div>
      <div className="alumni-top-container">
        <div className="alumni-top-card">
          <h1 className="alumni-top-heading">Alumni</h1>
          <p className="alumni-top-description">
            MITech is proud of the relationships that we establish with MIT
            alumni, which allows us to support the growth and development of our
            members. By working closely with alumni that are experts in the tech
            industry, we help our members gain valuable skills and connections.
          </p>
        </div>
      </div>
      <div className="alumni-engagements-container">
        <h1 className="alumni-engagements-heading">Engagements</h1>
        <p className="alumni-engagements-description">
          MITech collaborates with MIT alumni in the three following ways to
          foster connections, mentorships, and community initiatives.
        </p>
        <div className="alumni-engagements-cards-container">
          <div className="alumni-engagements-card">
            <img
              className="card-avatar"
              src="https://www.memphis.edu/healthsciences/images/twopeopleatdesk.png"
            />
            <div className="card-title">Advising</div>
            <div className="card-description">
              We collaborate with selected alumni to provide both group and
              individual advising sessions, on topics ranging from picking a
              major at MIT to applying for opportunities beyond undergrad.
            </div>
          </div>
          <div className="alumni-engagements-card">
            <img
              className="card-avatar"
              src="https://www.kweekcommunicatie.nl/wp-content/uploads/2021/11/74d63284938cb5b16e0efc1d1cf2-1625062.jpgd_-1.jpeg"
            />
            <div className="card-title">Network</div>
            <div className="card-description">
              We help our members establish long-lasting relationships with
              leading professionals in the tech industry by providing them with
              networking opportunities and established club-alumni connections.
            </div>
          </div>
          <div className="alumni-engagements-card">
            <img
              className="card-avatar"
              src="https://png.pngtree.com/png-clipart/20190617/original/pngtree-hand-drawn-cartoon-2019-new-year-friends-gathering-new-years-png-image_3849295.jpg"
            />
            <div className="card-title">Events</div>
            <div className="card-description">
              We organize large in-person & virtual events with alumni in our
              network + beyond to further facilitate connections and increase
              the club's involvement in the MIT community.
            </div>
          </div>
        </div>
      </div>
      <div className="alumni-advisors-container">
        <div className="alumni-advisors-left-text-container">
          <h1 className="alumni-advisors-heading">Our Alumni Advisors</h1>
          <p className="alumni-advisors-description-p1">
            From MITech's internal operations to students' professional
            development, our alumni advisors are pivotal to the success of
            MITech Consulting Club as well as the growth of our members. In
            addition to their specific roles, they are also matched with several
            MITech students to engage in regular advising sessions in the form
            of group lunches & dinners.
          </p>
          <p className="alumni-advisors-description-p2">
            Get to know our advisors and their involvement with the club by
            clicking into their profile. We have defined four main alumni
            advisors for the club necessary for our growth: Professional
            Development, Member Education, Internal Operations, and Initiatives
            & Projects.
          </p>
        </div>
        <div className="alumni-advisors-carousel-container">
          <img
            className="alumni-advisors-professional-headshot"
            src="https://static.wixstatic.com/media/bcc1c2_d97a40f653584d68ac0e13e647a0b511~mv2.jpg/v1/fill/w_287,h_323,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/SamKwei.jpg"
          />
          <div className="alumni-advisor-info-container">
            <h3 className="alumni-advisor-name">Sam Kwei '05</h3>
            <h4 className="alumni-advisor-role">
              Staff Technical Account Manager at Google
            </h4>
            <p className="alumni-advisor-type">
              Professional Development Advisor
            </p>
          </div>
        </div>
      </div>
      <div className="alumni-mentors-container">
        <div className="alumni-mentors-left-text-container">
          <h1 className="alumni-mentors-heading">Alumni Career Mentors</h1>
        </div>
        <div className="alumni-mentors-right-text-container">
          <p className="alumni-mentors-description">
            In addition to our four main advisors, we aim to establish
            connections with alumni who are interested in mentoring our
            students. Our Alumni Career Mentors come from a wide range of
            industries including tech, consulting, finance, and biotech, and
            they work with our members individually to provide tailored career
            support and insights into their own industry experiences.
          </p>
        </div>
      </div>
      <div className="alumni-supporting-mitech-container">
        <img
          className="alumni-supporting-mitech-left-img"
          src="https://static.wixstatic.com/media/11062b_916e6674cff64736acbf49ae13678e99~mv2.jpeg/v1/fill/w_976,h_362,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_916e6674cff64736acbf49ae13678e99~mv2.jpeg"
        ></img>
        <div className="alumni-supporting-mitech-right-text-container">
          <h1 className="alumni-supporting-mitech-heading">
            Supporting MITech
          </h1>
          <p className="alumni-supporting-mitech-description">
            We are always looking to welcome more people like you to join our
            community of talented students, alumni, and industry professionals
            who share a passion for technology, problem-solving, and
            community-building. If you are a MIT alum that is interested in
            supporting MITech, please don't hesitate to reach out to us at
            mitech-alumni@mit.edu; we would be more than happy to schedule a
            call to discuss your potential involvement!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
