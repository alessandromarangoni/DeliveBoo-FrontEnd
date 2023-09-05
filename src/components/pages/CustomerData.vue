<script>
export default {
    name:'CustomerData'
}
</script>

<template>
    <div class="d-flex align-items-center vh-100 m-auto custom">
        <div class="content m-auto w-50 ">
            <div class="text">
                Inserisci i tuoi dati
            </div>
            <form action="#">
                <div class="field">
                    <input required type="text" class="input">
                            <span class="span"></span>
                            <label class="label">Nome completo</label>
                    </div>
                    
                    <div class="field">
                        <input required type="text" class="input">
                            <span class="span"></span>
                            <label class="label">Indirizzo</label>
                    </div>
                    
                    <div class="field">
                        <input required type="text" class="input">
                            <span class="span"></span>
                            <label class="label">Tel.</label>
                    </div>
                    
                    <div class="field">
                        <input required type="mail" class="input">
                            <span class="span"></span>
                            <label class="label">Email</label>
                    </div>
                    <div class="field">
                        <input required type="text" class="input">
                            <span class="span"></span>
                            <label class="label">Note</label>
                    </div>
                <button class="button">Conferma</button>
            </form>
        </div>
    </div>

</template>

<style scoped lang="scss">
    .content {
        width: 70%;
        padding: 40px 40px;
        background: #f0f5fd;
        border-radius: 10px;
        box-shadow: -3px -3px 7px #ffffffb0,
                    2px 2px 5px rgba(94,104,121,0.288);
    }

.content .text {
  font-size: 33px;
  font-weight: 600;
  margin-bottom: 35px;
  color: #595959;
}

.field {
  height: 50px;
  width: 100%;
  display: flex;
  position: relative;
}

.field{
  margin-top: 20px;
}

.field .input {
  height: 100%;
  width: 100%;
  padding-left: 45px;
  outline: none;
  border: none;
  font-size: 18px;
  background: #f6faff;
  color: #595959;
  border-radius: 25px;
  box-shadow: inset 2px 2px 5px #BABECC,
              inset -5px -5px 10px #ffffffb7;
}

.field .input:focus {
  box-shadow: inset 1px 1px 2px #BABECC,
              inset -1px -1px 2px #ffffff73;
}

.field .span {
  position: absolute;
  color: #595959;
  width: 50px;
  line-height: 55px;
}

.field .label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 45px;
  pointer-events: none;
  color: #666666;
}

.field .input:valid ~ label {
  opacity: 0;
}

.forgot-pass {
  text-align: left;
  margin: 10px 0 10px 5px;
}

.forgot-pass a {
  font-size: 16px;
  color: #666666;
  text-decoration: none;
}

.forgot-pass:hover a {
  text-decoration: underline;
}

.button { 
  margin: 15px 0;
  width: 70%;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  font-weight: 600;
  background-color: #F96A5F;
  border-radius: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  box-shadow: 2px 2px 5px #BABECC,
             -5px -5px 10px #ffffff73;
}

.button:focus {
  color: #ffffff;
  box-shadow: inset 2px 2px 5px #BABECC,
             inset -5px -5px 10px #ffffff73;
}

@media screen and (max-width:577px){
    .content{
        width: 70%!important;
    }
}

@media screen and (min-width:577px) and (max-width:780px){
    .content{
        width: calc(70%)!important;
        margin-left: 20%!important;
    }
}

@media screen and (min-width:1400px){
    .content{
        width: 30%!important;
    }
}

</style>