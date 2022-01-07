import Link from "next/link";

export default function CurrentWeather() {
  return (
    <div>
      <h1>weather</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  );
}
