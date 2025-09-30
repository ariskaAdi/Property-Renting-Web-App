import type { Task, Helpers } from "graphile-worker";
import { sendRejectionNotification } from "../transaction/transaction.service";

interface RejectionPayload {
  bookingId: string;
  userId: string;
}

export const sendRejectionEmail: Task = async (
  payload: unknown,
  helpers: Helpers
) => {
  const { bookingId, userId } = payload as RejectionPayload;
  helpers.logger.info(`Sending rejection notification for booking ${bookingId}...`);

  await sendRejectionNotification(bookingId, userId);

  helpers.logger.info(`Successfully sent rejection notification for booking ${bookingId}.`);
};