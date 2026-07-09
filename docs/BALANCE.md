# Balance model — 24-0: Perfect Season

## The field formula

Each race compares your **score** against a **field** value:

```
field = FIELD_ANCHOR + strength.pace * FIELD_CARRY + fieldNoise + pressure + redoTax
```

with (tuned via Monte Carlo, `harness`/`tune2.js`):

```
FIELD_ANCHOR = 12.8   // absolute floor of grid strength
FIELD_CARRY  = 0.808  // fraction of YOUR pace the field keeps up with
```

### Why this shape

The original build used `field = strength.pace + 1.4 + noise + …`. Because the field
tracked your own pace 1:1, era tier, budget, drivers and principal all appeared on both
sides of `score >= field` and cancelled. Every era averaged ~16 wins and 24–0 was ~0.05%
for *everyone* — the tier fantasy did not exist.

Anchoring the field to an absolute baseline (`12.8`) plus a **sub-1.0** carry (`0.808`)
means a stronger package genuinely out-runs the grid: the gap `pace*(1 - 0.808) - 12.8`
grows with your package, so better eras win more races.

### Pressure

`pressure = state.wins >= 20 ? 0.8 : 0`. A small, visible late-sweep lift ("Title
pressure") — drama, not the old streak-punishing +2.0 rubber band at 18 wins.

## Measured outcomes (Monte Carlo, per-tier averages)

Smart = default calls; Expert+redo = optimal per-weekend calls + 3 redos on closest losses.

| Tier     | Avg wins | Smart-play 24–0 | Expert+redo 24–0 |
|----------|----------|-----------------|------------------|
| God      | 19.9     | ~1.6%           | ~19%             |
| Strong   | 19.0     | ~0.6%           | ~10%             |
| Underdog | 18.4     | ~0.3%           | ~7%              |

A perfect season is now a live, tier-differentiated target: routinely achievable for a
determined God-tier player, genuine folklore for an underdog.

## Retuning

`node tune2.js <carry> <anchor> <N>` prints per-tier averages + 24–0 rates across all
36 eras. Adjust the two constants in `index.html` (search `FIELD_ANCHOR`) and re-measure.
Raising `anchor` or `carry` makes the field harder (fewer perfects); lowering makes it easier.
