function School({ level, date, school, title, description }) {
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body cc-education-header">
                    <p>{date}</p>
                    <div className="h5">{level}</div>
                    </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                    <div className="h5">{title}</div>
                    <p className="category">{school}</p>
                    <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>     
  );
}

export default School;
  