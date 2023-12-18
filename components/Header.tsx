export default function Header({ main, sub }: { main: string; sub: string }) {
  return (
    <header className="items-center text-center flex flex-col justify-center">
      <h1 className="text-2xl font-semibold">{main}</h1>
      <h2 className="text-sm md:text-base font-mono text-center">{sub}</h2>
    </header>
  );
}
