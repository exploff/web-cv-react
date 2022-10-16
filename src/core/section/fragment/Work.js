function Work({ title, company, date, description, competences }) {
    const desc = description.split(/\r?\n/);
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body cc-experience-header">
                        <p>{date}</p>
                        <div className="h5">{company}</div>
                    </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                        <div className="h5">{title}</div>
                        <ul>
                            {desc.map((line) => (<li>{line}</li>))}
                        </ul>
                        {competences}
                    </div>
                </div>
            </div>
        </div>     
  );
}

export default Work;
  