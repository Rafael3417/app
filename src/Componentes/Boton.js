const Botom = ({ onClick, children, ...props }) => (
  <button className="boton" onClick={onClick} {...props}>
    {children}
  </button>
);

export default Botom;