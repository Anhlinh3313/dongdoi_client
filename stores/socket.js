import { io } from 'socket.io-client';
import { API_SOCKET } from "../app/@function/wsCode";
export const socket = io(API_SOCKET);