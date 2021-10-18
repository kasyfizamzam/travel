import React from 'react'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

export default function button([props]) {
    const className = [props.className]
    if (props.isPrimary) className.push("btn-primary")
    if (props.isSmall) className.push("btn-sm")
    if (props.isLarge) className.push("btn-lg")
    if (props.isBlock) className.push("btn-block")
    if (props.hasShadow) className.push("btn-shadow")

    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    return (
        <div>
        </div>
    )
}

button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    target: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool,
};