// higher order function

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) =>
            next(err)
        );
    };
};

//Normaly, when using async/await, you need to wrap your code  in try..Catch blocks to detect/catch errors properly. however, aysncHnadler simplifies this process by automatically catching errors and passing them to the Express error handling middlewares

export { asyncHandler };
