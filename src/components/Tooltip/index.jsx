
import './index.css';

function Tooltip({ text, position, children }) {
    return (
        <div className={`tooltip-container ${position}`}>
            {children}
            <div className="tooltip-text">
                {text}
            </div>
        </div>
    );
}

export default Tooltip;
