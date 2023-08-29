<script>
export default {
        name: "AppSearchBar",
        data() {
            return {

            }
        }
    }
</script>

<template>
    <div class="col d-flex justify-content-center">
        <div class="searchBar d-flex justify-content-between">
            <input type="text" placeholder="Cerca per tipologia">
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    </div>
</template>

<style>
    .searchBar {
        width: 50%;
        border: 1px solid rgba(0, 0, 0, 0.452);
        padding: 0.5rem 1rem;
        border-radius: 30px;
    }
    input {
        width: 100%;
    }
    input:focus {
        outline: none;
    }
</style>