sh.addShard(
    "shard-1-replica-set/shard-1-node-a:27017",
    "shard-1-replica-set/shard-1-node-b:27017",
    "shard-1-replica-set/shard-1-node-c:27017"
);

sh.addShard(
    "shard-2-replica-set/shard-2-node-a:27017",
    "shard-2-replica-set/shard-2-node-b:27017",
    "shard-2-replica-set/shard-2-node-c:27017"
);

sh.addShard(
    "shard-3-replica-set/shard-3-node-a:27017",
    "shard-3-replica-set/shard-3-node-b:27017",
    "shard-3-replica-set/shard-3-node-c:27017"
);

sh.status();
