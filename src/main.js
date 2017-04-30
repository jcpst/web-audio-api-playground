import ctx from './audio-context'

for (let i = 0, k = 8; i < k; i++) {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  gain.gain.value = 0.13
  osc.frequency.value = 200 + (i * 30)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(ctx.currentTime + (i / 2))
  osc.stop(ctx.currentTime + (i / 2) + 0.4)
}
