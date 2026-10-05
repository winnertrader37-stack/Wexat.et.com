import Link from "next/link";

export default function MarketPage() {
  return (
    <main className="container dashboard">
      <div className="dashboardTop">
        <div>
          <h1>P2P Market</h1>
          <p>
            Compare available verified USD offers.
          </p>
        </div>

        <div style={{
          display: "flex",
          gap: 10
        }}>
          <Link
            href="/orders/new"
            className="btn btnPrimary"
          >
            BUY USD
          </Link>

          <Link
            href="/orders/new"
            className="btn btnGhost"
          >
            SELL USD
          </Link>
        </div>
      </div>

      <div className="cards3">
        <div className="card">
          <div className="smallLabel">
            BUY USD
          </div>
          <h2>Live rate</h2>
          <p>
            Connected production offers appear here.
          </p>
        </div>

        <div className="card">
          <div className="smallLabel">
            SELL USD
          </div>
          <h2>Live rate</h2>
          <p>
            Compare verified sellers by rate and limits.
          </p>
        </div>

        <div className="card">
          <div className="smallLabel">
            PAYMENT METHODS
          </div>
          <h2>Verified</h2>
          <p>
            Supported bank and wallet methods appear here.
          </p>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Trader</th>
            <th>Side</th>
            <th>Rate</th>
            <th>Limits</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>No live offers</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>Backend required</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
