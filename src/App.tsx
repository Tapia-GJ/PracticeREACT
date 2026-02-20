import { ItemCounter } from "./components/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const ItemsInCart: ItemInCart[] = [
  { productName: "Nintendo Siwitch 2", quantity: 10 },
  { productName: "Playstation 5", quantity: 10 },
  { productName: "Xbox One", quantity: 20 },
  { productName: "Wii", quantity: 2 }
]

export default function App() {
  return (
    <>
      <h1 className="text-blue-500 text-3xl" >Carrito de compras</h1>


      {
        ItemsInCart.map(({ productName, quantity }) => (
          <ItemCounter key={productName} name={productName} quantity={quantity} />
        ))
      }
      {/* <ItemCounter name="Playstation 5" quantity={10} />
      <ItemCounter name="Xbox One" quantity={20} /> */}
    </>
  )
}
