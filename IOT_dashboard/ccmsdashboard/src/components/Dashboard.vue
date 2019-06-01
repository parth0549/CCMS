<template>
    <div id="dashboard" class="container">
      <ul class="collection with-header">
      <li class="collection-header"><h4>Nodes</h4></li>
      <li v-for="value in values" v-bind:key="value.id" class="collection-item">

        
        <div v-if ="value.status === true" class="btn-floating pulse green" >Active</div>
        <div v-else class="btn-floating pulse red">*Error*</div> 
        
        {{value.id}} 
         <router-link class="secondary-content" v-bind:to="{ name: 'viewNode', params: {node_id: value.id }}"><i class="fa fa-eye"></i></router-link>
      </li>
      </ul>
        <div id="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large green">
            <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'dashboard',
    data(){
        return{
            values: []
        }
    },
    created(){
        db.collection('ccms').get().then(querySnapshot =>{
            querySnapshot.forEach(doc=>{
                const data = {
                    'id': doc.data().deviceID,
                    'status': doc.data().status,
                    'brightness': doc.data().brightness,
                    'moisture': doc.data().moisture,
                    'current': doc.data().current,
                    'voltage': doc.data().voltage,
                    'temp':doc.data().temp,
                    'lastUpdate': doc.data().lastUpdate.seconds,
                    'lat': doc.data().location._lat,
                    'long': doc.data().location._long
                }
            this.values.push(data)
            })
        })
    }
}
</script>
