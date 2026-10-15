export function Hero() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">YOUR ON-CHAIN COMMAND CENTER</p>
        <h1>
          Move with clarity.
          <br />
          <em>Trade with intent.</em>
        </h1>
        <p className="hero-copy">
          Your backend prepares every BSC action. Your wallet only signs the exact payload you
          approve.
        </p>
      </div>
      <div className="orbital">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="planet">◎</div>
        <span className="star star-a">✦</span>
        <span className="star star-b">✦</span>
      </div>
    </section>
  );
}
