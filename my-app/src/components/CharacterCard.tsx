export function CharacterCard(props: {
  name: string;
  img: string;
  alt: string;
}) {
  return (
    <div
      className="container d-flex m-2 align-items-center"
      style={{ width: "100%" }}
    >
      <img
        className=""
        src={props.img}
        alt={props.alt}
        style={{ width: "200px", height: "200px" }}
      />
      <h2 className="ms-5">{props.name}</h2>
    </div>
  );
}

export function EmptyCard() {
  return (
    <div className="container d-flex m-2 align-items-center">
      <h2 className="text-danger ms-5">No matches!</h2>
    </div>
  );
}
