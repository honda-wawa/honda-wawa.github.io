<template>
  <div>
    <div class="mb-8">
      <NuxtLink to="/" class="text-red-500 hover:text-red-400 text-sm mb-4 inline-block">
        &larr; Back
      </NuxtLink>
      <h1 class="text-3xl font-bold">K-Series Transmissions</h1>
      <p class="text-white/60 mt-2">Gear ratios for Honda K-Series transmissions</p>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-white/10 text-left">
            <th class="py-3 px-2 font-semibold">Vehicle</th>
            <th class="py-3 px-2 font-semibold">Market</th>
            <th class="py-3 px-2 font-semibold">Code</th>
            <th class="py-3 px-2 font-semibold text-center">1st</th>
            <th class="py-3 px-2 font-semibold text-center">2nd</th>
            <th class="py-3 px-2 font-semibold text-center">3rd</th>
            <th class="py-3 px-2 font-semibold text-center">4th</th>
            <th class="py-3 px-2 font-semibold text-center">5th</th>
            <th class="py-3 px-2 font-semibold text-center">6th</th>
            <th class="py-3 px-2 font-semibold text-center">Final</th>
            <th class="py-3 px-2 font-semibold">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(t, i) in transmissions"
            :key="i"
            class="border-b border-white/5 hover:bg-white/5"
          >
            <td class="py-3 px-2">{{ t.yearMake }}</td>
            <td class="py-3 px-2 text-white/60">{{ t.market }}</td>
            <td class="py-3 px-2 font-mono text-red-500">{{ t.trannyCode }}</td>
            <td class="py-3 px-2 text-center font-mono">{{ t.gear1.toFixed(3) }}</td>
            <td class="py-3 px-2 text-center font-mono">{{ t.gear2.toFixed(3) }}</td>
            <td class="py-3 px-2 text-center font-mono">{{ t.gear3.toFixed(3) }}</td>
            <td class="py-3 px-2 text-center font-mono">{{ t.gear4.toFixed(3) }}</td>
            <td class="py-3 px-2 text-center font-mono">{{ t.gear5.toFixed(3) }}</td>
            <td class="py-3 px-2 text-center font-mono">{{ t.gear6 ? t.gear6.toFixed(3) : '—' }}</td>
            <td class="py-3 px-2 text-center font-mono text-red-500">{{ t.finalDrive.toFixed(3) }}</td>
            <td class="py-3 px-2 text-white/40 text-xs">{{ t.notes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const transmissions = useKSeriesTransmissions()
</script>
