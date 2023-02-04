<script lang='ts'>

  Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }
  const soluce = [
    [5,11,16,22,33,39,44,50,61,67,72,78,89,95],    // 0
    [0, 6,17,23,28,34,45,51,56,62,73,79,84,90],    // 1
    [1, 7,12,18,29,35,40,46,57,63,68,74,85,91,96], // 2
    [2,13,19,24,30,41,47,52,58,69,75,80,86,97],    // 3
    [3, 8,14,25,31,36,42,53,59,64,70,81,87,92,98], // 4
    [9,15,20,26,37,43,48,54,65,71,76,82,93,99],    // 5
    [4,10,21,27,32,38,49,55,60,66,77,83,88,94],    // 6
  ]
  let yearList = [...Array(100).keys()]
  let curYear =  yearList.random()
  let curErrorDay = -1;
  let curValidDay = -1;
  let errorCount = 0

  const nextDate = () => {
    yearList=yearList.filter(x=>x!==curYear)
    curYear =  yearList.random()
    curErrorDay = -1;
    curValidDay = -1;
  }

  const nextYear = (day: number) => {
    curValidDay = soluce.reduce((a, c, i)=>c.includes(curYear) ? i : a,-1)
    if(soluce[day].some(x=>x===curYear)) {
      setTimeout(nextDate, curErrorDay===-1 ? 2000 : 0)
    } else {
      curErrorDay = day;
      errorCount++
    }
  }

</script>

<div> 
  <div class="flex flex-col space-x-4 h-[calc(100vh-74px)]">
    <div class="flex flex-col w-full h-1/5 justify-center space-y-4">
      <p class="text-4xl self-center text-center w-full">
        {curYear}
      </p>
      <p class="text-2xl self-center text-center w-full">
        {yearList.length - 1} left / {errorCount} errors
      </p>
    </div>
    <div class="flex flex-col justify-around p-0 m-0 h-4/5 w-4/5 self-center">
      {#each [...Array(7).keys()] as day}
        <button  class={'w-full text-white font-bold py-2 px-4 rounded h-12 ' + 
            (curErrorDay===-1 ? 
            day===curValidDay ? 'bg-lime-600' : 'bg-blue-600' 
              : 
              curErrorDay===day ? 'bg-red-800' : day===curValidDay ? 'bg-blue-600' : 'bg-gray-700')}
          on:click={()=>nextYear(day)}>{day}
        </button >
      {/each}
    </div>
  </div>
</div>