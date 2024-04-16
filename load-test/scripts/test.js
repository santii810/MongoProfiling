import xk6_mongo from "k6/x/mongo";

const client = xk6_mongo.newClient("mongodb://mongo1:27017/");
export const options = {
    scenarios: {
        pencil: {
            executor: "constant-vus",
            exec: "insertPencil",
            vus: 50,
            duration: "15s",
        },
        pen: {
            executor: "per-vu-iterations",
            exec: "insertPen",
            vus: 5000,
            iterations: 100,
        },
        //     rubber: {
        //         executor: "ramping-arrival-rate",
        //         exec: "insertRubber",
        //         startTime: "30s",
        //         timeUnit: "1s",
        //         stages: [
        //             { target: 200, duration: "5s" },
        //             { target: 200, duration: "20s" },
        //             { target: 0, duration: "5s" },
        //         ],
        //         preAllocatedVUs: 50,
        //         maxVUs: 100,
        //         tags: { test_type: "api" },
        //     },
        //     paper: {
        //         executor: "constant-arrival-rate",
        //         rate: 90,
        //         timeUnit: "2s",
        //         duration: "20s",
        //         preAllocatedVUs: 10,
        //         tags: { test_type: "api" },
        //         exec: "insertPaper",
        //     },
    },
};

export default () => {
    console.log("DEFAULT");
};

export function insertPen() {
    let doc = {
        item: `pen`,
        brand: "bic",
        price: 17.05,
    };
    client.insertOne("testdb", "testcollection", doc);
}
export function insertPencil() {
    let doc = {
        item: `pencil`,
        brand: "bic",
        price: 17.05,
    };
    client.insertOne("testdb", "testcollection", doc);
}
export function insertRubber() {
    let doc = {
        item: `rubber`,
        brand: "bic",
        price: 17.05,
    };
    client.insertOne("testdb", "testcollection", doc);
}
export function insertClip() {
    let doc = {
        item: `clip`,
        brand: "bic",
        price: 1.05,
    };
    client.insertOne("testdb", "testcollection", doc);
}
export function insertPaper() {
    let doc = {
        item: `paper`,
        brand: "bic",
        price: 1.05,
    };
    client.insertOne("testdb", "testcollection", doc);
}
