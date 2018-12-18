<template>
<div id="name">
</div>

</template>

<script>

    export default {
        name:"fractals",
        mounted() {
            require('p5');
            require("./sketch.js");
            require("./formCreator.js");

        },
    }   
</script>


<style>
.horizontal {
    float: left;
}

.vertical {
    float: left;
}
</style>
