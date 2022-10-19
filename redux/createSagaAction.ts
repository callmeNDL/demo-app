import { createAction, PayloadActionCreator } from "@reduxjs/toolkit";

export type SagaAction<PP = void, FP = unknown, RP = Error> = {
  request: PayloadActionCreator<PP>;
  fulfilled: PayloadActionCreator<FP>;
  rejected: PayloadActionCreator<RP>;
};

export const createSagaAction = <
  PendingPayload = void,
  FulfilledPayload = unknown,
  RejectedPayload = Error
>(
  typePrefix: string
): SagaAction<PendingPayload, FulfilledPayload, RejectedPayload> => {
  return {
    request: createAction<PendingPayload>(`${typePrefix}/request`),
    fulfilled: createAction<FulfilledPayload>(`${typePrefix}/fulfilled`),
    rejected: createAction<RejectedPayload>(`${typePrefix}/rejected`),
  };
};
