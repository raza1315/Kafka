const kafka=require("./client");
const init=async()=>{
const admin=kafka.admin();
console.log("Connecting to admin...");
admin.connect();
console.log("Admin successfully connected! \nCreating topics...");
await admin.createTopics({
topics:[{topic:"testTopic",numPartitions:2}]
});
console.log("Topic created (topic: testTopic)\nDisconnecting Admin...");
await admin.disconnect();
console.log("Admin disconnected!");
}

//call the initialisation function that creates kafka admin and then the admin creates a topic testTopic
init();
