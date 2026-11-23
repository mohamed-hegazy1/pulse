import{test}from'node:test';import assert from'node:assert/strict';import{records,selectRows,metrics,trend,breakdown,sortRows,csv}from'./model.js';
test('270 synthetic records and unique IDs',()=>{assert.equal(records.length,270);assert.equal(new Set(records.map(r=>r.id)).size,270)});
test('date category channel filters combine',()=>{const r=selectRows({start:'2026-02-01',end:'2026-02-28',category:'Software',channel:'Direct'});assert.ok(r.length>0);assert.ok(r.every(x=>x.date.startsWith('2026-02')&&x.category==='Software'&&x.channel==='Direct'))});
test('search filters source',()=>assert.equal(selectRows({query:'Hardware'}).length,90));
test('metrics correct including weighted margin',()=>{const m=metrics([{revenue:10000,cost:5000,orders:2},{revenue:30000,cost:24000,orders:3}]);assert.equal(m.profit,11000);assert.equal(m.margin,27.500000000000004);assert.equal(m.aov,8000)});
test('empty metrics have no NaN',()=>Object.values(metrics([])).forEach(x=>assert.equal(x,0)));
test('aggregate sums reconcile',()=>{assert.equal(trend(records).reduce((s,x)=>s+x.revenue,0),metrics(records).revenue);assert.equal(breakdown(records).reduce((s,x)=>s+x.revenue,0),metrics(records).revenue)});
test('sort does not mutate',()=>{const ids=records.map(r=>r.id);const a=sortRows(records,'revenue','asc');assert.ok(a[0].revenue<=a.at(-1).revenue);assert.deepEqual(ids,records.map(r=>r.id))});
test('CSV has explicit synthetic note and selected count',()=>{const s=csv(records.slice(0,2));assert.match(s,/Synthetic/);assert.equal(s.split('\r\n').length,4)});
