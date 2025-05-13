import { BackgroundTask } from "#/types";

export type SendMessageRequestDto<T> = {
  taskName: BackgroundTask;
  data: T;
};

export type SendMessageResponseDto<T> = {
  taskName: BackgroundTask;
  isSuccess: boolean;
  data?: T;
  error?: string;
};
