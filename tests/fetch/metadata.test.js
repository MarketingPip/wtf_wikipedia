import test from 'tape'
import wtf from '../lib/index.js'

test('get metadata', (t) => {
  t.plan(2)
  const p = wtf.fetch('Toronto Raptors', {
    lang: 'en',
    'Api-User-Agent': 'wtf_wikipedia test script - <spencermountain@gmail.com>',
  })
  p.then(function (doc) {
    t.equal(doc.pageID(), 72879, 'got wikipedia id')//
    t.equal(doc.wikidata(), 'Q132880', 'got wikidata id')
    t.equal(doc.revisions.revID(), 1185022205, 'got revision id')//
    t.equal(doc.revisions.parentID(), 1183547317, 'got revision parent id')//
  })
  p.catch(function (e) {
    t.throw(e)
  })
})
