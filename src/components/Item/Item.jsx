import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
    return (
            <article className="CardItem card">
                <header className="Header card-header">
                    <h2 className="ItemHeader card-title">
                        {name}
                    </h2>
                </header>
                <div className="CardBody card-body">
                <picture>
                    <img src={img} alt={name} className="ItemImg card-img" />
                </picture>
                    <section>
                        <p className="Info card-text-price">
                            Precio: ${price}
                        </p>
                        <p className="Info card-text">
                            Cantidad disponible: {stock}
                        </p>
                    </section>
                </div>
                <footer className="ItemFooter card-footer">
                    <Link to={`/item/${id}`} className="Option btn btn-primary">
                        Ver detalle
                    </Link>
                </footer>
            </article>
    )
}

export default Item