const kafka=require("./client"); 
const init=async()=>{
const producer=kafka.Producer();
console.log("Connecting to Producer...");
await producer.connect();
console.log("Producer Connected!");
await producer.send({
topic:"testTopic",
messages:[
{
partition:0,
key:"Location Updates",
value:JSON.stringify({name:"Raza",loc:"New Delhi"})
},
],
});
console.log("Sent Message Successfully\nNow Disconnecting the producer...")
await producer.disconnect();
console.log("Producer Disconnected!");
}
//call the init function to create the producer and send message to Topic testTopic:
init();
