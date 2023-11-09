
const Card = ({ image, title }) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" className="w-96 h-44 " /></figure>
                <div className="card-body ">
                    <h2 className="text-center text-2xl font-bold">{title}</h2>

                </div>
            </div>
        </div>
    );
};

export default Card;