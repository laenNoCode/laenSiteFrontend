<template>
<div id="name">
</div>

</template>

<script>

    export default {
        name:"julia",
        mounted() {
            require('p5');
            require("./sketch");

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