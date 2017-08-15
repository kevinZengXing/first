<template>
  <div id="search">
    <div class="search">
      <input type="text" @input="searchText" :value="value">
      <button @touchend="searchClient">查询</button>
    </div>
    <div class="userInfor">
      <div class="title">
        <div class="tname">姓名</div>
        <div class="thuxing">地址</div>
        <div class="txinghao">户型</div>
      </div>

      <div class="cell" v-for="(item,index) in client">
        <div class="name">{{item.name}}</div>
        <div class="huxing">{{item.huxing}}</div>
        <div class="xinghao">{{item.xinghao}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    created(){
      if (localStorage.client) {
        var client = JSON.parse(localStorage.client)
        this.client = client;
      }
    },
    data: function () {
      return {
        user: [
          {"name": "曾星", "huxing": "1111", "xinghao": "1111"},
          {"name": "哈哈哈", "huxing": "1111", "xinghao": "1111"}
        ],
        client: [],
        value: null
      }
    },
    methods: {
      searchClient: function (e) {
        var value = this.value;
        var user = this.user;
        var client = this.client;
        if (client.length > 0) {
          for (var i = 0; i < (client.length); i++) {
            if (client[i].name == value) {
              alert("已经在下面啦！！")
              return false;
            }
          }
        }
        var flag = false;
        for (var i = 0; i < user.length; i++) {
          if (user[i].name == value) {
            client.unshift(user[i]);
            this.client = client;
            flag = true;
          }
        }
        if (flag == false) {
          alert("不好意思，没有该客户的信息哦")
        }
        localStorage.setItem('client', JSON.stringify(client));
      },
      searchText: function (e) {
        this.value = e.target.value;
      },
//        huxingPic:function(xinghao){
//            if(xinghao == '')
//        }
    }
  }
</script>

<style lang="less">
  #search {
    width: 90%;
    margin-left: 5%;
  }

  .search {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    input {
      width: 50%;
      border: 1px solid black;
      margin-right: 5%;
      height: 2rem;
      font-size: 1.2rem;
      padding-left: 1%;
    }
    button {
      width: 25%;
      height: 2.5rem;
      border: 1px solid transparent;
      border-radius: 5px;
      font-size: 1rem;
      background: #ffe300;
    }
  }

  .userInfor {
    width: 100%;
    margin-top: 1rem;
  }

  .cell, .title {
    width: 100%;
    height: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-right: 0;
    margin-bottom: 0.5rem;
  }

  .name, .huxing, .xinghao, .tname, .thuxing, .txinghao {
    border-right: 1px solid black;
    height: 2rem;
    line-height: 2rem;
  }

  .name, .tname {
    width: 25%;
  }

  .huxing, .thuxing {
    width: 50%;
  }

  .xinghao, .txinghao {
    width: 25%;
  }


</style>
