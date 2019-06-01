<template>
    <div id="view-node">
        <div class="container" id="view-node">
            <div class="row" id="view-node">
                <div class="col s3" id="view-node"><h3><p class="z-depth-3">Current : {{current}} <br/> Voltage : {{voltage}} </p></h3></div>
                <div class="col s6" id="view-node">
                    <div class="row">
                        <div class="col s12" id="view-node"><h1><p class="z-depth-3">Insert map based on {{lat}} and {{long}}</p></h1></div>
                    </div>
                    <div class="row" id="view-node">
                        <div class="col s4" id="view-node"><p class="z-depth-3">Moisture: {{moisture}} <br/> Temperature : {{temp}}</p></div>
                        <div class="col s8" id="view-node"><p class="z-depth-3">Pending Complaints</p></div>
                    </div>
                </div>
                <div class="col s3" id="view-node"><p class="z-depth-3">Weather conditions of {{lat}} and {{long}}</p></div>
            </div>

        </div> 
    </div>
</template>
<script>

import db from './firebaseInit'
export default {
    name: 'viewNode',
    data(){
        return{
            node_id: null,
            status: null,
            brightness: null,
            moisture: null,
            current: null,
            voltage: null,
            lastUpdate: null,
            lat: null,
            long: null,
            temp: null
        }
    },
 
    beforeRouteEnter(to, from, next){
        db.collection('ccms').where('deviceID', '==', to.params.node_id).get().then((querySnapshot =>{
            querySnapshot.forEach((doc)=>{
                next(vm =>{
                    vm.node_id = doc.data().deviceID,
                    vm.status = doc.data().status,
                    vm.brightness = doc.data().brightness,
                    vm.moisture = doc.data().moisture,
                    vm.current = doc.data().current,
                    vm.voltage = doc.data().voltage,
                    vm.lastUpdate = doc.data().lastUpdate.seconds,
                    vm.lat = doc.data().location._lat,
                    vm.long = doc.data().location._long,
                    vm.temp = doc.data().temp
                })
            })
        })
    )},
    watch:{
        '$route': 'fetchData'
    },
    methods: {
        fetchData(){
            db.collection('ccms').where('deviceID', '==',this.$route.params.node_id).get().then((querySnapshot=>{
                querySnapshot.forEach((doc=>{
                    this.node_id = doc.data().deviceID,
                    this.status = doc.data().status,
                    this.brightness = doc.data().brightness,
                    this.moisture = doc.data().moisture,
                    this.current = doc.data().current,
                    this.voltage = doc.data().voltage,
                    this.lastUpdate = doc.data().lastUpdate.seconds,
                    this.lat = doc.data().location._lat,
                    this.long = doc.data().location._long,
                    this.temp = doc.data().temp   
                }))
            })
        )}
    }
    

}


</script>