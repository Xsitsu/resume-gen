<template>

    <div id="resume">

        <page>
            <resume-header :applicant="applicant" :website="website" :role="role"></resume-header>
            <div class="page-content">
                <column :width="columnWidth">
                    <basic-section v-if="profile" label="Profile" :text="profile"></basic-section>
                    <!-- <basic-section v-if="data && !data.profile" label="Objective" :text="objective"></basic-section> -->
                    <skills :skills="skills"/>
                </column>
                <column :width="100 - columnWidth">
                    <experience :data="experience.slice(0,4)" />
                    <education :data="education" />
                </column>
            </div>
            <resume-footer id="p1-footer">

            </resume-footer>
        </page>
        <!-- <page :loaded="!!loaded">
            <div class="page-content">
                <column :width="columnWidth">
                    <skills title="More Skills" :skills="overflowSkills" />
                </column>
                <column :width="100 - columnWidth">
                    <experience title="More Experience" :data="experience.slice(4)" />
                </column>
            </div>
        </page> -->
    </div>
</template>

<script>
import Page from './Page'
import ICircle from './decorations/ICircle'
import ResumeHeader from './ResumeHeader'


import Column from './layout/Column'
import SectionHeader from './layout/SectionHeader'
import ResumeFooter from './layout/ResumeFooter'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import BasicSection from './sections/BasicSection'


export default {
    components:{
        Page,
        ICircle,
        ResumeHeader,
        BasicSection,
        Column,
        SectionHeader,
        Skills,
        Experience,
        Education,
        ResumeFooter,

    },
    props:{
        applicant:String,
        website:String,
        role:String,
        profile:String,
        skills:Array,
        education:Array,
        experience:{
            default:()=>[],
            type:Array
        },
        name:String,
        color:String
    },
    data(){
        return {
            columnWidth:29,
        }
    },
    computed:{
        initials(){
            let name = this.data.applicant.split(" ");
            return name[0][0] + name[1][0];
        },
        loaded(){
            return true;
        }
    },

    mounted(){
        document.addEventListener("paste", function(event){
            let text = event.clipboardData.getData('text');
            if (!!text){
                console.log(text);
            }
        })


    },
    watch:{
        name:{
            handler:function(name){
                document.title = name || "Resume";
            },
            immediate:true
        }

    }
}
</script>

<style >

    :root {
        --headings-font: 'Poppins', sans-serif;
        --primary-font: 'Titillium Web', serif;
    }

    .page-content{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

    h1,h2,h3,h4,h5,h6{
        text-transform: uppercase;
        font-family: var(--headings-font);
        margin-top:0;
        margin-bottom: 5px;
    }

    h1{
        font-size: 3em;
        line-height: 0.9em;
    }

    h3{
        font-size:1.25em;
    }

    h5{
        font-size: 0.9em;
        margin-top: 10px;
        margin-bottom: 0px;
    }

    p,span,.text{
        font-family: var(--primary-font);
        /*font-weight: 300;*/
        font-size: 0.9em;
        line-height: 1.3em;
    }

    p{
        margin-top: 0;
        margin-bottom: 0;
        text-align: justify;
        text-justify: inter-cluster;
    }

    .section{
        margin-bottom: 15px;
    }

    body{
        margin: 0 !important;
    }

    a.no-decorate{
        text-decoration: none;
        color: black;
    }

    a.no-decorate:hover{
        text-decoration: underline;
        color: black;
    }

    @media print{
        body{
            padding: 0px;
        }
    }
</style>
