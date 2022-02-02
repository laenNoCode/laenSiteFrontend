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
        you can find on github : <a href="https://github.com/laenNoCode">"https://github.com/laenNoCode"</a>
    </p>
</div>
</template>
<script>
export default{
    name:"home",
    data() {
        return {
        title:"Welcome to my website",
        text:["hi ! i am youen 'laën' froger. I'm a french 3rd year IT engineering student. This website is meant for me to share my programming deviations. You might not like all of my projects, but i hope you enjoy at least one",
        "i am currently working on a better-looking V2, this version is currently deprecated, but as I have many projects, this version is currently the one i use for my cv"]
    }
    }
}

</script>
<style scoped>
p{
    font-size: 30px;
}
h1{
    font-size:50px;
}
a{
    color:#7fc36a
}
</style>