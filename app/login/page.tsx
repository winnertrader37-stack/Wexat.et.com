import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="authWrapper">
      <div className="authCard">
        <div className="kicker">
          WEXAT.P2P ACCOUNT
        </div>

        <h1>Welcome back.</h1>

        <p>
          Sign in securely to your Wexat.p2p account.
        </p>

        <form
          action="/api/login"
          method="POST"
        >
          <label className="fieldLabel">
            Email or phone
          </label>

          <input
            className="input"
            name="identifier"
            required
            autoComplete="username"
          />

          <label className="fieldLabel">
            Password
          </label>

          <input
            className="input"
            name="password"
            type="password"
            required
            autoComplete="current-password"
          />

          <button
            className="btn btnPrimary fullButton"
            type="submit"
          >
            LOGIN
          </button>
        </form>

        <p style={{fontSize: 13}}>
          Don't have an account?{" "}
          <Link
            href="/register"
            style={{color: "var(--green)"}}
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}
