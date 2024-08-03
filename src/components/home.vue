<template>
  <div class="seethenft">
    <div class="left">
      <h1>See the NFT new world</h1>
      <!-- <H1>new world</H1> -->

      <p>
        Vorem ipsum dolor sit amet, consectetur adipiscing <br />
        elit. Etiam eu turpis molestie, di
      </p>

      <div class="discorver">
        <P>Discorver Vow </P>
        <p><img src="@/assets/images/Frame 126.png" alt="" /></p>
      </div>
    </div>

     <div class="right">
      <div class="abs">
        <img src="@/assets/images/Frame.png" alt="" srcset="" />
      </div>
      <div class="br">
        <div class="machine"></div>

        <div class="top">
        

        </div>
      </div>
    </div> 
  </div>

  <div class="filtreelement">
    <h1>Our Collections</h1>
    
    <div class="filtre">
      <div class="chaqel">
        <button @click="setFilter('ALL')" :class="{ active: filter === 'ALL' }">All categories</button>
        <button @click="setFilter('Art')"  :class="{ active: filter === 'Art' }" >Art</button>
        <button @click="setFilter('Celebrities')" :class="{ active: filter === 'Celebrities' }">Celebrities</button>
        <button @click="setFilter('gaming')" :class="{ active: filter === 'gaming' }" >Gaming</button>
        <button @click="setFilter('sport')"  :class="{ active: filter === 'sport' }" >Sport</button>
       
      </div>
      <div class="voirplus">
          <a href="">View more</a>
        </div>
    </div>

    <div class="containn">
    <div class="rrr" v-for="item in filteredItems" 
     :key="item.id"
       :class="{ active: clickedItemId === item.id }"
           @click="handleClick(item.id)"
   >


      
      <div class="card">
       <div class="imagenft"> 
           <img :src="item.image" alt="Image" class="card" /> 
          
        </div>

        <div class="descriptionnft">
          <p>{{ item.title }}</p>
          <div class="prix">
            <div class="logoe">
              <img src="@/assets/images/ethereum-ellipse.png" alt="" />
              <p>68</p>
            </div>
          </div>
       
        </div>
        <button>Place a bid</button>
      </div>
    </div>
  </div> 

  </div>

  <div class="createandsellcontainer">
    <H1>Create and sell now</H1>
    <div class="createandsell">
      <div class="c1" id="c">
        <div class="icone">
          <img src="@/assets/images/Frame 129.png" alt="" srcset="" />
        </div>
        <h4>Set up your wallet</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div class="c1" id="c">
        <div class="icone">
          <img src="@/assets/images/Frame 129.png" alt="" srcset="" />
        </div>
        <h4>Add your NFT'S</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div class="c1" id="c">
        <div class="icone">
          <img src="@/assets/images/Frame 129.png" alt="" srcset="" />
        </div>
        <h4>Promote your NFT'S</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div class="c1" id="c">
        <div class="icone">
          <img src="@/assets/images/Frame 129.png" alt="" srcset="" />
        </div>
        <h4>Sell your NFT'S</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
    </div>
  </div>

  <div class="build">
    <div class="buildelement">
      <h3>Build your NFT profil</h3>
      <P>Join almost 10k NFT profiles on Digit !</P> <br />
      <div>
        <button>sign up now</button>
      </div>
    </div>
  </div>
</template>




<script>
import { ref, computed } from "vue";
import im1 from "@/assets/images/im1.png";
import im2 from "@/assets/images/im2.png";
import im3 from "@/assets/images/im3.png";
import im4 from "@/assets/images/im4.png";

