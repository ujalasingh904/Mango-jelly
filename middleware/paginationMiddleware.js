
export default (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
  
    req.page = page;
    req.limit = limit;
    req.skip = skip;
  
    next();
  };