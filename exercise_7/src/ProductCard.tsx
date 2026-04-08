
 interface prodectCard {
    name: string,
    price: number,
    description?: string
 }
const ProductCard = ({name , price , description}: prodectCard) => {
  return (
    <div>
       <h2>Product card component</h2>
       <p >{name}</p>
       <p>{price}</p>
       { description && ( <span > description:{description}</span>)}
    </div>
  )
}

export default ProductCard
