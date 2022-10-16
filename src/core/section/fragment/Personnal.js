function Personnal({ title, description, pathImage }) {
    const desc = description.split(/\r?\n/);
    return (
        <div className="card" data-aos="fade-up" data-aos-offset="10">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                <div className="card-body">
                    <div className="h4 mt-0 title">{title}</div>
                    {desc.map((line) => (<p>{line}</p>))}
                </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex">
                    <img src={process.env.PUBLIC_URL + pathImage} className="p-5" alt={title + " image"}/>
                </div>
            </div>
        </div>   
  );
}

export default Personnal;
  