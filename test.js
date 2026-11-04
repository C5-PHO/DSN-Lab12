const {test}=require('node:test'),assert=require('node:assert/strict'),{score,totals}=require('./scoring');
const p=(h,a,rh,ra,early=true)=>({home:h,away:a,home_score:rh,away_score:ra,created_at:early?'2026-01-01T00:00:00Z':'2026-01-02T00:00:00Z',starts_at:'2026-01-02T00:00:00Z'});
test('exacto, ganador, margen y anticipo',()=>{assert.deepEqual(score(p(2,1,2,1)),{base:5,winner:true,early:0});assert.equal(score(p(3,1,2,0)).base,5);assert.equal(score(p(2,1,3,1)).base,3);assert.equal(score(p(0,1,3,1)).base,0);assert.equal(score({...p(0,0,0,0),created_at:'2025-12-31T23:59:59Z'}).early,1)});
test('racha cada tres y reinicio',()=>{assert.equal(totals([p(2,1,2,1),p(1,0,1,0),p(2,0,2,0)]),17);assert.equal(totals([p(2,1,2,1),p(0,1,1,0),p(1,0,1,0)]),10)});
