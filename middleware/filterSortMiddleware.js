
export default (req, res, next) => {
    const filterOptions = {};
    const sortOptions = {};
  

    if (req.query.authorName) filterOptions.authorName = new RegExp(req.query.authorName, 'i');
    if (req.query.yearOfPublication) filterOptions.yearOfPublication = req.query.yearOfPublication;
    if (req.query.condition) filterOptions.condition = req.query.condition;
    if (req.query.minPrice) filterOptions.price = { $gte: parseFloat(req.query.minPrice) };
    if (req.query.maxPrice) filterOptions.price = { ...filterOptions.price, $lte: parseFloat(req.query.maxPrice) };
  

    if (req.query.sortBy) {
      const sortField = req.query.sortBy;
      const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;
      sortOptions[sortField] = sortOrder;
    } else {
      sortOptions.createdAt = -1; 
    }
  
    req.filterOptions = filterOptions;
    req.sortOptions = sortOptions;
  
    next();
  };