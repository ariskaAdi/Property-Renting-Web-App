"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRejectionEmail = void 0;
const transaction_service_1 = require("../transaction/transaction.service");
const sendRejectionEmail = async (payload, helpers) => {
    const { bookingId, userId } = payload;
    helpers.logger.info(`Sending rejection notification for booking ${bookingId}...`);
    await (0, transaction_service_1.sendRejectionNotification)(bookingId, userId);
    helpers.logger.info(`Successfully sent rejection notification for booking ${bookingId}.`);
};
exports.sendRejectionEmail = sendRejectionEmail;
//# sourceMappingURL=send-rejection.js.map