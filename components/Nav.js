import Link from "next/link";
export default function Nav() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>
        <Link href="/">logo</Link>
      </h1>
      <ul style={{ display: "flex", gap: "2em" }}>
        <li>
          <Link href="about">About</Link>
        </li>
        <li href="#">Sign up</li>
      </ul>
    </div>
  );
}
