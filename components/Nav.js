import Link from "next/link";
export default function Nav() {
  return (
    <div
      className="fixed w-screen"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: ".5em",
        borderBottom: "1px solid white",
        background: "rgba(0,0,0,.85)",
      }}
    >
      <h1>
        <Link href="/">VB movieDB</Link>
      </h1>
      <ul style={{ display: "flex", gap: "2em" }}>
        <li>
          <Link href="about">About</Link>
        </li>
      </ul>
    </div>
  );
}
