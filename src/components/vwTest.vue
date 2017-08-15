<template>
  <div id="vwTest">
    <div class="img">
      <div></div>
    </div>
    <div class="section1">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
    <div class="section2">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </div>
</template>

<style lang="less">
  #vwTest {
    width: 100%;
    .img {
      width: 100%;
      height: 15vh;
      margin-bottom: 5vh;
      display: flex;
      justify-content: center;
      div {
        width: 15vh;
        height: 15vh;
        border-radius: 50%;
        background: gray;
      }
    }
    .section1 {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 5vh;
      div {
        width: 35vw;
        height: 7.5vh;
        margin: 0 7.5vw 2.5vh;
        background: green;
        line-height: 7.5vh;
      }
    }
    .section2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        width: 70vw;
        height: 7.5vh;
        margin: 0 15vw 1vh;
        background: #ffe300;
        line-height: 7.5vh;
      }
    }

  }

</style>
