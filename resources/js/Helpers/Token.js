class Token {
    isValid(token) {
        const payload = this.payload(token);
        // console.log(payload);
        if (payload) {
            return payload.iss == "http://localhost:8000/api/auth/login" ||
                "http://localhost:8000/api/auth/singup"
                ? true
                : false;
        }
    }

    payload(token) {
        // const payload1 = token.split(".")[0];  Header

        // Payload
        const payload = token.split(".")[1];
        return this.decode(payload);
        // const payload2 = token.split(".")[2]; Signature
        // console.log(payload);
        // console.log(JSON.parse(atob(payload)));
        // console.log(token);
        // console.log(payload1);
        // console.log(payload2);
    }
    decode(payload) {
        // console.log(JSON.parse(atob(payload)));
        return JSON.parse(atob(payload));
    }
}

export default Token = new Token();
