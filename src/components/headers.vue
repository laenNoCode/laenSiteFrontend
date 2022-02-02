<template>
<nav class="navbar, navbar-dark bg-dark">
    <template v-for="link of links">
        <router-link :to="{name: link.link}">
            <button type="button" class="btn btn-secondary">
                {{link.text}}
            </button>
        </router-link>
    </template>
</nav>
</div>
</template>

<script>
export default{
    name:"headers",
    data(){
        return{
            links:[{
                text:"home",
                link:"home"
            },{
                text:"projects",
                link:"projects"
            },{
                text:"CV",
                link:"EnCV"
            }]
        }
    }
}
</script>
<style>
@media print{
    nav{
        display:none;
    }
}
</style>