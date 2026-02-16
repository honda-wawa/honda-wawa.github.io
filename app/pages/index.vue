<template>
  <div>
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">
        <span class="text-red-500">Honda</span> Resources
      </h1>
      <p class="text-white/60 text-lg">Transmission ratios, catalogues, and more</p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <UCard
        v-for="item in resources"
        :key="item.title"
        class="bg-white/5 border border-white/10 rounded-xl hover:border-red-500/50 hover:bg-white/8 transition-all"
        :ui="{ body: 'p-5', header: 'p-5 pb-0' }"
      >
        <template #header>
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
        </template>
        <p class="text-white/50 text-sm mb-4">{{ item.description }}</p>
        <UButton
          :to="item.link"
          :target="item.external ? '_blank' : undefined"
          color="primary"
          variant="solid"
        >
          {{ item.linkText }}
        </UButton>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const resources = [
  {
    title: 'B-Series Transmissions',
    description: 'View detailed transmission ratios for Honda B-Series engines.',
    link: '/transmissions/b-series',
    linkText: 'View Ratios',
    external: false,
  },
  {
    title: 'K-Series Transmissions',
    description: 'View detailed transmission ratios for Honda K-Series engines.',
    link: '/transmissions/k-series',
    linkText: 'View Ratios',
    external: false,
  },
  {
    title: 'Sportowa Jazda Samochodem',
    description: 'Classic Polish racing driving manual.',
    link: '/docs/sjs.pdf',
    linkText: 'View PDF',
    external: true,
  },
  {
    title: 'Catalogues',
    description: 'Browse catalogues from Auto Catalog Archive.',
    link: 'https://autocatalogarchive.com/honda/',
    linkText: 'Browse',
    external: true,
  },
  {
    title: 'Honda Color Codes',
    description: 'Find paint codes for Honda vehicles.',
    link: 'https://www.paintref.com/cgi-bin/colorcodedisplay.cgi?manuf=Honda',
    linkText: 'View Colors',
    external: true,
  },
  {
    title: 'EK9 Style Body Parts',
    description: 'Type R style body parts for Civic EK.',
    link: 'https://www.jdmaster.net/shop/honda-civic-ek-96-98-look-type-r-style-body-parts/',
    linkText: 'Shop',
    external: true,
  },
]
</script>
