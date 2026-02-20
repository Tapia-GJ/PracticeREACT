import { useState } from "react";

interface Props {
    name: string;
    quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
    const [count, setCount] = useState(quantity);
    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleSubtract = () => {
        setCount(count - 1)
    }

    return (
        <section className="mt-4 flex gap-4 items-center ">
            <span className="pr-2">{name}</span>
            <button className="bg-gray-100 border border-gray-300 hover:bg-gray-200 rounded-md py-2 px-4"
                onClick={handleAdd}
            >+1</button>
            <span>{count}</span>
            <button className="bg-gray-100 border border-gray-300 hover:bg-gray-200 rounded-md py-2 px-4"
                onClick={handleSubtract}
            >-1</button>
        </section>
    )
}
