let responceCode: number[] = [200, 201, 404, 500, 302, 403];

function getFailedCode(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean {
        return code >= 400
    });
}

console.log("All codes", responceCode);
console.log("All failed codes", getFailedCode(responceCode));