export default {
  name: "HoMe",

  setup() {
    const clickedItemId = ref(null);
    const items = ref([
      { id: 1, title: "CyberPunk", category: "Art", image: im4 },
      { id: 2, title: "Durolost  Boll - Upper", category: "Celebrities", image: im1 },
      { id: 3, title: "Space X Wiper", category: "gaming", image: im2 },
      { id: 4, title: "Snoop Dogg", category: "sport", image: im3 },
   
    ]);

    const filter = ref("ALL");

    const setFilter = (category) => {
      filter.value = category;

    };

    const handleClick = (id) => {
      clickedItemId.value = id;
    };



    const filteredItems = computed(() => {
      if (filter.value === "ALL") {
        return items.value;
      }
      return items.value.filter((item) => item.category === filter.value);
    });
    return {
      items,
      filter,
      setFilter,
      filteredItems,
      clickedItemId,
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: regular;
}

.seethenft {

  position: relative;

  width: 100%;
  display: flex;

  margin: 150px auto 50px auto;
  width: min(100%, 1250px);

  .left {

    width: 60%;
    span {
      position: absolute;
      left: 80px;
    }
    p {
      font-weight: 400;
    }
    h1 {
      font-weight: 500;
      font-size: 100px;
      margin-bottom: 10px;
      letter-spacing: 2px;

 
    }
    .discorver {
      display: FLEX;
      font-weight: 800;
      align-items: center;
      padding: 30px 0px;
      img {
        width: 30px;
        margin-left: 20px;
      }
    }
  }

  .right {

    width: 60%;
    display: flex;

    .abs {
      position: absolute;
      left: 740px;
      img {
       
      }
    }
    .br {
      display: flex;
      position: relative;
    }

    .machine {
      background: url(@/assets/images/8machine.png)  no-repeat center/cover;
     
      height: 450px;
      width: 320px;
      border-radius: 160px;
      margin-top: 168px;
      position: absolute;
      left: -80px;
    }
    .top {
      background: url(@/assets/images/chimp.png) no-repeat center/cover;

      height: 450px;
      width: 320px;
      border-radius: 160px;
       margin-left: 280px;
    }
  }
}
.containn{
 
   width: 100%;
    }
// --------------------------petit box----------------------

.createandsellcontainer {
  margin: 100px auto 90px auto;
  width: min(100%, 1250px);
  h1 {
    font-weight: bold;
  }
}

.createandsell {
  display: FLEX;

  justify-content: space-between;
  margin-top: 45px;
}
.left {
  h1 {
    font-weight: bold;
  }
}
.c1 {
  border-radius: 15px;
  background-color: #e8e9ea;
  width: 20%;

  padding: 20px;
}

#c h4 {
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
}

//-----------------------------CARD FILTRE--------------------------
.filtreelement {
  margin: 210px auto 90px auto;
  width: min(100%, 1250px);
  h1 {
    font-weight: bold;
    margin-bottom: 45px;
  }
}
.filtre {
  display: flex;
  justify-content: space-between;
  align-items: center;


  .chaqel {
    display: flex;

  
    justify-content: space-between;
    width: 40%;

    button {
      background-color: #e8e9ea;
      border-radius: 8px;
      border: none;
      padding: 9px 18px;
      color: #1a202c;
      font-weight: 800;
      cursor: pointer;
    }
  }
}
button.active{
  background-color: #0B0D12 !important;
  color: white !important;
}



// -----------------------derniere section-------------
.buildelement {
  border-radius: 15px;
  margin: 160px auto 90px auto;
  width: min(100%, 1250px);
  background: url(@/assets/images/nf.png) no-repeat center/cover;

  color: #ffffff;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 90px;
  button {
    border: none;
    cursor: pointer;
    background-color: #ffffff;
    border-radius: 80px;
    padding: 15px;
    width: 120px;
  }
  H3 {
    font-weight: 700;
    font-size: 45px;
    margin: 8px 10px;
  }
  p {
    margin: 15px 10px;
    font-weight: 500;
  }
}
.rrr {


border-radius: 8px;
margin-top: 45px;
  cursor: pointer;
   display: flex;
  .imagenft {
    display: flex;

    img {

    border-radius:20px;
   height: 200px;
   width:235px;
  }

      
  }
 button{
  border: 1px solid #0B0D12;
  padding: 7px 25px;
  background-color: transparent;
  color: #0B0D12;
  margin: 0 auto;
  border-radius:5px;
 width:100% ;
 }
}
.descriptionnft{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 5px 0;

  // gap: 105px;
.prix {

  .logoe {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 25px;
    }
  }
}
}
.card{

 border: 1px solid black;
 padding: 8px;
display: flex;
flex-direction: column;
width:100% ;

border-radius: 15px;
  

}
.containn{
  display: FLEX;
  justify-content: space-between;
}

.cards{
  height: 40px;

}

.active-card {
  border-color: #42b983;
  background-color: #eaffea; }




// ------------------------mediaqueries------------------------------------------------------

@media (max-width:1010px){

  .seethenft{
    display: flex;
    flex-direction: column;
    
    align-items: center;

    .left{
      width: 80%;
    }
    .right{

      
      .br{
       
        justify-content: center;
        width:100% ;
        .machine{
          height: 400px;
          width: 270px;
          left:0px;
        }
        .top{
          height: 400px;
          width: 270px;
        
        }
      }
      .abs{
    display: none;
      }
      width: 80%;
    
      display: flex;
      justify-content: center;
    }
    }

    .filtre{
      
     display: flex;
     justify-content: space-evenly;
     
     .chaqel{
      
      width:80% ;
     }
    }
    .containn{

display: grid;
grid-template-columns: 1fr 1fr ;
justify-items: center;

    
  }
    .rrr{
      width: 250px;
    
    }
    .imagenft {
    width: 500PX;
    img{
width:100%;
    }
  }


  .createandsell{
    display: grid;
grid-template-columns: 1fr 1fr ;
justify-items: center;
gap: 10PX;


.c1{
 width:70% ;
}
  }



.machine{
  height: 400px;
  width: 27px;
  position: absolute;
  
}



.chaqel{
  display: grid;
  grid-template-columns: 1fr 1fr ;
}



  }


@media (max-width:425px){


  .createandsell{
    display: grid;
grid-template-columns: 1fr ;
justify-items: center;
gap: 10PX;


.c1{
 width:70% ;
}
  }


  .containn{

display: grid;
grid-template-columns:  1fr ;
justify-items: center;

    
  }
  .descr{
    display: flex;
    flex-direction:column;  
}

.br{






.top{
  margin-top: 20px;
}
}





}

@media (max-width:619px){
  .filtre{
    display:flex;
    flex-direction:column;
  .chaqel{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap: 5px;
  }
}
}
@media (max-width:709px){
  .buildelement{
    H3{

    font-size: 20PX;
  }
  } 

 
  

}

</style>