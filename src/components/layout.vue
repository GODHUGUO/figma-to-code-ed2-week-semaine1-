<template >
  <div class="containerlayout">
    <header>
      <div class="entete">

        <div class="logo">
          <img src="@/assets/images/Group.png" alt="" srcset="" />
        </div>

<div class="ip"     v-show="!mobile" >
        <div class="menuelement">
          <ul    class="navigation">
            <li><a href="#">Home</a></li>
            <li><a href="#">Top sales</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Our blog</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </div>
        <div      class="bout">
          <button class="signup">Sign up</button>
          <div class="baton"></div>
          <button class="connect">Connect wallet</button>
        </div>
   </div>

    <button  v-show="mobile"       class="icone" v-if="isMenuOpen===false" @click.prevent="openMenu">     

        <img src="@/assets/images/Frame 136.png" alt="">

      </button>     


           <button  class="iconel" v-if="isMenuOpen===true" @click.prevent="closeMenu" >       
       
     
          <img src="@/assets/images/Frame 135.png" alt="">
        </button>   



          
       
      </div>
    </header>
  
    <transition name="mobile-nav">
         
      <div    v-if="isMenuOpen===true"  class="dropdom">
      
         <div class="menuelemntmobile"  >
        <ul   class="navigati"   >
            <li><a href="#">Home</a></li>
            <li><a href="#">Top sales</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Our blog</a></li>
            <li><a href="#">About us</a></li>
          </ul>
        </div> 

        <div    class="boutmobile">
          <button class="signup">Sign up</button>
          <div class="baton"></div>
          <button class="connect">Connect wallet</button>
        </div>




      </div>


    </transition>

    <router-view></router-view>

    <footer>

    <div class="pied">
         <div class="logo">
          <img src="@/assets/images/Group.png" alt="" srcset="" />
        </div> 


         <div class="descr">


            <div class="texte">Create Explore & Collect Digital  NFTs</div>
            <div class="privacy">
                <ul>
                    <li>Privacy</li>
                    <li>Terms & Conditions</li>
                    <li>About us</li>
                </ul>
            </div>
         </div>






    </div>    








    </footer>
  </div>
</template>

<script>
 import {  ref, onMounted, onUnmounted } from "vue";


export default {
  name: "LaYout",


setup(){
  const mobile = ref(false);

  const mobilenavigation = ref(false);
   
   const windowWidth = ref(null);
   const isMenuOpen = ref(false);
   const  openMenu=()=>{
    isMenuOpen.value=true;
   };

   const closeMenu=()=>{
    isMenuOpen.value=false;
   };

   


   onMounted(() => {
     window.addEventListener("resize", checkscreen);
     });
    
   onUnmounted(() => {
       window.removeEventListener("resize", checkscreen);


    });





  function toggleMobileNav() {
      mobilenavigation.value = !mobilenavigation.value;
    }

   function checkscreen() {
      windowWidth.value = window.innerWidth;
    
       if (windowWidth.value <= 956) {
         console.log('ok');
          mobile.value = true;
          return;
       }
       mobile.value = false;
        mobilenavigation.value = false;
    
    }










  return{
  mobile,
  mobilenavigation,
openMenu,
isMenuOpen,
closeMenu,
    toggleMobileNav,
   checkscreen,
}

}









};
</script>

<style lang="scss" scoped>
* {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: regular;
}


.entete{
  button{
    border:none;
    background-color: transparent;
  }
}
header{
  position: fixed;
  top:0;
  width: 100%;
  z-index: 1000;
  background-color: #ffffff;

 
}
.containerlayout {
  font-family: "raleway";


  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: regular;
}
.ip{

width:100% ;
display: flex;
  justify-content: space-between;

}
.logo{
  margin-right: 70px;
}
.entete {
  display: flex;
   padding:  18px 14px;

    margin: 0  auto ;
    width: min(100%, 1250px);


  justify-content: space-between;
  .logo {
width:20% ;
    img {
      width: 30px;
    }
  }
}


.menuelement {
margin-right: 200px;
  width: 45%;
  align-items: center;
  font-family: "Raleway", sans-serif;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    li {
      list-style-type: none;

      a {
        color: #000000;
        text-decoration: none;
        font-weight: 700;
 
      }
    }
  }
}







.bout {
  font-weight: bold;
  color: #000000;


  display: flex;
  align-items: center;
  width: 21%;

  justify-content: space-around;
  .signup{
    font-weight: 700;
    font-style: regular;
    font-size: 15PX;
  }
  button {
    font-weight: 500;

    border: none;
    background-color: transparent;
    

  }
  .baton {
    height: 70%;
    border: 1px SOLID black;
  }

  .connect {
    background-color: #000000;
    padding: 8px;
    border-radius: 15px;
    color: #ffffff;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
  }
}


// -------------------footer--------------------------

.pied{
    padding: 10px;
    

 margin: 0 auto;
margin-top: 100px;
width: min(100%, 1250px);


.descr{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #000000;
    padding-top: 20px;
ul{
    display: flex;
    gap: 15px;
    li{
        list-style-type: none;
        
    }
}
    .texte{
        font-size: 20PX;
    }
}
}



// --------------------------menumobile------------------------------
.dropdom{
  background-color:#ffffff;
padding-top: 30px;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  position:fixed;
  right: 0;
   top: 0;
  height: 100%;
   z-index: 10;
}

.boutmobile{
  font-weight: bold;
  color: #000000;
  display: flex;
  align-items: center;
  width: 100%;

  justify-content: center;
gap: 20px;
  .baton{
    height: 70%;
    border: 1px SOLID black;
  }

  .signup{
    font-weight: 500;
    font-style: regular;
    font-size: 15PX;
  }

  .connect{
    background-color: #000000;
    padding: 8px;
    border-radius: 15px;
    color: #ffffff;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
  }
  button {
    font-weight: 200;
   cursor: pointer;
    border: none;
    background-color: transparent;
    

  }





}
.navigati{
display: flex;
flex-direction:column;
 margin-top: 60PX;

li{
  list-style-type: none;
  margin-bottom: 25PX;
  margin-left: 35PX;
  a{
    text-decoration: none;

    color:#0B0D12;
    font-weight: 700;
  }
}
}
.icone{

  z-index: 20;
  // align-self: flex-end;
 margin-left: 91%;
 position: absolute;
}
.iconel{
  margin-left: 40%;
}

// -------------------@media------------------------------

@media (max-width:1010px){
  .descr{
    flex-direction:column;
    
  }
}
@media (max-width:1126px){
  .entete{
 

    .logo{
      width:15% ;
    }
  }
  .ip{

    justify-content: space-evenly;
    .menuelement{
    
      width:60% ;
    }
    .bout{
      justify-content: space-between;

  width:25% ;
    }
  }
}
</style>