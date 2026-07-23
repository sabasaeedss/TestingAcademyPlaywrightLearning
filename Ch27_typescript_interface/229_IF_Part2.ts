interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number;
}

let responses: APIResponse = {
    body: ""
}