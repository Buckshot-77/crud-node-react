exports.sendError = (statusCode, responseObject, error) => {
  responseObject.status(statusCode).json({
    status: 'fail',
    message: `Error: ${error.message}`,
  });
};

exports.sendPositiveResponse = (statusCode, responseObject, responseData) => {
  const jsonResponseData = responseData ? responseData : null;
  responseObject.status(statusCode).json({
    status: 'success',
    data: jsonResponseData,
  });
};
