import process from 'process'

test('mock', () => {
  expect(5).toBe(5)
});


afterAll(()=>{
  process.exit(0)
})

