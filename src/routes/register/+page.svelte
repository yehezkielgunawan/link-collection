<!-- Register card component using Daisy UI -->
<script>
  let email = "";
  let password = "";
  let repeatPassword = "";

  function register() {
    // Add your registration logic here
  }
</script>

<div class="card max-w-lg mx-auto shadow-xl bg-base-100">
  <div class="card-body">
    <h2 class="card-title">Register</h2>
    <form method="POST" action="/register" class="space-y-4 mt-4">
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
      <label class="form-control w-full">
        <div class="label">
          <span class="label-text">Repeat Password</span>
        </div>
        <input
          type="password"
          bind:value={repeatPassword}
          placeholder="Repeat your password"
          class="input input-bordered"
          required
        />
      </label>
    </form>
    <div class="card-actions justify-center mt-6">
      <div class="w-full justify-between flex items-center">
        <p>Already have an account?</p>
        <a href="/login" class="link link-neutral">Login here</a>
      </div>
      <button type="submit" class="btn btn-primary btn-wide">Register</button>
    </div>
  </div>
</div>
