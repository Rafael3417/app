const button = ({onclick, children, ...props})=>(
< button onclick = {onclick}{...props}>
{children}
</button>
);


export default button;