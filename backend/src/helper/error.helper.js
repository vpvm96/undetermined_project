class _ErrorHelper extends Error {
  constructor(status, error) {
    super(status, error);
  }

  // Override
}

class ErrorHelper extends _ErrorHelper {
  constructor(status, error) {
    super(status, error);
  }

  // Override
}

Object.freeze(ErrorHelper);
module.exports = ErrorHelper;
