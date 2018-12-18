<template>
<div>
    <h1>
        {{title}}
    </h1>
    <p>
        <template v-for="txt of text">
            {{txt}}
            <br/>
        </template>
    </p>
</div>
</template>
<script>
export default{
    name:"home",
    data() {
        return {
        title:"Welcome to my website",
        text:["hi ! my name is laën. I'm a french 2nd year IT engineering student. This website is meant for me to share my programming deviations. You might not like all of my projects, but i hope you enjoy at least one"]
    }
    }
}

</script>
<style>
    
</style>