
const Card = ({ image, title, pro }) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className="w-96 h-44 " /></figure>
                <div className="card-body ">
                    <div className="flex justify-center">
                        <h2 className="card-title text-center text-2xl font-bold ">{title}
                            {pro && <div className="badge badge-secondary text-xs py-2 -mt-4">{pro}</div>}
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;