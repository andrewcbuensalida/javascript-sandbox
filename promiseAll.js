function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function myFetch(){
  await sleep(1000)
  return 'data'
}

async function demo() {
  const promiseArray = []
  for(let i = 0; i < 5; i++){
    promiseArray.push(myFetch())
  }
  const resolved = await Promise.all(promiseArray)
  console.log(`Example resolved: `, resolved)

}

demo();