import './index.css'; 
function Heading({ level = 1, className, children }) {
    const Component = `h${level}`;
    return <Component className={`heading heading--${level} ${className}`}>{children}</Component>;
}


export default Heading;
