<template>
  <div class="min-h-screen bg-black text-white flex flex-col">
    <header class="border-b border-white/10">
      <div class="max-w-5xl mx-auto px-6 py-4">
        <nav class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-3">
            <span class="text-red-500 text-2xl font-bold">H</span>
            <span class="font-semibold text-lg tracking-wide">HONDA STUFF</span>
          </NuxtLink>
          <div class="flex items-center gap-4">
            <NuxtLink
              to="https://github.com/honda-wawa"
              target="_blank"
              class="text-white/40 hover:text-white transition-colors"
            >
              <UIcon name="i-simple-icons-github" class="w-5 h-5" />
            </NuxtLink>
          </div>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <div class="max-w-5xl mx-auto px-6 py-12">
        <slot />
      </div>
    </main>

    <footer class="border-t border-white/10 py-6">
      <div class="max-w-5xl mx-auto px-6 text-center text-white/40 text-sm">
        Honda Stuff &copy; {{ new Date().getFullYear() }}
      </div>
    </footer>
  </div>
</template>
