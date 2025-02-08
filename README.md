1. run rhe zookeeper using docker:
   docker run -p 2181:2181 zookeeper
2. run the kafka server using docker:
   docker run -p 9092:9092 \
   -e KAFKA_ZOOKEEPER_CONNECT:<Private Ip>:2181 \
   -e KAFKA_ADVERTISED_LISTEERS=PLAINTEXT://<Private Ip>:9092 \
   confluentinc/cp-kafka
3. change the Ip in the client.js file in the broker.
4. Run node index.js
5. run the consumer and the producer.
