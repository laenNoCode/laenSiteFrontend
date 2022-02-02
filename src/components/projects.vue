<template>
  
<div>   
    <div class="project card" v-for="project of projects">
        <div class="card-body">
            <h5 class="card-title">{{project.title}}</h5>
            <p class="card-text">
            <template v-for="descriptionLine of project.description">
                {{descriptionLine}}
                <br/>
            </template>
            </p>
            <router-link :to="{name:project.link, params:{id:project.id}}" class="btn btn-primary" v-if="project.hosted">Check it out</router-link>
            <a :href="project.link" class="btn btn-primary" v-else>Check it out</a>
        </div>
        <div class="card-footer text-muted">
            starring : 
            <template v-for="collaborator of project.collaborators">
                {{collaborator}}, 
            </template>
        </div>
    </div>
</div>
</template>
<script>
console.log("projects loaded")
    export default 
    {
        name: "projects",
        data()
        {
            return{
            projects: [{
                title: "julia set",
                link: "project",
                id:"julia",
                description:["this is a litle project i have done", 
                "it is a P5-based julia set generator"],
                collaborators:["Lucas Robidou"],
                hosted:true
            },{
                title: "Fractals",
                link: "project",
                id:"fractals",
                description:["this is a litle project i have done", 
                "it is a P5-based chaos game that generates fractals"],
                collaborators:["Mathieu Caroff", "Lucas Robidou"],
                hosted:true
            },{
                title: "Nanachi",
                link: "https://nanachi.mine.bz",
                description:["This is a project that i made with a team", 
                "it was made in the scope of the french \"nuit de l'info\" event "],
                collaborators:["Blanche Jay", "Antoine Vendrely", "Franck Seblon", "Matthieu Dufour","Mathieu Caroff", "Lucas Robidou"],
                hosted:false
            },
            {
                title: "Github",
                link:"https://github.com/laenNoCode",
                description:["this is a link to my github",
                "you can find most of my project's source code here"],
                collaborators:[],
                hosted:false
            }]
            }
        }
    }
    /**
    
            <div class="project" vfor="project of projects">
            <h1> 
            {{project.title}} 
            </h1>
            <p>
                {{project.description}}
            </p>
        </div>
             */
</script>

<style scoped>
</style>
