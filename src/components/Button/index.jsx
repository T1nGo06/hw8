import "./index.css";

function Button({
    type = "button",
    onClick = null,
    disabled = false,
    size = "md",
    variant = "primary",
    children
}) {
    const buttonClass = `custom-btn custom-btn--${variant} custom-btn--${size} ${disabled ? 'disabled' : ''}`;

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
