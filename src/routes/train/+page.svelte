<script lang='ts'>

  Array.prototype.randomElem = function () {
      return this[Math.floor((Math.random()*this.length))];
    }
  Array.prototype.randomSort = function () {
    return this.sort((a, b) => 0.5 - Math.random());
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
  let days = [...Array(7).keys()].randomSort();
  let curYear =  0
  let errorCount = 0
  let curErrorDay = -1;
  let curValidDay = -1;

  const nextDate = () => {
    days = days.randomSort();
    yearList=yearList.filter(x=>x!==curYear)
    curYear =  yearList.randomElem()
    if(curErrorDay>-1){
      errorCount++
    }
    curErrorDay = -1;
    curValidDay = -1;
  }

  const nextYear = (day: number) => {
    if(yearList.length>0){
      const isNotKnown = day === 8
      if(isNotKnown) {
        curErrorDay = 8
      }
      curValidDay = soluce.reduce((a, c, i)=>c.includes(curYear) ? i : a,-1)
      if(soluce[day].some(x=>x===curYear) || isNotKnown) {
        setTimeout(nextDate, curErrorDay===-1 ? 2000 : 0)
      } else {
        curErrorDay = day;
      }
    }
  }

</script>

<div> 
  <div class="flex flex-col space-x-4 h-[calc(100vh-130px)]">
    <div class="flex flex-col w-full px-8 h-3/5 justify-center space-y-4">
      
      <div class="card bg-primary text-primary-content shadow-xl">
        <div class="card-body items-center text-center">
          <span class="countdown font-mono text-6xl">
            <span style="--value:{curYear};"></span>
          </span>
        </div>
      </div>

      <div class="bg-primary text-primary-content text-center rounded-box flex items-center p-4 shadow-xl">
        <div class="flex-1 px-2">
          <h2 class="text-3xl font-extrabold">{100 - yearList.length - errorCount}</h2> 
          <p class="text-sm text-opacity-80">Pass</p>
        </div> 
        <div class="flex-1 px-2">
          <h2 class="text-3xl font-extrabold">{yearList.length - 1}</h2> 
          <p class="text-sm text-opacity-80">Left</p>
        </div> 
        <div class="flex-1 px-2">
          <h2 class="text-3xl font-extrabold">{errorCount}</h2> 
          <p class="text-sm text-opacity-80">Erros</p>
        </div> 
      </div>

    </div>

    <div class="grid grid-cols-3 gap-4 p-0 m-0 h-2/5 w-4/5 self-center" style="margin-left:0px">
      {#each days as day}
        <button  class={'btn btn-lg ' + 
            (curErrorDay===-1 ? 
            day===curValidDay ? 'btn-success' : 'btn-primary' 
              : 
              curErrorDay===day ? 'btn-error' : day===curValidDay ? 'btn-primary' : 'btn-neutral')}
          on:click={()=>nextYear(day)}>{day}
        </button >
      {/each}
      <button  class={'btn btn-lg col-span-2 ' + 
          (curErrorDay===-1 ? 
            'btn-primary' 
            : 
            'btn-neutral')}
        on:click={()=>nextYear(8)}>?
      </button >
    </div>
  </div>
</div>