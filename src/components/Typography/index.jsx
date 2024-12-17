
import './index.css';

function Typography({ textSize = 'md', className, children }) {
    const classNames = `typography typography--${textSize} ${className}`;

    return (
        <p className={classNames}>
            {children}
        </p>
    );
}

export default Typography;
