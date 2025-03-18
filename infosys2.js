function lambdaHandler(event, context) {
    console.log("Event: ", event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from Lambda!",
            input: event,
        }),
    };
}