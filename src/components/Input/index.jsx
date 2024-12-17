import "./index.css";

function Input(props) {
    const {
        type = "text",
        placeholder = "",
        value = "",
        onChange,
        disabled = false,
        label = "",
        danger = false,
    } = props;

    const inputClassName = `my-input ${danger ? "my-input--danger" : ""}`;

    return (
        <div className="input-wrapper">
            {label && <label className={`input-label ${danger ? "input-label--danger" : ""}`}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={inputClassName}
            />
        </div>
    );
}

export default Input;
