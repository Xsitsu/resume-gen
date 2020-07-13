<template>
    <div class="page-footer">
        <div class="circle-link" v-for="link in links">
            <i-circle :size="25">
                <font-awesome-icon :icon="link.icon"/>
            </i-circle>
            <h6><a class="no-decorate" :href="link.href">{{ link.label }}</a></h6>
        </div>
    </div>
</template>

<script>
import ICircle from '../decorations/ICircle'
export default {
    components:{
        ICircle
    },
    data(){
        return {
            links:[
                {
                    icon:'envelope',
                    label:"ian@isogen.net",
                    href:"mailto:ian@isogen.net"
                },
                {
                    icon:['fab', 'github'],
                    label:'github.com/3jackdaws',
                    href:'https://github.com/3jackdaws'
                },
                {
                    icon:['fab', 'linkedin'],
                    label:'linkedin.com/in/ian-m-murphy',
                    href:'https://www.linkedin.com/in/ian-m-murphy/'
                },
                {
                    icon:'phone',
                    label:'(503) 830-2275',
                    href:'tel:5038302275'
                },
            ]
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
