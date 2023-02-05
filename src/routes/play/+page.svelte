<script lang='ts'>
  import dayjs from 'dayjs';

  let curDate: Date;
  let curErrorDay = '';
  let curValidDay = '';
  const dayList = [...Array(7).keys()].map(k=>dayjs().day(k).format('dddd'))

  const startDate = new Date(2000, 0, 1)
  const endDate = new Date(2099, 12,31)

  const randomDate = (start: Date, end: Date) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  const nextDate = () => {
    curDate = randomDate(startDate, endDate)
    curErrorDay = '';
    curValidDay = '';
  }

  const selectDay = (day: string) => {
    curValidDay = dayjs(curDate).format('dddd')
    if(curValidDay === day) {
      setTimeout(nextDate, curErrorDay==='' ? 2000 : 0)
    } else {
      curErrorDay = day;
    }
  }

  nextDate()
</script>

<div> 
  <div class="flex flex-col space-x-4 h-[calc(100vh-150px)]">
    <div class="flex w-full h-1/5">
    <p class="text-4xl self-center text-center w-full">
      {dayjs(curDate).format("DD MMMM YYYY")}
    </p>
    </div>
    <div class="flex flex-col justify-around p-0 m-0 h-4/5 w-4/5 self-center">
      {#each dayList as day}
        <button 
          class={'btn rounded-full ' + 
            (curErrorDay==='' ? 
              day===curValidDay ? 'btn-success' : 'btn-primary' 
              : 
              curErrorDay===day ? 'btn-error' : day===curValidDay ? 'btn-primary' : 'btn-neutral')}
          on:click={()=>selectDay(day)}
        >{day}</button>
      {/each}
    </div>
  </div>
</div>