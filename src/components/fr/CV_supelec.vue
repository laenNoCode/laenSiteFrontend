<template>
    <div class="console">
        <table>
            <tr>
                <td>
                    <img src="../../assets/profil.jpg" alt="youen's picture" class="profile-picture centered">
                </td>
                <td>
                &gt;first name : Youen
                <br/>
                &gt;last&emsp; name : Froger
                <br>
                &gt;nationality : French
                <br/>
                &gt;age : 24 years
                
                </td>
            </tr>
        </table>
        </span>
        
                Microelectronics engineer
                <br/>
                <br/>
                Interested in : paid internship
                <br/>
                <br/>
        <p>
            I'm my in senior year, master's degree in computer science and microelectronics at Mines de St Etienne, engineering school, France.
            <br/>
            <h1>My assets:</h1>
            <p>I'm fluent in 6 programming languages (Java, C/C++, C#, Python, Javascript, PHP), and capable in half a dozen more. I'm a fast learner and very curious. I'm especially interested in learning the latest technologies. I am independant but capable of working well in a team also.
            </p>
            <br>
            <h1>
                studies : 
            </h1>
            <ul>
                <li><img src="../../assets/fr.jpg" alt="french flag">2014-2017 : Prepa PTSI-PT (Mathematics, Physics, Mecanics and engineering)</li>
                <li><img src="../../assets/fr.jpg" alt="french flag">2017-2020 : Mines de ST Etienne (Engineering school : Computer science and Microelectronics) </li>
                <li class="tab"><img src="../../assets/tw.jpg" alt="taiwanese flag">September 2019-January 2020 : Exchange studies at National Taiwanese University (Digital communications and advanced Microelectronics)</li>
            </ul>
        </p>
        <p>
            <h1>
                Professional experience : 
            </h1>
            <ul>
                <li>2018 : Internship at Eon Reality : developing an automated unit test framework for virtual reality applications</li>
                <li>2018-2020 : Part time work on TheBigQuiver, surfboard online rental platform : web developpement and 3-person team managment </li>
                
            </ul>
        </p>
        <p>
            <h1>
                Other skills : 
            </h1>
            Git, Linux, Debian, WSL, OpenGL, HTML/CSS, SQL, Trello, Vue/Angular/React, Express, microcontrolers, embeded systems, sensors.
        </p>
        <p>
            <h1>Languages and interests</h1>
            French - English (fluent, 910 TOEIC) - Japanese - Chinese - Spanish <br>
            Former student percussion and transcription, Conservatoire de St Malo <br>
            Sailing, international travel, making video games and robots as a hobby
        </p>
        <p class="notPrint last">
            <br>
            <br>
            You can print this CV, if you use the browser option it will not be black
            <br>
            <img src="../../assets/fr.jpg" alt="french flag">Vous pouvez aussi lire la version française <router-link :to="{name:'FrCV'}">ici !</router-link>
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
    font-size:23px;
    background-color: black;
    font-family: Consolas,monaco,monospace;
    padding-left: 20px;
    margin-bottom: 0px;
}
.last{
    margin-bottom: 0px;
}
.tab{
    margin-left: 40px;
}
@media print{
.console{
    color:black;
    padding-left:0px ;
}
.notPrint{
    display: none;
}
}
@media screen and (max-width :360px) {
    .console{ 
        font-size:18px;
    }
}
@media screen and (max-width :320px) {
    .console{ 
        font-size:16px;
    }
}
</style>
export default {
    mounted:function(){
        let title = document.getElementsByTagName("title")[0]
        title.text = "Youen FROGER's english CV"
    }
}