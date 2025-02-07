const {Kafka}=require("kafkajs");
const kafka=new Kafka({
brokers:["192.168.0.171:9092"],
clientId:"testKafka"
})
module.exports=kafka;
