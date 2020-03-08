<template>
    <div>
        <ul>
            <li v-for="u in users" :key="u.id">
                {{u.name}}
            </li>

        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            users:[
                {id:0,name:'aaaa',age:10},
                {id:1,name:'bbbb',age:20},
                {id:2,name:'cccc',age:30},
                {id:3,name:'dddd',age:40},
            ]
        }
    }
}
</script>
<style scoped>

</style>