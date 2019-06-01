<template>
    <div id="newNode">
        <h3>New Node</h3>
        <div class="row">
            <form @submit.prevent="saveNode" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="deviceID" required>
                        <label>Device ID#</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="lat" required>
                        <label>Latitude</label>                        
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="long" required>
                        <label>Longitude</label>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/" class="btn grey">Cancel</router-link>
            </form>
        </div>
    </div>        
</template>
<script>
import firebase from 'firebase'
import 'firebase/firestore'
import db from './firebaseInit'
export default {
    name: 'newNode',
    data(){
        return{
            deviceID : null,
            lat: null,
            long: null            
        }
    },
    methods: {
        saveNode(){
            db.collection('ccms').add({
                deviceID: this.deviceID,
                location: new firebase.firestore.GeoPoint(parseInt(this.lat) , parseInt(this.long)),
                status: true,
                brightness: 0,
                moisture: 0,
                current: 0,
                voltage: 0,
                lastUpdate: 0,
                temp: 0          
            })
            .then(docRef => {
            
            this.$router.push('/')
          })
          .catch(error => {
            
          })
        }
    }
}
</script>
