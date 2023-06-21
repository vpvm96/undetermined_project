class PaginationHelper {
  constructor(perPage = 10) {
    this.perPage = perPage;
  }

  doPagination(current) {
    const fetchNext = (current - 1) * this.perPage;
    return fetchNext;
  }
}

module.exports = PaginationHelper;
