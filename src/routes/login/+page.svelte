<!-- Login card component using Daisy UI -->
<script>
  let email = "";
  let password = "";

  function login() {
    // Add your registration logic here
  }
</script>

<div class="card max-w-lg mx-auto shadow-xl bg-base-100">
  <div class="card-body">
    <h2 class="card-title">Login</h2>
    <form method="POST" action="/login" class="space-y-4 mt-4">
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Email</span>
        </div>
        <input
          type="email"
          bind:value={email}
          placeholder="Input your email here"
          class="input input-bordered"
          required
        />
      </label>
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Password</span>
        </div>
        <input
          type="password"
          bind:value={password}
          placeholder="Input your password here"
          class="input input-bordered"
          required
        />
      </label>
    </form>
    <div class="card-actions justify-center mt-6 gap-4">
      <p>Didn't have an account?</p>
      <a href="/register" class="link link-neutral">Register here</a>
      <button type="submit" class="btn btn-primary btn-wide">Login</button>
    </div>
  </div>
</div>
