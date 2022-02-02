<template>
    
    <div class="console">
        <table>
            <tr>
                <td>
                    <img src="../../assets/profil.jpg" alt="youen's picture" class="profile-picture centered">
                </td>
                <td>
                &gt;prénom&emsp;&emsp;&emsp;&emsp;&emsp; : Youen
                <br/>
                &gt;nom&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; : Froger
                <br>
                &gt;nationalité : Française
                <br/>
                &gt;âge&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; : 25 ans
                
                </td>
            </tr>
        </table>
        </span>
        
                Ingénieur en microélectronique et developpeur.
                <br/>
                <br/>
        <p>
            J'ai été diplomé en 2021 de l'école d'ingénieur des Mines de saint Étienne.
            <br/>
            <h1>Mes atouts</h1>
            <p>Je sais programmer en 6 langages (Java, C/C++, C#, Python, Javascript, PHP), et je suis capable d'en utiliser plus de 5 autres. Je suis très curieux et j'apprends vite. Je suis particulièrement intéressé par les technologies les plus récentes. Je suis indépendant et capable de travailler dans une équipe. Je parle anglais courament. Je suis sensible à l'efficacité énergétique et à la cybersécurité. Je suis rigoureux. Je suis actuellement en train de me former sur le développement OS.
            </p>
            <br class="smallLine">
            <h1>
                Études : 
            </h1>
            <ul>
                <li><img src="../../assets/fr.jpg" alt="drapeau de France"> 2014-2017 : Prépa PTSI-PT (Mathématique, Physique, Sciences industrielles, mécanique)</li>
                <li><img src="../../assets/fr.jpg" alt="drapeau de France"> 2017-2020 : Mines de ST Étienne (école d'ingénieur, spécialité Microélectronique et Informatique) </li>
                <li class="tab"><img src="../../assets/tw.jpg" alt="drapeau de Taiwan">Septembre 2019-Janvier 2020 : Échange accadémique à National Taiwanese University (Communication numérique et microélectronique avancée)</li>
            </ul>
        </p>
        <p>
            <h1>
                Expérience professionnelle : 
            </h1>
            <ul>
                <li>2018 : Stage à Eon Reality : développement d'un framework de test automatisé pour des applications de réalité augmentée</li>
                <li>2018-2020 : Travail à temps partiel en tant que lead developper sur TheBigQuiver, une plateforme de location de planches de surfs en ligne : développement web et management d'une équipe de 3 personnes </li>
                <li>2021 : stage de 6 mois pour l'entreprise Fenotek : développement d'un banc d'automatisation de la configuration de leurs visiophones, scalable et correction d'erreurs. </li>
            </ul>
        </p>
        <p>
            <h1>
                Compétences connexes : 
            </h1>
            Git, Linux, Debian, WSL, OpenGL, HTML/CSS, SQL, Trello, Vue/Angular/React, Express, microcontrôleurs, systèmes embarqués, capteurs, cybersécurité(1160 points sur root-me), concecption microélectronique, suite logicielle cadence, VHDL.
        </p>
        <p>
            <h1>Langues et interêts</h1>
            Français - Anglais (courant, 910 TOEIC) - Japonais (débutant) - Chinois(débutant) - Espagnol (débutant) <br>
            Formation musicale et percussions au conservatoire de St Malo <br>
            Voile, voyage à l'international, fabrication de jeux vidéos et de robots amateurs, white hat hacking.
            Développement OS (x86/x86).
            </p>
            
            <p class="notPrint last">
            <br>
            <br>
            Vous pouvez imprimer ce CV, il ne sera pas noir
            <br>
            <img src="../../assets/en.jpg" alt="drapeau d'Angleterre">You can also check out the english version <router-link :to="{name:'EnCV'}">here !</router-link>
        </p>
    </div>
</template>
<style scoped>
.centered{
display: inline-block;
  margin-left: auto;
  margin-right: auto;
  text-align:center;
}

.profile-picture{
    border-radius: 100px;
    width:200px;
    height:200px;
}
.console{
    color:#cafeba;
    font-size:22px;
    background-color: black;
    font-family: Consolas,monaco,monospace;
    padding-left: 20px;
}
.tab{
    margin-left: 40px;
}
@media print{
.console{
    color:black;
    padding-left:0px ;
    background-color: white;
    font-size: 19px;
}
.notPrint{
    display: none;
}
h1{
    font-size: 31px;
}
}
@media screen and (max-width :360px) {
    .console{ 
        font-size:18px;
    }
}
.smallLine{
    font-size: 10px;
}
@media screen and (max-width :320px) {
    .console{ 
        font-size:16px;
    }
}
.last{
    margin-bottom: 0px;
}
</style>
<script>
export default {
    mounted:function(){
        let title = document.getElementsByTagName("title")[0]
        title.text = "CV français de youen FROGER"
    }
}
</script>