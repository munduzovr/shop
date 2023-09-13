
const Cards = (props) => {

    return (
        <div>
            {props.cards.map((item) => (
                <div className="card" key={item.id}>
                    <div className="card-img">
                        <img src={item.img} width={200} alt="card-img" />
                        <div className="card-description">
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <button onClick={()=>props.showModal()}>Edit</button>
                            <button onClick={()=> props.deleteProduct(item.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
                {props.isVisible ? (
                <div style={{ width: "200px", height: "300px", backgroundColor: "darkblue", margin: "0 auto" }}>
                    <input type="text" />
                    <input type="text" />
                    <input type="date" />
                    <button>Save</button>
                    <button onClick={() => props.hideModal()}>Close</button>
                </div>
                ) : null}

        
        </div>
    );
};

export default Cards;
