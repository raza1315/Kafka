const {Kafka}= require('kafkajs');
const kafka=new Kafka({
brokers:["http://192.168.0.171:9092"],
clientId:'kafkaTest',
})

const init=async()=>{
const admin=kafka.admin();
console.log("Connecting to admin...");
admin.connect();
console.log("Admin successfully connected!");
}
