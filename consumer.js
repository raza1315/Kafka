const kafka=require("./client");
const init = async()=>{
const consumer=kafka.consumer({groupId:"user-1"});
console.log("Connecting consumer...");
await consumer.connect();
console.log("Consumer connected!\nNow subscribing to some topic...");
await consumer.subscribe({
topics:["testTopic"],
fromBeginning:true,
});
console.log("Subscriber to testTopic and now running messages:");
await consumer.run({
eachMessage:async({topic,partition,message,heartbeat,pause})=>{
console.log({key:message.key.toString(),value:message.value.toString(),valueInJson:JSON.parse(message.value.toString())});
},
})
}
//call the init function that creates the consumer and connects it , subscribes to testTopic and runs the messages:
init();
