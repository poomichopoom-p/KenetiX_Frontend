export default function SignupPage() {

  return (
    
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-zinc-900">
        <div className="text-3xl font-bold tracking-wide">
          KINETI<span className="text-lime-400">X</span>
        </div>

        <div className="hidden md:flex items-center gap-16 text-sm text-zinc-400">
          <a href="#" className="hover:text-lime-400 transition-colors">
            Rental
          </a>
          <a href="#" className="hover:text-lime-400 transition-colors">
            Brand
          </a>
          <a href="#" className="hover:text-lime-400 transition-colors">
            How to
          </a>
          <a href="#" className="hover:text-lime-400 transition-colors">
            Contact
          </a>
        </div>

        <button className="bg-lime-400 text-black px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform">
          Login
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <p className="text-lime-400 uppercase tracking-[0.2em] text-sm mb-4">
              Customer Registration
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Join the <span className="text-lime-400">KINETIX</span>
              <br />
              Running Shoe Rental Platform
            </h1>

            <p className="text-zinc-400 mt-6 max-w-lg leading-relaxed">
              Register your account to start renting premium running shoe,
              manage your profile, and track your rental history.
            </p>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-2">Profile Data</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Store customer information including full name, email,
                phone number, address, and shoe size.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-2">Bank Information</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Securely save bank name, account number, and account owner
                details for refund processing.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-2">Account Status</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                System tracks reject count, account status, suspended date,
                and account activity.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-2">Secure Access</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Your account is protected with authentication and encrypted
                password management.
              </p>
            </div>
          </div>
        </div>

        {/* Register Form */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-[32px] p-8 shadow-2xl shadow-lime-500/10">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold">Create Account</h2>
            <p className="text-zinc-400 mt-3">
              Join the Kinetix ecosystem today
            </p>
          </div>

          <form className="space-y-5">
            {/* Personal Information */}
            <div>
              <h3 className="text-lime-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>

              <div className="mt-4 space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />

                <textarea
                  placeholder="Address"
                  rows={3}
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                />

                <input
                  type="number"
                  placeholder="Shoe Size"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>
            </div>

            {/* Bank Information */}
            <div>
              <h3 className="text-lime-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                Bank Information
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Bank Name"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />

                <input
                  type="text"
                  placeholder="Account Number"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />

                <input
                  type="text"
                  placeholder="Account Name"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <h3 className="text-lime-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                Security
              </h3>

              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>
            </div>

            {/* Terms */}
            <div className="space-y-4 text-sm text-zinc-400 pt-2">
              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 accent-lime-400" />
                <span>
                  I agree to the Terms of Service and Privacy Policy.
                </span>
              </label>

              <label className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 accent-lime-400" />
                <span>I confirm that I am over 20 years old.</span>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-lime-400 text-black py-4 rounded-2xl font-bold hover:scale-[1.01] transition-transform mt-4"
            >
              + CREATE ACCOUNT
            </button>

            <p className="text-center text-zinc-500 text-sm pt-2">
              Already have an account?{' '}
              <span className="text-white hover:text-lime-400 cursor-pointer">
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
