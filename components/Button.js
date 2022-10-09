
import { useState } from "react"

const Button = ({children, className, onClick}) => {

    const[modalVisibility, setModalVisibility] = useState(false)

    return (
        <button 
            className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className} `}
            onClick={onClick}>
            {children}
        </button>

    )
}
export default Button


