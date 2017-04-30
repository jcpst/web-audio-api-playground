import ctx from './audio-context'

var osc = ctx.createOscillator()
var gain = ctx.createGain()

osc.connect(gain)
gain.connect(ctx.destination)

osc.frequency.value = 200
gain.gain.value = 0.1

osc.start(ctx.currentTime)
osc.frequency.value = 200
osc.stop(ctx.currentTime + 1)
