import React, { MouseEventHandler } from 'react'
import './Button.scss'

type Props = {
    onClick: MouseEventHandler,
    text: string,
}

const Button = ({ onClick, text }: Props) => (
    <button onClick={onClick} className="hello">
        {text}
    </button>
)

export default Button