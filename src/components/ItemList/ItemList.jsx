import styles from './itemlist.module.css'
import Item from '../Item/item'




const ItemList = ({products }) => {
    return(
        
        <div className={styles.ListGroup}>
            {products.map(prod => <Item key={prod.id} {...prod} /> )}
        </div>
    )
}

export default ItemList
