export const WorkExperience = () => {
  return (
    <section className="work-experience">
      <div className="wrk-exp-heading">
        <h1>Work Expereince</h1>
      </div>
      <div className="job-title">
        <h2>Embedded Firmware Intern</h2>
      </div>
      <div className="wrk-exp-description">
        <ul>
          <li>
            Worked in a startup which tries to digitize the retail market of
            India, by using computer vision and machine learning algorithms to
            predict what the customer is buying, so that the store can work
            autonomously.
          </li>
          <li>
            Used cameras with raspberri pi to collect real time data from retail
            stores
          </li>
          <li>
            Used ARuCo markers to predict the location of a customer in the
            store
          </li>
          <li>
            Used microsoft Azure cloud services to collect video data and run
            computer vision algorithms to estimate the items user is buying
          </li>
        </ul>
      </div>
    </section>
    // <div>
    //   <h1>Work Experience</h1>
    //   <p>I have worked in a startup</p>
    // </div>
  );
};
