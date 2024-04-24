<template>
    <div class="page-footer">
        <div class="circle-link">
            <i-circle :size="25">
                <font-awesome-icon :icon="['fas', 'envelope']" />
            </i-circle>
            <h6><a class="no-decorate" :href="email_link">{{ email }}</a></h6>
        </div>

        <div class="circle-link">
            <i-circle :size="25">
                <font-awesome-icon :icon="['fab', 'github']" />
            </i-circle>
            <h6><a class="no-decorate" :href="github_link">{{ github_text }}</a></h6>
        </div>

        <div class="circle-link">
            <i-circle :size="25">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
            </i-circle>
            <h6><a class="no-decorate" :href="linkedin_link">{{ linkedin_text }}</a></h6>
        </div>

        <div class="circle-link">
            <i-circle :size="25">
                <font-awesome-icon :icon="['fas', 'phone']" />
            </i-circle>
            <h6><a class="no-decorate" :href="phone_link">{{ phone }}</a></h6>
        </div>

    </div>
</template>

<script>
import ICircle from '../decorations/ICircle'
export default {
    props: {
        email:String,
        github:String,
        linkedin:String,
        phone:String
    },
    components:{
        ICircle
    },
    computed:{
        email_link(){
            return "mailto:" + this.email
        },
        github_text(){
            return this.github.replace("https://", "").replace("www.", "")
        },
        github_link(){
            return "https://www." + this.github_text
        },
        linkedin_text(){
            return this.linkedin.replace("https://", "").replace("www.", "")
        },
        linkedin_link(){
            return "https://www." + this.linkedin_text
        },
        phone_link(){
            return "tel:" + this.phone.replace("(", "").replace(")", "").replace("-", "").replace(/\s+/g, "")
        }
    }
}
</script>


<style scoped>

    .circle-link{
        text-align: center;
        padding: 20px;
    }

    .page-footer{
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;

        position: absolute;
        bottom:0;
        left:0;
        width: 100%;
        background-color: white;
    }
</style>
