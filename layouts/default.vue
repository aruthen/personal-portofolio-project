<template>
  <div class="relative min-h-screen">
    <div class="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(124,58,237,0.12),transparent_22%)]" />

    <header class="sticky top-0 z-20 border-b border-primary/20 bg-[linear-gradient(to_right,rgba(10,8,18,0.92),rgba(20,11,34,0.9),rgba(10,8,18,0.92))] backdrop-blur-lg">
      <nav class="container-shell flex h-16 items-center justify-between">
        <NuxtLink to="/" class="text-sm font-semibold tracking-wide text-text transition hover:text-primary">
          LinkHub
        </NuxtLink>

        <ul class="m-0 flex list-none items-center gap-2 p-0 text-sm text-muted sm:gap-3">
          <li>
            <NuxtLink to="/tools" class="rounded-xl px-3 py-2 transition hover:bg-primary/15 hover:text-text">Tools</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/portfolio" class="rounded-xl px-3 py-2 transition hover:bg-primary/15 hover:text-text">Portfolio</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="rounded-xl px-3 py-2 transition hover:bg-primary/15 hover:text-text">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="container-shell py-8 sm:py-12">
      <slot />
    </main>
  </div>
</template>
