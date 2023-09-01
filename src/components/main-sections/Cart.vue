<script>
    export default {
        name: "Cart",
        data() {
            return {

            }
        }
    }
</script>

<template>
    <div class="card-custom-menu">
        <div>
            <h3 class="pt-3 pb-4">Carrello</h3>
        </div>
        <!-- div per v-for -->
        <div class="w-100 text-start position-relative  d-flex justify-content-between">
            <div class="ps-2 ps-xl-5">
                <h6 class="pt-2 ">Nome Prodotto</h6>
                <span class="text-black-50">12.00 $</span>
            </div>
            <div class="d-flex align-items-center pe-3 ps-2 ps-xl-5">
                <div class="custom-imput minus"><i class="fa-solid fa-minus text-black-50 custom-icon"></i></div>
                <div class="custom-imput">N</div>
                <div class="custom-imput plus"><i class="fa-solid fa-plus text-black-50 custom-icon"></i></div>
            </div>
            <div class="position-fixed totale-checkout w-100">
                <div class="d-flex align-items-center justify-content-around">
                    <span class="ps-2 pt-3 ps-xl-5 fs-5 fw-semibold">totale: 235$</span>
                    <button class="cssbuttons-io-button mt-3"> Checkout
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                    </div>
                </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-custom-menu {
    min-width: 250px;
    min-height: 454px;
    background: rgb(255, 255, 255);
    border-radius:40px 5px 40px 5px;
}


.totale-checkout{
    bottom:0;
    height: 70px;
    border-top: 1px solid rgba(0, 0, 0, 0.24);
}
    
.custom-imput{
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
.custom-icon{
    transform: translate(5% , 5%);
}

.plus{
    border: 3px solid rgba(78, 223, 78, 0.842);
}

.minus{
    border: 3px solid rgba(223, 107, 78, 0.863);
}

.cssbuttons-io-button {
  background: #F96A5F;
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: .5rem;
  font-size: 14px;
  font-weight: 500;
  border-radius: 0.9em;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 1.6em -0.6em #714da6;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  padding-right: 2.8em;
}

.cssbuttons-io-button .icon {
  background: white;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em 0.6em 0.2em #F96A5F;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: #F96A5F;
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}
</style>