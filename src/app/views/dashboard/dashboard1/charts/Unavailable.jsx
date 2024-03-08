const Unavailable = ({ style, title, updated }) => {
    const date = new Date(updated);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const formattedDate = `${day}-${month}-${date.getFullYear()}`;
    
    return (

        <div className="card">
            <div className="row">
                <div className="col-6">
                    <p className="card-title mt-2 truncate" style={{ marginLeft: "10px", fontSize: "5px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <b>{title}</b>
                    </p>
                </div>
                <div className="col-4">
                    <p className="muted" style={{ marginRight: "-34px", marginTop: "16px", fontSize: "4px", textAlign: "right" }}>
                        {formattedDate}
                    </p>
                </div>
            </div>
            <div style={style} className="d-flex flex-column align-items-center justify-content-center">
                <p className="text-white">Data Unavailable</p>
            </div>
        </div>

    );
}

export default Unavailable;