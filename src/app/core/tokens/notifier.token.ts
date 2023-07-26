import { InjectionToken } from "@angular/core";
import { ReactiveService } from "../patterns/reactive-service";
import { Notification } from "../interfaces/notification";

export const NOTIFIER = new InjectionToken<ReactiveService<Notification | null>>('NOTIFIER')
