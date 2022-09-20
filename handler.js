"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your   function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.hello2 = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "hello world2",
            },
            null,
            2
        ),
    };
};

module.exports.world = async (event) => {
    return {
        statusCode: 201,
        body: JSON.stringify(
            {
                message: "hello world",
                input: event,
            },
            null,
            2
        ),
    };
};