<template>

<div class="fullsize">
<iframe id="frame" :src="'/frame/' + $route.params.id"></iframe>

</div>
</template>

<script>

    export default {
        name:"project",
    }   
</script>

<style>
.horizontal {
    float: left;
}

.vertical {
    float: left;
}
iframe{
    width:100%;
    height:100%;
}
.fullsize{
    height:1000px;
}
</style>
