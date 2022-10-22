module.exports = {
    ok: {status: 200, info: 'Request processed'},
  
    BadRequest: {status: 400, info: 'Bad Request'},
    Unauthorized: {status: 401, info: 'Unauthorized'},
  
    Forbidden: {status: 403, info: 'Forbidden'},
    NotFound: {status: 404, info: 'Not Found'},
    MethodNotAllowed: {status: 405, info: 'Method Not Allowed'},
  
  
    RequestTimeout: {status: 408, info: 'Request Timeout'},
    Conflict: {status: 409, info: 'Conflict'},
    MisdirectedRequest: {status: 421, info: 'Misdirected Request'},
  };