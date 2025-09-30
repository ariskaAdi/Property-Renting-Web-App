"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startAllWorkersAndSchedules = void 0;
const expired_booking_worker_1 = require("./jobs/expired-booking.worker");
const booking_reminder_worker_1 = require("./jobs/booking-reminder.worker");
const graphile_worker_1 = require("graphile-worker");
const send_rejection_1 = require("./jobs/send-rejection");
const send_confirmation_1 = __importDefault(require("./jobs/send-confirmation"));
const taskList = {
    "send-booking-reminder": booking_reminder_worker_1.bookingReminder,
    "expire-overdue-bookings": expired_booking_worker_1.expiredBookings
};
const EXPIRE_BOOKINGS_JOB = "expire-overdue-bookings";
const SEND_REMINDER_JOB = "send-booking-reminder";
const SEND_CONFIRMATION_JOB = "send-confirmation-job";
const SEND_REJECTION_JOB = "send-rejection-job";
const startAllWorkersAndSchedules = async () => {
    try {
        const taskList = {
            [EXPIRE_BOOKINGS_JOB]: expired_booking_worker_1.expiredBookings,
            [SEND_REMINDER_JOB]: booking_reminder_worker_1.bookingReminder,
            "send-confirmation-job": send_confirmation_1.default,
            "send-rejection-job": send_rejection_1.sendRejectionEmail,
        };
        const runner = (0, graphile_worker_1.run)({
            connectionString: process.env.DIRECT_URL,
            concurrency: 5,
            pollInterval: 1000,
            taskList: taskList,
            crontabFile: "crontab"
        });
        runner.catch((err) => {
            console.error("Graphile Worker failed to start!", err);
            process.exit(1);
        });
        console.log("Graphile Worker is running and watching for jobs and schedules.");
        return runner;
    }
    catch (error) {
        console.error("Failed to start workers and schedules.");
    }
};
exports.startAllWorkersAndSchedules = startAllWorkersAndSchedules;
//# sourceMappingURL=scheduler.service.js.map