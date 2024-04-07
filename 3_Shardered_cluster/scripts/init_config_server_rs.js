rs.initiate({
    _id: "mongo-rs1-conf",
    configsvr: true,
    members: [
        { _id: 0, host: "mongo-cfg-1:27017" },
        { _id: 1, host: "mongo-cfg-2:27017" },
        { _id: 2, host: "mongo-cfg-3:27017" },
    ],
});
