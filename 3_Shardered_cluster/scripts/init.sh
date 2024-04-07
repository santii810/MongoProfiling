#/bin/sh

echo "\n\n\n INIT SHARDS"
mongosh --host mongo-rs1-n1 < /scripts/init_shards_rs.js








mongosh --host mongo-router-1 < /scripts/init_routers_rs.js







tail -f /dev/null
