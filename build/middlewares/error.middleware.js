"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(err, req, res, next) {
    var _a, _b, _c;
    console.error(err);
    let message;
    let status;
    switch (err === null || err === void 0 ? void 0 : err.code) {
        case "P2025":
            status = 404;
            message = ((_a = err === null || err === void 0 ? void 0 : err.meta) === null || _a === void 0 ? void 0 : _a.cause) || "Record not found";
            break;
        case "P2002":
            status = 409;
            message = ((_b = err === null || err === void 0 ? void 0 : err.meta) === null || _b === void 0 ? void 0 : _b.cause) || "Record already exists";
            break;
        case "P2032":
            status = 500;
            message = "New Keys not added DB not updated";
            break;
        default:
            status = (err === null || err === void 0 ? void 0 : err.status) || 500;
            message = ((_c = err === null || err === void 0 ? void 0 : err.meta) === null || _c === void 0 ? void 0 : _c.cause) || (err === null || err === void 0 ? void 0 : err.message) || "Something went wrong!";
    }
    res.status(status).json({ success: false, error: { message } });
}
exports.errorHandler = errorHandler;
