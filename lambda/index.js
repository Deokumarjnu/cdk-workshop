exports.handler = async function (event) {
  console.log('request:', JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { 'Content-type': 'text/plan' },
    body: `Good night!, CDK! You've hit ${event.path}`,
  };
};
