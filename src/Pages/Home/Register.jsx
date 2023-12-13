const subTitle = "save the day";
const title = (
  <h2 className="text-capitalize title">
    Join on day long free workshop{" "}
    <b>
      Advance <span>Mastering</span>
    </b>{" "}
    on salses
  </h2>
);

const dese = "Limited time  offer! Hurry up";
const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subTitle}</span>
              {title}
              <p>{dese}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>Register Now</h4>
              <form className="register-form">
                <input
                  type="text"
                  name="name"
                  placeholder="username"
                  className="reg-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="reg-input"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Phone Number"
                  className="reg-input"
                />
                <button type="submit" className="lab-btn">
                  Regeister Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
