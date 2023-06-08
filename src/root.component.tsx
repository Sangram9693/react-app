export default function Root(props) {
  const style = {
    padding: "5%",
    border: "2px solid",
    background: "lightcyan",
  };
  return (
    <div style={style}>
      <h3>First Single SPA React APP {props.value}</h3>
      <button>Click</button>
    </div>
  );
}
