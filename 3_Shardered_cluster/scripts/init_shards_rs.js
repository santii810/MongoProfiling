rs.initiate({
    _id: "mongo-rs1",
    members: [
        { _id: 0, host: "mongo-rs1-n1:27017" },
        { _id: 1, host: "mongo-rs1-n2:27017" },
        { _id: 2, host: "mongo-rs1-n3:27017" },
    ],
});
rs.status();
