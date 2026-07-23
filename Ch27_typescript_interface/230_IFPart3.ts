interface APIResponse {
    readonly statuscode: number;
    body: string;
    headers?: object;
    responseTime?: number;
}

let response: APIResponse = {
    statuscode: 200,
    body: ""
}

//response.statuscode = 333; //camt modify readypnly field
response.body = "changed";